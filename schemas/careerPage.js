export default {
  name: 'careerPage',
  title: 'Career Page',
  type: 'document',
  fieldsets: [
    {
      name: 'set-seo',
      title: 'SEO',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
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
    {
      title: 'Hero Pre Header',
      name: 'heroPreHeader',
      type: 'string'
    },
    {
      title: 'Hero Heading',
      name: 'heroHeading',
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
      title: 'Hero Text',
      name: 'heroText',
      type: 'string',
    },
    {
      title: 'Body Heading',
      name: 'bodyHeading',
      type: 'string',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'blockContent',
    },
    {
      title: 'Work Locations Heading',
      name: 'workLocationHeading',
      type: 'string',
    },
    {
      title: 'Work Locations Body',
      name: 'workLocationBody',
      type: 'blockContent',
    },
    {
      title: 'Work Locations',
      name: 'workLocation',
      type: 'array',
      of: [{type: 'coworkerLocation'}],
    },
    {
      title: 'Job List Heading',
      name: 'jobListHeading',
      type: 'string',
    },
    { title: 'Spontaneous Application Image', name: 'image', type: 'image',fields: [
      {
        name: 'alt',
        type: 'string',
        title: 'Alternative text'
      }
    ]},
    {
      title: 'Spontaneous Application Heading',
      name: 'spontaneousHeading',
      type: 'string',
    },
    {
      title: 'Spontaneous Application Body',
      name: 'spontaneousBody',
      type: 'blockContent',
    },
    {
    title: 'SEO',
    name: 'seoContent',
    description: 'Set the SEO details of the page, otherwise it will use the default in Site Settings',
    type: 'seo',
    }
  ],
  initialValue: {
    title: 'Career'
  },
  preview: {
    select: {
      title: 'title',
    },
  },
}
