import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { Typography } from '@mui/material'

import { getPhotographyPosts } from '@/lib/utils/contentProvider'
import Gallery from '@/components/Gallery'

export const getStaticProps = async () => {
  const photographyPosts = await getPhotographyPosts()

  return {
    props: {
      photographyPosts,
    },
  }
}
export default function Whitewater({ photographyPosts }) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Gallery posts={photographyPosts} />
      <Typography>Hello</Typography>
    </>
  )
}
