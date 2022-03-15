export default {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fieldsets: [
    {
      name: 'cta',
      title: 'CTA',
      options: {
          collapsible: true, // Makes the whole fieldset collapsible
          collapsed: true, // Defines if the fieldset should be collapsed by default or not
          columns: 1 // Defines a grid for the fields and how many columns it should have
        }
      },
  ],
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
    {
      title: 'Short Description',
      name: 'shortDescription',
      type: 'blockContent',
    },
    { title: 'Services', name: 'servicesPageServices', type: 'array', of: [{ type: 'serviceCard' }] },
    {
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    },
    { title: 'CTA Header', name: 'ctaHeader', type: 'string', fieldset:'cta'},
    {
      title: 'CTA Description',
      name: 'ctaDescription',
      type: 'blockContent',
      fieldset:'cta'
    },
    { title: 'CTA Campaign Name', name: 'ctaCampaign', type: 'string', fieldset:'cta'},
    { title: 'CTA Image', name: 'ctaImage', type: 'image', fieldset:'cta', fields: [
      { name: 'alt', type: 'string', title: 'Alternative text'}
    ]},
    { title: 'CTA Thank You Header', name: 'ctaTYHeader', type: 'string', fieldset:'cta'},
    {
      title: 'CTA Thank You Message',
      name: 'ctaTYMessage',
      type: 'blockContent',
      fieldset:'cta'
    },
    { title: 'CTA Thank You Coworker', name: 'ctaCoworker',  type: 'reference', to: [{type: 'coworker'}], fieldset:'cta'},
    { title: 'CTA Email Recipient', name: 'ctaRecipient',  type: 'reference', to: [{type: 'coworker'}], fieldset:'cta'},
    { title: 'Featured Customers Header', name: 'featuredCustomersHeader', type: 'string'},
    { title: 'Featured Customers', name: 'featuredCustomers', type: 'array', of: [{type: 'reference', to: {type: 'customer'}}], validation: Rule => Rule.unique()},

  {
    title: 'SEO',
    name: 'seoContent',
    description: 'Set the SEO details of the page, otherwise it will use the default in Site Settings',
    type: 'seo',
  },

  ],
  initialValue: {
    title: 'Services'
  },
  preview: {
    select: {
      title: 'title',
    },
  },
}
