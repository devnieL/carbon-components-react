"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePickerSkeleton = function DatePickerSkeleton(_ref) {
  var range = _ref.range,
      id = _ref.id;

  var dateInput = _react.default.createElement("div", {
    className: "bx--date-picker-container"
  },
  /* eslint-disable jsx-a11y/label-has-for */
  _react.default.createElement("label", {
    className: "bx--label",
    htmlFor: id
  }), _react.default.createElement("div", {
    className: "bx--date-picker__input bx--skeleton"
  }));

  if (range) {
    return _react.default.createElement("div", {
      className: "bx--form-item"
    }, _react.default.createElement("div", {
      className: "bx--date-picker bx--date-picker--range bx--skeleton"
    }, dateInput, dateInput));
  }

  return _react.default.createElement("div", {
    className: "bx--form-item"
  }, _react.default.createElement("div", {
    className: "bx--date-picker bx--date-picker--short bx--date-picker--simple bx--skeleton"
  }, dateInput));
};

DatePickerSkeleton.propTypes = {
  range: _propTypes.default.bool
};
var _default = DatePickerSkeleton;
exports.default = _default;