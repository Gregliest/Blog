import ArticleGallery from '@/components/ArticleGallery'
import Footer from '@/components/Footer'
import { MinimalHeader } from '@/components/Header'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import { getAllPosts } from '@/lib/utils/contentProvider'
import { filterByTag, filterByText } from '@/lib/utils/posts'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useEffect, useState } from 'react'
import { PostFrontMatter } from 'types/PostFrontMatter'
import SearchIcon from '@mui/icons-material/Search'

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
  const [selectedTag, setSelectedTag] = useState('')
  const [searchText, setSearchText] = useState('')
  const [articles, setArticles] = useState([])

  useEffect(() => {
    let selectedPosts = selectedTag ? filterByTag(selectedTag, posts) : posts
    selectedPosts = filterByText(searchText, selectedPosts)
    setArticles(selectedPosts)
  }, [selectedTag, searchText, posts])

  function handleSearch(event) {
    setSearchText(event.target.value)
  }

  function TagComponent(tag, tags) {
    return (
      <div key={tag} className="mt-2 mb-2 mr-5 flex flex-row">
        <button
          className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </button>
        <p className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
          {` (${tags[tag]})`}
        </p>
      </div>
    )
  }

  function SearchComponent() {
    return (
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Search
          </h1>
        </div>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchIcon />
          </span>
          <input
            className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Search for anything..."
            name="search"
            onChange={handleSearch}
          />
        </label>
      </div>
    )
  }

  function TagsComponent() {
    return (
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
    )
  }
  return (
    <div>
      <MinimalHeader title="Search" />
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      {/* Necessary to put search in a div so that it doesn't lose focus when rerendering */}
      <div>{SearchComponent()}</div>
      <TagsComponent />
      <ArticleGallery articles={articles} />
      <Footer />
    </div>
  )
}
