export default {
  name: 'contactPage',
  title: 'Contact Page',
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
      title: 'Heading - Customer',
      name: 'customerHeading',
      type: 'string',
    },
    { 
      title: 'Coworkers - Customer ', 
      name: 'customerContact', 
      type: 'array', of: [{type: 'reference', to: {type: 'coworker'}}], validation: Rule => Rule.unique()
    },
    {
      title: 'Body - Customer',
      name: 'customerBody',
      type: 'blockContent',
    },
    {
      title: 'Heading - Non Customer',
      name: 'nonCustomerHeading',
      type: 'string',
    },
    { 
      title: 'Coworkers - Non Customer ', 
      name: 'nonCustomerContact', 
      type: 'array', of: [{type: 'reference', to: {type: 'coworker'}}], validation: Rule => Rule.unique()
    },
    {
      title: 'Body - Non Customer',
      name: 'nonCustomerBody',
      type: 'blockContent',
    },
    {
      title: 'Body - Hero Bottom Info',
      name: 'bottomInfoBody',
      type: 'blockContent',
    },
    { title: 'HeroImage', name: 'image', type: 'image',fields: [
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
    { title: 'Allmänt Header', name: 'generalHeader', type: 'string'},
    {
      title: 'Allmänt Body',
      name: 'generalBody',
      type: 'blockContent',
    },
    { title: 'Besöksadresser Header', name: 'addressHeader', type: 'string'},
    {
      title: 'Besöksadresser Body',
      name: 'addressBody',
      type: 'blockContent',
    },
    {
    title: 'SEO',
    name: 'seoContent',
    description: 'Set the SEO details of the page, otherwise it will use the default in Site Settings',
    type: 'seo'
    }
  ],
  initialValue: {
    title: 'Contact Us'
  },
  preview: {
    select: {
      title: 'title',
    },
  },
}
