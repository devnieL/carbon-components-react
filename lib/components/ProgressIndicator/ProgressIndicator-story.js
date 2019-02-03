"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ProgressIndicator = require("../ProgressIndicator");

var _ProgressIndicator2 = _interopRequireDefault(require("../ProgressIndicator/ProgressIndicator.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
(0, _react2.storiesOf)('Progress Indicator', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
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
}, {
  info: {
    text: "\n            For React usage, ProgressIndicator holds the currentIndex state to indicate which ProgerssStep is the current step. The ProgressIndicator component should always be used with ProgressStep components as its children. Changing currentIndex prop will automatically set the ProgressStep components props (complete, incomplete, current).\n            For general usage, Progress Indicators display steps in a process. It should indicate when steps have been complete, the active step,\n            and the steps to come.\n          "
  }
}).add('skeleton', function () {
  return _react.default.createElement(_ProgressIndicator2.default, null);
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n        "
  }
});