import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { InferGetStaticPropsType } from 'next'
import { getAllDisplayPosts } from '@/lib/utils/contentProvider'
import ArticleGallery from '@/components/ArticleGallery'
import SectionContainer from '@/components/SectionContainer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
      <Header />
      <div className="h-screen w-full bg-bowser bg-cover bg-fixed bg-center">
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
