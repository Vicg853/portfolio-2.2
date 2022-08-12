import type {
   GetServicePromise,
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

interface ServiceCardProps extends GetServicePromise {
   onClick?: () => void
   onMouseOver?: () => void
   compId?: string
   localeSources: ThisWebSPageLocaleContent['services']
}

const RawServiceCard: React.FC<ServiceCardProps> = ({
   name, version, devStatus, checkInterval: serviceCheckInterval, 
   onClick, details, onMouseOver, doHealthCheck,
   compId, localeSources, id
}) => {
   const [health, setHealth] = useState<HealthStates>('UNKNOWN')

   {/* eslint-disable-next-line react-hooks/exhaustive-deps */}
   useEffect(() => {
      if(!doHealthCheck || devStatus === 'DRAFT') 
         return 

      const check = async () => await fetch(`/api/health-checker?checkId=${id}`, {
         method: 'GET',
         mode: "same-origin",
      }).then(async res => {
         if(res.status === 200) {
            const jsonStatus = await res.json()
            return setHealth(jsonStatus['status'])
         } else console
            .error(`Health checker failed with status ${res.status} and message ${await res.text()}`)
         
         return setHealth('UNKNOWN')
      }).catch(err => {
         console.error(`Error trying to check ${name}'s health:`, err)
         return setHealth('UNKNOWN')
      })
      check()

      const checkInterval = 
         setInterval(check, serviceCheckInterval
            ?? defaultHealthCheckInterval)

      return () => clearInterval(checkInterval)
   })

   return (
      <>
         <Card onClick={onClick} id={compId}
         onMouseOver={onMouseOver}
         className='service-card'
         data-has-health={doHealthCheck ? 'true' : 'false'}
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
               {devStatus === 'DEPRECATED' && localeSources.cardDevStats.deprecated}
            </span>
            {doHealthCheck && (
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
            <span className='service-card-sub-titles service-card-flex-end-els service-card-svc-versiontitle'>
               {localeSources.version}:
            </span>
            <span className='service-card-svc-version service-card-flex-end-els'>
               {version}
            </span>
         </Card>
      </>
   )
}

export const ServiceCard = memo(RawServiceCard)