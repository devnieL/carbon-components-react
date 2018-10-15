function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

var TimePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(TimePicker, _Component);

  function TimePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    return _this;
  }

  _createClass(TimePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          id = _this$props.id,
          labelText = _this$props.labelText,
          type = _this$props.type,
          pattern = _this$props.pattern,
          _onChange = _this$props.onChange,
          _onClick = _this$props.onClick,
          _onBlur = _this$props.onBlur,
          placeholder = _this$props.placeholder,
          maxLength = _this$props.maxLength,
          invalidText = _this$props.invalidText,
          invalid = _this$props.invalid,
          hideLabel = _this$props.hideLabel,
          light = _this$props.light,
          other = _objectWithoutProperties(_this$props, ["children", "className", "id", "labelText", "type", "pattern", "onChange", "onClick", "onBlur", "placeholder", "maxLength", "invalidText", "invalid", "hideLabel", "light"]);

      var timePickerInputProps = {
        onChange: function onChange(evt) {
          if (!other.disabled) {
            _this2.setState({
              value: evt.target.value
            });

            _onChange(evt);
          }
        },
        onClick: function onClick(evt) {
          if (!other.disabled) {
            _this2.setState({
              value: evt.target.value
            });

            _onClick(evt);
          }
        },
        onBlur: function onBlur(evt) {
          if (!other.disabled) {
            _this2.setState({
              value: evt.target.value
            });

            _onBlur(evt);
          }
        },
        pattern: pattern,
        placeholder: placeholder,
        maxLength: maxLength,
        id: id,
        type: type,
        value: this.state.value
      };
      var timePickerClasses = classNames(_defineProperty({
        'bx--time-picker': true,
        'bx--time-picker--light': light
      }, className, className));
      var labelClasses = classNames('bx--label', {
        'bx--visually-hidden': hideLabel
      });
      var label = labelText ? React.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, labelText) : null;
      var error = invalid ? React.createElement("div", {
        className: "bx--form-requirement"
      }, invalidText) : null;
      return React.createElement("div", {
        className: "bx--form-item"
      }, React.createElement("div", {
        className: timePickerClasses
      }, React.createElement("div", {
        className: "bx--time-picker__input"
      }, label, React.createElement("input", _extends({}, other, timePickerInputProps, {
        "data-invalid": invalid ? invalid : undefined,
        className: "bx--time-picker__input-field"
      })), error), children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var value = _ref.value;
      var prevValue = state.prevValue;
      return prevValue === value ? null : {
        value: value,
        prevValue: value
      };
    }
  }]);

  return TimePicker;
}(Component);

_defineProperty(TimePicker, "propTypes", {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.node,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
  hideLabel: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,

  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool
});

_defineProperty(TimePicker, "defaultProps", {
  type: 'text',
  pattern: '(1[012]|[1-9]):[0-5][0-9](\\s)?(?i)',
  placeholder: 'hh:mm',
  maxLength: 5,
  invalidText: 'Invalid time format.',
  invalid: false,
  disabled: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  onBlur: function onBlur() {},
  light: false
});

export { TimePicker as default };