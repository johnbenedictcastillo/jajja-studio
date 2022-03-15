export default {
    title: 'Site Settings',
    name: 'siteSettings',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    initialValue: {
      siteName: 'Jajja'
    },
    fieldsets: [
      {
        name: 'cookie',
        title: 'Cookie',
        options: {
            collapsible: true, // Makes the whole fieldset collapsible
            collapsed: true, // Defines if the fieldset should be collapsed by default or not
            columns: 1 // Defines a grid for the fields and how many columns it should have
          }
        },
      {
        name: 'footer',
        title: 'Footer',
        options: {
            collapsible: true, // Makes the whole fieldset collapsible
            collapsed: true, // Defines if the fieldset should be collapsed by default or not
            columns: 1 // Defines a grid for the fields and how many columns it should have
          }
        },
      {
        name: 'seo',
        title: 'SEO',
        description: 'This will be used as default SEO data if the SEO in the page is not set ',
        options: {
          collapsible: true, // Makes the whole fieldset collapsible
          collapsed: true, // Defines if the fieldset should be collapsed by default or not
          columns: 1 // Defines a grid for the fields and how many columns it should have
        }
    }
    ],
    fields:[
        { title: 'Site Name', name: 'siteName', type: 'string'},
        { title: '404 Error Body', name: 'error404Body', type: 'blockContent'},
        { title: '500 Error Body', name: 'error500Body', type: 'blockContent'},
        { title: 'Favicon', name: 'favicon', type: 'image',fieldset: 'seo'},
        { title: 'Jajja Core Text', name: 'jajjaCoreText', type: 'string'},
        { title: 'Jajja Core Heading', name: 'jajjaCoreHeading', type: 'string'},
        { title: 'Jajja Core Body', name: 'jajjaCoreBody', type: 'blockContent'},
        { title: 'HTML snippets', name: 'html', type: 'text'},
        { title: 'Javascript snippets', name: 'javascripts', type: 'text'},
        { title: 'Footer Heading', name: 'footerHeading', type: 'string',fieldset: 'footer'},
        { title: 'Footer Text', name: 'footerText', type: 'blockContent', hidden:true, fieldset: 'footer'},
        { title: 'Footer Email', name: 'footerEmail', type: 'string',fieldset: 'footer'},
        { title: 'Footer Phone', name: 'footerPhone', type: 'string',fieldset: 'footer'},
        { title: 'Footer Image', name: 'footerImage', type: 'image',fields: [
          {
            name: 'name',
            type: 'string',
            title: 'Name'
          },          {
            name: 'designation',
            type: 'string',
            title: 'Designation'
          },
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text'
          }
        ],fieldset: 'footer'},
        {
          title: 'Addresses',
          name: 'addresses',
          type: 'array',
          of: [{type: 'address'}],
          fieldset: 'footer'
        },
        { title: 'Copyright Text', name: 'copyrightText', type: 'string',fieldset: 'footer'},
        { title: 'Cookie  Accept Text', name: 'cookieAcceptText', type: 'string',fieldset: 'cookie',  description: `Default to "Jag godkänner cookies" if not set`},
        { title: 'Cookie  Decline  Text', name: 'cookieDeclineText', type: 'string',fieldset: 'cookie', description: `Default to "Jag avböjer" if not set`},
        { title: 'Cookie  Notification Body', name: 'cookieNotificationBody', type: 'blockContent',fieldset: 'cookie'},
        { title: 'SEO Title', name: 'seoTitle', type: 'string',fieldset: 'seo'},
        { title: 'Meta Description', name: 'seoDescription', type: 'text',fieldset: 'seo'},
        { title: 'Canonical', name: 'canonical', type: 'url',fieldset: 'seo'},
        { title: 'Open Graph Title', name: 'openGraphTitle', type: 'string',fieldset: 'seo'},
        { title: 'Open Graph Description', name: 'openGraphDescription', type: 'text',fieldset: 'seo'},
        { title: 'Open Graph Type', name: 'openGraphType', type: 'string',fieldset: 'seo',initialValue: "website"},
        { title: 'Open Graph Locale', name: 'openGraphLocale', type: 'string',fieldset: 'seo'},
        { title: 'Open Graph Url', name: 'openGraphUrl', type: 'url',fieldset: 'seo'},
        { title: 'Open Graph Site Name', name: 'openGraphSiteName', type: 'string',fieldset: 'seo'},
        {
          title: 'Open Graph Images',
          name: 'openGraphImages',
          type: 'array',
          of: [{
            type: 'image',
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text'
              },
              {
                name: 'height',
                type: 'number',
                title: 'Height'
              },
              {
                name: 'width',
                type: 'number',
                title: 'Width'
              }
            ]
          }],
          fieldset: 'seo',
        },
        { title: 'Twitter Handle', name: 'twitterHandle', type: 'string',fieldset: 'seo'},
        { title: 'Twitter Site', name: 'twitterSite', type: 'string',fieldset: 'seo'},

        {
          title: 'Twitter Card Type',
          name: 'twitterCardType',
          type: 'string',
          fieldset: 'seo',
          options: {
            list: [
              {title: 'Summary Card', value: 'summary'},
              {title: 'Summary Card with large image', value: 'summary_large_image'},
              {title: 'Player Card', value: 'app'},
              {title: 'App Card', value: 'player'}
            ]
          },
          initialValue: "summary_large_image"
        }
    ]
}