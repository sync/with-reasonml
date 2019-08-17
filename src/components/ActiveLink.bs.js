// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Cn from "re-classnames/src/Cn.bs.js";
import * as React from "react";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Router from "next/router";

function ActiveLink(Props) {
  var href = Props.href;
  var activeClassName = Props.activeClassName;
  var match = Props.router;
  var router = match !== undefined ? Caml_option.valFromOption(match) : Caml_option.nullable_to_opt(Router.useRouter());
  var children = Props.children;
  var handleClick = function ($$event) {
    $$event.preventDefault();
    Belt_Option.map(router, (function (router) {
            return router.push(href);
          }));
    return /* () */0;
  };
  var className = Cn.make(/* :: */[
        Cn.ifTrue(activeClassName, Belt_Option.getWithDefault(Belt_Option.map(router, (function (router) {
                        return router.pathname;
                      })), "/") === href),
        /* [] */0
      ]);
  return React.createElement("a", {
              className: className,
              href: href,
              onClick: handleClick
            }, children);
}

var make = ActiveLink;

var $$default = ActiveLink;

export {
  make ,
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */
