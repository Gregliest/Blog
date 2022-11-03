import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

import { filterByTag, getAllDisplayPosts } from '@/lib/utils/contentProvider'
import ArticleGallery from '@/components/ArticleGallery'

export const getStaticProps = async () => {
  const allPosts = await getAllDisplayPosts()
  const codePosts = filterByTag('code', allPosts)

  return {
    props: {
      codePosts,
    },
  }
}
export default function Whitewater({ codePosts }) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ArticleGallery articles={codePosts} />
    </>
  )
}
