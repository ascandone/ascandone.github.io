module Helmet = {
  @module("react-helmet") @react.component
  external make: (~children: React.element) => React.element = "default"
}

module Fontawesome = {
  @genType.import("@fortawesome/free-brands-svg-icons") @genType.as("IconDefinition")
  type iconDefinition

  // @genType.import("@fortawesome/fontawesome-svg-core") @genType.as("SizeProp")
  // type sizeProp

  @genType.import("@fortawesome/free-brands-svg-icons")
  external faInstagram: iconDefinition = "faInstagram"

  @genType.import("@fortawesome/free-brands-svg-icons")
  external faLinkedin: iconDefinition = "faLinkedin"

  @genType.import("@fortawesome/free-brands-svg-icons")
  external faGithub: iconDefinition = "faGithub"

  module FontAwesomeIcon = {
    @genType.import("@fortawesome/react-fontawesome") @react.component
    external make: (
      ~className: string=?,
      ~icon: iconDefinition,
      ~size: [#xs | #lg | #"10x"]=?,
    ) => React.element = "FontAwesomeIcon"
  }
}
