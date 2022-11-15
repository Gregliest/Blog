import * as React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import formatDate from '@/lib/utils/formatDate'
import { SxProps, Theme } from '@mui/material'
import { PostFrontMatter } from 'types/PostFrontMatter'

interface ArticleCardProps {
  post: PostFrontMatter
  sx?: SxProps<Theme>
}

export default function ArticleCard(props: ArticleCardProps) {
  const link = props.post.link ? props.post.link : '/blog/' + props.post.slug

  // Glowing gradient inspired by https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background
  return (
    <div className="group relative m-3 max-w-7xl">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-slate-500 to-zinc-700 opacity-25 blur transition duration-700 group-hover:opacity-100 group-hover:duration-200"></div>
      <div className="items-top relative flex h-full w-full justify-start space-x-6 rounded-lg bg-white px-7 py-6 leading-none ring-1 ring-gray-900/5">
        <CardActionArea component="a" href={link} sx={{ width: 1, height: 1 }}>
          <CardMedia component="img" sx={{ width: 1 }} image={props.post.thumbnail} />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {props.post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {formatDate(props.post.date)}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {props.post.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
      </div>
    </div>
  )
}
