module Robot = {
  [@gentype]
  type direction =
    | NORTH
    | SOUTH
    | EAST
    | WEST;

  [@gentype]
  type t = {
    east: int,
    north: int,
    direction,
  };

  [@gentype]
  let make = (~east, ~north, ~direction=NORTH, ()) => {
    east,
    north,
    direction,
  };

  [@genType]
  let moveEast = robot => {
    {...robot, east: robot.east + 1};
  };

  [@genType]
  let moveWest = robot => {
    {...robot, east: robot.east - 1};
  };

  [@genType]
  let moveNorth = robot => {
    {...robot, north: robot.north + 1};
  };

  [@genType]
  let moveSouth = robot => {
    {...robot, north: robot.north - 1};
  };

  [@gentype]
  let move = robot => {
    switch (robot.direction) {
    | NORTH => moveNorth(robot)
    | SOUTH => moveSouth(robot)
    | EAST => moveEast(robot)
    | WEST => moveWest(robot)
    };
  };

  [@gentype]
  let nextMove = (robot, numberOfSpaces) => {
    switch (robot.direction) {
    | NORTH => (robot.east, robot.north + numberOfSpaces)
    | SOUTH => (robot.east, robot.north - numberOfSpaces)
    | EAST => (robot.east + numberOfSpaces, robot.north)
    | WEST => (robot.east - numberOfSpaces, robot.north)
    };
  };

  [@gentype]
  let turnLeft = robot => {
    let newDirection =
      switch (robot.direction) {
      | NORTH => WEST
      | WEST => SOUTH
      | SOUTH => EAST
      | EAST => NORTH
      };
    {...robot, direction: newDirection};
  };

  [@gentype]
  let turnRight = robot => {
    let newDirection =
      switch (robot.direction) {
      | NORTH => EAST
      | WEST => NORTH
      | SOUTH => WEST
      | EAST => SOUTH
      };
    {...robot, direction: newDirection};
  };

  let directionOfString = string => {
    switch (string) {
    | "NORTH" => NORTH
    | "SOUTH" => SOUTH
    | "EAST" => EAST
    | "WEST" => WEST
    | _ => raise(Not_found)
    };
  };

  let stringOfDirection = direction => {
    switch (direction) {
    | NORTH => "NORTH"
    | SOUTH => "SOUTH"
    | EAST => "EAST"
    | WEST => "WEST"
    };
  };

  [@gentype]
  let report = robot => {
    let east = robot.east |> string_of_int;
    let north = robot.north |> string_of_int;
    let direction = robot.direction |> stringOfDirection;

    {j|$east,$north,$direction|j};
  };
};

module Table = {
  [@gentype]
  type t = {
    width: int,
    length: int,
  };

  [@gentype]
  let make = (~width, ~length) => {width, length};

  let obstacles = [|(0, 2), (3, 4)|];

  [@gentype]
  let validLocation = (table, ~east, ~north) => {
    let foundObstacle =
      obstacles->Belt.Array.getBy(x => {
        let (e, n) = x;
        east === e && north === n;
      });

    switch (foundObstacle) {
    | Some(_) => false
    | _ =>
      east >= 0 && east < table.width && north >= 0 && north < table.length
    };
  };
};

module Simulator = {
  [@gentype]
  type t = {
    table: Table.t,
    robot: option(Robot.t),
  };

  [@gentype]
  let make = (~table): t => {table, robot: None};

  [@gentype]
  let place = (simulator, ~east, ~north, ~facing) =>
    if (Table.validLocation(simulator.table, ~east, ~north)) {
      let newRobot = Robot.make(~east, ~north, ~direction=facing, ());
      {...simulator, robot: Some(newRobot)};
    } else {
      simulator;
    };

  [@genType]
  let move = (simulator, numberOfSpaces) => {
    let newRobot =
      simulator.robot
      ->Belt.Option.map(robot => {
          let (east, north) = Robot.nextMove(robot, numberOfSpaces);
          if (Table.validLocation(simulator.table, ~east, ~north)) {
            Belt.Array.makeBy(numberOfSpaces, i => i)
            ->Belt.Array.reduce(robot, (current, _) => Robot.move(current));
          } else {
            robot;
          };
        });
    {...simulator, robot: newRobot};
  };

  [@genType]
  let turnLeft = simulator => {
    let newRobot = simulator.robot->Belt.Option.map(Robot.turnLeft);
    {...simulator, robot: newRobot};
  };

  [@genType]
  let turnRight = simulator => {
    let newRobot = simulator.robot->Belt.Option.map(Robot.turnRight);
    {...simulator, robot: newRobot};
  };

  [@genType]
  let report = simulator => {
    simulator.robot->Belt.Option.map(Robot.report);
  };
};

module Utilities = {};

module Command = {
  [@gentype]
  type t =
    | PLACE(int, int, Robot.direction)
    | MOVE(int)
    | LEFT
    | RIGHT
    | REPORT
    | INVALID(string);

  let asPlace = string => {
    Js.String.match(
      [%re "/PLACE (\\d+),(\\d+),(EAST|WEST|NORTH|SOUTH)/"],
      string,
    )
    ->Belt.Option.map(matches =>
        PLACE(
          int_of_string(matches[1]),
          int_of_string(matches[2]),
          Robot.directionOfString(matches[3]),
        )
      );
  };

  [@genType]
  let process = (command: string) => {
    switch (command, asPlace(command)) {
    | ("MOVE", _) => MOVE(1)
    | ("LEFT", _) => LEFT
    | ("RIGHT", _) => RIGHT
    | ("REPORT", _) => REPORT
    | (_, Some(place)) => place
    | _ => INVALID(command)
    | exception _ => INVALID(command)
    };
  };
};

module CLI = {
  let splitByLines = (text: string) =>
    Js.String.split("\n", text)
    ->Belt.Array.reduce([||], (current, result) =>
        switch (Js.String.trim(result)) {
        | "" => current
        | stripped => Array.append(current, [|stripped|])
        }
      );

  [@genType]
  let loadCommands = (text: string) => {
    text |> splitByLines |> Array.map(Command.process);
  };

  [@genType]
  let runCommands = (simulator: Simulator.t, commands: array(Command.t)) => {
    let report: ref(option(string)) = ref(None);

    commands->Belt.Array.reduce(simulator, (current, command) =>
      switch (command) {
      | Command.PLACE(east, north, facing) =>
        Simulator.place(current, ~east, ~north, ~facing)
      | Command.MOVE(numberOfSpaces) =>
        Simulator.move(current, numberOfSpaces)
      | Command.LEFT => Simulator.turnLeft(current)
      | Command.RIGHT => Simulator.turnRight(current)
      | Command.REPORT =>
        report := Simulator.report(current);
        current;
      | Command.INVALID(_) => current
      }
    )
    |> ignore;

    report^;
  };
};
