export default {
    title : 'Address',
    name : 'address',
    type: 'object',
    fields: [
        { 
            title: 'Street Address', 
            name: 'streetAddress', 
            type: 'string'
        },
        { 
          title: 'City', 
          name: 'city',
          type: 'string',
        },
        { 
          title: 'Postal Code', 
          name: 'postalCode',
          type: 'string',
        },
        { 
          title: 'Google Map', 
          name: 'googleMap',
          type: 'url',
        },
    ]

}