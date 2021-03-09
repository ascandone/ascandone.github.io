%%raw(`import './highlight.css'`)
%%raw(`import './prose.css'`)

type metadata = {
  title: string,
  date: string,
  tags: array<string>,
}

module Decode = {
  open Json.Decode

  let metadata = js => {
    title: js |> field("title", string),
    date: js |> field("date", string),
    tags: js |> withDefault([], field("tags", array(string))),
  }
}

@react.component
let make = (~children, ~metadata) => {
  let metadata = Decode.metadata(metadata)
  let header =
    <LayoutArticleHeader
      title=metadata.title subhead="Blog" date=metadata.date tags=metadata.tags
    />

  <Layout header>
    <article className="max-w-2xl text-lg mx-auto text-gray-800 leading-relaxed prose">
      <div> children </div>
    </article>
  </Layout>
}
