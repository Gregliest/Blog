import { PostFrontMatter } from 'types/PostFrontMatter'

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

export function removeArchived(posts: PostFrontMatter[]) {
  return posts.filter((post) => !post.archived)
}
