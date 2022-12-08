import { ImageList, useMediaQuery } from '@mui/material'
import ImageListItem from '@mui/material/ImageListItem'
import Image from '@/components/Image'
import Link from 'next/link'

const WIDTH = 248
export default function Gallery({ posts }) {
  const columns = useMediaQuery('(min-width:640px)') ? 2 : 1

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
            sizes="(max-width: 640px) 100vw,
              50vw"
          />
        </ImageListItem>
      </Link>
    )
  })

  return (
    <ImageList variant="masonry" cols={columns} gap={8}>
      {list}
    </ImageList>
  )
}
