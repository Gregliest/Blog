import { promises as fs } from 'fs'
import { filterByTag, sortByDate } from './posts'
import path from 'path'
import { getAllFilesFrontMatter } from '../mdx'

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

  return mediumPosts
}

export async function getPostsForTag(tag) {
  const posts = await getAllPosts()
  return filterByTag(tag, posts)
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
