import ImageListItem from '@mui/material/ImageListItem'
import Image from '@/components/Image'
import Link from 'next/link'
import { Masonry } from '@mui/lab'

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
            sizes="(max-width: 640px) 100vw,
              50vw"
          />
        </ImageListItem>
      </Link>
    )
  })

  return (
    <Masonry columns={{ xs: 1, sm: 2, lg: 3 }} spacing={1}>
      {list}
    </Masonry>
  )
}
