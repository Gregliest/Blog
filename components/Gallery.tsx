import ImageListItem from '@mui/material/ImageListItem'
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

  return <div className="columns-1 gap-0 md:columns-2 lg:columns-3">{list}</div>
}
