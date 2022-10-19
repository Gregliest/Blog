import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import ArticleCard from '@/components/ArticleCard'
import { getMediumPosts } from '@/lib/utils/contentProvider'

export const POSTS_PER_PAGE = 5

export const getStaticProps = async () => {
  const posts = sortedBlogPost(allBlogs)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  const mediumPosts = await getMediumPosts()

  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(posts),
      mediumPosts,
      pagination,
    },
  }
}

export default function Blog({
  posts,
  initialDisplayPosts,
  mediumPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {mediumPosts.map((article) => (
            <ArticleCard key={article.title} post={article} />
          ))}
        </div>
      </div>
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
