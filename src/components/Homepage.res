open React

module Section = {
  @react.component
  let make = (~children, ~head) =>
    <article>
      <h2 className="text-black font-bold mb-2"> {head->string} </h2>
      <div className="text-gray-600"> {children} </div>
    </article>
}

module AboutSectionMd = {
  @module("./AboutSection") @react.component
  external make: unit => React.element = "default"
}

module AboutSection = {
  @react.component
  let make = () =>
    <Section head="About"> <div className="space-y-3"> <AboutSectionMd /> </div> </Section>
}

module ToolsSection = {
  type category = {label: string, children: array<string>}

  let categories = list{
    {label: "ui frameworks", children: ["react", "elm", "flutter", "lit-element"]},
    {label: "css", children: ["tailwind", "sass"]},
    {label: "design", children: ["framer", "adobe xd"]},
    {label: "langs", children: ["typescript", "reasonml", "haskell", "clojure"]},
    {label: "build tools", children: ["gatsby", "parcel", "snowpack"]},
    {label: "state management", children: ["redux"]},
    {label: "coding style", children: ["prettier"]},
  }

  @react.component
  let make = () =>
    <Section head="Selected tools and technologies">
      {categories->Belt.List.reduceWithIndex(<> </>, (acc, {label, children}, index) => <>
        acc
        {if index == 0 {
          null
        } else {
          string(` • `)
        }}
        <span className="whitespace-no-wrap">
          <span className="text-gray-400 font-light"> {string(label)} </span>
          {string(" ")}
          <span className="whitespace-normal"> {children->Js.Array2.joinWith(", ")->string} </span>
        </span>
      </>)}
    </Section>
}

module ProjectsSection = {
  @react.component
  let make = () =>
    <Section head="Projects">
      <ul>
        <li>
          <a className=CommonStyles.link href="https://studiodentisticoandreinafraioli.it">
            {"studiodentisticoandreinafraioli.it"->string}
          </a>
        </li>
        <li>
          <a className=CommonStyles.link href="https://lambda-calculus-interpreter.netlify.app">
            {`online λ-calculus interpreter`->string}
          </a>
        </li>
        <li>
          <span className="text-gray-400 font-semibold"> {"more coming soon..."->string} </span>
        </li>
      </ul>
    </Section>
}

@react.component
let make = () =>
  <Layout header={<IndexHeader />}>
    <main className="max-w-md mx-auto space-y-10 leading-relaxed">
      <AboutSection /> <ToolsSection /> <ProjectsSection />
    </main>
  </Layout>
