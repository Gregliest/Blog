import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { Typography } from '@mui/material'

import { allBlogs } from 'contentlayer/generated'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'

export default function Whitewater() {
  // const result = allBlogs.map(String).join('\n')
  const result = JSON.stringify(allBlogs[1])
  console.log(allBlogs)
  console.log(allCoreContent(allBlogs))

  // Get all local posts
  // Get all remote posts
  // Get all posts
  // Get all by tag
  // Get all photography posts
  // Sort by date
  // Remove archived
  //

  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Typography>{result}</Typography>
    </>
  )
}
