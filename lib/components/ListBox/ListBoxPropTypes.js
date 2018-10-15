"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListBoxType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListBoxType = _propTypes.default.oneOf(['default', 'inline']);

exports.ListBoxType = ListBoxType;