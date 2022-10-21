import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

import { filterByTag, getAllDisplayPosts } from '@/lib/utils/contentProvider'
import ArticleGallery from '@/components/ArticleGallery'

export const getStaticProps = async () => {
  const allPosts = await getAllDisplayPosts()
  const ideaPosts = filterByTag('idea', allPosts)

  return {
    props: {
      ideaPosts,
    },
  }
}
export default function Whitewater({ ideaPosts }) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ArticleGallery articles={ideaPosts} />
    </>
  )
}
