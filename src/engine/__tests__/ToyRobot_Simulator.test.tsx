import {
  Simulator_make as make,
  Simulator_t as Simulator,
  Simulator_place as place,
  Table_make as makeTable,
} from '../ToyRobot.gen';

describe('Simulator', () => {
  let simulator: Simulator;

  describe('validLocation', () => {
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
  });
});
