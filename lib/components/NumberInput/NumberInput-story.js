"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _NumberInput = _interopRequireDefault(require("../NumberInput"));

var _NumberInput2 = _interopRequireDefault(require("../NumberInput/NumberInput.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var props = function props() {
  return {
    className: 'some-class',
    id: 'tj-input',
    label: (0, _addonKnobs.text)('Label (label)', 'Number Input label'),
    hideLabel: (0, _addonKnobs.boolean)('No label (hideLabel)', false),
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

(0, _react2.storiesOf)('NumberInput', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return _react.default.createElement(_NumberInput.default, props());
}, {
  info: {
    text: "\n            Number inputs are similar to text fields, but contain controls used to increase or decrease an incremental value.\n            The Number Input component can be passed a starting value, a min, a max, and the step.\n          "
  }
}).add('skeleton', function () {
  return _react.default.createElement(_NumberInput2.default, null);
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n          "
  }
});