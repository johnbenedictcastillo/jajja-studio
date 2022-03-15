export default {
    title : 'Coworker Location',
    name : 'coworkerLocation',
    type: 'object',
    fields: [
        {
            title: 'Location',
            name: 'location',
            validation: Rule => Rule.required(),
            type: 'string'
        },
        { title: 'Image', name: 'image', type: 'image',
        validation: Rule => Rule.required(),
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
          title: 'Number of coworkers',
          name: 'coworkers',
          validation: Rule => Rule.required(),
          type: 'number',
        },
    ]

}