[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Dblechoc/with-reasonml)

# Example app using ReasonML & ReasonReact components

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example with-reasonml with-reasonml-app
# or
yarn create next-app --example with-reasonml with-reasonml-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-reasonml
cd with-reasonml
```

Install it and run:

```bash
yarn
yarn dev
```

Build and run:

```bash
yarn build
yarn start
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## Run tests and friends

We don't want to use snapshots, we use also use `react-testing-library` to avoid having to use enzyme and to enforce best practices.

```sh
$ yarn lint
$ yarn typecheck
$ yarn test
```

or

```sh
$ yarn test-watch
```

## Storybook

This is where we list all our components (comes with hot reloading)

```sh
$ yarn storybook
```

After doing this, you'll have a showcase page running at [http://localhost:6006](http://localhost:6006)

## The idea behind the example

This example features:

- An app that mixes together JavaScript and ReasonML components and functions
