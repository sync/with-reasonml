// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Block from "bs-platform/lib/es6/block.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_format from "bs-platform/lib/es6/caml_format.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Caml_builtin_exceptions from "bs-platform/lib/es6/caml_builtin_exceptions.js";

function make(east, north, $staropt$star, param) {
  var direction = $staropt$star !== undefined ? $staropt$star : /* NORTH */0;
  return /* record */[
          /* east */east,
          /* north */north,
          /* direction */direction
        ];
}

function moveEast(robot) {
  return /* record */[
          /* east */robot[/* east */0] + 1 | 0,
          /* north */robot[/* north */1],
          /* direction */robot[/* direction */2]
        ];
}

function moveWest(robot) {
  return /* record */[
          /* east */robot[/* east */0] - 1 | 0,
          /* north */robot[/* north */1],
          /* direction */robot[/* direction */2]
        ];
}

function moveNorth(robot) {
  return /* record */[
          /* east */robot[/* east */0],
          /* north */robot[/* north */1] + 1 | 0,
          /* direction */robot[/* direction */2]
        ];
}

function moveSouth(robot) {
  return /* record */[
          /* east */robot[/* east */0],
          /* north */robot[/* north */1] - 1 | 0,
          /* direction */robot[/* direction */2]
        ];
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

function nextMove(robot, numberOfSpaces) {
  var match = robot[/* direction */2];
  switch (match) {
    case 0 : 
        return /* tuple */[
                robot[/* east */0],
                robot[/* north */1] + numberOfSpaces | 0
              ];
    case 1 : 
        return /* tuple */[
                robot[/* east */0],
                robot[/* north */1] - numberOfSpaces | 0
              ];
    case 2 : 
        return /* tuple */[
                robot[/* east */0] + numberOfSpaces | 0,
                robot[/* north */1]
              ];
    case 3 : 
        return /* tuple */[
                robot[/* east */0] - numberOfSpaces | 0,
                robot[/* north */1]
              ];
    
  }
}

function turnLeft(robot) {
  var match = robot[/* direction */2];
  var newDirection;
  switch (match) {
    case 0 : 
        newDirection = /* WEST */3;
        break;
    case 1 : 
        newDirection = /* EAST */2;
        break;
    case 2 : 
        newDirection = /* NORTH */0;
        break;
    case 3 : 
        newDirection = /* SOUTH */1;
        break;
    
  }
  return /* record */[
          /* east */robot[/* east */0],
          /* north */robot[/* north */1],
          /* direction */newDirection
        ];
}

function turnRight(robot) {
  var match = robot[/* direction */2];
  var newDirection;
  switch (match) {
    case 0 : 
        newDirection = /* EAST */2;
        break;
    case 1 : 
        newDirection = /* WEST */3;
        break;
    case 2 : 
        newDirection = /* SOUTH */1;
        break;
    case 3 : 
        newDirection = /* NORTH */0;
        break;
    
  }
  return /* record */[
          /* east */robot[/* east */0],
          /* north */robot[/* north */1],
          /* direction */newDirection
        ];
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
      throw Caml_builtin_exceptions.not_found;
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

function make$1(width, length, $staropt$star, param) {
  var obstacles = $staropt$star !== undefined ? $staropt$star : /* array */[
      /* tuple */[
        0,
        2
      ],
      /* tuple */[
        3,
        4
      ]
    ];
  return /* record */[
          /* width */width,
          /* length */length,
          /* obstacles */obstacles
        ];
}

function validLocation(table, east, north) {
  var foundObstacle = Belt_Array.getBy(table[/* obstacles */2], (function (x) {
          if (east === x[0]) {
            return north === x[1];
          } else {
            return false;
          }
        }));
  if (foundObstacle !== undefined || !(east >= 0 && east < table[/* width */0] && north >= 0)) {
    return false;
  } else {
    return north < table[/* length */1];
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
    return /* record */[
            /* table */simulator[/* table */0],
            /* robot */newRobot
          ];
  } else {
    return simulator;
  }
}

function move$1(simulator, numberOfSpaces) {
  var newRobot = Belt_Option.map(simulator[/* robot */1], (function (robot) {
          var match = nextMove(robot, numberOfSpaces);
          if (validLocation(simulator[/* table */0], match[0], match[1])) {
            return Belt_Array.reduce(Belt_Array.makeBy(numberOfSpaces, (function (i) {
                              return i;
                            })), robot, (function (current, param) {
                          return move(current);
                        }));
          } else {
            return robot;
          }
        }));
  return /* record */[
          /* table */simulator[/* table */0],
          /* robot */newRobot
        ];
}

function turnLeft$1(simulator) {
  var newRobot = Belt_Option.map(simulator[/* robot */1], turnLeft);
  return /* record */[
          /* table */simulator[/* table */0],
          /* robot */newRobot
        ];
}

function turnRight$1(simulator) {
  var newRobot = Belt_Option.map(simulator[/* robot */1], turnRight);
  return /* record */[
          /* table */simulator[/* table */0],
          /* robot */newRobot
        ];
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

function asPlace(string) {
  return Belt_Option.map(Caml_option.null_to_opt(string.match((/PLACE (\d+),(\d+),(EAST|WEST|NORTH|SOUTH)/))), (function (matches) {
                return /* PLACE */Block.__(0, [
                          Caml_format.caml_int_of_string(Caml_array.caml_array_get(matches, 1)),
                          Caml_format.caml_int_of_string(Caml_array.caml_array_get(matches, 2)),
                          directionOfString(Caml_array.caml_array_get(matches, 3))
                        ]);
              }));
}

function $$process(command) {
  var exit = 0;
  var val;
  var val$1;
  try {
    val = command;
    val$1 = asPlace(command);
    exit = 1;
  }
  catch (exn){
    return /* INVALID */Block.__(2, [command]);
  }
  if (exit === 1) {
    switch (val) {
      case "LEFT" : 
          return /* LEFT */0;
      case "MOVE" : 
          return /* MOVE */Block.__(1, [1]);
      case "REPORT" : 
          return /* REPORT */2;
      case "RIGHT" : 
          return /* RIGHT */1;
      default:
        if (val$1 !== undefined) {
          return val$1;
        } else {
          return /* INVALID */Block.__(2, [command]);
        }
    }
  }
  
}

var Command = /* module */[
  /* asPlace */asPlace,
  /* process */$$process
];

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
  var report$2 = /* record */[/* contents */undefined];
  Belt_Array.reduce(commands, simulator, (function (current, command) {
          if (typeof command === "number") {
            switch (command) {
              case 0 : 
                  return turnLeft$1(current);
              case 1 : 
                  return turnRight$1(current);
              case 2 : 
                  report$2[0] = report$1(current);
                  return current;
              
            }
          } else {
            switch (command.tag | 0) {
              case 0 : 
                  return place(current, command[0], command[1], command[2]);
              case 1 : 
                  return move$1(current, command[0]);
              case 2 : 
                  return current;
              
            }
          }
        }));
  return report$2[0];
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
