/* eslint-env jasmine, jest */

global.__DEV__ = true;

// date
const constantDate = new Date(1506747294096);

global.RealDate = Date;

global.FakeDate = class extends Date {
  constructor() {
    super();
    return constantDate;
  }
};

global.Date = global.FakeDate;
