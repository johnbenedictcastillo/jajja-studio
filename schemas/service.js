export default {
  name: 'service',
  title: 'Services',
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
      name: 'name',
      title: 'Name',
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
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        }
      ]
    },
    {
      title: 'Short Description',
      name: 'shortDescription',
      type: 'blockContent',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'color'
    },
    {
      name: 'jajjaCoreColor',
      title: 'Jajja Core Text Color',
      type: 'color'
    },
    {
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'color'
    },
    { title: 'Service Features', name: 'serviceFeatures', type: 'array', of: [{ type: 'serviceFeature' }] },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text'
    },

    {
      title: 'Quotee Image', name: 'quoteeImage', type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name'
        },
        {
          name: 'designation',
          type: 'string',
          title: 'Designation'
        },
        {
          name: 'company',
          type: 'string',
          title: 'Company'
        }
      ]
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
      type: 'seo'
      },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'icon',
    },
  },
}
