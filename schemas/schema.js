// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import widgetStandard from './widgets/widgetStandard'
import widgetTwoHeaders from './widgets/widgetTwoHeaders'
import widgetWithTextEditor from './widgets/widgetWithTextEditor'
import category from './category'
import customer from './customer'
import article from './article'
import homePage from './homePage'
import newsPage from './newsPage'
import customerPage from './customerPage'
import aboutUsPage from './aboutUsPage'
import contactPage from './contactPage'
import service from './service'
import siteSettings from './siteSettings'
import invoiceInformationPage from './invoiceInformationPage'
import faq from './faq'
import supportPage from './supportPage'
import coworker from './coworker'
import job from './job'
import careerPage from './careerPage'
import aboutUsModule from './aboutUsModule'
import address from './address'
import seo from './seo'
import coworkerLocation from './coworkerLocation'
import cookiePage from './cookiePage'
import recoReview from './recoReview'
import servicesPage from './servicesPage'
import serviceFeature from './serviceFeature'
import serviceCard from './serviceCard'
import page from './customPage.js'
import hero from './components/hero.js'
import gallery from './components/gallery.js'
import textWithHeading from './components/textWithHeading.js'
import imageWithHeading from './components/imageWithHeading.js'
import textWithHeadingAndImage from './components/textWithHeadingAndImage.js'
import textWithHeadingTwoColumn from './components/textWithHeadingTwoColumn.js'
import textWithHeadingAndImageTwoColumn from './components/textWithHeadingAndImageTwoColumn.js'
import redirect from './redirect'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    homePage,
    customerPage,
    newsPage,
    careerPage,
    aboutUsPage,
    contactPage,
    servicesPage,
    invoiceInformationPage,
    supportPage,
    cookiePage,
    service,
    customer,
    article,
    job,
    coworker,
    category,
    recoReview,
    page,
    redirect,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    seo,
    serviceCard,
    serviceFeature,
    aboutUsModule,
    blockContent,
    hero,
    gallery,
    textWithHeading,
    imageWithHeading,
    textWithHeadingAndImage,
    textWithHeadingTwoColumn,
    textWithHeadingAndImageTwoColumn,
    coworkerLocation,
    faq,
    address,
    widgetStandard,
    widgetTwoHeaders,
    widgetWithTextEditor,
  ]),
})
