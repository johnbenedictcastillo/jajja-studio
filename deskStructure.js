// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { MdSettings, MdPages } from "react-icons/md";

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // Add a visual divider (optional)
      S.divider(),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            // Sets a title for our new list
            .title('Pages')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Home Page')
                .icon(MdPages)
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('homePage')
                ),

              S.listItem()
              .title('Customer Page')
              .icon(MdPages)
              .child(
                S.document()
                  .schemaType('customerPage')
                  .documentId('customerPage')
              ),

              S.listItem()
              .title('Articles Page')
              .icon(MdPages)
              .child(
                S.document()
                  .schemaType('newsPage')
                  .documentId('newsPage')
              ),

              S.listItem()
              .title('Career Page')
              .icon(MdPages)
              .child(
                S.document()
                  .schemaType('careerPage')
                  .documentId('careerPage')
              ),

              S.listItem()
                .title('About Us Page')
                .icon(MdPages)
                .child(
                  S.document()
                    .schemaType('aboutUsPage')
                    .documentId('aboutUsPage')
                ),

                S.listItem()
                  .title('Contact Page')
                  .icon(MdPages)
                  .child(
                    S.document()
                      .schemaType('contactPage')
                      .documentId('contactPage')
                  ),

                  S.listItem()
                  .title('Services Page')
                  .icon(MdPages)
                  .child(
                    S.document()
                      .schemaType('servicesPage')
                      .documentId('servicesPage')
                  ),

                  S.listItem()
                  .title('SEO Page')
                  .icon(MdPages)
                  .child(
                    S.document()
                      .schemaType('service')
                      .documentId('7cf13122-8186-4d2c-a7ab-40fb32524201')
                  ),

                  S.listItem()
                  .title('SEM Page')
                  .icon(MdPages)
                  .child(
                    S.document()
                      .schemaType('service')
                      .documentId('a9e2a8c8-67d8-41d7-8da1-1272207fee43')
                  ),

                  S.listItem()
                  .title('SMA Page')
                  .icon(MdPages)
                  .child(
                    S.document()
                      .schemaType('service')
                      .documentId('080b1824-2461-462b-a948-5a5ab89e5c02')
                  ),

                  S.listItem()
                    .title('Invoice Information Page')
                    .icon(MdPages)
                    .child(
                      S.document()
                        .schemaType('invoiceInformationPage')
                        .documentId('invoiceInformationPage')
                    ),

                    S.listItem()
                      .title('Support Page')
                      .icon(MdPages)
                      .child(
                        S.document()
                          .schemaType('supportPage')
                          .documentId('supportPage')
                      ),

                      S.listItem()
                        .title('Cookie Policy Page')
                        .icon(MdPages)
                        .child(
                          S.document()
                            .schemaType('cookiePage')
                            .documentId('cookiePage')
                        )
            ])
        ),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['siteSettings','homePage','customerPage','aboutUsPage','contactPage', 'newsPage', 'careerPage', 'servicesPage', 'service', 'invoiceInformationPage', 'supportPage', 'cookiePage'].includes(listItem.getId()))
    ])

