import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

import { filterByTag, getAllDisplayPosts } from '@/lib/utils/contentProvider'
import ArticleGallery from '@/components/ArticleGallery'
import SectionContainer from '@/components/SectionContainer'
import { MinimalHeader } from '@/components/Header'
import Footer from '@/components/Footer'

export const getStaticProps = async () => {
  const allPosts = await getAllDisplayPosts()
  const codePosts = filterByTag('code', allPosts)

  return {
    props: {
      codePosts,
    },
  }
}
export default function Code({ codePosts }) {
  return (
    <div className="h-screen w-full bg-bowser bg-cover bg-fixed bg-center">
      <MinimalHeader title="Code" />
      <div className="mb-6 h-4 bg-gradient-to-b from-white to-transparent" />
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ArticleGallery articles={codePosts} />
      <Footer />
    </div>
  )
}
