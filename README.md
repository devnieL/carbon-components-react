A fork of https://github.com/IBM/carbon-components-react with changes for:

- Tooltip
- Radio Button
- Check box

## Usage

### List of Available Components

View available React Components [here](http://react.carbondesignsystem.com). You can see usage information in several ways:

1. Clicking the blue **Show Info** icon in the top right corner of the selected component. You can see the list of available React props
2. Clicking the **STORY** tab at the bottom. This tab contains the code that shows how the component is being used
3. Clicking the **KNOBS** tab at the bottom and changing values there. Most knobs are shown as something like `Button kind (kind)`, where `kind` is the name of React prop
4. Clicking the **ACTION LOGGER** tab at the bottom and interacting with the selected component. You may see something like `onClick` which typically indicates that the event handler (React prop) with the same name is called. You can also expand the twistie to see the details of the event
5. Clicking the **README** tab at the bottom. You can see some more document for some components

### Getting Started

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install -S @devniel/carbon-components-react @devniel/carbon-components carbon-icons
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command instead:

```bash
yarn add @devniel/carbon-components-react @devniel/carbon-components carbon-icons
```

1. These components require the use of [Webpack](http://webpack.github.io/docs/tutorials/getting-started/) in your project. See our [`webpack.config.js`](/.storybook/webpack.config.js) for an example configuration.

2. Components do not import any of the styles themselves, use the scss or css from `@devniel/carbon-components` to bring in styling.

3. For older browsers (e.g. IE11), polyfills listed in [`carbon-components-react/.storybook/polyfills.js` file](./.storybook/polyfills.js) is required.

If you just want to try out `@devniel/carbon-components-react`, you can also use [CodeSandbox](https://codesandbox.io/s/github/devniel/carbon-components-react/tree/da/examples/codesandbox).

[![Edit carbon-components-react](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/devniel/carbon-components-react/tree/da/examples/codesandbox)

## Development

Please refer to the [Contribution Guidelines](./.github/CONTRIBUTING.md) before starting any work.

### Using the server

We recommend the use of [React Storybook](https://github.com/storybooks/react-storybook) for developing components.

1. (Optional) Set environment variables:

   - `true` to `CARBON_USE_EXPERIMENTAL_FEATURES` environment variable to test some of the experimental features:

     ```
     $ export CARBON_USE_EXPERIMENTAL_FEATURES=true
     ```

   - `true` to `CARBON_REACT_STORYBOOK_USE_EXTERNAL_CSS` environment variable to use external CSS, making style source link usable in DOM inspector:

     ```
     $ export CARBON_REACT_STORYBOOK_USE_EXTERNAL_CSS=true
     ```

   - `true` to `CARBON_REACT_STORYBOOK_USE_STYLE_SOURCEMAP` environment variable to use Sass source map, making style source link point to the original Sass code:

     ```
     $ export CARBON_REACT_STORYBOOK_USE_STYLE_SOURCEMAP=true
     ```

Caveats:

- `CARBON_REACT_STORYBOOK_USE_EXTERNAL_CSS=true` and `CARBON_REACT_STORYBOOK_USE_STYLE_SOURCEMAP=true` make WebPack builds slightly slower.
- With `CARBON_REACT_STORYBOOK_USE_STYLE_SOURCEMAP=true`, the source map (hitting style source link in DOM inspector) sometimes leads you to a mix-in, instead of a style rule calling the mix-in, which may get you lost.

2. Start the server:

   ```
   $ yarn storybook
   ```

3. Open browser to `http://localhost:9000/`.

4. Develop components in their respective folders (`/components` or `/internal`).

5. Write stories for your components in `/.storybook`.
