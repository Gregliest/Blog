import Link from './Link'
import MobileNav from './MobileNav'
import siteMetadata from '@/data/siteMetadata'
import { headerNavLinks } from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import SearchIcon from '@mui/icons-material/Search'

interface HeaderProps {
  title?: string
  navLinks?: Record<string, string>[]
}

// A header with a logo and title on the left, and a hamburger menu on the right
export const MinimalHeader = (props: HeaderProps) => {
  const title = props.title ? props.title : siteMetadata.headerTitle

  return (
    <header className="flex justify-between w-full">
      <div className="bg-white bg-opacity-50 p-3">
        <Link href="/" aria-label={title}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            <div className="hidden h-6 text-2xl font-semibold sm:block">{title}</div>
          </div>
        </Link>
      </div>
      <div className="w-full bg-gradient-to-r from-[#ffffff80] via-transparent to-[#ffffff80]" />
      <div className="flex items-center bg-white bg-opacity-50 p-3 text-base leading-5">
        <MobileNav />
      </div>
    </header>
  )
}

// A header with a center transparent gradient, that shows a hamburger at small screen sizes
const Header = (props: HeaderProps) => {
  const title = props.title ? props.title : siteMetadata.headerTitle

  return (
    <header className="flex justify-between w-full">
      <div className="bg-white p-3">
        <Link href="/" aria-label={title}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            <p className="hidden h-6 items-center whitespace-nowrap text-2xl font-semibold sm:flex">
              {title}
            </p>
          </div>
        </Link>
      </div>
      <div className="flex-grow bg-gradient-to-r from-white via-transparent to-white" />
      <div className="flex items-center bg-white p-1 text-base leading-5">
        <div className="hidden items-center md:flex">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-4 text-base font-medium text-gray-800 hover:text-primary-500"
            >
              {link.title}
            </Link>
          ))}
          <Link
            key="search"
            href="/search"
            className="p-4 text-base font-medium text-gray-800 hover:text-primary-500"
          >
            <SearchIcon />
          </Link>
        </div>
        <div className="md:hidden flex items-center bg-white bg-opacity-50 p-3 text-base leading-5">
          <MobileNav navLinks={props.navLinks} />
        </div>
      </div>
    </header>
  )
}

export default Header
