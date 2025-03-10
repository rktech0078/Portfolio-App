import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export async function getSkills() {
  return client.fetch(`*[_type == "skill"] | order(order asc)`)
}

export async function getProjects() {
  return client.fetch(`*[_type == "project"] | order(order asc)`)
}
