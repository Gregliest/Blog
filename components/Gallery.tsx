import { ImageList, ImageListItem } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export default function Gallery({ posts }) {
  const list = posts.map((post) => {
    return (
      <Link href={`/blog/${post.slug}`} passHref key={post.title}>
        <ImageListItem component="a">
          <Image layout="fill" src={post.image} alt={post.title} />
        </ImageListItem>
      </Link>
    )
  })

  return (
    <div>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {list}
      </ImageList>
    </div>
  )
}
