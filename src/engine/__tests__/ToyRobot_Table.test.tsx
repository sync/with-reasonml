import {
  Table_make as make,
  Table_t as Table,
  Table_validLocation as validLocation,
} from '../ToyRobot.gen';

describe('Table', () => {
  let table: Table;

  describe('validLocation', () => {
    beforeEach(() => {
      table = make({ width: 5, length: 5 });
    });

    test('location (0, 0)', () => {
      expect(validLocation(table, { east: 0, north: 0 })).toBeTruthy();
    });

    test('location (4, 4)', () => {
      expect(validLocation(table, { east: 4, north: 4 })).toBeTruthy();
    });

    test('location (5, 5)', () => {
      expect(validLocation(table, { east: 0, north: 0 })).toBeTruthy();
    });

    test('location (-1, -1)', () => {
      expect(validLocation(table, { east: 0, north: 0 })).toBeTruthy();
    });
  });
});
