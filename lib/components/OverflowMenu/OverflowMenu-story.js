"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _carbonIcons = require("carbon-icons");

var _OverflowMenu = _interopRequireDefault(require("../OverflowMenu"));

var _OverflowMenuItem = _interopRequireDefault(require("../OverflowMenuItem"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var directions = {
  bottom: 'Bottom of the trigger button (bottom)',
  top: 'Top of the trigger button (top)'
};
var props = {
  menu: function menu() {
    return {
      floatingMenu: (0, _addonKnobs.boolean)('Floating menu (floatingMenu)', false),
      direction: (0, _addonKnobs.select)('Menu direction (Only with `floatingMenu`) (direction)', directions, 'bottom'),
      ariaLabel: (0, _addonKnobs.text)('ARIA label (ariaLabel)', ''),
      iconDescription: (0, _addonKnobs.text)('Icon description (iconDescription)', ''),
      onClick: (0, _addonActions.action)('onClick'),
      onFocus: (0, _addonActions.action)('onFocus'),
      onKeyDown: (0, _addonActions.action)('onKeyDown'),
      onClose: (0, _addonActions.action)('onClose'),
      onOpen: (0, _addonActions.action)('onOpen')
    };
  },
  menuItem: function menuItem() {
    return {
      className: 'some-class',
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
      requireTitle: (0, _addonKnobs.boolean)('Use hover over text for menu item (requireTitle)', false),
      onClick: (0, _addonActions.action)('onClick')
    };
  }
};
(0, _react2.storiesOf)('OverflowMenu', module).addDecorator(_addonKnobs.withKnobs).add('basic', (0, _addonInfo.withInfo)({
  text: "\n        Overflow Menu is used when additional options are available to the user and there is a space constraint.\n        Create Overflow Menu Item components for each option on the menu.\n      "
})(function () {
  var overflowMenuItemProps = props.menuItem();
  return _react.default.createElement(_OverflowMenu.default, props.menu(), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Option 1",
    primaryFocus: true
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Option 2 is an example of a really long string and how we recommend handling this",
    requireTitle: true
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Option 3"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Option 4"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: _react.default.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, "Add ", _react.default.createElement(_Icon.default, {
      icon: _carbonIcons.iconAdd,
      style: {
        height: '12px'
      }
    }))
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Danger option",
    hasDivider: true,
    isDelete: true
  })));
})).add('custom trigger', (0, _addonInfo.withInfo)({
  text: "\n        Sometimes you just want to render something other than an icon\n      "
})(function () {
  var overflowMenuItemProps = props.menuItem();
  return _react.default.createElement(_OverflowMenu.default, _extends({}, props.menu(), {
    style: {
      width: 'auto'
    },
    renderIcon: function renderIcon(iconProps) {
      return _react.default.createElement("div", iconProps, "Custom trigger");
    }
  }), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Option 1"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Option 2"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Option 3"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Option 4"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Danger option",
    hasDivider: true,
    isDelete: true
  })));
}));