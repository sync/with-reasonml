// @ts-ignore
module.exports = {
  preset: 'jest-puppeteer',
  testPathIgnorePatterns: ['<rootDir>/src/'],
  server: {
    command: 'yarn start',
    port: 3000,
    launchTimeout: 30000,
    usedPortAction: 'kill',
  },
  launch: {
    dumpio: false,
    headless: true,
    slowMo: 250,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
};
