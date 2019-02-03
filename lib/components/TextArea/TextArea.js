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

var TextArea = function TextArea(_ref) {
  var className = _ref.className,
      id = _ref.id,
      labelText = _ref.labelText,
      hideLabel = _ref.hideLabel,
      _onChange = _ref.onChange,
      _onClick = _ref.onClick,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      helperText = _ref.helperText,
      light = _ref.light,
      other = _objectWithoutProperties(_ref, ["className", "id", "labelText", "hideLabel", "onChange", "onClick", "invalid", "invalidText", "helperText", "light"]);

  var textareaProps = {
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
    }
  };
  var errorId = id + '-error-msg';
  var textareaClasses = (0, _classnames.default)("".concat(prefix, "--text-area"), className, _defineProperty({}, "".concat(prefix, "--text-area--light"), light));
  var labelClasses = (0, _classnames.default)("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--visually-hidden"), hideLabel));
  var label = labelText ? _react.default.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText) : null;
  var error = invalid ? _react.default.createElement("div", {
    className: "".concat(prefix, "--form-requirement"),
    id: errorId
  }, invalidText) : null;
  var input = invalid ? _react.default.createElement("textarea", _extends({}, other, textareaProps, {
    "aria-invalid": true,
    "aria-describedby": errorId,
    className: textareaClasses,
    "data-invalid": true
  })) : _react.default.createElement("textarea", _extends({}, other, textareaProps, {
    className: textareaClasses
  }));
  var helper = helperText ? _react.default.createElement("div", {
    className: "".concat(prefix, "--form__helper-text")
  }, helperText) : null;
  return _react.default.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, label, input, helper, error);
};

TextArea.propTypes = {
  /**
   * Provide a custom className that is applied directly to the underlying
   * <textarea> node
   */
  className: _propTypes.default.string,

  /**
   * Specify the `cols` attribute for the underlying <textarea> node
   */
  cols: _propTypes.default.number,

  /**
   * Optionally provide the default value of the <textarea>
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Specify whether the control is disabled
   */
  disabled: _propTypes.default.bool,

  /**
   * Provide a unique identifier for the control
   */
  id: _propTypes.default.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: _propTypes.default.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever <textarea>
   * is updated
   */
  onChange: _propTypes.default.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * <textarea> is clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Specify the placeholder attribute for the <textarea>
   */
  placeholder: _propTypes.default.string,

  /**
   * Specify the rows attribute for the <textarea>
   */
  rows: _propTypes.default.number,

  /**
   * Provide the current value of the <textarea>
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

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
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: _propTypes.default.bool,

  /**
   * Specify whether you want the light version of this control
   */
  light: _propTypes.default.bool
};
TextArea.defaultProps = {
  disabled: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  placeholder: '',
  rows: 4,
  cols: 50,
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};
var _default = TextArea;
exports.default = _default;