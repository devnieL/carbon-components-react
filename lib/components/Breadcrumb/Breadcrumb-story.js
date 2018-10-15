"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _Breadcrumb = _interopRequireDefault(require("../Breadcrumb"));

var _BreadcrumbItem = _interopRequireDefault(require("../BreadcrumbItem"));

var _Breadcrumb2 = _interopRequireDefault(require("../Breadcrumb/Breadcrumb.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var props = function props() {
  return {
    className: 'some-class',
    noTrailingSlash: (0, _addonKnobs.boolean)('No trailing slash (noTrailingSlash)', false),
    onClick: (0, _addonActions.action)('onClick')
  };
};

(0, _react2.storiesOf)('Breadcrumb', module).addDecorator(_addonKnobs.withKnobs).add('Default', (0, _addonInfo.withInfo)({
  text: "\n        Breadcrumb enables users to quickly see their location within a path of navigation and move up to a parent level if desired.\n      "
})(function () {
  return _react.default.createElement(_Breadcrumb.default, props(), _react.default.createElement(_BreadcrumbItem.default, null, _react.default.createElement("a", {
    href: "/#"
  }, "Breadcrumb 1")), _react.default.createElement(_BreadcrumbItem.default, {
    href: "#"
  }, "Breadcrumb 2"), _react.default.createElement(_BreadcrumbItem.default, {
    href: "#"
  }, "Breadcrumb 3"));
})).add('skeleton', (0, _addonInfo.withInfo)({
  text: "\n        Placeholder skeleton state to use when content is loading.\n        "
})(function () {
  return _react.default.createElement(_Breadcrumb2.default, null);
}));