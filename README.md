<p align="center">
  <a href="https://github.com/davefud/spunky-ui-react#readme">
    <img alt="Spunky UI React" src="https://github.com/davefud/spunky-ui-react/raw/master/public/logo.png" height="181" width="256">
  </a>
</p>

<h2 align="center">
  Spunky UI React
</h2>

<p align="center">
  A React component development environment and style guide
</p>

<p align="center">
  <a href="https://travis-ci.org/davefud/spunky-ui-react"><img src="https://img.shields.io/travis/davefud/spunky-ui-react/master.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/spunky-ui-react"><img src="https://img.shields.io/npm/v/spunky-ui-react.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/spunky-ui-react"><img src="https://img.shields.io/npm/dm/spunky-ui-react.svg?style=flat-square"></a>
  <a href="https://github.com/davefud/spunky-ui-react/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

## About

Created from an [ejected](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) [create-react-app](https://github.com/facebook/create-react-app) as a development environment for React components and style guide. It lists the component `propTypes` including the name, type, required, default, description, and component examples with code. All of the documentation is generated directly from the component code.

## Docs

See the components in action: [Component documentation](http://davefud.github.io/spunky-ui-react/)

## Getting Started

Make sure you have at least [Node.js v6](https://nodejs.org/):

```bash
$ node -v

v6.14.3
```

### Install via Yarn

```bash
$ yarn add spunky-ui-react
```

### Install via NPM

```bash
$ npm install spunky-ui-react
```

## Notes For Development Testing, and Deployments

Follow these steps to get the project up and running:

```bash
$ git clone https://github.com/davefud/spunky-ui-react.git
$ cd spunky-ui-react/
$ npm install
$ npm run start
```

### Main Scripts

> While developing, you will rely mostly on `npm start`

> This is not the full list of scripts, run `yarn run` to see all scripts.

|script|Description|
|------------------|-----------|
|`start`|Runs the script for metadata generation and places it in watch mode and starts the app.|
|`build:lib`|Runs the unit tests and builds the production resources into the lib directory.|
|`test`|Runs unit tests using Jest and Enzyme.|
|`deploy:docs`|Bumps the package patch version, runs the build script and publishes everything from the build directory to the gh-pages branch on Github.|
|`test-coverage`|Runs the Jest code coverage that is collected and reported in the output.|

### Creating New Components

1. Create new directory for the component under `src/components`
   * Example: `src/components/Label`
2. Create the new component in that directory
   *  Example: `src/components/Label/Label.js`
3. Create an `index.js` file in the same directory
   * Example: `src/components/Label/index.js`
   ```javascript
   export { default } from './Label';
   ```
4. Annotate above the function or React Class with `/** Add message here */`
    ```javascript
    /** Label with required field display, htmlFor, and block styling */
    function Label({htmlFor, label, required}) {
      return (
        <label style={{display: 'block'}} htmlFor={htmlFor}>
          {label} { required && <span style={{color: 'red'}}> *</span> }
        </label>
      )
    }
    ```
5. Annotate each propType
   ```javascript
   Label.propTypes = {
      /** HTML ID for associated input */
      htmlFor: PropTypes.string.isRequired,

      /** Label text */
      label: PropTypes.string.isRequired,

      /** Display asterisk after label if true */
      required: PropTypes.bool
   };

   Label.defaultProps = {
     required: false
   }
   ```
   > No need to annotate defaultProps these will be picked up automatically if they are defined.
6. Create an new directory for the example using the component under `src/docs/examples`
   * Example: `src/docs/examples/Label`
7. Create one or more examples using the component and annotate the function
   * Example: `src/docs/examples/Label/ExampleRequired.js`
   ```javascript
   /** Label for a required input */
   export default function ExampleRequired() {
      return <Label htmlFor='test'
      label='Required Label' 
      required={true} />;
   }
   ```
8. Update the `index.js` file to export the new component

   ```javascript
   export {default as PasswordInput} from './PasswordInput';
   ```

### Testing

> TODO: Our convention for writing unit tests in same directory as component or function to test, run unit tests, run test coverage, etc. Also, explain Jest snapshot testing

### Deployments

#### Deploy to npm

```bash
$ cd lib/
$ yarn publish
```

```bash
$ cd lib/
$ npm publish
```

#### Deploy to Github Pages

```bash
$ yarn deploy:docs
```

```bash
$ npm deploy:docs
```

## Issues

Here's a list of current [known issues](https://github.com/davefud/spunky-ui-react/issues).

## License

Spunky UI React is licensed under the [MIT License](https://github.com/davefud/spunky-ui-react/blob/master/LICENSE.txt)
