export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the project',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Summary',
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'linkToBuild',
      type: 'url',
      title: 'LinkToBuild',
    },
  ],
}
