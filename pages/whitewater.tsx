import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

import { filterByTag, getAllDisplayPosts } from '@/lib/utils/contentProvider'
import ArticleGallery from '@/components/ArticleGallery'

export const getStaticProps = async () => {
  const allPosts = await getAllDisplayPosts()
  const whitewaterPosts = filterByTag('whitewater', allPosts)

  return {
    props: {
      whitewaterPosts,
    },
  }
}
export default function Whitewater({ whitewaterPosts }) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ArticleGallery articles={whitewaterPosts} />
    </>
  )
}
