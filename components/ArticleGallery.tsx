import { Box } from '@mui/material'
import ArticleCard from './ArticleCard'

export default function ArticleGallery(props) {
  const list = props.articles.map((article) => {
    return <ArticleCard key={article.title} post={article} />
  })

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        },
      }}
    >
      {list}
    </Box>
  )
}
