import type {
   Service,
   HealthStates
} from '@api-utils/content-retrivers/services'

import { useEffect, useState, memo } from 'react'
import { 
   Card
} from './service-card-styles'

const defaultHealthCheckInterval = 5 * 60 * 1000

interface ServiceCardProps extends Service {
   onClick?: () => void
   onMouseOver?: () => void
   compId?: string
}

const RawServiceCard: React.FC<ServiceCardProps> = ({
   name, version, devStatus, healthEndpoint, onClick, details, onMouseOver,
   compId
}) => {
   const [health, setHealth] = useState<HealthStates>('UNKNOWN')

   {/* eslint-disable-next-line react-hooks/exhaustive-deps */}
   useEffect(() => {
      if(!healthEndpoint || devStatus === 'DRAFT') 
         return 
      
      if(healthEndpoint.plannedMaintenance) 
         return setHealth('MAINT')

      const check = async () => await fetch(healthEndpoint.url, {
         method: healthEndpoint.method,
         mode: 'same-origin',
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
      <>
         <Card onClick={onClick} id={compId}
         onMouseOver={onMouseOver}
         className='service-card'
         data-details={details ? 'true' : 'false'}>
            <span className='service-card-title'>
               {name}
            </span>
            <span className='service-card-sub-titles'>
               Development<br/>status:
            </span>
            <span className='service-card-dev-status' data-devStatus={devStatus}>
               {devStatus === 'READY' && 'Ready (on production)'}
               {devStatus === 'DEV' && 'Under development'}
               {devStatus === 'DRAFT' && 'Drafting'}
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
      </>
   )
}

export const ServiceCard = memo(RawServiceCard)