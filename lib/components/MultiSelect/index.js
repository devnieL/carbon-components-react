"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MultiSelect = _interopRequireDefault(require("./MultiSelect"));

var _FilterableMultiSelect = _interopRequireDefault(require("./FilterableMultiSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_MultiSelect.default.Filterable = _FilterableMultiSelect.default;
var _default = _MultiSelect.default;
exports.default = _default;