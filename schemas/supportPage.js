export default {
  name: 'supportPage',
  title: 'Support Page',
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
      title: 'Description',
      name: 'description',
      type: 'blockContent',
    },
    {
      title: 'FAQ Heading',
      name: 'faqHeading',
      type: 'string',
    },
    {
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [{type: 'faq'}],
    },
    {
    title: 'SEO',
    name: 'seoContent',
    description: 'Set the SEO details of the page, otherwise it will use the default in Site Settings',
    type: 'seo'
    }
  ],
  initialValue: {
    title: 'Support'
  },
  preview: {
    select: {
      title: 'title',
    },
  },
}
