import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { Typography } from '@mui/material'
import ListLayout from '@/layouts/ListLayout'

import {
  getLocalPosts,
  getMediumPosts,
  getAllPosts,
  getPhotographyPosts,
  filterByTag,
} from '@/lib/utils/contentProvider'
import ArticleCard from '@/components/ArticleCard'

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
export default function Whitewater({ allPosts }) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />

      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {allPosts.map((article) => (
            <ArticleCard key={article.title} post={article} />
          ))}
        </div>
      </div>
      <Typography>Hello</Typography>
    </>
  )
}
