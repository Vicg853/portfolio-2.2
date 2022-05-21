import type {
   Service,
   HealthStates
} from '@api-utils/content-retrivers/services'
import type {
   ThisWebSPageLocaleContent
} from '@pages/this-site'

import { useEffect, useState, memo } from 'react'
import { 
   Card
} from './service-card-styles'

const defaultHealthCheckInterval = 5 * 60 * 1000

interface ServiceCardProps extends Service {
   onClick?: () => void
   onMouseOver?: () => void
   compId?: string
   localeSources: ThisWebSPageLocaleContent['services']
}

const RawServiceCard: React.FC<ServiceCardProps> = ({
   name, version, devStatus, healthEndpoint, onClick, details, onMouseOver,
   compId, localeSources
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
         if(healthEndpoint.justCheckStatusCode) 
            return setHealth(res.status === healthEndpoint.justCheckStatusCode ? 'OK' : 'DOWN')
         else if(healthEndpoint.checkSpecificJson) {
            const healthRes = JSON.stringify((await res.json()))
            return setHealth(healthRes === healthEndpoint.checkSpecificJson 
               ? 'OK' : 'DOWN')
         }

         return setHealth('DOWN')
      }).catch(err => {
         console.error(`Error trying to check ${name}'s health:`, err)
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
               {localeSources.cardDevStats.title}:
            </span>
            <span className='service-card-dev-status' data-devStatus={devStatus}>
               {devStatus === 'READY' && localeSources.cardDevStats.ready}
               {devStatus === 'DEV' && localeSources.cardDevStats.underDev}
               {devStatus === 'DRAFT' && localeSources.cardDevStats.draft}
            </span>
            {healthEndpoint && (
               <>
                  <span className='service-card-sub-titles'>
                     {localeSources.healthStats.title}:
                  </span>
                  <span className='service-card-health-status' data-health={health}>
                     {health === 'OK' && localeSources.healthStats.running}
                     {health === 'MAINT' && localeSources.healthStats.maintenance}
                     {health === 'DOWN' && localeSources.healthStats.down}
                     {health === 'UNKNOWN' && localeSources.healthStats.unknown}
                  </span>
               </>
            )}
            <span className='service-card-sub-titles'>
               {localeSources.version}:
            </span>
            <span className='service-card-svc-version'>
               {version}
            </span>
         </Card>
      </>
   )
}

export const ServiceCard = memo(RawServiceCard)