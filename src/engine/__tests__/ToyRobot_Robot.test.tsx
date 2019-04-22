import {
  Robot_make as make,
  Robot_t as ToyRobot,
  Robot_moveEast as moveEast,
  Robot_moveWest as moveWest,
  Robot_moveNorth as moveNorth,
  Robot_moveSouth as moveSouth,
} from '../ToyRobot.gen';

describe('Robot', () => {
  let robot: ToyRobot;

  beforeEach(() => {
    robot = make({ east: 0, north: 0 });
  });

  it('moves 3 spaces east', () => {
    Array.from({ length: 3 }).forEach(() => {
      robot = moveEast(robot);
    });

    expect(robot.east).toEqual(3);
  });

  it('moves 4 spaces east', () => {
    Array.from({ length: 4 }).forEach(() => {
      robot = moveEast(robot);
    });

    expect(robot.east).toEqual(4);
  });

  it('moves 3 spaces west', () => {
    Array.from({ length: 3 }).forEach(() => {
      robot = moveWest(robot);
    });

    expect(robot.east).toEqual(-3);
  });

  it('moves 4 spaces west', () => {
    Array.from({ length: 4 }).forEach(() => {
      robot = moveWest(robot);
    });

    expect(robot.east).toEqual(-4);
  });

  it('moves 3 spaces north', () => {
    Array.from({ length: 3 }).forEach(() => {
      robot = moveNorth(robot);
    });

    expect(robot.north).toEqual(3);
  });

  it('moves 4 spaces north', () => {
    Array.from({ length: 4 }).forEach(() => {
      robot = moveNorth(robot);
    });

    expect(robot.north).toEqual(4);
  });

  it('moves 3 spaces south', () => {
    Array.from({ length: 3 }).forEach(() => {
      robot = moveSouth(robot);
    });

    expect(robot.north).toEqual(-3);
  });

  it('moves 4 spaces south', () => {
    Array.from({ length: 4 }).forEach(() => {
      robot = moveSouth(robot);
    });

    expect(robot.north).toEqual(-4);
  });
});
