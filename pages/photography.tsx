import siteMetadata from '@/data/siteMetadata'
import { getPostsForTag } from '@/lib/utils/contentProvider'

import { PageSEO } from '@/components/SEO'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
import { MinimalHeader } from '@/components/Header'
import { removeArchived } from '@/lib/utils/posts'

const sizeOf = require('image-size')

export const getStaticProps = async () => {
  let photographyPosts = await getPostsForTag('photography')
  photographyPosts = removeArchived(photographyPosts)

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
      <PageSEO
        title={`Photography - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="h-1 bg-neutral-200" />
      <Gallery posts={photographyPosts} />
      <Footer />
    </div>
  )
}
