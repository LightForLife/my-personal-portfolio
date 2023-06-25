export default {
  name: 'experience',
  type: 'document',
  title: 'Experiance',
  fields: [
    {
      name: 'jobTitle',
      type: 'string',
      title: 'JobTitle',
    },
    {
      name: 'companyImage',
      type: 'image',
      title: 'Company Image',
      options: {hotspot: true},
    },
    {
      name: 'company',
      type: 'text',
      title: 'Company',
    },
    {
      name: 'dateStarted',
      type: 'date',
      title: 'DateStarted',
    },
    {
      name: 'dateEnded',
      type: 'date',
      title: 'DateEnded',
    },
    {
      name: 'isCurrentlyWorkingHere',
      type: 'boolean',
      title: 'IsCurrentlyWorkingHere',
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'points',
      type: 'array',
      title: 'Points',
      of: [{type: 'string'}],
    },
  ],
}
