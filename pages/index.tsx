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
  function resizeEvent() {
    console.log(window.innerWidth)
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', resizeEvent)
  }
  const blogAbout = ['Software', 'Whitewater', 'Photography', 'Rescue', 'and More!']
  return (
    <div>
      <div className="h-screen w-full bg-bowser bg-cover bg-fixed bg-center">
        {/* Background gradients for the header */}
        <Header />

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
