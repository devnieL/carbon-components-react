"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _carbonIcons = require("carbon-icons");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TimePickerSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(TimePickerSelect, _Component);

  function TimePickerSelect() {
    _classCallCheck(this, TimePickerSelect);

    return _possibleConstructorReturn(this, _getPrototypeOf(TimePickerSelect).apply(this, arguments));
  }

  _createClass(TimePickerSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          disabled = _this$props.disabled,
          children = _this$props.children,
          iconDescription = _this$props.iconDescription,
          className = _this$props.className,
          hideLabel = _this$props.hideLabel,
          labelText = _this$props.labelText,
          inline = _this$props.inline,
          other = _objectWithoutProperties(_this$props, ["id", "disabled", "children", "iconDescription", "className", "hideLabel", "labelText", "inline"]);

      var selectClasses = (0, _classnames.default)(_defineProperty({
        'bx--select': true,
        'bx--time-picker__select': true,
        'bx--select--inline': true
      }, className, className));
      var labelClasses = (0, _classnames.default)('bx--label', {
        'bx--visually-hidden': hideLabel
      });
      var label = labelText ? _react.default.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, labelText) : null;
      return _react.default.createElement("div", {
        className: selectClasses
      }, label, _react.default.createElement("select", _extends({}, other, {
        id: id,
        className: "bx--select-input",
        disabled: disabled
      }), children), _react.default.createElement(_Icon.default, {
        icon: _carbonIcons.iconCaretDown,
        className: "bx--select__arrow",
        description: iconDescription
      }));
    }
  }]);

  return TimePickerSelect;
}(_react.Component);

exports.default = TimePickerSelect;

_defineProperty(TimePickerSelect, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  inline: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  defaultValue: _propTypes.default.any,
  iconDescription: _propTypes.default.string.isRequired,
  hideLabel: _propTypes.default.bool,
  labelText: _propTypes.default.node.isRequired
});

_defineProperty(TimePickerSelect, "defaultProps", {
  disabled: false,
  inline: true,
  iconDescription: 'open list of options',
  hideLabel: true
});