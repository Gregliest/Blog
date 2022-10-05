import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { Typography } from '@mui/material'

import { allBlogs, allPhotos } from 'contentlayer/generated'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import {
  getLocalPosts,
  getMediumPosts,
  getAllPosts,
  getPhotographyPosts,
  filterByTag,
} from '@/lib/utils/contentProvider'

export const getStaticProps = async () => {
  // const result = allBlogs.map(String).join('\n')
  const allPosts = await getAllPosts()
  const result = filterByTag('photography', allPosts)

  console.log(allCoreContent(allBlogs))

  // Get all local posts
  console.log(getLocalPosts())
  // Get all remote posts
  console.log(getMediumPosts())
  // Get all photography posts
  console.log(getPhotographyPosts())
  // Get all posts

  console.log(getAllPosts())
  // Get all by tag
  const result = filterByTag('photography', allPosts)
  // Sort by date
  // Remove archived
  //

  return {
    props: {
      allPosts: result,
    },
  }
}
export default function Whitewater({ allPosts }) {
  console.log(allPosts)
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Typography>Hello</Typography>
    </>
  )
}
