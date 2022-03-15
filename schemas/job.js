export default {
  name: 'job',
  title: 'Jobs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Use white logo and navigation text?',
      description: 'Set the logo and navigation text color to white, otherwise it will be the black',
      name: 'white',
      type: 'boolean'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
    title: 'SEO',
    name: 'seoContent',
    description: 'Set the SEO details of the page, otherwise it will use the default in Site Settings',
    type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title',
    }
  },
}
