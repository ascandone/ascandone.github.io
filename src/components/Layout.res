%%raw(`import './layout.css'`)

open Bindings
open React

@react.component
let make = (~header, ~children) =>
  <div className="bg-darkest-gray antialiased">
    <Helmet>
      <meta name="theme-color" content="#121212" />
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@800&family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <title> {"Alessandro Scandone :: Dev"->string} </title>
    </Helmet>
    <div className="flex flex-col md:flex-row">
      <header className="md:flex-1 py-16 flex sm:justify-center items-center md:h-screen">
        <div className="md:max-w-md px-5 md:fixed w-full md:w-1/2 antialiased"> {header} </div>
      </header>
      <main
        className="min-w-0 rounded-t-lg md:rounded-none flex-1 py-8 bg-white md:flex min-h-screen">
        <div className="max-w-full px-5 lg:px-8 xl:px-16" > {children} </div>
      </main>
    </div>
  </div>
