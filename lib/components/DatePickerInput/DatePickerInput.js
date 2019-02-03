"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/calendar/16"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _FeatureFlags = require("../../internal/FeatureFlags");

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

var prefix = _carbonComponents.settings.prefix;

var DatePickerInput =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePickerInput, _Component);

  function DatePickerInput() {
    _classCallCheck(this, DatePickerInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(DatePickerInput).apply(this, arguments));
  }

  _createClass(DatePickerInput, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          id = _this$props.id,
          labelText = _this$props.labelText,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText,
          hideLabel = _this$props.hideLabel,
          _onChange = _this$props.onChange,
          _onClick = _this$props.onClick,
          placeholder = _this$props.placeholder,
          type = _this$props.type,
          datePickerType = _this$props.datePickerType,
          pattern = _this$props.pattern,
          iconDescription = _this$props.iconDescription,
          openCalendar = _this$props.openCalendar,
          other = _objectWithoutProperties(_this$props, ["id", "labelText", "invalid", "invalidText", "hideLabel", "onChange", "onClick", "placeholder", "type", "datePickerType", "pattern", "iconDescription", "openCalendar"]);

      var datePickerInputProps = {
        id: id,
        onChange: function onChange(evt) {
          if (!other.disabled) {
            _onChange(evt);
          }
        },
        onClick: function onClick(evt) {
          if (!other.disabled) {
            _onClick(evt);
          }
        },
        placeholder: placeholder,
        type: type,
        pattern: pattern
      };
      var labelClasses = (0, _classnames.default)("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--visually-hidden"), hideLabel));

      var datePickerIcon = function () {
        if (datePickerType !== 'single') {
          return;
        }

        if (_FeatureFlags.componentsX) {
          return _react.default.createElement(_.default, {
            className: "".concat(prefix, "--date-picker__icon"),
            "aria-label": iconDescription,
            onClick: openCalendar,
            role: "img"
          });
        }

        return _react.default.createElement(_Icon.default, {
          name: "calendar",
          className: "".concat(prefix, "--date-picker__icon"),
          description: iconDescription,
          onClick: openCalendar,
          focusable: "false"
        });
      }();

      var label = labelText ? _react.default.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, labelText) : null;
      var error = invalid ? _react.default.createElement("div", {
        className: "".concat(prefix, "--form-requirement")
      }, invalidText) : null;
      var containerClasses = (0, _classnames.default)("".concat(prefix, "--date-picker-container"), _defineProperty({}, "".concat(prefix, "--date-picker--nolabel"), !label));
      var input = invalid ? _react.default.createElement("input", _extends({}, other, datePickerInputProps, {
        ref: function ref(input) {
          _this.input = input;
        },
        "data-invalid": true,
        className: "".concat(prefix, "--date-picker__input")
      })) : _react.default.createElement("input", _extends({
        ref: function ref(input) {
          _this.input = input;
        }
      }, other, datePickerInputProps, {
        className: "".concat(prefix, "--date-picker__input")
      }));
      return _react.default.createElement("div", {
        className: containerClasses
      }, datePickerIcon, label, input, error);
    }
  }]);

  return DatePickerInput;
}(_react.Component);

exports.default = DatePickerInput;

_defineProperty(DatePickerInput, "propTypes", {
  /**
   * Specify an id that unique identifies the <input>
   */
  id: _propTypes.default.string.isRequired,

  /**
   * The description of the calendar icon.
   */
  iconDescription: _propTypes.default.string
});

_defineProperty(DatePickerInput, "defaultProps", {
  pattern: '\\d{1,2}\\/\\d{1,2}\\/\\d{4}',
  type: 'text',
  disabled: false,
  invalid: false,
  labelText: '',
  onClick: function onClick() {},
  onChange: function onChange() {}
});