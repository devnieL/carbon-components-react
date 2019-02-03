"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _carbonIcons = require("carbon-icons");

var _Icon = _interopRequireDefault(require("../Icon"));

var _StructuredList = require("../StructuredList");

var _StructuredList2 = _interopRequireDefault(require("../StructuredList/StructuredList.Skeleton"));

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(0, _react2.storiesOf)('StructuredList', module).add('Simple', function () {
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
}, {
  info: {
    text: "\n            Structured Lists group content that is similar or related, such as terms or definitions.\n          "
  }
}).add('Selection', function () {
  var emptyStructuredListHeadCell = _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, '');

  var structuredListHeadColumns = [_react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnA"), _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnB"), _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnC")];

  var structuredListBodyRowGenerator = function structuredListBodyRowGenerator(numRows) {
    var checkbox = function checkbox(i) {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_StructuredList.StructuredListInput, {
        id: "row-".concat(i),
        value: "row-".concat(i),
        title: "row-".concat(i),
        name: "row-0",
        defaultChecked: !i || null
      }), _react.default.createElement(_StructuredList.StructuredListCell, null, _react.default.createElement(_Icon.default, {
        className: "bx--structured-list-svg",
        icon: _carbonIcons.iconCheckmarkSolid,
        description: "select an option"
      })));
    };

    var structuredListBodyColumns = function structuredListBodyColumns(i) {
      return [_react.default.createElement(_StructuredList.StructuredListCell, null, "Row ", i), _react.default.createElement(_StructuredList.StructuredListCell, null, "Row ", i), _react.default.createElement(_StructuredList.StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.")];
    };

    return Array.apply(null, Array(numRows)).map(function (n, i) {
      return _react.default.createElement(_StructuredList.StructuredListRow, {
        label: true,
        htmlFor: "row-".concat(i)
      }, _FeatureFlags.componentsX ? _toConsumableArray(structuredListBodyColumns(i)).concat([checkbox(i)]) : [checkbox(i)].concat(_toConsumableArray(structuredListBodyColumns(i))));
    });
  };

  return _react.default.createElement(_StructuredList.StructuredListWrapper, {
    selection: true,
    border: true
  }, _react.default.createElement(_StructuredList.StructuredListHead, null, _react.default.createElement(_StructuredList.StructuredListRow, {
    head: true
  }, _FeatureFlags.componentsX ? structuredListHeadColumns.concat([emptyStructuredListHeadCell]) : [emptyStructuredListHeadCell].concat(structuredListHeadColumns))), _react.default.createElement(_StructuredList.StructuredListBody, null, structuredListBodyRowGenerator(4)));
}, {
  info: {
    text: "\n        Structured Lists with selection allow a row of list content to be selected.\n      "
  }
}).add('skeleton', function () {
  return _react.default.createElement("div", {
    style: {
      width: '800px'
    }
  }, _react.default.createElement(_StructuredList2.default, null), _react.default.createElement(_StructuredList2.default, {
    border: true
  }));
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n          "
  }
});