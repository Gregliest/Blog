import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { InferGetStaticPropsType } from 'next'
import { getAllDisplayPosts } from '@/lib/utils/contentProvider'
import ArticleGallery from '@/components/ArticleGallery'
import SectionContainer from '@/components/SectionContainer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedCard from '@/components/AnimatedCard'

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
  return (
    <div>
      <div className="h-screen w-full bg-bowser bg-cover bg-fixed bg-center">
        {/* Background gradients for the header */}
        <div
          className="bg-gradient-to-r from-white via-transparent to-white
          sm:bg-gradient-to-r sm:from-white sm:to-white
          xl:bg-gradient-to-r xl:from-white xl:via-transparent xl:to-white"
        >
          <Header />
        </div>
        <div className="invisible h-5 bg-gradient-to-b from-white sm:visible xl:invisible" />

        <div className="h-1/4" />
        <p className="p-5 text-center text-5xl text-white backdrop-blur-sm">
          Software Engineering, Whitewater Kayaking, Photography, and more!
        </p>
        <div className="h-1/4" />

        <AnimatedCard />

        <SectionContainer>
          <PageSEO
            title={`Projects - ${siteMetadata.author}`}
            description={siteMetadata.description}
          />

          <ArticleGallery articles={allPosts} />
          <Footer />
        </SectionContainer>
      </div>
    </div>
  )
}
