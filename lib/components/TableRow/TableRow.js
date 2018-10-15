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

var TableRow = function TableRow(props) {
  var even = props.even,
      header = props.header,
      className = props.className,
      children = props.children,
      other = _objectWithoutProperties(props, ["even", "header", "className", "children"]);

  var tableRowClasses = (0, _classnames.default)(className, 'bx--table-row', {
    'bx--parent-row': !header,
    'bx--parent-row--even': even
  });
  return _react.default.createElement("tr", _extends({}, other, {
    className: tableRowClasses
  }), children);
};

TableRow.propTypes = {
  header: _propTypes.default.bool,
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  even: _propTypes.default.bool
};
TableRow.defaultProps = {
  header: false
};
var _default = TableRow;
exports.default = _default;