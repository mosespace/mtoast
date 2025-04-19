export default async function sitemap() {
  const baseUrl = 'https://mtoast.mosespace.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    // ...blogsUrls,
  ];
}
