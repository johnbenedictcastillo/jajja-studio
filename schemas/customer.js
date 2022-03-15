export default {
    title : 'Customers',
    name : 'customer',
    type: 'document',
    fields: [
        { 
            title: 'Name', 
            name: 'name', 
            type: 'string'
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          validation: Rule => Rule.required(),
          options: {
            source: 'name',
            maxLength: 96,
          },
        },
        { title: 'Logo', name: 'logo', type: 'image',fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text'
          }
        ]},
        { 
          title: 'Customer Type', 
          name: 'customerType',
          type: 'array',
          descsription: "Choose all that apply",
          validation: Rule => Rule.unique(),
          of: [{ 
            type: 'reference',
            to: [{
              type: 'service'
            }]
        }],
        },
        { title: 'Description', name: 'description', type: 'blockContent'},
        { title: 'Featured Image', name: 'image', type: 'image',fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text'
          }
        ]},
        { title: 'Url', name: 'url', type: 'url'},
        {
          name: 'order',
          title: 'Order',
          type: 'number',
          hidden: true,
        }
    ],
    orderings: [
      {
        title: 'Custom Ordering',
        name: 'orderAsc',
        by: [
          {field: 'order', direction: 'asc'}
        ]
      },
      {
        title: 'Name',
        name: 'nameAsc',
        by: [
          {field: 'order', direction: 'asc'}
        ]
      }
    ]

}