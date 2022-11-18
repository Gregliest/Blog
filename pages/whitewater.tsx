import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

import { getAllDisplayPosts } from '@/lib/utils/contentProvider'
import ArticleGallery from '@/components/ArticleGallery'
import { MinimalHeader } from '@/components/Header'
import Footer from '@/components/Footer'
import { filterByTag } from '@/lib/utils/posts'

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
    <div className="h-screen w-full bg-bowser bg-cover bg-fixed bg-center">
      <MinimalHeader title="Whitewater" />
      <div className="mb-6 h-4 bg-gradient-to-b from-white to-transparent" />
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ArticleGallery articles={whitewaterPosts} />
      <Footer />
    </div>
  )
}
