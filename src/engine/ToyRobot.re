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
  let moveEast = engine => {
    engine.east = engine.east + 1;
    engine;
  };

  [@genType]
  let moveWest = engine => {
    engine.east = engine.east - 1;
    engine;
  };

  [@genType]
  let moveNorth = engine => {
    engine.north = engine.north + 1;
    engine;
  };

  [@genType]
  let moveSouth = engine => {
    engine.north = engine.north - 1;
    engine;
  };

  [@gentype]
  let move = engine => {
    switch (engine.direction) {
    | NORTH => moveNorth(engine)
    | SOUTH => moveSouth(engine)
    | EAST => moveEast(engine)
    | WEST => moveWest(engine)
    };
  };
};
