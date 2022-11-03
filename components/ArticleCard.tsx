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

  return (
    <Card sx={[{ maxWidth: 340 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}>
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
    </Card>
  )
}
