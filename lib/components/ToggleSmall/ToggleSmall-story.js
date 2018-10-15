"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _ToggleSmall = _interopRequireDefault(require("../ToggleSmall"));

var _ToggleSmall2 = _interopRequireDefault(require("../ToggleSmall/ToggleSmall.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var toggleProps = function toggleProps() {
  return {
    className: 'some-class',
    toggled: (0, _addonKnobs.boolean)('Toggled (toggled)', false),
    ariaLabel: (0, _addonKnobs.text)('ARIA label (ariaLabel)', 'Label Name'),
    onChange: (0, _addonActions.action)('onChange'),
    onToggle: (0, _addonActions.action)('onToggle')
  };
};

(0, _react2.storiesOf)('ToggleSmall', module).addDecorator(_addonKnobs.withKnobs).add('Default', (0, _addonInfo.withInfo)({
  text: "\n        Toggles are controls that are used to quickly switch between two possible states. The example below shows\n        an uncontrolled Toggle component. To use the Toggle component as a controlled component, set the toggled property.\n        Setting the toggled property will allow you to change the value dynamically, whereas setting the defaultToggled\n        prop will only set the value initially. Small toggles may be used when there is not enough space for a regular sized toggle. This issue is most\n        commonly found in tables.\n      "
})(function () {
  return _react.default.createElement(_ToggleSmall.default, _extends({}, toggleProps(), {
    className: "some-class",
    id: "toggle-1"
  }));
})).add('skeleton', (0, _addonInfo.withInfo)({
  text: "\n        Placeholder skeleton state to use when content is loading.\n      "
})(function () {
  return _react.default.createElement(_ToggleSmall2.default, null);
}));