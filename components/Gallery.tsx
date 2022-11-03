import ImageListItem, { imageListItemClasses } from '@mui/material/ImageListItem'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Link from 'next/link'

const WIDTH = 248
export default function Gallery({ posts }) {
  const list = posts.map((post) => {
    const height = post.originalHeight / (post.originalWidth / WIDTH)

    return (
      <Link href={`/blog/${post.slug}`} passHref key={post.title}>
        <ImageListItem key={post.title}>
          <Image
            layout="responsive"
            width={WIDTH}
            height={height}
            src={post.image}
            alt={post.title}
          />
        </ImageListItem>
      </Link>
    )
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
        [`& .${imageListItemClasses.root}`]: {
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {list}
    </Box>
  )
}
