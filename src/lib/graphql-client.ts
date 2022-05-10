import { GraphQLClient } from 'graphql-request'

function getClient(): GraphQLClient {
   //@ts-ignore - Can't get global types to work
   if(!globalThis.graphQlClient ) {
      if(!process.env.MAIN_CMS_GQL_URL) throw new Error('MAIN_CMS_GQL_URL env var not found')
      const cmsGqlUrl = process.env.MAIN_CMS_GQL_URL

      //@ts-ignore - Can't get global types to work
      globalThis.graphQlClient = new GraphQLClient(cmsGqlUrl)
   }

   //@ts-ignore - Can't get global types to work
   return globalThis.graphQlClient
}

export const graphQlClient = getClient()


