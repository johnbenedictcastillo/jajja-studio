export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fieldsets: [
    {
      title: 'Hero',
      name: 'hero',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 1 // Defines a grid for the fields and how many columns it should have
      }
    },
    {
      name: 'services',
      title: 'Services',
      options: {
          collapsible: true, // Makes the whole fieldset collapsible
          collapsed: true, // Defines if the fieldset should be collapsed by default or not
          columns: 1 // Defines a grid for the fields and how many columns it should have
        }
    },
  {
    title: 'Customers',
    name: 'customers',
    options: {
      collapsible: true, // Makes the whole fieldset collapsible
      collapsed: true, // Defines if the fieldset should be collapsed by default or not
      columns: 1 // Defines a grid for the fields and how many columns it should have
    }
  },
  {
    title: 'Jobs',
    name: 'jobs',
    options: {
      collapsible: true, // Makes the whole fieldset collapsible
      collapsed: true, // Defines if the fieldset should be collapsed by default or not
      columns: 1 // Defines a grid for the fields and how many columns it should have
    }
  },
  {
    title: 'News',
    name: 'news',
    options: {
      collapsible: true, // Makes the whole fieldset collapsible
      collapsed: true, // Defines if the fieldset should be collapsed by default or not
      columns: 1 // Defines a grid for the fields and how many columns it should have
    }
  }
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
    //Hero
    { title: 'Pre Header', name: 'heroPreHeader', type: 'string', fieldset: 'hero'},
    { title: 'Heading', name: 'heroHeading', type: 'string', fieldset: 'hero'},
    { title: 'Button Text', name: 'heroButtonText', type: 'string', fieldset: 'hero'},
    { title: 'Button Url', name: 'heroButtonUrl', type: 'string', fieldset: 'hero'},
    { title: 'Image', name: 'heroImage', type: 'image', fieldset: 'hero', fields: [
      { name: 'alt', type: 'string', title: 'Alternative text'}
    ]},
    //Services
    { title: 'Pre Header', name: 'servicesPreHeader', type: 'string', fieldset: 'services'},
    { title: 'Heading', name: 'servicesHeading', type: 'string', fieldset: 'services'},
    { title: 'Button Text', name: 'servicesButtonText', type: 'string', fieldset: 'services'},
    { title: 'Button Url', name: 'servicesButtonUrl', type: 'string', fieldset: 'services'},
    { title: 'Heading 2', name: 'servicesHeading2', type: 'string', fieldset: 'services'},
    
    { title: 'Services', name: 'homePageServices', type: 'array', of: [{ type: 'serviceCard' }], fieldset: 'services' },
    // Customers
    { title: 'Pre Header', name: 'customersPreHeader', type: 'string', fieldset: 'customers'},
    { title: 'Heading', name: 'customersHeading', type: 'string', fieldset: 'customers'},
    { title: 'Button Text', name: 'customersButtonText', type: 'string', fieldset: 'customers'},
    { title: 'Button Url', name: 'customersButtonUrl', type: 'string', fieldset: 'customers'},
    { title: 'Featured Customers', name: 'customersFeatured', type: 'array', of: [{type: 'reference', to: {type: 'customer'}}], validation: Rule => Rule.unique(), fieldset: 'customers'},

    //Jobs
    { title: 'Pre Header', name: 'jobsPreHeader', type: 'string', fieldset: 'jobs'},
    { title: 'Heading', name: 'jobsHeading', type: 'string', fieldset: 'jobs'},

    { title: 'Featured Jobs', name: 'jobsFeatured', type: 'array', of: [{type: 'reference', to: {type: 'job'}}], validation: Rule => Rule.unique(), fieldset: 'jobs'},
    { title: 'Fallback Heading', name: 'jobsFallbackHeading', type: 'string', fieldset: 'jobs'},
    { title: 'Fallback Text', name: 'jobsFallbackText', type: 'blockContent', fieldset: 'jobs'},
    { title: 'Image', name: 'jobsImage', type: 'image', fieldset: 'jobs', fields: [
      { name: 'alt', type: 'string', title: 'Alternative text'}
    ]},

    //News
    { title: 'Pre Header', name: 'newsPreHeader', type: 'string', fieldset: 'news'},
    { title: 'Heading', name: 'newsHeading', type: 'string', fieldset: 'news'},
    {
    title: 'SEO',
    name: 'seoContent',
    description: 'Set the SEO details of the page, otherwise it will use the default in Site Settings',
    type: 'seo'
    }
  ],
  initialValue: {
    title: 'Home'
  },
  preview: {
    select: {
      title: 'title',
    },
  },
}
