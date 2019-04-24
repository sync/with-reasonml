// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Block from "bs-platform/lib/es6/block.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_format from "bs-platform/lib/es6/caml_format.js";

function make(east, north, $staropt$star, param) {
  var direction = $staropt$star !== undefined ? $staropt$star : /* NORTH */0;
  return /* record */[
          /* east */east,
          /* north */north,
          /* direction */direction
        ];
}

function moveEast(robot) {
  robot[/* east */0] = robot[/* east */0] + 1 | 0;
  return robot;
}

function moveWest(robot) {
  robot[/* east */0] = robot[/* east */0] - 1 | 0;
  return robot;
}

function moveNorth(robot) {
  robot[/* north */1] = robot[/* north */1] + 1 | 0;
  return robot;
}

function moveSouth(robot) {
  robot[/* north */1] = robot[/* north */1] - 1 | 0;
  return robot;
}

function move(robot) {
  var match = robot[/* direction */2];
  switch (match) {
    case 0 : 
        return moveNorth(robot);
    case 1 : 
        return moveSouth(robot);
    case 2 : 
        return moveEast(robot);
    case 3 : 
        return moveWest(robot);
    
  }
}

function nextMove(robot) {
  var match = robot[/* direction */2];
  switch (match) {
    case 0 : 
        return /* tuple */[
                robot[/* east */0],
                robot[/* north */1] + 1 | 0
              ];
    case 1 : 
        return /* tuple */[
                robot[/* east */0],
                robot[/* north */1] - 1 | 0
              ];
    case 2 : 
        return /* tuple */[
                robot[/* east */0] + 1 | 0,
                robot[/* north */1]
              ];
    case 3 : 
        return /* tuple */[
                robot[/* east */0] - 1 | 0,
                robot[/* north */1]
              ];
    
  }
}

function turnLeft(robot) {
  var match = robot[/* direction */2];
  var tmp;
  switch (match) {
    case 0 : 
        tmp = /* WEST */3;
        break;
    case 1 : 
        tmp = /* EAST */2;
        break;
    case 2 : 
        tmp = /* NORTH */0;
        break;
    case 3 : 
        tmp = /* SOUTH */1;
        break;
    
  }
  robot[/* direction */2] = tmp;
  return robot;
}

function turnRight(robot) {
  var match = robot[/* direction */2];
  var tmp;
  switch (match) {
    case 0 : 
        tmp = /* EAST */2;
        break;
    case 1 : 
        tmp = /* WEST */3;
        break;
    case 2 : 
        tmp = /* SOUTH */1;
        break;
    case 3 : 
        tmp = /* NORTH */0;
        break;
    
  }
  robot[/* direction */2] = tmp;
  return robot;
}

function directionOfString(string) {
  switch (string) {
    case "EAST" : 
        return /* EAST */2;
    case "NORTH" : 
        return /* NORTH */0;
    case "SOUTH" : 
        return /* SOUTH */1;
    case "WEST" : 
        return /* WEST */3;
    default:
      return undefined;
  }
}

function stringOfDirection(direction) {
  switch (direction) {
    case 0 : 
        return "NORTH";
    case 1 : 
        return "SOUTH";
    case 2 : 
        return "EAST";
    case 3 : 
        return "WEST";
    
  }
}

function report(robot) {
  var east = String(robot[/* east */0]);
  var north = String(robot[/* north */1]);
  var direction = stringOfDirection(robot[/* direction */2]);
  return "" + (String(east) + ("," + (String(north) + ("," + (String(direction) + "")))));
}

var Robot = /* module */[
  /* make */make,
  /* moveEast */moveEast,
  /* moveWest */moveWest,
  /* moveNorth */moveNorth,
  /* moveSouth */moveSouth,
  /* move */move,
  /* nextMove */nextMove,
  /* turnLeft */turnLeft,
  /* turnRight */turnRight,
  /* directionOfString */directionOfString,
  /* stringOfDirection */stringOfDirection,
  /* report */report
];

