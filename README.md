## with-reasonml (Robot Challenge)

[View the application](https://with-reasonml.now.sh/)

Ultra high performance progressive web application built with React + Reason (with hooks) and Next.js.

[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Performance)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=PWA)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Accessibility)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Best%20Practices)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=SEO)](https://github.com/ebidel/lighthouse-badge)

[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Dblechoc/with-reasonml)

## Features

- Progressive web app
  - offline
  - install prompts on supported platforms
- Server side rendering
- Next.js 9 (canary)
- Webpack 4.x
- Babel 7.x
- Now.sh 2.x
- Reason React (latest release with hooks)
- Yarn (monorepo with workspaces)

## Things to know

- A production build is deployed from a merge to master
- A staging build is deployed from a PR against master

## Setting the project up locally

First of all make sure you are using node `12.13.1` (any node 12.x would also do) and latest yarn, you can always have a look at the `engines` section of the `package.json`. Why node 8.10. We are using Now.sh to make the app available online and underneath it's using AWS lambda and you have to use Node 8.

```sh
$ yarn (install)
$ yarn dev
```

After doing this, you'll have a server with hot-reloading running at [http://localhost:3000](http://localhost:3000)

You can also start in production.

```sh
$ yarn start
```

After doing this, you'll have a server running at [http://localhost:3000](http://localhost:3000)

## Setting up your editor for reasonml

Go install this plugin from the vscode market: [here](https://marketplace.visualstudio.com/items?itemName=jaredly.reason-vscode). The plugin is called `reason-vscode` from Jared Forsyth. For more editors go see this [guide](https://reasonml.github.io/docs/en/editor-plugins).

## Run tests and friends

We don't want to use snapshots, we use also use [react-testing-library](https://github.com/testing-library/react-testing-library) to avoid having to use enzyme and to enforce best test practices.

```sh
$ yarn format
$ yarn typecheck
$ yarn lint
$ yarn test
```

or

```sh
$ yarn ci
```

## Troubleshooting

If you have any issue while running this sample app, open an issue or often just running `yarn clean && yarn build:reason` will help resolve issues.

## End to End tests

The end to end tests use the provided samples input and output. Please check `e2e/basic.test.js` for more details.

If you want to see it running locally visually (not headless) go change `packages/e2e/jest-puppeteer.config.js` and set `headless: false`.

```sh
$ yarn e2e
```

## Storybook

This is where we list all our components (comes with hot reloading)

```sh
$ yarn storybook
```

After doing this, you'll have a showcase page running at [http://localhost:6006](http://localhost:6006)

## CI

We are using [Github Actions](https://help.github.com/en/articles/about-github-actions).

## Useful Now.sh commands

```sh
# install now globally
$ npm i -g now@canary

# force a deploy
$ now

# check all running instances
$ now ls

# check logs for a given instance
$ now logs with-reasonml.now.sh --all
```

## Robot Challenge

- The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement
  that would result in the robot falling from the table must be prevented, however further valid movement commands must still
  be allowed.

Create an application that can read in commands of the following form:

```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```

- PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- MOVE will move the toy robot one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- REPORT will announce the X,Y and orientation of the robot.
- A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.
- Provide test data to exercise the application.

## Constraints:

The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
Any move that would cause the robot to fall must be ignored.

Example Input and Output:

```
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH
```

```
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST
```

```
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH
```

## The idea behind this Toy Robot solution

The Toy Robot Test has been around in Melbourne, Australia since 2007, so it's quite a familiar problem, especially around the Ruby community. I also read Ryan Bigg book, [Purchase it here](https://leanpub.com/toyrobot/), so you'll see that this example is somewhat inspired by it. The original code was written in Ruby. The game engine here is written in ReasonML and then transpiled to Typescript (javascript).

### What's good about this sample app:

- The entire Toy Robot game engine is completely immutable thanks to ReasonML.
- It shows best practices around CI and Continuous Delivery, using storybook with screenshot comparison, end to end testing, test suite running on every push, and auto Now.sh deploys. Also the end to end tests, are running on CI using Github Actions using the provided sample input and output. So it will make sure that before every deploy the contract is still valid.
- We use [renovate](https://renovatebot.com/) to automatically update dependencies.
- It also demonstrates how to mix ReasonML, React and Typescript using [gentype](https://github.com/cristianoc/genType). For example you can see the `Header` component is being used from Typescript. All the tests are also using Typescript, even if game engine and UI code is written in ReasonML.
- Lighthouse score of this app is 100%. It's following every recommended best practices.
- We are using css modules and no CSS in JS solution. There is no real reason why not using CSS in JS.
