import { type SchemaTypeDefinition } from 'sanity'
import skill from './skill'
import project from './project'
import review from './review'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skill, project, review],
}
