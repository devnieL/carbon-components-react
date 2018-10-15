"use strict";

var _react = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookReadme = require("storybook-readme");

var _README = _interopRequireDefault(require("./README.md"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readmeURL = 'https://goo.gl/dq6CEK';

var props = function props() {
  return {
    short: (0, _addonKnobs.boolean)('Short variant (short)', false)
  };
};

(0, _react.storiesOf)('DataTable', module).addDecorator(_addonKnobs.withKnobs).add('default', (0, _storybookReadme.withReadme)(_README.default, (0, _addonInfo.withInfo)({
  /* eslint-disable no-useless-escape */
  text: "\n        Data Tables are used to represent a collection of resources, displaying a\n        subset of their fields in columns, or headers. The `DataTable` component\n        that we export from Carbon requires two props to be passed in: `rows`\n        and `headers`.\n        You can find more detailed information surrounding usage of this component\n        at the following url: ".concat(readmeURL, "\n      ")
  /* eslint-enable no-useless-escape */

})(function () {
  return require('./stories/default').default(props());
}))).add('with toolbar', (0, _storybookReadme.withReadme)(_README.default, (0, _addonInfo.withInfo)({
  text: "\n        DataTable with toolbar and filtering.\n\n        You can find more detailed information surrounding usage of this component\n        at the following url: ".concat(readmeURL, "\n      ")
})(require('./stories/with-toolbar').default))).add('with sorting', (0, _storybookReadme.withReadme)(_README.default, (0, _addonInfo.withInfo)({
  text: "\n        DataTable with sorting\n\n        You can find more detailed information surrounding usage of this component\n        at the following url: ".concat(readmeURL, "\n      ")
})(require('./stories/with-sorting').default))).add('with selection', (0, _storybookReadme.withReadme)(_README.default, (0, _addonInfo.withInfo)({
  text: "\n        DataTable with selection\n\n        You can find more detailed information surrounding usage of this component\n        at the following url: ".concat(readmeURL, "\n      ")
})(require('./stories/with-selection').default))).add('with expansion', (0, _storybookReadme.withReadme)(_README.default, (0, _addonInfo.withInfo)({
  text: "\n        DataTable with expansion\n\n        You can find more detailed information surrounding usage of this component\n        at the following url: ".concat(readmeURL, "\n      ")
})(require('./stories/with-expansion').default))).add('with batch actions', (0, _storybookReadme.withReadme)(_README.default, (0, _addonInfo.withInfo)({
  text: "\n        Uses <TableToolbar> alongside <TableBatchActions> and <TableBatchAction>\n        to create the toolbar and placeholder for where the batch action menu will\n        be displayed.\n\n        You can use the `getBatchActionProps` prop getter on the\n        <TableBatchActions> component to have it wire up the ghost menu for you.\n\n        Individual <TableBatchAction> components take in any kind of event handler\n        prop that you would expect to use, like `onClick`. You can use these\n        alongside the `selectedRows` property in your `render` prop function\n        to pass along this info to your batch action handler.\n\n        You can find more detailed information surrounding usage of this component\n        at the following url: ".concat(readmeURL, "\n      ")
})(require('./stories/with-batch-actions').default))).add('with dynamic content', (0, _storybookReadme.withReadme)(_README.default, (0, _addonInfo.withInfo)({
  text: "\n        Showcases DataTable behavior when rows are added to the component,\n        and when cell data changes dynamically.\n      "
})(require('./stories/with-dynamic-content').default)));