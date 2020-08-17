import React, { FC, Children } from 'react'
import Layout from '../components/layout'
import Header from './layout-article-header'
import { MDXProvider } from '@mdx-js/react'
import Highlight, { Prism, Language, defaultProps } from 'prism-react-renderer'
import Link from './link'
import './highlight.css'

//@ts-ignore
;(typeof global !== 'undefined' ? global : window).Prism = Prism
require('prismjs/components/prism-elm.js')
require('prismjs/components/prism-clojure.js')

const mb = ' mb-6 '

const p: FC = (p) => <p {...p} className={mb} />
const hr: FC = () => <hr className="my-5" />

const blockquote: FC = (p) => (
  <blockquote
    {...p}
    className={'border-l-2 border-gray-300 rounded-l-sm pl-4' + mb}
  />
)

const ul: FC = (p) => <ul {...p} className={'list-disc ml-4 space-y-1' + mb} />

const ol: FC = (p) => (
  <ol {...p} className={'list-decimal ml-4 space-y-1' + mb} />
)

const li: FC = (p) => <li {...p} className="pl-3" />

const code: FC<{ className?: string }> = (p) => (
  <Highlight
    {...defaultProps}
    code={p.children as string}
    theme={undefined}
    language={(p?.className ?? '').replace(/language-/, '') as Language}
  >
    {({ className, tokens, getLineProps, getTokenProps }) => (
      <pre
        className={
          className +
          ' bg-darkest-gray text-gray-100 overflow-x-auto text-sm -mx-5 px-5 lg:rounded  py-2 mb-6'
        }
      >
        {/* HACK */}
        {tokens.map((line, i) =>
          i === tokens.length - 1 ? null : (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ),
        )}
      </pre>
    )}
  </Highlight>
)

// TODO: more semantic (not figure)
const img: FC<{ src: string; alt?: string }> = ({ src, alt }) => {
  console.log(src)
  return (
    <span className="my-6 -mx-5 sm:mx-auto block">
      <img className="md:rounded" src={src} alt={alt} />
      <span className="px-4 sm:px-0">
        <span className="pt-2 text-black font-bold text-sm">{alt}</span>
      </span>
    </span>
  )
}

// TODO: rest

const hm = ' mb-8 mt-6 '

const h1: FC = (p) => (
  <h2 {...p} className={'text-black leading-snug text-4xl font-light' + hm} />
)

const h2: FC = (p) => (
  <h2 {...p} className={'text-gray-900 text-3xl font-normal' + hm} />
)

const h3: FC = (p) => (
  <h2 {...p} className={'text-gray-900 text-2xl font-bold' + hm} />
)

const h4: FC = (p) => (
  <h2 {...p} className={'text-gray-900 text-lg font-bold' + hm} />
)

const h5: FC = (p) => (
  <h2 {...p} className={'text-black text-base font-bold' + hm} />
)

const h6: FC = (p) => (
  <h2
    {...p}
    className={'text-gray-600 text-xs uppercase tracking-wide font-bold' + hm}
  />
)

const a: FC<{ href?: string }> = ({ href = '', children }) => (
  <span className="text-gray-900">
    <Link to={href}>{children}</Link>
  </span>
)

const components = {
  p,
  blockquote,
  ul,
  ol,
  li,
  // img,
  code,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  hr,
}

// TODO: type safe serializer
interface PostMetadata {
  date: string
  tags: string[]
  title: string
  description?: string
}

const BlogLayout: FC<{ metadata: PostMetadata }> = ({ children, metadata }) => (
  <Layout header={<Header {...metadata} subhead="Blog" />}>
    {/* <article className="max-w-lg  _max-w-xl  _md:text-lg mx-auto text-base text-gray-800 leading-relaxed"> */}
    <article className="max-w-xl lg:text-lg mx-auto text-base text-gray-800 leading-relaxed">
      {/* {children} */}
      <MDXProvider components={components}>{children}</MDXProvider>
    </article>
  </Layout>
)

export default BlogLayout
