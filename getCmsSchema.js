const { buildSchema } = require('graphql')

const auth0TokenPath = '/oauth/token'

if(!process.env.MAIN_CMS_GQL_URL_SCHEMA)
   throw new Error('MAIN_CMS_GQL_URL_SCHEMA is not defined')
const mainCmsGqlUrlSchema = process.env.MAIN_CMS_GQL_URL_SCHEMA

if(!process.env.AUTH0_TENNANT_ENDPOINT) 
   throw new Error('AUTH0_TENNANT_ENDPOINT is not defined')
const auth0TennantEndpoint = process.env.AUTH0_TENNANT_ENDPOINT

if(!process.env.AUTH0_CLIENT_ID)
   throw new Error('AUTH0_CLIENT_ID is not defined')
const auth0ClientId = process.env.AUTH0_CLIENT_ID

if(!process.env.AUTH0_CLIENT_SECRET)
   throw new Error('AUTH0_CLIENT_SECRET is not defined')
const auth0ClientSecret = process.env.AUTH0_CLIENT_SECRET

if(!process.env.AUTH0_AUDIENCE)
   throw new Error('AUTH0_AUDIENCE is not defined')
const auth0Audience = process.env.AUTH0_AUDIENCE

// eslint-disable-next-line import/no-anonymous-default-export
module.exports = (async () => {
   const token = await fetch(`${auth0TennantEndpoint}${auth0TokenPath}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         grant_type: 'client_credentials',
         client_id: auth0ClientId,
         client_secret: auth0ClientSecret,
         audience: auth0Audience,
      }),
   })

   const json = await token.json() 
   
   if(!json.access_token)
      throw new Error('No access_token in response')
   
   const schema = await fetch(mainCmsGqlUrlSchema, {
      method: 'GET',
      headers: {
         'Authorization': `Bearer ${json.access_token}`,
      },
   })

   const schemaJson = await schema.text()

   if(!schemaJson || schemaJson.length === 0)
      throw new Error('No data in response')

   return buildSchema(schemaJson, { encoding: 'utf-8' })
})()