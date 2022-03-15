const baseWebUrl = process.env.SANITY_STUDIO_WEB_BASE_URL;
let webUrl = "https://jajja.com";
export default {
    title : 'SEO',
    name : 'seo',
    type: 'object',
    fields: [
    {
        name: 'seo',
        title: 'SEO',
        type: 'seo-tools', // use seo-tools type
        options: {
            baseUrl: "https://jajja.com", // (REQUIRED) This is the baseUrl for your site
            baseUrl(doc) {
                if(doc._type == "article"){
                    webUrl ="https://jajja.com/nyheter/"; // for dynamic baseUrls
                    return webUrl;
                }
                else if (doc._type == "invoiceInformationPage" || doc._type == "supportPage"){
                  webUrl= "https://jajja.com/kontakt/";
                  return webUrl;
                }
                else if (doc._type == "job"){
                  webUrl = "https://jajja.com/karriar/";
                  return webUrl;
                }
                else if (doc._type == "service"){
                  webUrl = "https://jajja.com/tjanster/";
                  return webUrl;
                }
                else
                return webUrl; // for dynamic baseUrls
            },
            slug(doc) { // (REQUIRED) a function to return the slug of the current page, which will be appended to the baseUrl
              if(doc._type == "homePage")
                return "";
              return doc.slug.current;
            },
            fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
            },
      },
        { title: 'Canonical', name: 'canonical', type: 'url'},
        { title: 'Open Graph Title', name: 'openGraphTitle', type: 'string'},
        { title: 'Open Graph Description', name: 'openGraphDescription', type: 'text'},
        {
            title: 'Open Graph Type',
            name: 'openGraphType',
            type: 'string',
            options: {
              list: [
                {title: 'Article', value: 'article'},
                {title: 'Book', value: 'book'},
                {title: 'Music', value: 'music'},
                {title: 'Profile', value: 'profile'},
                {title: 'Video', value: 'video'},
                {title: 'Website', value: 'website'}
              ]
            },
            initialValue: "article"
          },
        { title: 'Open Graph Locale', name: 'openGraphLocale', type: 'string',initialValue: "sv_SE"},
        { title: 'Open Graph Url', name: 'openGraphUrl', type: 'url'},
        { title: 'Open Graph Site Name', name: 'openGraphSiteName', type: 'string'},
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
          }]
        },
        { title: 'Twitter Handle', name: 'twitterHandle', type: 'string',initialValue: "@jajja"},
        { title: 'Twitter Site', name: 'twitterSite', type: 'string',initialValue: "@jajja"},

        {
          title: 'Twitter Card Type',
          name: 'twitterCardType',
          type: 'string',
          options: {
            list: [
              {title: 'Summary Card', value: 'summary'},
              {title: 'Summary Card with Large Image', value: 'summary_large_image'},
              {title: 'Player Card', value: 'app'},
              {title: 'App Card', value: 'player'}
            ]
          },
          initialValue: "summary_large_image"
        },
    ]

}