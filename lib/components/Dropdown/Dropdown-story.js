"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _DropdownItem = _interopRequireDefault(require("../DropdownItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var values = {
  'None ()': 'none',
  'Option 1 (option1)': 'option1',
  'Option 2 (option2)': 'option2',
  'Option 3 (option3)': 'option3',
  'Option 4 (option4)': 'option4',
  'Option 5 (option5)': 'option5'
};
var texts = {
  'None ()': 'none',
  'Option 1': 'Option 1',
  'Option 2': 'Option 2',
  'Option 3': 'Option 3',
  'Option 4': 'Option 4',
  'Option 5': 'Option 5'
};
var props = {
  dropdown: function dropdown() {
    var value = (0, _addonKnobs.select)('Selected value (value in <Dropdown>)', values, '');
    var selectedText = (0, _addonKnobs.select)('Selected text (selectedText in <Dropdown>)', texts, '');
    return {
      className: 'some-class',
      defaultText: (0, _addonKnobs.text)('The initial trigger text (defaultText in <Dropdown>)', 'Dropdown label'),
      value: value === 'none' ? '' : value,
      selectedText: selectedText === 'none' ? '' : selectedText,
      light: (0, _addonKnobs.boolean)('Light variant (light in <Dropdown>)', false),
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled in <Dropdown>)', false),
      open: (0, _addonKnobs.boolean)('Open dropdown (open in <Dropdown>)', false),
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex in <Dropdown>)', -1),
      ariaLabel: (0, _addonKnobs.text)('Dropdown menu label (ariaLabel in <Dropdown>)', 'dropdown menu label'),
      iconDescription: (0, _addonKnobs.text)('Trigger icon description (iconDescription in <Dropdown>)', ''),
      onChange: (0, _addonActions.action)('onChange'),
      onOpen: (0, _addonActions.action)('onOpen'),
      onClose: (0, _addonActions.action)('onClose')
    };
  },
  dropdownItem: function dropdownItem() {
    return {
      href: (0, _addonKnobs.text)('Link (href in <DropdownItem>)', '')
    };
  }
};
(0, _react2.storiesOf)('Dropdown', module).addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react.default.createElement("div", {
    style: {
      minWidth: '20em'
    }
  }, story());
}).add('Default', function () {
  var dropdownItemProps = props.dropdownItem();
  return _react.default.createElement(_Dropdown.default, props.dropdown(), _react.default.createElement(_DropdownItem.default, _extends({
    itemText: "Option 1",
    value: "option1"
  }, dropdownItemProps)), _react.default.createElement(_DropdownItem.default, _extends({
    itemText: "Option 2",
    value: "option2"
  }, dropdownItemProps)), _react.default.createElement(_DropdownItem.default, _extends({
    itemText: "Option 3",
    value: "option3"
  }, dropdownItemProps)), _react.default.createElement(_DropdownItem.default, _extends({
    itemText: "Option 4",
    value: "option4"
  }, dropdownItemProps)), _react.default.createElement(_DropdownItem.default, _extends({
    itemText: "Option 5",
    value: "option5"
  }, dropdownItemProps)));
}, {
  info: {
    text: "\n            The Dropdown component is used for navigating or filtering existing content.\n            Create Dropdown Item components for each option in the dropdown menu.\n          "
  }
});