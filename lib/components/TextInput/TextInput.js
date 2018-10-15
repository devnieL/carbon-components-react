"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextInput = function TextInput(_ref) {
  var labelText = _ref.labelText,
      className = _ref.className,
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
      other = _objectWithoutProperties(_ref, ["labelText", "className", "id", "placeholder", "type", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "light"]);

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
    type: type
  };
  var errorId = id + '-error-msg';
  var textInputClasses = (0, _classnames.default)('bx--text-input', className, {
    'bx--text-input--light': light
  });
  var labelClasses = (0, _classnames.default)('bx--label', {
    'bx--visually-hidden': hideLabel
  });
  var label = labelText ? _react.default.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText) : null;
  var error = invalid ? _react.default.createElement("div", {
    className: "bx--form-requirement",
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
    className: "bx--form__helper-text"
  }, helperText) : null;
  return _react.default.createElement("div", {
    className: "bx--form-item"
  }, label, input, helper, error);
};

TextInput.propTypes = {
  className: _propTypes.default.string,
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  labelText: _propTypes.default.node.isRequired,
  onChange: _propTypes.default.func,
  onClick: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  type: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  hideLabel: _propTypes.default.bool,
  invalid: _propTypes.default.bool,
  invalidText: _propTypes.default.string,
  helperText: _propTypes.default.node,

  /**
   * `true` to use the light version.
   */
  light: _propTypes.default.bool
};
TextInput.defaultProps = {
  className: 'bx--text__input',
  disabled: false,
  type: 'text',
  onChange: function onChange() {},
  onClick: function onClick() {},
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};
var _default = TextInput;
exports.default = _default;