import { allBlogs, allPhotos } from 'contentlayer/generated'
import { allCoreContent } from './contentlayer'

import { promises as fs } from 'fs'
import path from 'path'

// This file provides all post data for the website, gathering from remote and local sources

// Gets the metadata for all local posts
export function getLocalPosts() {
  return allCoreContent(allBlogs).concat(getPhotographyPosts())
}

export function getPhotographyPosts() {
  return allCoreContent(allPhotos)
}

// Gets the metadata for all Medium posts
export async function getMediumPosts() {
  const filePath = path.join(process.cwd(), '/data/blog/mediumBlog.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const mediumPosts = JSON.parse(jsonData)

  return mediumPosts
}

export async function getAllPosts() {
  const mediumPosts = await getMediumPosts()
  return getLocalPosts().concat(mediumPosts)
}

export function dateSortDesc(a: string, b: string) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export function sortByDate(posts: any[]) {
  posts.sort((post1, post2) => dateSortDesc(post1.date, post2.date))
  return posts
}

export function filterByTag(tag: string, posts: any[]) {
  return posts.filter((post) => post.tags.includes(tag))
}

export function removeArchived(posts: any[]) {
  return posts.filter((post) => !post.archived)
}
