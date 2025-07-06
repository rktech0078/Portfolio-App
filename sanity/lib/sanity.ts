import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'q6tlu0ej', // from sanity.json or sanity.io
  dataset: 'production',
  apiVersion: '2023-07-06',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // add this in .env.local
})