function make$1(width, length) {
  return /* record */[
          /* width */width,
          /* length */length
        ];
}

function validLocation(table, east, north) {
  if (east >= 0 && east < table[/* width */0] && north >= 0) {
    return north < table[/* length */1];
  } else {
    return false;
  }
}

var Table = /* module */[
  /* make */make$1,
  /* validLocation */validLocation
];

function make$2(table) {
  return /* record */[
          /* table */table,
          /* robot */undefined
        ];
}

function place(simulator, east, north, facing) {
  if (validLocation(simulator[/* table */0], east, north)) {
    var newRobot = make(east, north, facing, /* () */0);
    simulator[/* robot */1] = newRobot;
  }
  return simulator;
}

function move$1(simulator) {
  var match = simulator[/* robot */1];
  if (match !== undefined) {
    var robot = match;
    var match$1 = nextMove(robot);
    if (validLocation(simulator[/* table */0], match$1[0], match$1[1])) {
      move(robot);
    }
    
  }
  return simulator;
}

function turnLeft$1(simulator) {
  Belt_Option.map(simulator[/* robot */1], turnLeft);
  return simulator;
}

function turnRight$1(simulator) {
  Belt_Option.map(simulator[/* robot */1], turnRight);
  return simulator;
}

function report$1(simulator) {
  return Belt_Option.map(simulator[/* robot */1], report);
}

var Simulator = /* module */[
  /* make */make$2,
  /* place */place,
  /* move */move$1,
  /* turnLeft */turnLeft$1,
  /* turnRight */turnRight$1,
  /* report */report$1
];

var Utilities = /* module */[];

function $$process(command) {
  var moveMatches = command.match((/MOVE/));
  var leftMatches = command.match((/LEFT/));
  var rightMatches = command.match((/RIGHT/));
  var reportMatches = command.match((/REPORT/));
  var placeMatches = command.match((/PLACE (\d+),(\d+),(\w+)/));
  if (moveMatches !== null) {
    return /* MOVE */0;
  } else if (leftMatches !== null) {
    return /* LEFT */1;
  } else if (rightMatches !== null) {
    return /* RIGHT */2;
  } else if (reportMatches !== null) {
    return /* REPORT */3;
  } else if (placeMatches !== null) {
    var match = directionOfString(Caml_array.caml_array_get(placeMatches, 3));
    if (match !== undefined) {
      return /* PLACE */Block.__(0, [
                Caml_format.caml_int_of_string(Caml_array.caml_array_get(placeMatches, 1)),
                Caml_format.caml_int_of_string(Caml_array.caml_array_get(placeMatches, 2)),
                match
              ]);
    } else {
      return /* INVALID */Block.__(1, [command]);
    }
  } else {
    return /* INVALID */Block.__(1, [command]);
  }
}

var Command = /* module */[/* process */$$process];

function splitByLines(text) {
  return Belt_Array.reduce(text.split("\n"), /* array */[], (function (current, result) {
                var stripped = result.trim();
                if (stripped === "") {
                  return current;
                } else {
                  return $$Array.append(current, /* array */[stripped]);
                }
              }));
}

function loadCommands(text) {
  return $$Array.map($$process, splitByLines(text));
}

function runCommands(simulator, commands) {
  return Belt_Array.reduce(commands, simulator, (function (current, command) {
                if (typeof command === "number") {
                  switch (command) {
                    case 0 : 
                        return move$1(current);
                    case 1 : 
                        return turnLeft$1(current);
                    case 2 : 
                        return turnRight$1(current);
                    case 3 : 
                        report$1(current);
                        return current;
                    
                  }
                } else if (command.tag) {
                  return current;
                } else {
                  return place(current, command[0], command[1], command[2]);
                }
              }));
}

var CLI = /* module */[
  /* splitByLines */splitByLines,
  /* loadCommands */loadCommands,
  /* runCommands */runCommands
];

export {
  Robot ,
  Table ,
  Simulator ,
  Utilities ,
  Command ,
  CLI ,
  
}
/* No side effect */
