import React, { FC, Children } from 'react'
import { make as Layout } from '../components/Layout.gen'
import { make as Header} from './LayoutArticleHeader.gen'
import Highlight, { Prism, Language, defaultProps } from 'prism-react-renderer'
import './highlight.css'
import './prose.css'
import { PageProps } from 'gatsby'

// TODO: type safe serializer
interface PostMetadata {
  date: string
  tags?: string[]
  title: string
  description?: string
}

interface PageContext {
  html: string
  frontmatter: {
    title: string
    date: string
    tags: string[] | null
  }
}

const BlogLayout = ({
  pageContext: { frontmatter, html },
}: PageProps<any, PageContext>) => (
  <Layout
    header={<Header
      title={frontmatter.title}
      subhead="Blog"
      date={frontmatter.date}
      tags={frontmatter.tags || []} />}
  >
    <article className="max-w-2xl text-lg mx-auto text-gray-800 leading-relaxed prose">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  </Layout>
)

export default BlogLayout
