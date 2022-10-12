import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Blog } from 'contentlayer/generated'

interface ArticleCardProps {
  post: Blog
}

export default function ArticleCard(props: ArticleCardProps) {
  console.log(props)
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {props.post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {props.post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {props.post.summary}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={props.post.image}
          />
        </Card>
      </CardActionArea>
    </Grid>
  )
}
