// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Gatsby from "gatsby";

function Link(Props) {
  var to_ = Props.to_;
  var children = Props.children;
  var darkOpt = Props.dark;
  var dark = darkOpt !== undefined ? darkOpt : false;
  var color = dark ? "underline-gradient-dark" : "underline-gradient";
  return React.createElement(Gatsby.Link, {
              children: children,
              to: to_,
              className: "transition-all duration-200 " + color
            });
}

var make = Link;

export {
  make ,
  
}
/* react Not a pure module */
