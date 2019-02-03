function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { iconAdd } from 'carbon-icons';
import OverflowMenu from '../OverflowMenu';
import OverflowMenuItem from '../OverflowMenuItem';
import Icon from '../Icon';
var directions = {
  'Bottom of the trigger button (bottom)': 'bottom',
  'Top of the trigger button (top)': 'top'
};
var props = {
  menu: function menu() {
    return {
      floatingMenu: boolean('Floating menu (floatingMenu)', false),
      direction: select('Menu direction (Only with `floatingMenu`) (direction)', directions, 'bottom'),
      ariaLabel: text('ARIA label (ariaLabel)', ''),
      iconDescription: text('Icon description (iconDescription)', ''),
      flipped: boolean('Flipped (flipped)', false),
      onClick: action('onClick'),
      onFocus: action('onFocus'),
      onKeyDown: action('onKeyDown'),
      onClose: action('onClose'),
      onOpen: action('onOpen')
    };
  },
  menuItem: function menuItem() {
    return {
      className: 'some-class',
      disabled: boolean('Disabled (disabled)', false),
      requireTitle: boolean('Use hover over text for menu item (requireTitle)', false),
      onClick: action('onClick')
    };
  }
};
storiesOf('OverflowMenu', module).addDecorator(withKnobs).add('basic', function () {
  var overflowMenuItemProps = props.menuItem();
  return React.createElement(OverflowMenu, props.menu(), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 1",
    primaryFocus: true
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 2 is an example of a really long string and how we recommend handling this",
    requireTitle: true
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 3"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 4"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, "Add ", React.createElement(Icon, {
      icon: iconAdd,
      style: {
        height: '12px'
      }
    }))
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Danger option",
    hasDivider: true,
    isDelete: true
  })));
}, {
  info: {
    text: "\n            Overflow Menu is used when additional options are available to the user and there is a space constraint.\n            Create Overflow Menu Item components for each option on the menu.\n          "
  }
}).add('with links', function () {
  var overflowMenuItemProps = _objectSpread({}, props.menuItem(), {
    href: 'https://www.ibm.com'
  });

  return React.createElement(OverflowMenu, props.menu(), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 1",
    primaryFocus: true
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 2 is an example of a really long string and how we recommend handling this",
    requireTitle: true
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 3"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 4"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, "Add ", React.createElement(Icon, {
      icon: iconAdd,
      style: {
        height: '12px'
      }
    }))
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Danger option",
    hasDivider: true,
    isDelete: true
  })));
}, {
  info: {
    text: "\n            Overflow Menu is used when additional options are available to the user and there is a space constraint.\n            Create Overflow Menu Item components for each option on the menu.\n\n            When given `href` props, menu items render as <a> tags to facilitate usability.\n          "
  }
}).add('custom trigger', function () {
  var overflowMenuItemProps = props.menuItem();
  return React.createElement(OverflowMenu, _extends({}, props.menu(), {
    style: {
      width: 'auto'
    },
    renderIcon: function renderIcon(iconProps) {
      return React.createElement("div", iconProps, "Custom trigger");
    }
  }), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 1"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 2"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 3"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 4"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Danger option",
    hasDivider: true,
    isDelete: true
  })));
}, {
  info: {
    text: "\n            Sometimes you just want to render something other than an icon\n          "
  }
});