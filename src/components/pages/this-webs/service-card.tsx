import { Card } from './service-card-styles'
import { useEffect, useState, memo } from 'react'

type DevStatuses = 'dev' | 'ready' | 'planned'

type HealthResponses = ({
   justCheckStatusCode: number
   checkSpecificJson?: undefined
} | {
   justCheckStatusCode?: undefined
   checkSpecificJson: string
})

type HealthEndpoint = HealthResponses & {
   url: string
   method: 'GET' | 'POST'
   checkInterval?: number
   plannedMaintenance?: boolean
}

export interface ServiceCardProps {
   name: string
   version: string
   devStatus: DevStatuses
   healthEndpoint?: HealthEndpoint
   details?: {
      description?: string
      techStack?: string[]
      links?: {
         type: 'GITHUB' | 'WEBSITE' | 'ENDPOINT' | 'OTHER'
         url: string
         label?: string
      }[]
      runsOn?: string[]
   }
}
   
type HealthStates = 'MAINT' | 'OK' | 'DOWN' | 'UNKNOWN'

const defaultHealthCheckInterval = 5 * 60 * 1000

const RawServiceCard: React.FC<ServiceCardProps> = ({
   name, version, devStatus, healthEndpoint, details
}) => {
   const [health, setHealth] = useState<HealthStates>('UNKNOWN')

   {/* eslint-disable-next-line react-hooks/exhaustive-deps */}
   useEffect(() => {
      if(!healthEndpoint || devStatus === 'planned') 
         return 
      
      if(healthEndpoint.plannedMaintenance) 
         return setHealth('MAINT')

      const check = async () => await fetch(healthEndpoint.url, {
         method: healthEndpoint.method,
      }).then(async res => {
         console.log(res)
         if(healthEndpoint.justCheckStatusCode) 
            return setHealth(res.status === healthEndpoint.justCheckStatusCode ? 'OK' : 'DOWN')
         else if(healthEndpoint.checkSpecificJson) {
            const healthRes = JSON.stringify((await res.json()))
            return setHealth(healthRes === healthEndpoint.checkSpecificJson 
               ? 'OK' : 'DOWN')
         }

         return setHealth('DOWN')
      }).catch(err => {
         console.error(`Error while trying to check ${name}'s health:`, err)
         return setHealth('UNKNOWN')
      })
      check()

      const checkInterval = 
         setInterval(check, healthEndpoint.checkInterval 
            ?? defaultHealthCheckInterval)

      return () => clearInterval(checkInterval)
   })

   return (
      <Card data-details={details ? 'true' : 'false'}>
         <span className='service-card-title'>
            {name}
         </span>
         <span className='service-card-sub-titles'>
            Development<br/>status:
         </span>
         <span className='service-card-dev-status' data-devStatus={devStatus}>
            {devStatus === 'ready' && 'Ready on production'}
            {devStatus === 'dev' && 'Under development'}
            {devStatus === 'planned' && 'Under design'}
         </span>
         {healthEndpoint && (
            <>
               <span className='service-card-sub-titles'>
                  Health (operational status):<br/>
               </span>
               <span className='service-card-health-status' data-health={health}>
                  {health === 'OK' && 'Up & running (tchu tchu 🚂)'}
                  {health === 'MAINT' && 'Under maintenance 🛠️'}
                  {health === 'DOWN' && 'Down (⚠️)'}
                  {health === 'UNKNOWN' && '?'}
               </span>
            </>
         )}
         <span className='service-card-sub-titles'>
            Version:
         </span>
         <span className='service-card-svc-version'>
            {version}
         </span>
      </Card>
   )
}

export const ServiceCard = memo(RawServiceCard)