import { type SchemaTypeDefinition } from 'sanity'
import skill from './skill'
import project from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skill, project],
}
