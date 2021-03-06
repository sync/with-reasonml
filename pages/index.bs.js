// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Toolbar from "../src/components/Toolbar.bs.js";
import * as ToyRobot from "../src/engine/ToyRobot.bs.js";
import * as CommandsArea from "../src/components/CommandsArea.bs.js";

function Index(Props) {
  var table = ToyRobot.Table.make(5, 5);
  var simulator = ToyRobot.Simulator.make(table);
  var match = React.useState((function () {
          return "";
        }));
  var text = match[0];
  var match$1 = React.useState((function () {
          return "";
        }));
  var setResult = match$1[1];
  React.useEffect((function () {
          var commands = ToyRobot.CLI.loadCommands(text);
          var match = ToyRobot.CLI.runCommands(simulator, commands);
          var currentResult = match !== undefined ? match : "(waiting for REPORT)";
          Curry._1(setResult, (function (param) {
                  return currentResult;
                }));
          return ;
        }), /* array */[text]);
  return React.createElement("div", undefined, React.createElement(CommandsArea.make, {
                  text: text,
                  setText: match[1]
                }), React.createElement(Toolbar.make, {
                  result: match$1[0]
                }));
}

var make = Index;

var $$default = Index;

export {
  make ,
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */
