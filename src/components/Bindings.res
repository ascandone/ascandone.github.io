module Gatsby = {
  module Link = {
    @module("gatsby") @react.component
    external make: (
      ~children: React.element,
      ~\"to": string,
      ~className: string=?,
    ) => React.element = "Link"
  }
}

module Helmet = {
  @module("react-helmet") @react.component
  external make: (~children: React.element) => React.element = "default"
}

module Fontawesome = {
  @genType.import("@fortawesome/free-brands-svg-icons") @genType.as("IconDefinition")
  type iconDefinition

  @genType.import("@fortawesome/free-brands-svg-icons")
  external faInstagram: iconDefinition = "faInstagram"

  @genType.import("@fortawesome/free-brands-svg-icons")
  external faLinkedin: iconDefinition = "faLinkedin"

  @genType.import("@fortawesome/free-brands-svg-icons")
  external faGithub: iconDefinition = "faGithub"

  module FontAwesomeIcon = {
    @react.component @genType.import("@fortawesome/react-fontawesome")
    external make: (
      ~className: string=?,
      ~icon: iconDefinition,
      ~size: [#xs | #lg | #"10x"]=?,
    ) => React.element = "FontAwesomeIcon"
  }
}

module Feather = {
  type t = (~color: string=?, ~size: int=?, ~className: string=?) => React.element

  module ArrowUpRight = {
    @react.component @genType.import("react-feather")
    external make: (~className: string=?) => React.element = "ArrowUpRight"
  }
}
