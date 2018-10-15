"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _ProgressIndicator = require("../ProgressIndicator");

var _ProgressIndicator2 = _interopRequireDefault(require("../ProgressIndicator/ProgressIndicator.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Progress Indicator', module).addDecorator(_addonKnobs.withKnobs).add('Default', (0, _addonInfo.withInfo)({
  text: "\n        For React usage, ProgressIndicator holds the currentIndex state to indicate which ProgerssStep is the current step. The ProgressIndicator component should always be used with ProgressStep components as its children. Changing currentIndex prop will automatically set the ProgressStep components props (complete, incomplete, current).\n        For general usage, Progress Indicators display steps in a process. It should indicate when steps have been complete, the active step,\n        and the steps to come.\n      "
})(function () {
  return _react.default.createElement(_ProgressIndicator.ProgressIndicator, {
    currentIndex: (0, _addonKnobs.number)('Current progress (currentIndex)', 3)
  }, _react.default.createElement(_ProgressIndicator.ProgressStep, {
    label: "First step",
    description: "Step 1: Getting Started with Node.js"
  }), _react.default.createElement(_ProgressIndicator.ProgressStep, {
    label: "Second step",
    description: "Step 2: Getting Started with Node.js"
  }), _react.default.createElement(_ProgressIndicator.ProgressStep, {
    label: "Third step",
    description: "Step 3: Getting Started with Node.js"
  }), _react.default.createElement(_ProgressIndicator.ProgressStep, {
    label: "Fourth step",
    description: "Step 4: Getting Started with Node.js"
  }), _react.default.createElement(_ProgressIndicator.ProgressStep, {
    label: "Fifth step",
    description: "Step 5: Getting Started with Node.js"
  }));
})).add('skeleton', (0, _addonInfo.withInfo)({
  text: "\n        Placeholder skeleton state to use when content is loading.\n    "
})(function () {
  return _react.default.createElement(_ProgressIndicator2.default, null);
}));