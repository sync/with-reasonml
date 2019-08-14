import {
  CLI_loadCommands as loadCommands,
  CLI_runCommands as runCommands,
  Simulator_make as make,
  Simulator_t as Simulator,
  Table_make as makeTable,
  Simulator_place as place,
  Command_t as Command,
} from '../ToyRobot.gen';

describe('CLI', () => {
  describe('loadCommands', () => {
    it('load commands from a text', () => {
      const commandsText = `
        PLACE 1,2,EAST
        MOVE
        LEFT
        RIGHT
        REPORT
      `;
      expect(loadCommands(commandsText)).toEqual([
        {
          tag: 'PLACE',
          value: [1, 2, 'EAST'],
        },
        {
          tag: 'MOVE',
          value: 1,
        },
        'LEFT',
        'RIGHT',
        'REPORT',
      ]);
    });
  });

  describe('runCommands', () => {
    let simulator: Simulator;

    beforeEach(() => {
      const table = makeTable({ width: 5, length: 5 });
      simulator = make({ table });
      simulator = place(simulator, { east: 0, north: 0, facing: 'NORTH' });
    });

    test('place command', () => {
      const commands: Command[] = [
        {
          tag: 'PLACE',
          value: [1, 2, 'EAST'],
        },
        'REPORT',
      ];

      expect(runCommands(simulator, commands)).toEqual('1,2,EAST');
    });

    test('move command', () => {
      const commands: Command[] = [
        {
          tag: 'MOVE',
          value: 1,
        },
        'REPORT',
      ];

      expect(runCommands(simulator, commands)).toEqual('0,1,NORTH');
    });

    test('left command', () => {
      const commands: Command[] = ['LEFT', 'REPORT'];

      expect(runCommands(simulator, commands)).toEqual('0,0,WEST');
    });

    test('right command', () => {
      const commands: Command[] = ['RIGHT', 'REPORT'];

      expect(runCommands(simulator, commands)).toEqual('0,0,EAST');
    });

    test('report command', () => {
      const commands: Command[] = ['REPORT'];

      expect(runCommands(simulator, commands)).toEqual('0,0,NORTH');
    });

    test('invalid command', () => {
      const commands: Command[] = [
        {
          tag: 'INVALID',
          value: 'PLACE 1,2,SOME',
        },
        'REPORT',
      ];

      expect(runCommands(simulator, commands)).toEqual('0,0,NORTH');
    });

    test('without report', () => {
      const commands: Command[] = ['LEFT'];

      expect(runCommands(simulator, commands)).toBeUndefined();
    });
  });
});
