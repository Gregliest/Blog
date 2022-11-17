import Link from './Link'
import MobileNav from './MobileNav'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'

interface HeaderProps {
  title?: string
  navLinks?: string[]
}

// A header with a logo and title on the left, and a hamburger menu on the right
export const MinimalHeader = (props: HeaderProps) => {
  const title = props.title ? props.title : siteMetadata.headerTitle

  return (
    <header className="flex justify-between bg-white p-3">
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

// A header with a center transparent gradient, that shows a hamburger at small screen sizes
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
              className="p-1 text-base font-medium text-gray-800 hover:text-blue-900 sm:p-4"
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
