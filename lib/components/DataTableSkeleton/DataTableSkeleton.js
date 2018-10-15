"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DataTableSkeleton = function DataTableSkeleton(_ref) {
  var rowCount = _ref.rowCount,
      zebra = _ref.zebra,
      compact = _ref.compact,
      other = _objectWithoutProperties(_ref, ["rowCount", "zebra", "compact"]);

  var dataTableSkeletonClasses = (0, _classnames.default)({
    'bx--skeleton': true,
    'bx--data-table-v2': true,
    'bx--data-table-v2--zebra': zebra,
    'bx--data-table-v2--compact': compact
  });
  var rows = [];
  var rowRepeat = rowCount - 1;

  for (var i = 0; i < rowRepeat; i++) {
    rows.push(_react.default.createElement("tr", {
      key: i
    }, _react.default.createElement("td", null), _react.default.createElement("td", null), _react.default.createElement("td", null), _react.default.createElement("td", null), _react.default.createElement("td", null)));
  }

  return _react.default.createElement("table", _extends({
    className: dataTableSkeletonClasses
  }, other), _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null), _react.default.createElement("th", null), _react.default.createElement("th", null), _react.default.createElement("th", null), _react.default.createElement("th", null))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement("span", null)), _react.default.createElement("td", null, _react.default.createElement("span", null)), _react.default.createElement("td", null, _react.default.createElement("span", null)), _react.default.createElement("td", null, _react.default.createElement("span", null)), _react.default.createElement("td", null, _react.default.createElement("span", null))), rows));
};

DataTableSkeleton.propTypes = {
  /**
   * Specify the number of rows that you want to render in the skeleton state
   */
  rowCount: _propTypes.default.number,

  /**
   * Optionally specify whether you want the DataTable to be zebra striped
   */
  zebra: _propTypes.default.bool,

  /**
   * Optionally specify whether you want the Skeleton to be rendered as a
   * compact DataTable
   */
  compact: _propTypes.default.bool
};
DataTableSkeleton.defaultProps = {
  rowCount: 5,
  zebra: false,
  compact: false
};
var _default = DataTableSkeleton;
exports.default = _default;