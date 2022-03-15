
export default {
  name: 'lead',
  title: 'Leads',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      readOnly: true
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      readOnly: true
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      readOnly: true
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: true
    },
  ],
  initialValue: {
    date: (new Date()).toISOString()
  },
  preview: {
    select: {
      title: 'email',
      subtitle: 'message',
    },
  },
}
