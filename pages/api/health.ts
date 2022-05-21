import type { NextApiHandler } from 'next'

//* Simple health check endpoint
const healthCheck: NextApiHandler = (req, res) => {
   res.status(200).json({
      status: 'pass',
      message: 'Everything is fine!',
   })
}

export default healthCheck