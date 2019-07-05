// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Cn from "re-classnames/src/Cn.bs.js";
import * as React from "react";
import * as ToolbarCss from "./Toolbar.css";

var css = ToolbarCss;

function Toolbar(Props) {
  var className = Props.className;
  var match = Props.result;
  var result = match !== undefined ? match : "";
  var className$1 = Cn.make(/* :: */[
        css.toolbar,
        /* :: */[
          Cn.unpack(className),
          /* [] */0
        ]
      ]);
  return React.createElement("div", {
              className: className$1
            }, React.createElement("span", undefined, "Output: ", React.createElement("b", undefined, result)));
}

var make = Toolbar;

var $$default = Toolbar;

export {
  css ,
  make ,
  $$default ,
  $$default as default,
  
}
/* css Not a pure module */
