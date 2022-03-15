export default {
  name: 'cookiePage',
  title: 'Cookie Page',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
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
      title: 'Pre Header',
      name: 'preHeader',
      type: 'string'
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    },
    {
    title: 'SEO',
    name: 'seoContent',
    type: 'seo'
    }
  ],
  initialValue: {
    title: 'Cookie Policy'
  },
  preview: {
    select: {
      title: 'title',
    },
  },
}
