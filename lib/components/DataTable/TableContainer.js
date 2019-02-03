"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var TableContainer = function TableContainer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, ["className", "children", "title"]);

  var tableContainerClasses = (0, _classnames.default)(className, "".concat(prefix, "--data-table-v2-container"));
  return _react.default.createElement("div", _extends({}, rest, {
    className: tableContainerClasses
  }), title && _react.default.createElement("h4", {
    className: "".concat(prefix, "--data-table-v2-header")
  }, title), children);
};

TableContainer.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Provide a title for the Table
   */
  title: _propTypes.default.node
};
var _default = TableContainer;
exports.default = _default;