open React
open Bindings

@react.component
export make = (~title, ~subhead, ~date=?, ~tags=[], ~description=?) => <>
  <div className="text-4xl font-serif font-extrabold leading-tight antialiased">
    <h5 className="text-gray-500 "> {subhead->string} </h5>
    <h2 className="text-white"> {title->string} </h2>
    <div className="mt-3" />
  </div>
  {switch date {
  | None => <div className="mt-10" />
  | Some(dateValue) =>
    <h6 className="uppercase text-sm font-light tracking-wide text-gray-300">
      {dateValue->string}
    </h6>
  }}
  <div className="mt-4" />
  {switch description {
  | None => null
  | Some(descriptionValue) => <p className="text-gray-300"> {descriptionValue->string} </p>
  }}
  <div className="flex justify-between mt-10">
    {if Belt.Array.length(tags) == 0 {
      null
    } else {
      <div className="flex flex-wrap">
        {tags
        ->Belt.Array.mapWithIndex((key, tag) =>
          <div key={Belt.Int.toString(key)} className="mr-4 mb-3">
            <Chip dark=true> {tag->string} </Chip>
          </div>
        )
        ->array}
      </div>
    }}
    <div className="mr-8" />
    <span className="text-cool-gray-300">
      <span className="flex items-center">
        <Link dark=true to_="/"> <span className="font-semibold"> {"Home"->string} </span> </Link>
        <Feather.ArrowUpRight className="h-5" />
      </span>
    </span>
  </div>
</>
