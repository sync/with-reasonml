import {
  Robot_make as make,
  Robot_t as Robot,
  Robot_moveEast as moveEast,
  Robot_moveWest as moveWest,
  Robot_moveNorth as moveNorth,
  Robot_moveSouth as moveSouth,
  Robot_move as move,
  Robot_turnLeft as turnLeft,
  Robot_turnRight as turnRight,
  Robot_report as report,
  Robot_nextMove as nextMove,
} from '../ToyRobot.gen';

describe('Robot', () => {
  let robot: Robot;

  describe('move', () => {
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

    describe('when facing north', () => {
      beforeEach(() => {
        robot = make({ east: 0, north: 0, direction: 'NORTH' });
      });

      it('moves north', () => {
        robot = move(robot);
        expect(robot.north).toEqual(1);
      });

      it('next move is to (0, 1)', () => {
        expect(nextMove(robot)).toEqual([0, 1]);
      });

      it('turns left to face west', () => {
        robot = turnLeft(robot);
        expect(robot.direction).toEqual('WEST');
      });

      it('turns right to face east', () => {
        robot = turnRight(robot);
        expect(robot.direction).toEqual('EAST');
      });
    });

    describe('when facing south', () => {
      beforeEach(() => {
        robot = make({ east: 0, north: 0, direction: 'SOUTH' });
      });

      it('moves south', () => {
        robot = move(robot);
        expect(robot.north).toEqual(-1);
      });

      it('next move is to (0, -1)', () => {
        expect(nextMove(robot)).toEqual([0, -1]);
      });

      it('turns left to face east', () => {
        robot = turnLeft(robot);
        expect(robot.direction).toEqual('EAST');
      });

      it('turns right to face west', () => {
        robot = turnRight(robot);
        expect(robot.direction).toEqual('WEST');
      });
    });

    describe('when facing east', () => {
      beforeEach(() => {
        robot = make({ east: 0, north: 0, direction: 'EAST' });
      });

      it('moves east', () => {
        robot = move(robot);
        expect(robot.east).toEqual(1);
      });

      it('next move is to (1, 0)', () => {
        expect(nextMove(robot)).toEqual([1, 0]);
      });

      it('turns left to face north', () => {
        robot = turnLeft(robot);
        expect(robot.direction).toEqual('NORTH');
      });

      it('turns right to face south', () => {
        robot = turnRight(robot);
        expect(robot.direction).toEqual('SOUTH');
      });
    });

    describe('when facing west', () => {
      beforeEach(() => {
        robot = make({ east: 0, north: 0, direction: 'WEST' });
      });

      it('moves west', () => {
        robot = move(robot);
        expect(robot.east).toEqual(-1);
      });

      it('next move is to (-1, 0)', () => {
        expect(nextMove(robot)).toEqual([-1, 0]);
      });

      it('turns left to face south', () => {
        robot = turnLeft(robot);
        expect(robot.direction).toEqual('SOUTH');
      });

      it('turns right to face north', () => {
        robot = turnRight(robot);
        expect(robot.direction).toEqual('NORTH');
      });
    });
  });

  describe('report', () => {
    beforeEach(() => {
      robot = make({ east: 5, north: 4, direction: 'EAST' });
    });

    it('provides the current location and direction of the robot', () => {
      expect(report(robot)).toEqual('5,4,EAST');
    });
  });
});
