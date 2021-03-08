// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as CommonStyles$GatsbyStarterHelloWorld from "./CommonStyles.bs.js";

function Chip(Props) {
  var children = Props.children;
  var dark = Props.dark;
  return React.createElement("span", {
              className: "rounded p-px bg-gradient-45 " + CommonStyles$GatsbyStarterHelloWorld.gradient
            }, React.createElement("span", {
                  className: "rounded px-2 " + (
                    dark ? "bg-darkest-gray" : "bg-white"
                  )
                }, React.createElement("span", {
                      className: "text-xs font-mono antialiased leading-none " + (
                        dark ? "text-gray-200" : "text-gray-900"
                      )
                    }, children)));
}

var make = Chip;

export {
  make ,
  
}
/* react Not a pure module */
