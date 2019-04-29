## with-reasonml (Toy Robot Test)

[View the application](https://with-reasonml.now.sh/)

Ultra high performance progressive web application built with React + Reason (with hooks) and Next.js.

[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Dblechoc/with-reasonml)

## Features

- Progressive web app
  - offline
  - install prompts on supported platforms
- Server side rendering
- Next.js (canary)
- Webpack 4.x
- Babel 7.x
- Now.sh 2.x
- Reason React (hooks)
- Yarn (monorepo with workspaces)

## Things to know

- A production build is deployed from a merge to master
- A staging build is deployed from a PR against master

## Setting the project up locally

First of all make sure you are using node `8.10.0` (any node 8.x would also do) and latest yarn, you can always have a look at the `engines` section of the `package.json`.

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

## Run tests and friends

We don't want to use snapshots, we use also use `react-testing-library` to avoid having to use enzyme and to enforce best practices.

```sh
$ yarn typecheck
$ yarn lint
$ yarn test
```

or

```sh
$ yarn ci
```

## End to end tests

The end to end test uses the provided samples input and output. Please check `e2e/basic.test.js` for more details.

If you want to see it running locally visually (not headless) go change `packages/e2e/jest-puppeteer.config.js` and set `headless: fasle`.

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

We are using [Github Actions](https://developer.github.com/actions/). You can also run those actions locally using [Act](https://github.com/nektos/act)

```sh
$ brew install nektos/tap/act
```

### Commands

```
# List the actions
act -l

# Run the default (`push`) event:
act

# Run a specific event:
act pull-request

# Run a specific action:
act -a test

# Run in dry-run mode:
act -n

# Run in reuse mode to save state:
act -r

# Enable verbose-logging (can be used with any of the above commands)
act -v
```

### Useful now commands

```sh
# force a deploy
$ now

# check all running instances
$ now ls

# check logs for a given instance
$ now logs with-reasonml.now.sh --all
```

## The idea behind this Toy Robot solution

The Toy Robot Test has been around in Melbourne, Australia since 2007, so it's quite a familiar problem, especially around the Ruby community. I also did read Ryan Bigg book, [Purchase it here](https://leanpub.com/toyrobot/).

Here is a couple of the features worth mentioning:

- toy robot is completely immutatable thanks to reasonml
- it's got CI, Screenshot Comparison, Webpack bundle size check, e2e tests, and auto now.sh deploy
- it's e2e test suite uses the provided samples input and output.
- wanted to demonstrate how to mix reasonml, react and typescript using gentype. For example you can see the `Header` component is being used from typscript. Also all the tests are running using typescript.
- using yarn workspaces for e2e testing
- github ations for CI
