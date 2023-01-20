import { promises as fs } from 'fs'
import { filterByTag, sortByDate, getSection, filterByType } from './posts'
import path from 'path'
import { getAllFilesFrontMatter } from '../mdx'
import { PostFrontMatter, PostSeries } from 'types/PostFrontMatter'

// This file provides all post data for the website, gathering from remote and local sources

// Gets the metadata for all local posts
export async function getLocalPosts() {
  return await getAllFilesFrontMatter('blog')
}

// Gets the metadata for all Medium posts
export async function getMediumPosts() {
  const filePath = path.join(process.cwd(), '/data/mediumBlog.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const mediumPosts = JSON.parse(jsonData)

  return mediumPosts.map((_post) => {
    const post = _post as PostFrontMatter
    post.type = 'Medium'

    return post
  })
}

export async function getPostsForTag(tag) {
  const posts = await getAllPosts()
  return filterByTag(tag, posts)
}

export async function getPostsForType(type) {
  const posts = await getAllPosts()
  return filterByType(type, posts)
}

export async function getSeriesPosts(series: PostSeries) {
  const posts = await getAllPosts()

  const seriesPosts = posts.filter((post) => post.series && post.series.name === series.name)
  seriesPosts.sort((post1, post2) => post2.series.number - post1.series.number)

  return seriesPosts
}

export async function prevNext(post: PostFrontMatter) {
  // Series first
  let seriesPrev, seriesNext
  if (post.series) {
    const seriesPosts = await getSeriesPosts(post.series)
    const postIndex = seriesPosts.findIndex((series) => series.slug === post.slug)

    seriesPrev = seriesPosts[postIndex + 1] || null
    seriesNext = seriesPosts[postIndex - 1] || null
  }

  // Then tag hierarchy, if the article is part of section, return a prev/next
  let sectionPrev, sectionNext
  const section = getSection(post)
  if (!section) {
    sectionPrev = null
    sectionNext = null
  } else {
    const posts = await getPostsForTag(section)
    const postIndex = posts.findIndex((series) => series.slug === post.slug)

    const prev = posts[postIndex + 1] || null
    const next = posts[postIndex - 1] || null

    // Medium posts aren't on the blog, so don't link to them
    sectionPrev = prev && prev.type === 'Medium' ? null : prev
    sectionNext = next && next.type === 'Medium' ? null : next
  }

  const prev = seriesPrev || sectionPrev
  const next = seriesNext || sectionNext
  return [prev, next]
}

export async function getAllPosts() {
  const mediumPosts = await getMediumPosts()
  const localPosts = await getLocalPosts()
  const allPosts = localPosts.concat(mediumPosts)
  return sortByDate(allPosts)
}

// Does not include draft or archived
export async function getAllDisplayPosts() {
  const posts = await getAllPosts()

  return posts.filter((post) => !post.archived && !post.draft && !post.tags.includes('example'))
}

export async function getSeries(name) {
  const posts = await getAllPosts()
  return posts.filter((post) => post.series && post.series.name === name)
}
