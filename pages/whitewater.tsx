import siteMetadata from '@/data/siteMetadata'
import { getAllDisplayPosts } from '@/lib/utils/contentProvider'
import { filterByTag } from '@/lib/utils/posts'

import { PageSEO } from '@/components/SEO'
import ArticleGallery from '@/components/ArticleGallery'
import { MinimalHeader } from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundImage from '@/components/BackgroundImage'
import magilla from '@/images/kayaking/magilla.jpg'

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
    <div>
      <BackgroundImage image={magilla} />
      <div className="h-screen w-screen">
        <MinimalHeader title="Whitewater" />
        <div className="h-6" />
        <PageSEO
          title={`Whitewater - ${siteMetadata.author}`}
          description={siteMetadata.description}
        />
        <ArticleGallery articles={whitewaterPosts} />
        <Footer />
      </div>
    </div>
  )
}
