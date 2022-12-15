import siteMetadata from '@/data/siteMetadata'
import { getAllDisplayPosts } from '@/lib/utils/contentProvider'
import { filterByTag } from '@/lib/utils/posts'

import { PageSEO } from '@/components/SEO'
import ArticleGallery from '@/components/ArticleGallery'
import { MinimalHeader } from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundImage from '@/components/BackgroundImage'
import alsek from '@/images/photography/alsek-lake.jpg'

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
    <div>
      <BackgroundImage image={alsek} />
      <div className="h-screen w-screen">
        <MinimalHeader title="Code" />
        <div className="h-6" />
        <PageSEO title={`Code - ${siteMetadata.author}`} description={siteMetadata.description} />
        <ArticleGallery articles={codePosts} />
        <Footer />
      </div>
    </div>
  )
}
