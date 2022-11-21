import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { getPostsForTag } from '@/lib/utils/contentProvider'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
import { MinimalHeader } from '@/components/Header'
const sizeOf = require('image-size')

export const getStaticProps = async () => {
  const photographyPosts = await getPostsForTag('photography')
  const posts = photographyPosts.map((post) => {
    const dimensions = sizeOf(process.cwd() + '/public' + post.image)
    post['originalWidth'] = dimensions.width
    post['originalHeight'] = dimensions.height

    return post
  })

  return {
    props: {
      photographyPosts: posts,
    },
  }
}

export default function Photography({ photographyPosts }) {
  return (
    <div>
      <MinimalHeader title="Photography" />
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Gallery posts={photographyPosts} />
      <Footer />
    </div>
  )
}
