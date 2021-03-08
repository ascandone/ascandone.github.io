@react.component
let make = (~to_, ~children, ~dark=false) => {
  open Bindings

  let color = if dark {
    "underline-gradient-dark"
  } else {
    "underline-gradient"
  }

  <Gatsby.Link \"to"=to_ className={`transition-all duration-200 ${color}`}> children </Gatsby.Link>
}
