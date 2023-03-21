import Contentstack from 'contentstack'
import ContentstackLivePreview from '@contentstack/live-preview-utils'

const PrimaryStack = Contentstack.Stack({
    api_key: process.env.NEXT_PUBLIC_CS_API_KEY || "",
    delivery_token: process.env.NEXT_PUBLIC_CS_DELIVERY_TOKEN || "",
    environment: process.env.NEXT_PUBLIC_CS_ENVIRONMENT || "",
    region: Contentstack.Region.US,
    live_preview: {
        management_token: process.env.NEXT_PUBLIC_CS_LIVE_PREVIEW_TOKEN || "",
        enable: true,
        // @ts-ignore
        clientUrlParams: {
            host: "app.contentstack.com",
        },
        host: 'api.contentstack.io',
    }
})

PrimaryStack.setHost('api.contentstack.io')
if (process.env.NEXT_PUBLIC_CS_ENVIRONMENT !== 'production') {
  // @ts-ignore
  ContentstackLivePreview.init({
    // @ts-ignore
    stackSdk: PrimaryStack
  })
}


export default PrimaryStack
export const onEntryChange = ContentstackLivePreview.onEntryChange
