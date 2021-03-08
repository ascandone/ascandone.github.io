module Helmet = {
  @module("react-helmet") @react.component
  external make: (~children: React.element) => React.element = "default"
}
