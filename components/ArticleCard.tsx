import * as React from 'react'
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
    <div className="group relative shrink-0 drop-shadow-lg xsm:w-96">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-slate-500 to-zinc-700 opacity-25 blur transition duration-700 group-hover:opacity-100 group-hover:duration-200"></div>
      <div className="relative h-full w-full space-x-6 rounded-lg bg-white leading-none ring-1 ring-gray-900/5">
        <Link href={link} aria-label={`Link to ${link}`}>
          <div className="flex h-full w-full flex-col">
            {props.post.thumbnail && (
              <Image
                alt={props.post.title}
                src={props.post.thumbnail}
                width={450}
                height={306}
                className="rounded-t-lg"
                sizes="450px"
              />
            )}
            <div className="divide-y divide-gray-200 py-6 px-8">
              <div>
                <p className="w-full text-center text-2xl">{props.post.title}</p>
                <p className="mt-2 mb-1 w-full text-right text-sm italic text-gray-500">
                  {formatDate(props.post.date)}
                </p>
              </div>
              {props.post.summary && <p className="pt-4 text-sm">{props.post.summary}</p>}
            </div>
            <div className="flex-grow" />
            {getReadFull(props.post)}
            {(props.post.type == 'Photo' || props.post.type == 'Blurb') && (
              <p className="w-full px-8 pb-6 italic text-neutral-700">(photo only)</p>
            )}
          </div>
        </Link>
      </div>
    </div>
  )
}
