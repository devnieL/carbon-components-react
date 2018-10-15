"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _wrapComponent = _interopRequireDefault(require("../../tools/wrapComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableToolbar = (0, _wrapComponent.default)({
  name: 'TableToolbar',
  type: 'section',
  className: ['bx--table-toolbar']
});
var _default = TableToolbar;
exports.default = _default;