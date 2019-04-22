module Robot = {
  [@gentype]
  type t = {
    mutable east: int,
    mutable north: int,
  };

  [@gentype]
  let make = (~east, ~north) => {east, north};

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
};
