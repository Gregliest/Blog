import { allBlogs } from 'contentlayer/generated'
import { allCoreContent } from './contentlayer'
import type { Blog } from 'contentlayer/generated'

import { promises as fs } from 'fs'
import path from 'path'

// This file provides all post data for the website, gathering from remote and local sources

// Gets the metadata for all local posts
export function getLocalPosts() {
  return allCoreContent(allBlogs)
}

// Gets the metadata for all Medium posts
export async function getMediumPosts() {
  const filePath = path.join(process.cwd(), '/data/blog/mediumBlog.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const mediumPosts = JSON.parse(jsonData)

  return mediumPosts
}

export async function getPhotographyPosts() {
  const posts = await getAllPosts()
  return filterByTag('photography', posts)
}
export async function getAllPosts() {
  const mediumPosts = await getMediumPosts()
  const allPosts = getLocalPosts().concat(mediumPosts)
  return sortByDate(allPosts)
}

// Does not include draft or archived
export async function getAllDisplayPosts() {
  const posts = await getAllPosts()

  return posts.filter((post) => !post.archived && !post.draft)
}

export async function getSeries(name) {
  const posts = await getAllPosts()
  return posts.filter((post) => post.series && post.series.name === name)
}

export function dateSortDesc(a: string, b: string) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export function sortByDate(posts: Blog[]) {
  posts.sort((post1, post2) => dateSortDesc(post1.date, post2.date))
  return posts
}

export function filterByTag(tag: string, posts: Blog[]) {
  return posts.filter((post) => post.tags.includes(tag))
}

export function removeArchived(posts: Blog[]) {
  return posts.filter((post) => !post.archived)
}
