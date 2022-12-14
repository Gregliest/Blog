import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

interface Props {
  children: ReactNode
  frontMatter: AuthorFrontMatter
}

export default function AuthorLayout({ children, frontMatter }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, instagram } =
    frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-center text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 lg:text-6xl">
            Welcome to Canyons and Code
          </h1>
        </div>
        <div className="items-start space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192"
              height="192"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
              <SocialIcon kind="instagram" href={instagram} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark lg:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
