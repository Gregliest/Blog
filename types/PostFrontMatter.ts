export type PostSeries = {
  name: string
  number: number
}
export type PostFrontMatter = {
  title: string
  date: string
  tags: string[]
  slug: string
  fileName: string

  link?: string
  image?: string
  thumbnail?: string
  lastmod?: string
  draft?: boolean
  summary?: string
  images?: string[]
  authors?: string[]
  layout?: string
  canonicalUrl?: string
  archived?: boolean
  series?: PostSeries
}
