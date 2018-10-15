"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonTypes = void 0;

var _propTypes = require("prop-types");

var ButtonTypes = {
  buttonKind: (0, _propTypes.oneOf)(['primary', 'secondary', 'danger', 'ghost', 'danger--primary', 'tertiary'])
};
exports.ButtonTypes = ButtonTypes;