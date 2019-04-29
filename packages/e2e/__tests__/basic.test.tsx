import config from '../jest-puppeteer.config';

const timeout = 300000;

const openPage = (pageUrl = '/') =>
  global.page.goto(`http://localhost:${config.server.port}${pageUrl}`);

describe('Basic integration', () => {
  beforeEach(async () => {
    await openPage();
  }, timeout);

  it(
    'runs the first example input',
    async () => {
      await expect(global.page).toMatch('Output:');

      const commandsText = `
        PLACE 0,0,NORTH
        MOVE
        REPORT
      `;

      await global.page.type('#__next > div > textarea', commandsText);

      await expect(global.page).toMatch('Output: 0,1,NORTH');
    },
    timeout,
  );

  it(
    'runs the second example input',
    async () => {
      await expect(global.page).toMatch('Output:');

      const commandsText = `
        PLACE 0,0,NORTH
        LEFT
        REPORT
      `;

      await global.page.type('#__next > div > textarea', commandsText);

      await expect(global.page).toMatch('Output: 0,0,WEST');
    },
    timeout,
  );

  it(
    'runs the third example input',
    async () => {
      await expect(global.page).toMatch('Output:');

      const commandsText = `
        PLACE 1,2,EAST
        MOVE
        MOVE
        LEFT
        MOVE
        REPORT
      `;

      await global.page.type('#__next > div > textarea', commandsText);

      await expect(global.page).toMatch('Output: 3,3,NORTH');
    },
    timeout,
  );
});
