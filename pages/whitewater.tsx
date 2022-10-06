import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { Typography } from '@mui/material'
import ListLayout from '@/layouts/ListLayout'

import { allBlogs } from 'contentlayer/generated'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import {
  getLocalPosts,
  getMediumPosts,
  getAllPosts,
  getPhotographyPosts,
  filterByTag,
} from '@/lib/utils/contentProvider'

export const getStaticProps = async () => {
  // Get all local posts
  const localPosts = await getLocalPosts()
  // Get all remote posts
  const mediumPosts = await getMediumPosts()
  // Get all photography posts
  const photographyPosts = await getPhotographyPosts()
  // Get all posts
  const allPosts = await getAllPosts()
  // Get all by tag
  const filteredPosts = filterByTag('photography', allPosts)
  // Sort by date
  // Remove archived
  //

  return {
    props: {
      localPosts,
      mediumPosts,
      photographyPosts,
      allPosts,
      filteredPosts,
    },
  }
}
export default function Whitewater({ photographyPosts }) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={photographyPosts}
        initialDisplayPosts={photographyPosts}
        title="All Posts"
      />
      <Typography>Hello</Typography>
    </>
  )
}
