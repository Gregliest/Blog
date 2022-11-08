import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

import { filterByTag, getAllDisplayPosts } from '@/lib/utils/contentProvider'
import ArticleGallery from '@/components/ArticleGallery'
import SectionContainer from '@/components/SectionContainer'
import { MinimalHeader } from '@/components/Header'
import Footer from '@/components/Footer'

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
    <SectionContainer>
      <MinimalHeader title="Whitewater" />
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ArticleGallery articles={whitewaterPosts} />
      <Footer />
    </SectionContainer>
  )
}
