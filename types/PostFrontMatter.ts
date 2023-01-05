export type PostSeries = {
  name: string
  number: number
}

export type PostFrontMatter = {
  // Required in each post
  title: string
  date: string
  tags: string[]
  type: string

  // Populated by the system
  slug: string
  fileName: string

  // Optional
  postedDate?: string
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

export function getPostedDate(post: PostFrontMatter) {
  return post.postedDate ? post.postedDate : post.date
}
