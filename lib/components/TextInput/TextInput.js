"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var TextInput = function TextInput(_ref) {
  var labelText = _ref.labelText,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "".concat(prefix, "--text__input") : _ref$className,
      id = _ref.id,
      placeholder = _ref.placeholder,
      type = _ref.type,
      _onChange = _ref.onChange,
      _onClick = _ref.onClick,
      hideLabel = _ref.hideLabel,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      helperText = _ref.helperText,
      light = _ref.light,
      ref = _ref.forwardRef,
      other = _objectWithoutProperties(_ref, ["labelText", "className", "id", "placeholder", "type", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "light", "forwardRef"]);

  var textInputProps = {
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
    ref: ref
  };
  var errorId = id + '-error-msg';
  var textInputClasses = (0, _classnames.default)("".concat(prefix, "--text-input"), className, _defineProperty({}, "".concat(prefix, "--text-input--light"), light));
  var labelClasses = (0, _classnames.default)("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--visually-hidden"), hideLabel));
  var label = labelText ? _react.default.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText) : null;
  var error = invalid ? _react.default.createElement("div", {
    className: "".concat(prefix, "--form-requirement"),
    id: errorId
  }, invalidText) : null;
  var input = invalid ? _react.default.createElement("input", _extends({}, other, textInputProps, {
    "data-invalid": true,
    "aria-invalid": true,
    "aria-describedby": errorId,
    className: textInputClasses
  })) : _react.default.createElement("input", _extends({}, other, textInputProps, {
    className: textInputClasses
  }));
  var helper = helperText ? _react.default.createElement("div", {
    className: "".concat(prefix, "--form__helper-text")
  }, helperText) : null;
  return _react.default.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, label, helper, input, error);
};

TextInput.propTypes = {
  /**
   * Specify an optional className to be applied to the <input> node
   */
  className: _propTypes.default.string,

  /**
   * Optionally provide the default value of the <input>
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Specify whether the <input> should be disabled
   */
  disabled: _propTypes.default.bool,

  /**
   * Specify a custom `id` for the <input>
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: _propTypes.default.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever <input>
   * is updated
   */
  onChange: _propTypes.default.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * <input> is clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Specify the placeholder attribute for the <input>
   */
  placeholder: _propTypes.default.string,

  /**
   * Specify the type of the <input>
   */
  type: _propTypes.default.string,

  /**
   * Specify the value of the <input>
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: _propTypes.default.bool,

  /**
   * Specify whether the control is currently invalid
   */
  invalid: _propTypes.default.bool,

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: _propTypes.default.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: _propTypes.default.node,

  /**
   * `true` to use the light version.
   */
  light: _propTypes.default.bool
};
TextInput.defaultProps = {
  disabled: false,
  type: 'text',
  onChange: function onChange() {},
  onClick: function onClick() {},
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(TextInput, _extends({}, props, {
    forwardRef: ref
  }));
});

exports.default = _default;