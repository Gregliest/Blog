import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { ReactNode } from 'react'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
import { getSection } from '@/lib/utils/posts'
import { BlogNewsletterForm } from '@/components/NewsletterForm'
import { useRouter } from 'next/router'
import formatDate from '@/lib/utils/formatDate'
import { like } from '@/lib/utils/dynamo'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface Props {
  frontMatter: PostFrontMatter
  authorDetails: AuthorFrontMatter[]
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
  children: ReactNode
}

function onAuthorClick(event, router) {
  if (event.target.id !== 'instagram') {
    router.push('/about')
  }
}

function AuthorView(props) {
  return (
    <dl className="pt-6 pb-10 lg:border-b lg:border-gray-200 lg:pt-11">
      <dt className="sr-only">Authors</dt>
      <dd>
        <ul className="flex justify-center space-x-8 sm:space-x-12 lg:block lg:space-x-0 lg:space-y-8">
          {props.authorDetails.map((author) => (
            <button onClick={(e) => onAuthorClick(e, props.router)} key={author.name}>
              <li className="flex items-center space-x-2">
                {author.avatar && (
                  <Image
                    src={author.avatar}
                    width="38"
                    height="38"
                    alt="avatar"
                    className="h-10 w-10 rounded-full"
                  />
                )}
                <dl className="whitespace-nowrap text-sm font-medium leading-5">
                  <dt className="sr-only">Name</dt>
                  <dd className="text-left text-gray-900">{author.name}</dd>
                  <dt className="sr-only">Instagram</dt>
                  <dd>
                    {author.instagram && (
                      <Link
                        href={author.instagram}
                        className="text-primary-500 hover:text-primary-600"
                        id="instagram"
                      >
                        {author.instagram.replace('https://www.instagram.com/', '@')}
                      </Link>
                    )}
                  </dd>
                </dl>
              </li>
            </button>
          ))}
        </ul>
      </dd>
    </dl>
  )
}

function TagView(props) {
  return (
    props.tags && (
      <div className="py-4 lg:py-8">
        <h2 className="text-xs uppercase tracking-wide text-gray-500">Tags</h2>
        <div className="flex flex-wrap">
          {props.tags.map((tag) => (
            <Link
              href={`/search?tag=${tag}`}
              key={tag}
              className="mr-3 mt-2 text-sm font-medium uppercase text-primary-500 hover:text-primary-600"
            >
              {tag.split(' ').join('-')}
            </Link>
          ))}
        </div>
      </div>
    )
  )
}

function NextPreviousView(props) {
  const [next, prev] = [props.next, props.prev]
  return (
    (next || prev) && (
      <div className="flex justify-between py-4 lg:block lg:space-y-8 lg:py-8">
        {prev && (
          <div>
            <h2 className="text-xs uppercase tracking-wide text-gray-500">Previous Article</h2>
            <div className="text-primary-500 hover:text-primary-600">
              <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
            </div>
          </div>
        )}
        {next && (
          <div>
            <h2 className="text-xs uppercase tracking-wide text-gray-500">Next Article</h2>
            <div className="text-primary-500 hover:text-primary-600">
              <Link href={`/blog/${next.slug}`}>{next.title}</Link>
            </div>
          </div>
        )}
      </div>
    )
  )
}

function BackLink(props) {
  const href = props.section ? '/' + props.section : '/'
  const title = props.section ? props.section : 'Blog'
  const title1 = title[0].toUpperCase() + title.slice(1)

  return (
    <div className="pt-4 lg:pt-8">
      <Link href={href} className="text-primary-500 hover:text-primary-600">
        &larr; {' Back to ' + title1}
      </Link>
    </div>
  )
}

function PrintsView(props) {
  return (
    props.section &&
    props.section === 'photography' && (
      <div className="py-4 lg:pt-8">
        <h2 className="text-xs uppercase tracking-wide text-gray-500">FOR PRINTS, INQUIRE AT:</h2>

        <Link
          href="mailto:prints@gregliest.com"
          className="text-primary-500 hover:text-primary-600"
        >
          prints@gregliest.com
        </Link>
      </div>
    )
  )
}

function PostedOn(props) {
  return (
    props.post.postedDate && (
      <p className="mb-4 text-sm italic">{'Posted on: ' + formatDate(props.post.postedDate)}</p>
    )
  )
}

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }: Props) {
  const { slug, fileName, date, title, tags } = frontMatter
  const section = getSection(frontMatter)
  const router = useRouter()

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />

      <BackLink section={section} />
      <article>
        <div className="lg:divide-y lg:divide-gray-200">
          <header className="pt-6 lg:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <p
                className={`${
                  frontMatter.draft ? 'flex' : 'hidden'
                } text-extrabold justify-center text-5xl text-red-600`}
              >
                *DRAFT*
              </p>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <AuthorView authorDetails={authorDetails} router={router} />
            <div className="divide-y divide-gray-200 lg:col-span-3 lg:row-span-2 lg:pb-0">
              <div>
                <div className="prose max-w-none pt-10 pb-8">{children}</div>
                <PostedOn post={frontMatter} />
              </div>
              <div className="pt-6 pb-6 text-sm text-gray-700">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div>
              <Comments frontMatter={frontMatter} />
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 lg:col-start-1 lg:row-start-2 lg:divide-y"></div>
              <div className="divide-gray-200 text-sm font-medium leading-5 lg:col-start-1 lg:row-start-2 lg:divide-y">
                <div>
                  <button
                    className={`'hover:bg-primary-700' w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2`}
                    type="submit"
                    onClick={() => like(slug)}
                  >
                    Like
                  </button>
                </div>
                <BlogNewsletterForm title="SUBSCRIBE" />
                <PrintsView section={section} />
                <TagView tags={tags} />
                <NextPreviousView next={next} prev={prev} />
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
