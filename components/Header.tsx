import Link from './Link'
import MobileNav from './MobileNav'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'

interface HeaderProps {
  title?: string
  navLinks?: string[]
}

export const MinimalHeader = (props: HeaderProps) => {
  const title = props.title ? props.title : siteMetadata.headerTitle

  return (
    <header className="flex justify-between py-10">
      <div>
        <Link href="/" aria-label={title}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            <div className="hidden h-6 text-2xl font-semibold sm:block">{title}</div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <MobileNav />
      </div>
    </header>
  )
}

const Header = (props: HeaderProps) => {
  const title = props.title ? props.title : siteMetadata.headerTitle

  return (
    <header className="flex justify-between">
      <div className="bg-white p-3">
        <Link href="/" aria-label={title}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            <div className="hidden h-6 text-2xl font-semibold sm:block">{title}</div>
          </div>
        </Link>
      </div>
      <div className="w-full bg-gradient-to-r from-white via-transparent to-white" />
      <div className="flex items-center bg-white p-3 text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="sm:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
