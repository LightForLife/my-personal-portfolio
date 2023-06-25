export default {
  name: 'pageInfo',
  type: 'document',
  title: 'PageInfo',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
    },
    {
      name: 'backgroundInformation',
      type: 'string',
      title: 'BackgroundInformation',
    },
    {
      name: 'profilePic',
      type: 'image',
      title: 'ProfilePic',
      options: {hotspot: true},
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'PhoneNumber',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'socials',
      type: 'array',
      title: 'Socials',
      of: [{type: 'reference', to: {type: 'social'}}],
    },
  ],
}
