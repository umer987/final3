 import { createClient } from 'next-sanity'

 export const client_2  = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01', // or your API version
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,  // Make sure this is correctly set
  useCdn: false  // This should be false for write operations
});
// export default client;