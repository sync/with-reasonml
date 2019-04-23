module Robot = {
  [@gentype]
  type direction =
    | NORTH
    | SOUTH
    | EAST
    | WEST;

  [@gentype]
  type t = {
    mutable east: int,
    mutable north: int,
    mutable direction,
  };

  [@gentype]
  let make = (~east, ~north, ~direction=NORTH, ()) => {
    east,
    north,
    direction,
  };

  [@genType]
  let moveEast = robot => {
    robot.east = robot.east + 1;
    robot;
  };

  [@genType]
  let moveWest = robot => {
    robot.east = robot.east - 1;
    robot;
  };

  [@genType]
  let moveNorth = robot => {
    robot.north = robot.north + 1;
    robot;
  };

  [@genType]
  let moveSouth = robot => {
    robot.north = robot.north - 1;
    robot;
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
  let nextMove = robot => {
    switch (robot.direction) {
    | NORTH => [|robot.east, robot.north + 1|]
    | SOUTH => [|robot.east, robot.north - 1|]
    | EAST => [|robot.east + 1, robot.north|]
    | WEST => [|robot.east - 1, robot.north|]
    };
  };

  [@gentype]
  let turnLeft = robot => {
    robot.direction = (
      switch (robot.direction) {
      | NORTH => WEST
      | WEST => SOUTH
      | SOUTH => EAST
      | EAST => NORTH
      }
    );
    robot;
  };

  [@gentype]
  let turnRight = robot => {
    robot.direction = (
      switch (robot.direction) {
      | NORTH => EAST
      | WEST => NORTH
      | SOUTH => WEST
      | EAST => SOUTH
      }
    );
    robot;
  };

  [@gentype]
  let report = robot => robot;
};

module Table = {
  [@gentype]
  type t = {
    width: int,
    length: int,
  };

  [@gentype]
  let make = (~width, ~length) => {width, length};

  [@gentype]
  let validLocation = (table, ~east, ~north) => {
    east >= 0 && east < table.width && north >= 0 && north < table.length;
  };
};

module Simulator = {
  [@gentype]
  type t = {
    table: Table.t,
    mutable robot: option(Robot.t),
  };

  [@gentype]
  let make = (~table): t => {table, robot: None};

  [@gentype]
  let place = (simulator, ~east, ~north, ~facing) => {
    if (Table.validLocation(simulator.table, ~east, ~north)) {
      let newRobot = Robot.make(~east, ~north, ~direction=facing, ());
      simulator.robot = Some(newRobot);
    };
    simulator;
  };

  [@genType]
  let move = simulator => {
    switch (simulator.robot) {
    | Some(robot) =>
      let next = Robot.nextMove(robot);
      if (Table.validLocation(simulator.table, ~east=next[0], ~north=next[1])) {
        Robot.move(robot) |> ignore;
      };
    | None => ()
    };
    simulator;
  };

  [@genType]
  let turnLeft = simulator => {
    simulator.robot->Belt.Option.map(Robot.turnLeft) |> ignore;
    simulator;
  };

  [@genType]
  let turnRight = simulator => {
    simulator.robot->Belt.Option.map(Robot.turnRight) |> ignore;
    simulator;
  };

  [@genType]
  let report = simulator => {
    simulator.robot->Belt.Option.map(Robot.report);
  };
};
