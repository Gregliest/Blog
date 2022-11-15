import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { InferGetStaticPropsType } from 'next'
import { getAllDisplayPosts } from '@/lib/utils/contentProvider'
import ArticleGallery from '@/components/ArticleGallery'
import SectionContainer from '@/components/SectionContainer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedTextBox from '@/components/AnimatedTextBox'

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
  const blogAbout = ['Software', 'Whitewater', 'Photography', 'Rescue', 'and More!']
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
        <AnimatedTextBox title="A Blog About:" array={blogAbout} />
        <div className="h-1/4" />

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
