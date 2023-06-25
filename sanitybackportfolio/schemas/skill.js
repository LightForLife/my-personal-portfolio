export default {
  name: 'skill',
  type: 'document',
  title: 'Skill',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of skill',
    },
    {
      name: 'progress',
      type: 'number',
      title: 'Progress',
      description: 'Progress of skill from o to 100%',
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
    },
  ],
}
