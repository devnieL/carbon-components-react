"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _NumberInput = _interopRequireDefault(require("../NumberInput"));

var _NumberInput2 = _interopRequireDefault(require("../NumberInput/NumberInput.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = function props() {
  return {
    className: 'some-class',
    id: 'tj-input',
    label: (0, _addonKnobs.text)('Label (label)', 'Number Input label'),
    min: (0, _addonKnobs.number)('Minimum value (min)', 0),
    max: (0, _addonKnobs.number)('Maximum value (max)', 100),
    value: (0, _addonKnobs.number)('Value (value)', 50),
    step: (0, _addonKnobs.number)('Step of up/down arrow (step)', 10),
    disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
    invalid: (0, _addonKnobs.boolean)('Show form validation UI (invalid)', false),
    invalidText: (0, _addonKnobs.text)('Form validation UI content (invalidText)', 'Number is not valid'),
    helperText: (0, _addonKnobs.text)('Helper text (helperText)', 'Optional helper text.'),
    light: (0, _addonKnobs.boolean)('Light variant (light)', false),
    onChange: (0, _addonActions.action)('onChange'),
    onClick: (0, _addonActions.action)('onClick'),
    allowEmpty: (0, _addonKnobs.boolean)('Allow empty value (allowEmpty)', false)
  };
};

(0, _react2.storiesOf)('NumberInput', module).addDecorator(_addonKnobs.withKnobs).add('Default', (0, _addonInfo.withInfo)({
  text: "\n        Number inputs are similar to text fields, but contain controls used to increase or decrease an incremental value.\n        The Number Input component can be passed a starting value, a min, a max, and the step.\n      "
})(function () {
  return _react.default.createElement(_NumberInput.default, props());
})).add('skeleton', (0, _addonInfo.withInfo)({
  text: "\n        Placeholder skeleton state to use when content is loading.\n      "
})(function () {
  return _react.default.createElement(_NumberInput2.default, null);
}));