import { PostFrontMatter } from 'types/PostFrontMatter'
import { getPostsForTag } from './contentProvider'

export function dateSortDesc(a: string, b: string) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export function sortByDate(posts: PostFrontMatter[]) {
  posts.sort((post1, post2) => dateSortDesc(post1.date, post2.date))
  return posts
}

export function filterByTag(tag: string, posts: PostFrontMatter[]) {
  return posts.filter((post) => post.tags.includes(tag.toLowerCase()))
}

export function filterByText(text: string, posts: PostFrontMatter[]) {
  return posts.filter((post) => post.title.toLowerCase().includes(text.toLowerCase()))
}

export function removeArchived(posts: PostFrontMatter[]) {
  return posts.filter((post) => !post.archived)
}

const SECTION_HIERARCHY = ['code', 'whitewater', 'photography']
export async function nextPrev(post: PostFrontMatter) {
  // Series first

  // Then tag hierarchy, if the article is part of section, return a prev/next
  const section = getSection(post)
  if (!section) {
    return [null, null]
  }

  const posts = getPostsForTag(section)
  //TODO
  const postIndex = 1

  const prev: { slug: string; title: string } = posts[postIndex + 1] || null
  const next: { slug: string; title: string } = posts[postIndex - 1] || null

  return [prev, next]
}

// The order in which tags take precedence for section assignment
function getSection(post: PostFrontMatter) {
  return SECTION_HIERARCHY.find((tag) => post.tags.includes(tag))
}
