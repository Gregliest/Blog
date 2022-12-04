import * as React from 'react'
import Typography from '@mui/material/Typography'
import formatDate from '@/lib/utils/formatDate'
import { PostFrontMatter } from 'types/PostFrontMatter'
import Link from './Link'
import Image from './Image'

interface ArticleCardProps {
  post: PostFrontMatter
}

function getReadFull(post: PostFrontMatter) {
  const properties =
    'px-8 pb-6 w-full text-right justify-self-end text-primary-500 hover:text-primary-600'

  if (post.link && post.link.includes('medium')) {
    return <p className={properties}>Read on Medium &rarr;</p>
  } else if (post.type === 'Article') {
    return <p className={properties}>Read full article &rarr;</p>
  }
  return null
}

export default function ArticleCard(props: ArticleCardProps) {
  const link = props.post.link ? props.post.link : '/blog/' + props.post.slug

  // Glowing gradient inspired by https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background
  return (
    <div className="group relative w-96 shrink-0 drop-shadow-lg">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-slate-500 to-zinc-700 opacity-25 blur transition duration-700 group-hover:opacity-100 group-hover:duration-200"></div>
      <div className="relative flex h-full w-full space-x-6 rounded-lg bg-white leading-none ring-1 ring-gray-900/5">
        <Link href={link} aria-label={`Link to ${link}`}>
          {props.post.thumbnail && (
            <Image
              alt={props.post.title}
              src={props.post.thumbnail}
              width={450}
              height={306}
              className="rounded-t-lg"
            />
          )}
          <div className="divide-y divide-gray-200 py-6 px-8">
            <div>
              <p className="w-full text-center text-2xl">{props.post.title}</p>
              <p className="mb-2 w-full text-right text-sm italic text-gray-500">
                {formatDate(props.post.date)}
              </p>
            </div>
            <p className="pt-4 text-sm">{props.post.summary}</p>
          </div>
          {getReadFull(props.post)}
        </Link>
      </div>
    </div>
  )
}
