import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

import { filterByTag, getAllDisplayPosts } from '@/lib/utils/contentProvider'
import ArticleGallery from '@/components/ArticleGallery'
import SectionContainer from '@/components/SectionContainer'
import { MinimalHeader } from '@/components/Header'
import Footer from '@/components/Footer'

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
    <SectionContainer>
      <MinimalHeader title="Code" />
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ArticleGallery articles={codePosts} />
      <Footer />
    </SectionContainer>
  )
}
