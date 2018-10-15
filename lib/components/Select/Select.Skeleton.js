"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectSkeleton = function SelectSkeleton(_ref) {
  var hideLabel = _ref.hideLabel,
      id = _ref.id;
  var label = hideLabel ? null : // eslint-disable-next-line jsx-a11y/label-has-for
  _react.default.createElement("label", {
    className: "bx--label bx--skeleton",
    htmlFor: id
  });
  return _react.default.createElement("div", {
    className: "bx--form-item"
  }, label, _react.default.createElement("div", {
    className: "bx--select bx--skeleton"
  }, _react.default.createElement("select", {
    className: "bx--select-input"
  })));
};

SelectSkeleton.propTypes = {
  hideLabel: _propTypes.default.bool
};
var _default = SelectSkeleton;
exports.default = _default;