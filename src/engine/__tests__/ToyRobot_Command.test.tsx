import { Command_process as process } from '../ToyRobot.gen';

describe('Command', () => {
  describe('process', () => {
    test('MOVE', () => {
      expect(process('MOVE')).toEqual({ tag: 'MOVE', value: 1 });
    });

    test('LEFT', () => {
      expect(process('LEFT')).toEqual('LEFT');
    });

    test('RIGHT', () => {
      expect(process('RIGHT')).toEqual('RIGHT');
    });

    test('REPORT', () => {
      expect(process('REPORT')).toEqual('REPORT');
    });

    test('PLACE 1,2,NORTH', () => {
      expect(process('PLACE 1,2,NORTH')).toEqual({
        tag: 'PLACE',
        value: [1, 2, 'NORTH'],
      });
    });

    test('PLACE 1,A,NORTH', () => {
      expect(process('PLACE 1,A,NORTH')).toEqual({
        tag: 'INVALID',
        value: 'PLACE 1,A,NORTH',
      });
    });

    test('PLACE 1,2,SOME', () => {
      expect(process('PLACE 1,2,SOME')).toEqual({
        tag: 'INVALID',
        value: 'PLACE 1,2,SOME',
      });
    });

    test('SOMETHING', () => {
      expect(process('SOMETHING')).toEqual({
        tag: 'INVALID',
        value: 'SOMETHING',
      });
    });
  });
});
