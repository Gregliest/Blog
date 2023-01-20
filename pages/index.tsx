import siteMetadata from '@/data/siteMetadata'
import { InferGetStaticPropsType } from 'next'
import { getAllDisplayPosts } from '@/lib/utils/contentProvider'

import { PageSEO } from '@/components/SEO'
import ArticleGallery from '@/components/ArticleGallery'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import bowser from '@/images/BowserBanner.jpg'
import AnimatedTextBox from '@/components/AnimatedTextBox'
import { filterByNotType, filterByType, sortByPostedDate } from '@/lib/utils/posts'
import BackgroundImage from '@/components/BackgroundImage'

export const POSTS_PER_PAGE = 5

function arrayMove(arr, element, toIndex) {
  const fromIndex = arr.indexOf(element)
  arr.splice(fromIndex, 1)
  arr.splice(toIndex, 0, element)
}

// Surface articles by ensuring that at least 2 of the top three posts are articles.
// Reorders array in place
function orderPosts(allPosts) {
  // If at least 2 of the top three are articles, leave the order
  const numRecentArticles = allPosts.slice(0, 3).filter((post) => post.type === 'article').length
  if (numRecentArticles >= 2) {
    return allPosts
  }

  // If the first post is an article, put the second in position 3
  const articles = allPosts.filter((post) => post.type && post.type.toLowerCase() === 'article')
  if (allPosts[0].type === 'article') {
    arrayMove(allPosts, articles[1], 2)
  } else {
    // If the first post is not an article, put the first two articles in position 2, 3
    arrayMove(allPosts, articles[0], 1)
    arrayMove(allPosts, articles[1], 2)
  }

  return allPosts
}

// Removes all but the most recent photo
function removeMostPhotos(posts) {
  const photos = filterByType('photo', posts)
  const articles = filterByNotType('photo', posts)

  if (photos.length > 0) {
    sortByPostedDate(photos)
    const mostRecentPhoto = photos[0]
    articles.push(mostRecentPhoto)
  }

  sortByPostedDate(articles)
  return articles
}

export const getStaticProps = async () => {
  const allPosts = await getAllDisplayPosts()
  const posts = removeMostPhotos(allPosts)

  return {
    props: {
      posts,
    },
  }
}

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  function resizeEvent() {
    console.log(window.innerWidth + ' ' + window.innerHeight)
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', resizeEvent)
  }
  const blogAbout = ['SOFTWARE', 'WHITEWATER', 'PHOTOGRAPHY']
  return (
    <div>
      <BackgroundImage image={bowser} />
      <div className="h-screen w-screen">
        <Header />

        <div className="h-1/5" />
        <AnimatedTextBox array={blogAbout} />
        <div className="h-2/5" />

        <PageSEO
          title={`Canyons and Code - ${siteMetadata.author}`}
          description={siteMetadata.description}
        />
        <ArticleGallery articles={posts} />
        <Footer />
      </div>
    </div>
  )
}
