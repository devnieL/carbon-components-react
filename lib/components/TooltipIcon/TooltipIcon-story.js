"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _TooltipIcon = _interopRequireDefault(require("../TooltipIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var directions = {
  bottom: 'Bottom (bottom)',
  top: 'Top (top)'
};

var props = function props() {
  return {
    direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
    tooltipText: (0, _addonKnobs.text)('Tooltip content (tooltipText)', 'Filter')
  };
};

(0, _react2.storiesOf)('TooltipIcon', module).addDecorator(_addonKnobs.withKnobs).add('default', (0, _addonInfo.withInfo)({
  text: "\n        Tooltip Icon\n      "
})(function () {
  return _react.default.createElement(_TooltipIcon.default, props(), _react.default.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12"
  }, _react.default.createElement("g", {
    fillRule: "nonzero"
  }, _react.default.createElement("path", {
    d: "M8.05 2a2.5 2.5 0 0 1 4.9 0H16v1h-3.05a2.5 2.5 0 0 1-4.9 0H0V2h8.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM3.05 9a2.5 2.5 0 0 1 4.9 0H16v1H7.95a2.5 2.5 0 0 1-4.9 0H0V9h3.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
  }))));
}));