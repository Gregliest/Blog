import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { Typography } from '@mui/material'

import { getPhotographyPosts } from '@/lib/utils/contentProvider'
import Gallery from '@/components/Gallery'

export const getStaticProps = async () => {
  const photographyPosts = await getPhotographyPosts()

  return {
    props: {
      photographyPosts,
    },
  }
}
export default function Whitewater({ photographyPosts }) {
  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Photography
          </h1>
        </div>
        <PageSEO
          title={`Projects - ${siteMetadata.author}`}
          description={siteMetadata.description}
        />
        <Gallery posts={photographyPosts} />
      </div>
    </>
  )
}
