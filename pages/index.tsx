import siteMetadata from '@/data/siteMetadata'
import { InferGetStaticPropsType } from 'next'
import { getAllDisplayPosts } from '@/lib/utils/contentProvider'

import { PageSEO } from '@/components/SEO'
import ArticleGallery from '@/components/ArticleGallery'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from '@/components/Image'
import bowser from '@/images/BowserBanner.jpg'
import AnimatedTextBox from '@/components/AnimatedTextBox'
import { sortByPostedDate } from '@/lib/utils/posts'

export const POSTS_PER_PAGE = 5

export const getStaticProps = async () => {
  const allPosts = await getAllDisplayPosts()
  sortByPostedDate(allPosts)

  return {
    props: {
      allPosts,
    },
  }
}

export default function Blog({ allPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  function resizeEvent() {
    console.log(window.innerWidth + ' ' + window.innerHeight)
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
          src={bowser}
          fill
          priority
          sizes="(max-width: 1000px and max-height:450px) 1000px,
          (max-width: 1440px and max-height:720px) 1500px,
            3000px"
          quality={100}
          placeholder="blur"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="h-screen w-screen">
        <Header />

        <div className="h-1/5" />
        <AnimatedTextBox array={blogAbout} />
        <div className="h-2/5" />

        <PageSEO
          title={`Canyons and Code - ${siteMetadata.author}`}
          description={siteMetadata.description}
        />
        <ArticleGallery articles={allPosts} />
        <Footer />
      </div>
    </div>
  )
}
