"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _ListItem = _interopRequireDefault(require("../ListItem"));

var _UnorderedList = _interopRequireDefault(require("../UnorderedList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('UnorderedList', module).add('default', (0, _addonInfo.withInfo)({
  text: 'Lists consist of related content grouped together and organized ' + 'vertically. Unordered lists are used to present content of equal ' + 'status or value.'
})(function () {
  return _react.default.createElement(_UnorderedList.default, null, _react.default.createElement(_ListItem.default, null, "Unordered List level 1"), _react.default.createElement(_ListItem.default, null, "Unordered List level 1"), _react.default.createElement(_ListItem.default, null, "Unordered List level 1"));
})).add('nested', (0, _addonInfo.withInfo)({
  text: 'Lists consist of related content grouped together and organized ' + 'vertically. Unordered lists are used to present content of equal ' + 'status or value.'
})(function () {
  return _react.default.createElement(_UnorderedList.default, null, _react.default.createElement(_ListItem.default, null, "Unordered List level 1"), _react.default.createElement(_UnorderedList.default, {
    nested: true
  }, _react.default.createElement(_ListItem.default, null, "Unordered List level 2"), _react.default.createElement(_ListItem.default, null, "Unordered List level 2")), _react.default.createElement(_ListItem.default, null, "Unordered List level 1"), _react.default.createElement(_ListItem.default, null, "Unordered List level 1"));
}));