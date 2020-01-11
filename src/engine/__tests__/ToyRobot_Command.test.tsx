import { Command_run as run } from '../ToyRobot.gen';

describe('Command', () => {
  describe('run', () => {
    test('MOVE', () => {
      expect(run('MOVE')).toEqual({ tag: 'MOVE', value: 1 });
    });

    test('LEFT', () => {
      expect(run('LEFT')).toEqual('LEFT');
    });

    test('RIGHT', () => {
      expect(run('RIGHT')).toEqual('RIGHT');
    });

    test('REPORT', () => {
      expect(run('REPORT')).toEqual('REPORT');
    });

    test('PLACE 1,2,NORTH', () => {
      expect(run('PLACE 1,2,NORTH')).toEqual({
        tag: 'PLACE',
        value: [1, 2, 'NORTH'],
      });
    });

    test('PLACE 1,A,NORTH', () => {
      expect(run('PLACE 1,A,NORTH')).toEqual({
        tag: 'INVALID',
        value: 'PLACE 1,A,NORTH',
      });
    });

    test('PLACE 1,2,SOME', () => {
      expect(run('PLACE 1,2,SOME')).toEqual({
        tag: 'INVALID',
        value: 'PLACE 1,2,SOME',
      });
    });

    test('SOMETHING', () => {
      expect(run('SOMETHING')).toEqual({
        tag: 'INVALID',
        value: 'SOMETHING',
      });
    });
  });
});
