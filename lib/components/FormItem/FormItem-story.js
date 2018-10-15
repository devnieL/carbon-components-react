"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _FormItem = _interopRequireDefault(require("./FormItem"));

var _NumberInput = _interopRequireDefault(require("../NumberInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('FormItem', module).add('Default', (0, _addonInfo.withInfo)({
  text: 'Form item.'
})(function () {
  return _react.default.createElement(_FormItem.default, null, _react.default.createElement(_NumberInput.default, {
    id: "number-input-1"
  }));
}));