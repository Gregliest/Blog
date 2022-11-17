import * as React from 'react'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import formatDate from '@/lib/utils/formatDate'
import { SxProps, Theme } from '@mui/material'
import { PostFrontMatter } from 'types/PostFrontMatter'
import Link from './Link'
import Image from './Image'

interface ArticleCardProps {
  post: PostFrontMatter
  sx?: SxProps<Theme>
}

export default function ArticleCard(props: ArticleCardProps) {
  const link = props.post.link ? props.post.link : '/blog/' + props.post.slug

  // Glowing gradient inspired by https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background
  return (
    <div className="group relative w-96 shrink-0">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-slate-500 to-zinc-700 opacity-25 blur transition duration-700 group-hover:opacity-100 group-hover:duration-200"></div>
      <div className="items-top relative flex h-full w-full justify-start space-x-6 rounded-lg bg-white leading-none ring-1 ring-gray-900/5">
        <Link href={link} aria-label={`Link to ${link}`}>
          {props.post.thumbnail ? (
            <Image
              alt={props.post.title}
              src={props.post.thumbnail}
              width={450}
              height={306}
              className="rounded-t-lg"
            />
          ) : (
            <></>
          )}
          <div className="py-6 px-8">
            <Typography component="h2" variant="h5">
              {props.post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {formatDate(props.post.date)}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {props.post.summary}
            </Typography>
          </div>
        </Link>
      </div>
    </div>
  )
}
