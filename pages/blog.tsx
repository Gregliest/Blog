import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import ArticleCard from '@/components/MuiCard'
import fsPromises from 'fs/promises'
import path from 'path'

export const POSTS_PER_PAGE = 5

export const getStaticProps = async () => {
  const posts = sortedBlogPost(allBlogs)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  const filePath = path.join(process.cwd(), '/data/blog/mediumBlog.json')
  const jsonData = await fsPromises.readFile(filePath, 'utf-8')
  const mediumPosts = JSON.parse(jsonData)
  console.log('here')

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
  console.log('and here')
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {mediumPosts.map((article) => (
            <ArticleCard
              key={article.title}
              title={article.title}
              description={article.description}
              img={article.imgSrc}
              href={article.link}
            />
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
