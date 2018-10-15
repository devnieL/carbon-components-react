"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownSkeleton = function DropdownSkeleton(_ref) {
  var inline = _ref.inline;
  var wrapperClasses = (0, _classnames.default)({
    'bx--skeleton': true,
    'bx--dropdown-v2': true,
    'bx--list-box': true,
    'bx--form-item': true,
    'bx--list-box--inline': inline
  });
  return _react.default.createElement("div", {
    className: wrapperClasses
  }, _react.default.createElement("div", {
    role: "button",
    className: "bx--list-box__field"
  }, _react.default.createElement("span", {
    className: "bx--list-box__label"
  })));
};

DropdownSkeleton.propTypes = {
  inline: _propTypes.default.bool
};
DropdownSkeleton.defaultProps = {
  inline: false
};
var _default = DropdownSkeleton;
exports.default = _default;