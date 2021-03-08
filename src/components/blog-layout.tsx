import React, { FC, Children } from 'react'
import { make as Layout } from '../components/Layout.gen'
import Header from './layout-article-header'
import Highlight, { Prism, Language, defaultProps } from 'prism-react-renderer'
import './highlight.css'
import './prose.css'
import { PageProps } from 'gatsby'

// TODO: rest

const inlineCode: FC = (p) => (
  <code className="bg-cool-gray-100 rounded px-px -mx-px" {...p} />
)

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
