"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _InlineLoading = _interopRequireDefault(require("../InlineLoading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = function props() {
  return {
    success: (0, _addonKnobs.boolean)('Loading successful state (success)', false),
    description: (0, _addonKnobs.text)('Loading progress description (description)', 'Loading data...'),
    successDelay: (0, _addonKnobs.number)('The duration for successful state before `onSuccess` fires (successDelay)', 1500),
    onSuccess: (0, _addonActions.action)('onSuccess')
  };
};

(0, _react2.storiesOf)('InlineLoading', module).addDecorator(_addonKnobs.withKnobs).add('Inline loading', (0, _addonInfo.withInfo)({
  text: "\n        Inline Loading spinners are used when create, updating, or deleting an item.\n        They help notify users that their change is underway. Inline Loading has three states, LOADING, SUCCESS.\n      "
})(function () {
  return _react.default.createElement("div", null, _react.default.createElement(_InlineLoading.default, props()));
}));