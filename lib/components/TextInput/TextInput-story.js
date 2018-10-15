"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _TextInput2 = _interopRequireDefault(require("../TextInput/TextInput.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = {
  '': 'None',
  email: 'For email (email)',
  password: 'For password (password)'
};

var TextInputProps = function TextInputProps() {
  return {
    className: 'some-class',
    id: 'test2',
    labelText: (0, _addonKnobs.text)('Label text (labelText)', 'Text Input label'),
    type: (0, _addonKnobs.select)('Form control type (type)', types, ''),
    placeholder: (0, _addonKnobs.text)('Placeholder text (placeholder)', 'Placeholder text'),
    light: (0, _addonKnobs.boolean)('Light variant (light)', false),
    disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
    hideLabel: (0, _addonKnobs.boolean)('No label (hideLabel)', false),
    invalid: (0, _addonKnobs.boolean)('Show form validation UI (invalid)', false),
    invalidText: (0, _addonKnobs.text)('Form validation UI content (invalidText)', 'A valid value is required'),
    helperText: (0, _addonKnobs.text)('Helper text (helperText)', 'Optional helper text.'),
    onClick: (0, _addonActions.action)('onClick'),
    onChange: (0, _addonActions.action)('onChange')
  };
};

(0, _react2.storiesOf)('TextInput', module).addDecorator(_addonKnobs.withKnobs).add('Default', (0, _addonInfo.withInfo)({
  text: "\n        Text fields enable the user to interact with and input data. A single line\n        field is used when the input anticipated by the user is a single line of\n        text as opposed to a paragraph.\n        The default type is 'text' and its value can be either 'string' or 'number'.\n      "
})(function () {
  return _react.default.createElement(_TextInput.default, TextInputProps());
})).add('skeleton', (0, _addonInfo.withInfo)({
  text: "\n        Placeholder skeleton state to use when content is loading.\n        "
})(function () {
  return _react.default.createElement("div", null, _react.default.createElement(_TextInput2.default, null), _react.default.createElement("br", null), _react.default.createElement(_TextInput2.default, {
    hideLabel: true
  }));
}));