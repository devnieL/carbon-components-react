function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { iconFilter } from 'carbon-icons';
import Toolbar, { ToolbarItem, ToolbarTitle, ToolbarOption, ToolbarDivider } from '../Toolbar';
import OverflowMenu from '../OverflowMenu';
import OverflowMenuItem from '../OverflowMenuItem';
import Checkbox from '../Checkbox';
import RadioButton from '../RadioButton';
var toolbarProps = {
  className: 'some-class'
};
var checkboxEvents = {
  className: 'some-class',
  onChange: action('onChange')
};
storiesOf('Toolbar', module).add('Default', withInfo({
  text: "\n      Toolbar stuff\n    "
})(function () {
  return React.createElement(Toolbar, _extends({}, toolbarProps, {
    className: "some-class"
  }), React.createElement(ToolbarItem, {
    type: "search",
    placeHolderText: "Search"
  }), React.createElement(ToolbarItem, null, React.createElement(OverflowMenu, {
    icon: iconFilter,
    floatingMenu: true
  }, React.createElement(ToolbarTitle, {
    title: "FILTER BY"
  }), React.createElement(ToolbarOption, null, React.createElement(Checkbox, _extends({}, checkboxEvents, {
    id: "opt-1",
    labelText: "Filter option 1"
  }))), React.createElement(ToolbarOption, null, React.createElement(Checkbox, _extends({}, checkboxEvents, {
    id: "opt-2",
    labelText: "Filter option 2"
  }))), React.createElement(ToolbarOption, null, React.createElement(Checkbox, _extends({}, checkboxEvents, {
    id: "opt-3",
    labelText: "Filter option 3"
  }))))), React.createElement(ToolbarItem, null, React.createElement(OverflowMenu, {
    floatingMenu: true
  }, React.createElement(OverflowMenuItem, {
    itemText: "Refresh table"
  }), React.createElement(ToolbarDivider, null), React.createElement(ToolbarTitle, {
    title: "ROW HEIGHT"
  }), React.createElement(ToolbarOption, null, React.createElement(RadioButton, {
    value: "short",
    id: "radio-1",
    name: "toolbar-radio",
    labelText: "Short"
  })), React.createElement(ToolbarOption, null, React.createElement(RadioButton, {
    value: "tall",
    id: "radio-2",
    name: "toolbar-radio",
    labelText: "Tall"
  })))));
}));