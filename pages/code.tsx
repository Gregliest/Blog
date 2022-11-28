import siteMetadata from '@/data/siteMetadata'
import { getAllDisplayPosts } from '@/lib/utils/contentProvider'
import { filterByTag } from '@/lib/utils/posts'

import { PageSEO } from '@/components/SEO'
import ArticleGallery from '@/components/ArticleGallery'
import { MinimalHeader } from '@/components/Header'
import Footer from '@/components/Footer'
import Image from '@/components/Image'

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
      <div className="fixed -z-10 h-screen w-screen">
        <Image
          alt="Background"
          src="/static/images/photography/alsek-lake.jpg"
          fill
          objectFit="cover"
          priority
          sizes="4032px"
          quality={100}
        />
      </div>

      <div className="h-screen w-screen">
        <MinimalHeader title="Code" />
        <div className="mb-6 h-3 bg-gradient-to-b from-white to-transparent" />
        <PageSEO
          title={`Projects - ${siteMetadata.author}`}
          description={siteMetadata.description}
        />
        <ArticleGallery articles={codePosts} />
        <Footer />
      </div>
    </div>
  )
}
