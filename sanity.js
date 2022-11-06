import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: "upcm603d",
    dataset: "production",
    useCdn: true,
    apiVersion: '2021-03-25',
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;