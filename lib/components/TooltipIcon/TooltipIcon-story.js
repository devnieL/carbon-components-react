"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _iconsReact = require("@carbon/icons-react");

var _addonKnobs = require("@storybook/addon-knobs");

var _TooltipIcon = _interopRequireDefault(require("../TooltipIcon"));

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var directions = {
  'Bottom (bottom)': 'bottom',
  'Top (top)': 'top'
};

var props = function props() {
  return {
    direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
    tooltipText: (0, _addonKnobs.text)('Tooltip content (tooltipText)', 'Filter')
  };
};

(0, _react2.storiesOf)('TooltipIcon', module).addDecorator(_addonKnobs.withKnobs).add('default', function () {
  return _react.default.createElement(_TooltipIcon.default, props(), _FeatureFlags.componentsX ? _react.default.createElement(_iconsReact.Filter16, null) : _react.default.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12"
  }, _react.default.createElement("g", {
    fillRule: "nonzero"
  }, _react.default.createElement("path", {
    d: "M8.05 2a2.5 2.5 0 0 1 4.9 0H16v1h-3.05a2.5 2.5 0 0 1-4.9 0H0V2h8.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM3.05 9a2.5 2.5 0 0 1 4.9 0H16v1H7.95a2.5 2.5 0 0 1-4.9 0H0V9h3.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
  }))));
}, {
  info: {
    text: "\n            Tooltip Icon\n          "
  }
});