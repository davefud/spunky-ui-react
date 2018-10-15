<h3 align="center">
  Spunky UI React
</h3>

<p align="center">
  Yet Another React Component Library Library
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/spunky-ui-react"><img src="https://img.shields.io/npm/v/spunky-ui-react.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/spunky-ui-react"><img src="https://img.shields.io/npm/dm/spunky-ui-react.svg?style=flat-square"></a>
  <a href="https://travis-ci.org/davefud/spunky-ui-react"><img src="https://img.shields.io/travis/davefud/spunky-ui-react/master.svg?style=flat-square"></a>
</p>


## Getting Started

Follow these steps to get the project up and running:

```bash
$ git clone https://github.com/davefud/spunky-ui-react.git
$ cd spunky-ui-react/
$ npm install
$ npm start
```

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Starts webpack and test in watch mode using the development webpack configuration file.|
|`gen:docs`|Runs the scripts/generateComponentData.js script to generate the config/componentData.js file.|
|`gen:docs-watch`|Runs the gen:docs in watch mode.|
|`build:docs`|Runs the scripts/Build.js script.|
|`test`|Runs Jest unit tests.|
|`build:lib`|Runs the unit tests and builds the production resources into the lib directory.|
|`deploy:docs`|Runs the build:docs and publishes everything from the build directory tothe gh-pages branch on Github.|
|`script:help`|Shows the available commands described here.|

## Install

```bash
$ yarn add spunky-ui-react
```

```bash
$ npm install spunky-ui-react
```

## Deployments

### Deploy to npm

```bash
$ cd lib/
$ yarn publish
```

```bash
$ cd lib/
$ npm publish
```

### Deploy to Github Pages

```bash
$ yarn deploy:docs
```

```bash
$ npm deploy:docs
```

## Issues

[Here's a list of current known issues](https://github.com/davefud/spunky-ui-react/issues).

## Docs

[Component documentation](http://davefud.github.io/spunky-ui-react/)

## About

My library of reusable React components that I have created for personal projects.
