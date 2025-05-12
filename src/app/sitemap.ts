import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://cekrause.eu',
    lastModified: new Date(),
    changeFrequency: 'always',
    priority: 1
  }
]

export default sitemap
