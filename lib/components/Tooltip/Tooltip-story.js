"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var directions = {
  bottom: 'Bottom (bottom)',
  left: 'Left (left)',
  top: 'Top (top)',
  right: 'Right (right)'
};
var props = {
  withIcon: function withIcon() {
    return {
      clickToOpen: (0, _addonKnobs.boolean)('Click to open (clickToOpen)', false),
      direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: (0, _addonKnobs.text)('Trigger text (triggerText)', 'Tooltip label')
    };
  },
  withoutIcon: function withoutIcon() {
    return {
      showIcon: false,
      direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: (0, _addonKnobs.text)('Trigger text (triggerText)', 'Tooltip label')
    };
  }
};
(0, _react2.storiesOf)('Tooltip', module).addDecorator(_addonKnobs.withKnobs).add('default (bottom)', (0, _addonInfo.withInfo)({
  text: "\n        Tooltips are used to supply additional information to an element when hovering over it. By default,\n        the tooltip will render above the element. The example below shows the default scenario.\n      "
})(function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, props.withIcon(), _react.default.createElement("p", {
    className: "bx--tooltip__label"
  }, "Tooltip subtitle"), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
})).add('no icon', (0, _addonInfo.withInfo)({
  text: "\n        Tooltips are used to supply additional information to an element when hovering over it. By default,\n        the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n      "
})(function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, props.withoutIcon(), _react.default.createElement("p", {
    className: "bx--tooltip__label"
  }, "Tooltip subtitle"), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")));
}));