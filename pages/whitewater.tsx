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
      <div className="fixed -z-10 h-screen w-screen">
        <Image
          alt="Background"
          src="/static/images/photography/magilla.jpg"
          fill
          objectFit="cover"
          priority
          sizes="4032px"
          quality={100}
        />
      </div>

      <div className="h-screen w-full">
        <MinimalHeader title="Whitewater" />
        <div className="mb-6 h-4 bg-gradient-to-b from-white to-transparent" />
        <PageSEO
          title={`Projects - ${siteMetadata.author}`}
          description={siteMetadata.description}
        />
        <ArticleGallery articles={whitewaterPosts} />
        <Footer />
      </div>
    </div>
  )
}
