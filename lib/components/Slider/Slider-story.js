"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _Slider = _interopRequireDefault(require("../Slider"));

var _Slider2 = _interopRequireDefault(require("../Slider/Slider.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = function props() {
  return {
    name: (0, _addonKnobs.text)('Form item name (name)', ''),
    inputType: (0, _addonKnobs.text)('The form element type (inputType)', ''),
    ariaLabelInput: (0, _addonKnobs.text)('The ARIA label for the <input> (ariaLabelInput)', ''),
    disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
    light: (0, _addonKnobs.boolean)('Light variant (light)', false),
    hideTextInput: (0, _addonKnobs.boolean)('Without text input (hideTextInput)', false),
    min: (0, _addonKnobs.number)('The minimum value (min)', 0),
    max: (0, _addonKnobs.number)('The maximum value (max)', 100),
    step: (0, _addonKnobs.number)('The step (step)', 1),
    stepMuliplier: (0, _addonKnobs.number)('The step factor for Shift+arrow keys (stepMuliplier)', 4),
    labelText: (0, _addonKnobs.text)('Label text (labelText)', 'Slider Label'),
    minLabel: (0, _addonKnobs.text)('Label for minimum value (minLabel)', ''),
    maxLabel: (0, _addonKnobs.text)('Label for maximum value (maxLabel)', ''),
    onChange: (0, _addonActions.action)('onChange')
  };
};

(0, _react2.storiesOf)('Slider', module).addDecorator(_addonKnobs.withKnobs).add('default', (0, _addonInfo.withInfo)({
  text: "\n        Sliders provide a visual indication of adjustable content, where the user can move the handle along a horizontal track to increase or decrease the value.\n      "
})(function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Slider.default, _extends({
    id: "slider",
    value: 50
  }, props())));
})).add('skeleton', (0, _addonInfo.withInfo)({
  text: "\n        Placeholder skeleton state to use when content is loading.\n      "
})(function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Slider2.default, null));
}));