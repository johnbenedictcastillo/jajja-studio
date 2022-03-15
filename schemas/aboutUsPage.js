export default {
  name: 'aboutUsPage',
  title: 'About Us Page',
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
      type: 'string',
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    { title: 'Hero Image', name: 'heroImage', type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        }
    ]},
    {
      title: 'Hero Body',
      name: 'heroBody',
      type: 'blockContent',
    },
    {
      title: 'Founding Year',
      name: 'foundingYear',
      type: 'string',
    },
    {
      title: 'Total Customers',
      name: 'totalCustomers',
      type: 'number',
    },
    {
      title: 'Total Coworkers',
      name: 'totalCoworkers',
      type: 'number',
    },
    {
      title: 'Customer Satisfaction',
      name: 'customerSatisfaction',
      type: 'string',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    },
    {
      title: 'Modules',
      name: 'modules',
      type: 'array',
      of: [{type: 'aboutUsModule'}],
    },
  {
    title: 'SEO',
    name: 'seoContent',
    description: 'Set the SEO details of the page, otherwise it will use the default in Site Settings',
    type: 'seo',
  },

  ],
  initialValue: {
    title: 'About Us',
  },
  preview: {
    select: {
      title: 'title',
    },
  },
}
