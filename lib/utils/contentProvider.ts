import { allBlogs, allPhotos } from 'contentlayer/generated'
import { allCoreContent } from './contentlayer'

import fsPromises from 'fs/promises'
import path from 'path'

// This file provides all post data for the website, gathering from remote and local sources

// Gets the metadata for all local posts
export function getLocalPosts() {
  return allCoreContent(allBlogs).concat(allCoreContent(allPhotos))
}

// Gets the metadata for all Medium posts
export async function getMediumPosts() {
  const filePath = path.join(process.cwd(), '/data/blog/mediumBlog.json')
  const jsonData = await fsPromises.readFile(filePath, 'utf-8')
  const mediumPosts = JSON.parse(jsonData)

  return mediumPosts
}

export async function getAllPosts() {
  const mediumPosts = await getMediumPosts()
  return getLocalPosts().concat(mediumPosts)
}
