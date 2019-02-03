"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _carbonIcons = require("carbon-icons");

var _carbonComponents = require("carbon-components");

var _Icon = _interopRequireDefault(require("../Icon"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var TableExpandRow = function TableExpandRow(_ref) {
  var _cx;

  var ariaLabel = _ref.ariaLabel,
      rowClassName = _ref.className,
      children = _ref.children,
      isExpanded = _ref.isExpanded,
      onExpand = _ref.onExpand,
      expandIconDescription = _ref.expandIconDescription,
      isSelected = _ref.isSelected,
      rest = _objectWithoutProperties(_ref, ["ariaLabel", "className", "children", "isExpanded", "onExpand", "expandIconDescription", "isSelected"]);

  var className = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--parent-row-v2"), true), _defineProperty(_cx, "".concat(prefix, "--expandable-row-v2"), isExpanded), _defineProperty(_cx, "".concat(prefix, "--data-table-v2--selected"), isSelected), _cx), rowClassName);
  var previousValue = isExpanded ? 'collapsed' : undefined;
  return _react.default.createElement("tr", _extends({}, rest, {
    className: className,
    "data-parent-row": true
  }), _react.default.createElement(_TableCell.default, {
    className: "".concat(prefix, "--table-expand-v2"),
    "data-previous-value": previousValue
  }, _react.default.createElement("button", {
    className: "".concat(prefix, "--table-expand-v2__button"),
    onClick: onExpand,
    "aria-label": ariaLabel
  }, _react.default.createElement(_Icon.default, {
    className: "".concat(prefix, "--table-expand-v2__svg"),
    icon: _carbonIcons.iconChevronRight,
    description: expandIconDescription
  }))), children);
};

TableExpandRow.propTypes = {
  /**
   * Specify the string read by a voice reader when the expand trigger is
   * focused
   */
  ariaLabel: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Specify whether this row is expanded or not. This helps coordinate data
   * attributes so that `TableExpandRow` and `TableExapndedRow` work together
   */
  isExpanded: _propTypes.default.bool.isRequired,

  /**
   * Hook for when a listener initiates a request to expand the given row
   */
  onExpand: _propTypes.default.func.isRequired,

  /**
   * The description of the chevron right icon, to be put in its SVG `<title>` element.
   */
  expandIconDescription: _propTypes.default.string
};
var _default = TableExpandRow;
exports.default = _default;