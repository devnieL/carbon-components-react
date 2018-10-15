"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _carbonIcons = require("carbon-icons");

var _Icon = _interopRequireDefault(require("../Icon"));

var _StructuredList = require("../StructuredList");

var _StructuredList2 = _interopRequireDefault(require("../StructuredList/StructuredList.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('StructuredList', module).add('Simple', (0, _addonInfo.withInfo)({
  text: "\n        Structured Lists group content that is similar or related, such as terms or definitions.\n      "
})(function () {
  return _react.default.createElement(_StructuredList.StructuredListWrapper, null, _react.default.createElement(_StructuredList.StructuredListHead, null, _react.default.createElement(_StructuredList.StructuredListRow, {
    head: true
  }, _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnA"), _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnB"), _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnC"))), _react.default.createElement(_StructuredList.StructuredListBody, null, _react.default.createElement(_StructuredList.StructuredListRow, null, _react.default.createElement(_StructuredList.StructuredListCell, {
    noWrap: true
  }, "Row 1"), _react.default.createElement(_StructuredList.StructuredListCell, null, "Row 1"), _react.default.createElement(_StructuredList.StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.")), _react.default.createElement(_StructuredList.StructuredListRow, null, _react.default.createElement(_StructuredList.StructuredListCell, {
    noWrap: true
  }, "Row 2"), _react.default.createElement(_StructuredList.StructuredListCell, null, "Row 2"), _react.default.createElement(_StructuredList.StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum."))));
})).add('Selection', (0, _addonInfo.withInfo)({
  text: "\n        Structured Lists with selection allow a row of list content to be selected.\n      "
})(function () {
  return _react.default.createElement(_StructuredList.StructuredListWrapper, {
    selection: true,
    border: true
  }, _react.default.createElement(_StructuredList.StructuredListHead, null, _react.default.createElement(_StructuredList.StructuredListRow, {
    head: true
  }, _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, ''), _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnA"), _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnB"), _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnC"))), _react.default.createElement(_StructuredList.StructuredListBody, null, _react.default.createElement(_StructuredList.StructuredListRow, {
    label: true,
    htmlFor: "row-1"
  }, _react.default.createElement(_StructuredList.StructuredListInput, {
    id: "row-1",
    value: "row-1",
    title: "row-1",
    name: "row-1",
    defaultChecked: true
  }), _react.default.createElement(_StructuredList.StructuredListCell, null, _react.default.createElement(_Icon.default, {
    className: "bx--structured-list-svg",
    icon: _carbonIcons.iconCheckmarkSolid,
    description: "select an option"
  })), _react.default.createElement(_StructuredList.StructuredListCell, null, "Row 1"), _react.default.createElement(_StructuredList.StructuredListCell, null, "Row 1"), _react.default.createElement(_StructuredList.StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.")), _react.default.createElement(_StructuredList.StructuredListRow, {
    label: true,
    htmlFor: "row-2"
  }, _react.default.createElement(_StructuredList.StructuredListInput, {
    id: "row-2",
    value: "row-2",
    title: "row-2",
    name: "row-1"
  }), _react.default.createElement(_StructuredList.StructuredListCell, null, _react.default.createElement(_Icon.default, {
    className: "bx--structured-list-svg",
    icon: _carbonIcons.iconCheckmarkSolid,
    description: "select an option"
  })), _react.default.createElement(_StructuredList.StructuredListCell, null, "Row 2"), _react.default.createElement(_StructuredList.StructuredListCell, null, "Row 2"), _react.default.createElement(_StructuredList.StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum."))));
})).add('skeleton', (0, _addonInfo.withInfo)({
  text: "\n        Placeholder skeleton state to use when content is loading.\n      "
})(function () {
  return _react.default.createElement("div", {
    style: {
      width: '800px'
    }
  }, _react.default.createElement(_StructuredList2.default, null), _react.default.createElement(_StructuredList2.default, {
    border: true
  }));
}));