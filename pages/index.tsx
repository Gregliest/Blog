import siteMetadata from '@/data/siteMetadata'
import { InferGetStaticPropsType } from 'next'
import { getAllDisplayPosts } from '@/lib/utils/contentProvider'

import { PageSEO } from '@/components/SEO'
import ArticleGallery from '@/components/ArticleGallery'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from '@/components/Image'
import AnimatedTextBox from '@/components/AnimatedTextBox'
import headerNavLinks from '@/data/headerNavLinks'

export const POSTS_PER_PAGE = 5

export const getStaticProps = async () => {
  const allPosts = await getAllDisplayPosts()

  return {
    props: {
      allPosts,
    },
  }
}

export default function Blog({ allPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  function resizeEvent() {
    console.log(window.innerWidth)
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', resizeEvent)
  }
  const blogAbout = ['SOFTWARE', 'WHITEWATER', 'PHOTOGRAPHY']
  return (
    <div>
      <div className="fixed -z-10 h-screen w-screen">
        <Image
          alt="Background"
          src="/static/images/BowserBanner.jpg"
          fill
          objectFit="cover"
          priority
          sizes="4032px"
          quality={100}
        />
      </div>
      <div className="h-screen w-full">
        <Header navLinks={headerNavLinks} />

        <div className="h-1/5" />
        <AnimatedTextBox array={blogAbout} />
        <div className="h-2/5" />

        <PageSEO
          title={`Projects - ${siteMetadata.author}`}
          description={siteMetadata.description}
        />
        <ArticleGallery articles={allPosts} />
        <Footer />
      </div>
    </div>
  )
}
