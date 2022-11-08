import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Header from './Header'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </SectionContainer>
  )
}

export default LayoutWrapper
