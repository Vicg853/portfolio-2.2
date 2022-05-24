import type { NextApiHandler } from 'next'

import { getServiceCheckInfo } from '@api-utils/content-retrivers/services'

//* Simple health check endpoint
const healthCheckerAPI: NextApiHandler = async (req, res) => {
   const query = req.query['checkId']
   if(!query || typeof query !== 'string') 
      return res.status(400).json({ status: 'fail', message: 'Missing or invalid checkId query param' })
   
   const serviceInfo = await getServiceCheckInfo(query)

   if(!serviceInfo)
      return res.status(404).json({ status: 'fail', message: 'Service ID not found' })
   
   if(serviceInfo.plannedMaintenance)
      return res.status(200).json({ status: 'MAINT' })

   const fetchRes = await fetch(serviceInfo.url, {
      method: serviceInfo.method
   }).then(async res => {
      if(serviceInfo.justCheckStatusCode) 
         return res.status === serviceInfo.justCheckStatusCode ? 'OK' : 'DOWN'
      else if(serviceInfo.checkSpecificJson) {
         const healthRes = JSON.stringify((await res.json()))
         return healthRes === serviceInfo.checkSpecificJson 
            ? 'OK' : 'DOWN'
      }

      return 'DOWN'
   }).catch(err => {
      console.warn(`Error trying to check ${query}'s health:`, err)
      return 'UNKNOWN'
   })

   res.status(200)
      .json({
         status: fetchRes,
      })
}

export default healthCheckerAPI