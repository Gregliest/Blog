import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { allCoreContent } from '@/lib/utils/contentlayer'
import { POSTS_PER_PAGE } from '../..'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import { sortedBlogPost } from '../../../lib/utils/contentlayer'
import ArticleCard from '@/components/ArticleCard'
import fsPromises from 'fs/promises'
import path from 'path'

export const getStaticPaths = async () => {
  const totalPosts = allBlogs
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const {
    params: { page },
  } = context
  const posts = sortedBlogPost(allBlogs)
  const pageNumber = parseInt(page as string)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  const filePath = path.join(process.cwd(), '/data/blog/mediumBlog.json')
  const jsonData = await fsPromises.readFile(filePath, 'utf-8')
  const mediumPosts = JSON.parse(jsonData)

  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(posts),
      mediumPosts,
      pagination,
    },
  }
}

export default function PostPage({
  posts,
  initialDisplayPosts,
  mediumPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
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
