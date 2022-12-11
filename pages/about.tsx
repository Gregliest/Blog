import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import SectionContainer from '@/components/SectionContainer'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getDisplayPost } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

const DEFAULT_LAYOUT = 'AuthorLayout'

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  authorDetails: { mdxSource: string; frontMatter: AuthorFrontMatter }
}> = async () => {
  const authorDetails = await getDisplayPost('authors', ['default'])
  const { mdxSource, frontMatter } = authorDetails
  return { props: { authorDetails: { mdxSource, frontMatter } } }
}

export default function About({ authorDetails }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <div>
      <Header />
      <div className="mb-0 h-1 bg-neutral-200 sm:mb-4" />
      <PageSEO title={`About - ${siteMetadata.author}`} description={siteMetadata.description} />
      <SectionContainer>
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          content={undefined}
        />
      </SectionContainer>
      <Footer />
    </div>
  )
}
