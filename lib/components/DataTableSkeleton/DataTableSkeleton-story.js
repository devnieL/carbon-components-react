"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _DataTableSkeleton = _interopRequireDefault(require("../DataTableSkeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var props = function props() {
  return {
    zebra: (0, _addonKnobs.boolean)('Use zebra stripe (zebra)', false),
    compact: (0, _addonKnobs.boolean)('Compact variant (compact)', false)
  };
};

(0, _react2.storiesOf)('DataTableSkeleton', module).addDecorator(_addonKnobs.withKnobs).add('default', (0, _addonInfo.withInfo)({
  text: "\n        Skeleton states are used as a progressive loading state while the user waits for content to load.\n\n        This example shows a skeleton state for a data table.\n      "
})(function () {
  return _react.default.createElement("div", {
    style: {
      width: '800px'
    }
  }, _react.default.createElement(_DataTableSkeleton.default, props()), _react.default.createElement("br", null));
}));