export default {
    title : 'About Us Module',
    name : 'aboutUsModule',
    type: 'object',
    fields: [
        { 
            title: 'Title', 
            name: 'title', 
            type: 'string'
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            }
          ],
        },
        {
          name: 'body',
          title: 'Body',
          type: 'blockContent',
        },
    ]

}