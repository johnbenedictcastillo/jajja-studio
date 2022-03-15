export default {
    widgets: [
      {
        name: 'sanity-tutorials'
      },
      {
        name: 'project-info'
      },
      {
        name: 'project-users'
      },
      {
        name: 'document-list',
        layout: {
          width: 'medium',
          height: 'auto'
        },
        options: {
            title: 'Recent Articles',
            order: '_updatedAt desc',
            types: ['article'],
            limit: 10
          }
      }
    ]
  }