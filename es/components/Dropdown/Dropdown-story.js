function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import Dropdown from '../Dropdown';
import DropdownItem from '../DropdownItem';
var values = {
  none: 'None ()',
  option1: 'Option 1 (option1)',
  option2: 'Option 2 (option2)',
  option3: 'Option 3 (option3)',
  option4: 'Option 4 (option4)',
  option5: 'Option 5 (option5)'
};
var texts = {
  none: 'None ()',
  'Option 1': 'Option 1',
  'Option 2': 'Option 2',
  'Option 3': 'Option 3',
  'Option 4': 'Option 4',
  'Option 5': 'Option 5'
};
var props = {
  dropdown: function dropdown() {
    var value = select('Selected value (value in <Dropdown>)', values, '');
    var selectedText = select('Selected text (selectedText in <Dropdown>)', texts, '');
    return {
      className: 'some-class',
      defaultText: text('The initial trigger text (defaultText in <Dropdown>)', 'Dropdown label'),
      value: value === 'none' ? '' : value,
      selectedText: selectedText === 'none' ? '' : selectedText,
      light: boolean('Light variant (light in <Dropdown>)', false),
      disabled: boolean('Disabled (disabled in <Dropdown>)', false),
      open: boolean('Open dropdown (open in <Dropdown>)', false),
      tabIndex: number('Tab index (tabIndex in <Dropdown>)', -1),
      ariaLabel: text('Dropdown menu label (ariaLabel in <Dropdown>)', 'dropdown menu label'),
      iconDescription: text('Trigger icon description (iconDescription in <Dropdown>)', ''),
      onChange: action('onChange'),
      onOpen: action('onOpen'),
      onClose: action('onClose')
    };
  },
  dropdownItem: function dropdownItem() {
    return {
      href: text('Link (href in <DropdownItem>)', '')
    };
  }
};
storiesOf('Dropdown', module).addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    style: {
      minWidth: '20em'
    }
  }, story());
}).add('Default', withInfo({
  text: "\n        The Dropdown component is used for navigating or filtering existing content.\n        Create Dropdown Item components for each option in the dropdown menu.\n      "
})(function () {
  var dropdownItemProps = props.dropdownItem();
  return React.createElement(Dropdown, props.dropdown(), React.createElement(DropdownItem, _extends({
    itemText: "Option 1",
    value: "option1"
  }, dropdownItemProps)), React.createElement(DropdownItem, _extends({
    itemText: "Option 2",
    value: "option2"
  }, dropdownItemProps)), React.createElement(DropdownItem, _extends({
    itemText: "Option 3",
    value: "option3"
  }, dropdownItemProps)), React.createElement(DropdownItem, _extends({
    itemText: "Option 4",
    value: "option4"
  }, dropdownItemProps)), React.createElement(DropdownItem, _extends({
    itemText: "Option 5",
    value: "option5"
  }, dropdownItemProps)));
}));