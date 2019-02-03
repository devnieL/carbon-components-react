"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Tabs = _interopRequireDefault(require("../Tabs"));

var _Tab = _interopRequireDefault(require("../Tab"));

var _Tabs2 = _interopRequireDefault(require("../Tabs/Tabs.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  tabs: function tabs() {
    return {
      className: 'some-class',
      selected: (0, _addonKnobs.number)('The index of the selected tab (selected in <Tabs>)', 1),
      triggerHref: (0, _addonKnobs.text)('The href of trigger button for narrow mode (triggerHref in <Tabs>)', '#'),
      role: (0, _addonKnobs.text)('ARIA role (role in <Tabs>)', 'navigation'),
      iconDescription: (0, _addonKnobs.text)('The description of the trigger icon for narrow mode (iconDescription in <Tabs>)', 'show menu options'),
      onClick: (0, _addonActions.action)('onClick'),
      onKeyDown: (0, _addonActions.action)('onKeyDown'),
      onSelectionChange: (0, _addonActions.action)('onSelectionChange')
    };
  },
  tab: function tab() {
    return {
      className: 'another-class',
      href: (0, _addonKnobs.text)('The href for tab (href in <Tab>)', '#'),
      role: (0, _addonKnobs.text)('ARIA role (role in <Tab>)', 'presentation'),
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex in <Tab>)', 0),
      onClick: (0, _addonActions.action)('onClick'),
      onKeyDown: (0, _addonActions.action)('onKeyDown')
    };
  }
};
(0, _react2.storiesOf)('Tabs', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return _react.default.createElement(_Tabs.default, props.tabs(), _react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    label: "Tab label 1"
  }), _react.default.createElement("div", {
    className: "some-content"
  }, "Content for first tab goes here.")), _react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    label: "Tab label 2"
  }), _react.default.createElement("div", {
    className: "some-content"
  }, "Content for second tab goes here.")), _react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    label: "Tab label 3"
  }), _react.default.createElement("div", {
    className: "some-content"
  }, "Content for third tab goes here.")), _react.default.createElement(_Tab.default, _extends({}, props.tab(), {
    label: "Tab label 4"
  }), _react.default.createElement("div", {
    className: "some-content"
  }, "Content for fourth tab goes here.")));
}, {
  info: {
    text: "\n            Tabs are used to quickly navigate between views within the same context. Create individual\n            Tab components for each item in the Tabs list.\n          "
  }
}).add('skeleton', function () {
  return _react.default.createElement(_Tabs2.default, null);
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n          "
  }
});