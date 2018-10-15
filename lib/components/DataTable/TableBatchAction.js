"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _carbonIcons = require("carbon-icons");

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TableBatchAction = function TableBatchAction(props) {
  return _react.default.createElement(_Button.default, _extends({
    small: true,
    kind: "ghost",
    icon: _carbonIcons.iconAddSolid
  }, props));
};

TableBatchAction.propTypes = {
  /**
   * Provide a text description for the icon in the button
   */
  iconDescription: _propTypes.default.string.isRequired
};
TableBatchAction.defaultProps = {
  iconDescription: 'Add'
};
var _default = TableBatchAction;
exports.default = _default;