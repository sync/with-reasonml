import {
  Simulator_make as make,
  Simulator_t as Simulator,
  Simulator_place as place,
  Table_make as makeTable,
  Simulator_move as move,
  Simulator_turnLeft as turnLeft,
  Simulator_turnRight as turnRight,
  Simulator_report as report,
} from '../ToyRobot.gen';

describe('Simulator', () => {
  let simulator: Simulator;

  describe('place', () => {
    beforeEach(() => {
      let table = makeTable({ width: 5, length: 5 });
      simulator = make({ table });
    });

    it('places the robot onto a valid position', () => {
      simulator = place(simulator, { east: 0, north: 0, facing: 'NORTH' });
      expect(simulator.robot).toEqual({
        east: 0,
        north: 0,
        direction: 'NORTH',
      });
    });

    it('cannot place the robot onto an invalid position', () => {
      place(simulator, { east: 5, north: 5, facing: 'NORTH' });
      expect(simulator.robot).toBeUndefined();
    });

    describe('when the robot has been placed', () => {
      beforeEach(() => {
        simulator = place(simulator, { east: 0, north: 0, facing: 'NORTH' });
      });

      it('tells the robot to move', () => {
        simulator = move(simulator);
        expect(simulator.robot!.north).toEqual(1);
      });

      it('tells the robot to turn left', () => {
        simulator = turnLeft(simulator);
        expect(simulator.robot!.direction).toEqual('WEST');
      });

      it('tells the robot to turn right', () => {
        simulator = turnRight(simulator);
        expect(simulator.robot!.direction).toEqual('EAST');
      });

      it('tells the robot to report', () => {
        expect(report(simulator)).toEqual({
          east: 0,
          north: 0,
          direction: 'NORTH',
        });
      });
    });
  });
});
