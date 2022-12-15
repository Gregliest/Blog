import Image from '@/components/Image'
import { StaticImageData } from 'next/image'

interface BackgroundImageProps {
  image: StaticImageData
}

export default function BackgroundImage(props: BackgroundImageProps) {
  return (
    <div className="fixed -z-10 h-screen w-screen">
      <Image
        alt="Background"
        src={props.image}
        fill
        priority
        sizes="(max-width: 1000px and max-height:450px) 1000px,
          (max-width: 1440px and max-height:720px) 1500px,
            3000px"
        quality={100}
        placeholder="blur"
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}
