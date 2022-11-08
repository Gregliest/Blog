import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

import { filterByTag, getAllDisplayPosts } from '@/lib/utils/contentProvider'
import ArticleGallery from '@/components/ArticleGallery'
import SectionContainer from '@/components/SectionContainer'
import { MinimalHeader } from '@/components/Header'
import Footer from '@/components/Footer'

export const getStaticProps = async () => {
  const allPosts = await getAllDisplayPosts()
  const ideaPosts = filterByTag('idea', allPosts)

  return {
    props: {
      ideaPosts,
    },
  }
}
export default function Ideas({ ideaPosts }) {
  return (
    <SectionContainer>
      <MinimalHeader title="Ideas" />
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ArticleGallery articles={ideaPosts} />
      <Footer />
    </SectionContainer>
  )
}
