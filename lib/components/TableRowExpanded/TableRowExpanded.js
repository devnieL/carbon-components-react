"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var TableRowExpanded = function TableRowExpanded(props) {
  var _classNames;

  var children = props.children,
      className = props.className,
      even = props.even,
      colSpan = props.colSpan,
      expanded = props.expanded,
      other = _objectWithoutProperties(props, ["children", "className", "even", "colSpan", "expanded"]);

  var tableRowClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, className, className), _defineProperty(_classNames, "".concat(prefix, "--table-row"), true), _defineProperty(_classNames, "".concat(prefix, "--expandable-row"), true), _defineProperty(_classNames, "".concat(prefix, "--expandable-row--even"), even), _classNames));

  if (!expanded) {
    return false;
  }

  return _react.default.createElement("tr", _extends({}, other, {
    className: tableRowClasses
  }), _react.default.createElement("td", {
    colSpan: colSpan
  }, children));
};

TableRowExpanded.propTypes = {
  /**
   * Provide the contents of your TableRowExpanded
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to your TableRowExpanded
   */
  className: _propTypes.default.string,

  /**
   * Specify the `colspan` of your TableRowExpanded
   */
  colSpan: _propTypes.default.number,

  /**
   * Specify whether your TableRowExpanded is activated
   */
  expanded: _propTypes.default.bool,

  /**
   * Specify whether your TableRowExpanded is at an even position
   */
  even: _propTypes.default.bool
};
TableRowExpanded.defaultProps = {
  expanded: false
};
var _default = TableRowExpanded;
exports.default = _default;