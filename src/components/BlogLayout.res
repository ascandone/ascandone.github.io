%%raw(`import './highlight.css'`)
%%raw(`import './prose.css'`)

type frontmatter = {
  title: string,
  date: string,
  tags: option<array<string>>,
}

type pageContext = {
  html: string,
  frontmatter: frontmatter,
}

@react.component
export make = (~pageContext as {html, frontmatter}) =>
  <Layout
    header={<LayoutArticleHeader
      title=frontmatter.title
      subhead="Blog"
      date=frontmatter.date
      tags={frontmatter.tags->Belt.Option.getWithDefault([])}
    />}>
    <article className="max-w-2xl text-lg mx-auto text-gray-800 leading-relaxed prose">
      <div dangerouslySetInnerHTML={{"__html": html}} />
    </article>
  </Layout>
