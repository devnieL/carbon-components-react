function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { settings } from 'carbon-components';
var prefix = settings.prefix;

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
  var textInputClasses = classNames("".concat(prefix, "--text-input"), className, _defineProperty({}, "".concat(prefix, "--text-input--light"), light));
  var labelClasses = classNames("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--visually-hidden"), hideLabel));
  var label = labelText ? React.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText) : null;
  var error = invalid ? React.createElement("div", {
    className: "".concat(prefix, "--form-requirement"),
    id: errorId
  }, invalidText) : null;
  var input = invalid ? React.createElement("input", _extends({}, other, textInputProps, {
    "data-invalid": true,
    "aria-invalid": true,
    "aria-describedby": errorId,
    className: textInputClasses
  })) : React.createElement("input", _extends({}, other, textInputProps, {
    className: textInputClasses
  }));
  var helper = helperText ? React.createElement("div", {
    className: "".concat(prefix, "--form__helper-text")
  }, helperText) : null;
  return React.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, label, helper, input, error);
};

TextInput.propTypes = {
  /**
   * Specify an optional className to be applied to the <input> node
   */
  className: PropTypes.string,

  /**
   * Optionally provide the default value of the <input>
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether the <input> should be disabled
   */
  disabled: PropTypes.bool,

  /**
   * Specify a custom `id` for the <input>
   */
  id: PropTypes.string.isRequired,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever <input>
   * is updated
   */
  onChange: PropTypes.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * <input> is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify the placeholder attribute for the <input>
   */
  placeholder: PropTypes.string,

  /**
   * Specify the type of the <input>
   */
  type: PropTypes.string,

  /**
   * Specify the value of the <input>
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Specify whether the control is currently invalid
   */
  invalid: PropTypes.bool,

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool
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
export default React.forwardRef(function (props, ref) {
  return React.createElement(TextInput, _extends({}, props, {
    forwardRef: ref
  }));
});