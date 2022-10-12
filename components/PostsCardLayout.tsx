import { sortByDate } from '@/lib/utils/contentProvider'
import { Grid } from '@mui/material'
import ArticleCard from './ArticleCard'

export default function PostsCardLayout({ posts }) {
  const sorted = sortByDate(posts)
  const numLatest = 5

  // Latest non archived
  const latest = []
  const rest = []

  sorted.map((post) => {
    if (post.archived) {
      return
    }

    if (latest.length < numLatest) {
      latest.push(post)
    } else {
      rest.push(post)
    }
  })

  return (
    <Grid container spacing={4}>
      {latest.map((post) => {
        return <ArticleCard key={post.title} post={post} />
      })}
    </Grid>
  )
}
