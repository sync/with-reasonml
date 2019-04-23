/* TypeScript file generated by genType. */

const $$toJS311681469 = {"0": "NORTH", "1": "SOUTH", "2": "EAST", "3": "WEST"};

const $$toRE311681469 = {"NORTH": 0, "SOUTH": 1, "EAST": 2, "WEST": 3};

// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const ToyRobotBS = require('./ToyRobot.bs');

// tslint:disable-next-line:interface-over-type-literal
export type Robot_direction = "NORTH" | "SOUTH" | "EAST" | "WEST";

// tslint:disable-next-line:interface-over-type-literal
export type Robot_t = {
  east: number; 
  north: number; 
  direction: Robot_direction
};

// tslint:disable-next-line:interface-over-type-literal
export type Table_t = { readonly width: number; readonly length: number };

export const Robot_make: (_1:{
  readonly east: number; 
  readonly north: number; 
  readonly direction?: Robot_direction
}, _2:void) => Robot_t = function (Arg1: any, Arg2: any) {
  const result = Curry._4(ToyRobotBS.Robot[0], Arg1.east, Arg1.north, (Arg1.direction == null ? undefined : $$toRE311681469[Arg1.direction]), Arg2);
  return {east:result[0], north:result[1], direction:$$toJS311681469[result[2]]}
};

export const Robot_moveEast: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot[1]([Arg1.east, Arg1.north, $$toRE311681469[Arg1.direction]]);
  return {east:result[0], north:result[1], direction:$$toJS311681469[result[2]]}
};

export const Robot_moveWest: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot[2]([Arg1.east, Arg1.north, $$toRE311681469[Arg1.direction]]);
  return {east:result[0], north:result[1], direction:$$toJS311681469[result[2]]}
};

export const Robot_moveNorth: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot[3]([Arg1.east, Arg1.north, $$toRE311681469[Arg1.direction]]);
  return {east:result[0], north:result[1], direction:$$toJS311681469[result[2]]}
};

export const Robot_moveSouth: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot[4]([Arg1.east, Arg1.north, $$toRE311681469[Arg1.direction]]);
  return {east:result[0], north:result[1], direction:$$toJS311681469[result[2]]}
};

export const Robot_move: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot[5]([Arg1.east, Arg1.north, $$toRE311681469[Arg1.direction]]);
  return {east:result[0], north:result[1], direction:$$toJS311681469[result[2]]}
};

export const Robot_turnLeft: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot[6]([Arg1.east, Arg1.north, $$toRE311681469[Arg1.direction]]);
  return {east:result[0], north:result[1], direction:$$toJS311681469[result[2]]}
};

export const Robot_turnRight: (_1:Robot_t) => Robot_t = function (Arg1: any) {
  const result = ToyRobotBS.Robot[7]([Arg1.east, Arg1.north, $$toRE311681469[Arg1.direction]]);
  return {east:result[0], north:result[1], direction:$$toJS311681469[result[2]]}
};

export const Robot_report: <T1>(_1:T1) => T1 = ToyRobotBS.Robot[8];

export const Table_make: (_1:{ readonly width: number; readonly length: number }) => Table_t = function (Arg1: any) {
  const result = Curry._2(ToyRobotBS.Table[0], Arg1.width, Arg1.length);
  return {width:result[0], length:result[1]}
};

export const Table_validLocation: (_1:Table_t, _2:{ readonly east: number; readonly north: number }) => boolean = function (Arg1: any, Arg2: any) {
  const result = Curry._3(ToyRobotBS.Table[1], [Arg1.width, Arg1.length], Arg2.east, Arg2.north);
  return result
};