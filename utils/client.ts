import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '23ut0xvk',
  dataset: 'production',
  apiVersion: '2022-07-20',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
