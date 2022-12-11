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
          src="/static/images/kayaking/magilla.jpg"
          fill
          objectFit="cover"
          priority
          sizes="(max-width: 1000px and max-height:450px) 1000px,
          (max-width: 1440px and max-height:720px) 1500px,
            3000px"
          quality={100}
          className="object-right"
        />
      </div>

      <div className="h-screen w-full">
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
