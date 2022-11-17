import ArticleGallery from '@/components/ArticleGallery'
import Footer from '@/components/Footer'
import { MinimalHeader } from '@/components/Header'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import { getAllPosts } from '@/lib/utils/contentProvider'
import kebabCase from '@/lib/utils/kebabCase'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'

export const getStaticProps: GetStaticProps<{
  tags: Record<string, number>
  posts: PostFrontMatter[]
}> = async () => {
  const tags = await getAllTags('blog')
  const posts = await getAllPosts()

  return { props: { tags, posts } }
}

export default function Tags({ tags, posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  function TagComponent(tag, tags) {
    return (
      <div key={tag} className="mt-2 mb-2 mr-5 flex flex-row">
        <button className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
          {tag}
        </button>
        <p className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
          {` (${tags[tag]})`}
        </p>
      </div>
    )
  }

  return (
    <div>
      <MinimalHeader title="Search" />
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {sortedTags.map((t) => {
            return TagComponent(t, tags)
          })}
        </div>
      </div>
      <ArticleGallery articles={posts} />
      <Footer />
    </div>
  )
}
