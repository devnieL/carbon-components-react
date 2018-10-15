function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { iconCaretDown } from 'carbon-icons';
import Icon from '../Icon';

var Select = function Select(_ref) {
  var className = _ref.className,
      id = _ref.id,
      inline = _ref.inline,
      labelText = _ref.labelText,
      disabled = _ref.disabled,
      children = _ref.children,
      iconDescription = _ref.iconDescription,
      hideLabel = _ref.hideLabel,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      helperText = _ref.helperText,
      light = _ref.light,
      other = _objectWithoutProperties(_ref, ["className", "id", "inline", "labelText", "disabled", "children", "iconDescription", "hideLabel", "invalid", "invalidText", "helperText", "light"]);

  var selectClasses = classNames(_defineProperty({
    'bx--select': true,
    'bx--select--inline': inline,
    'bx--select--light': light
  }, className, className));
  var labelClasses = classNames('bx--label', {
    'bx--visually-hidden': hideLabel
  });
  var errorId = "".concat(id, "-error-msg");
  var error = invalid ? React.createElement("div", {
    className: "bx--form-requirement",
    id: errorId
  }, invalidText) : null;
  var helper = helperText ? React.createElement("div", {
    className: "bx--form__helper-text"
  }, helperText) : null;
  var ariaProps = {};

  if (invalid) {
    ariaProps['aria-describedby'] = errorId;
  }

  return React.createElement("div", {
    className: "bx--form-item"
  }, React.createElement("div", {
    className: selectClasses
  }, React.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText), React.createElement("select", _extends({}, other, ariaProps, {
    id: id,
    className: "bx--select-input",
    disabled: disabled || undefined,
    "data-invalid": invalid || undefined,
    "aria-invalid": invalid || undefined
  }), children), React.createElement(Icon, {
    icon: iconCaretDown,
    className: "bx--select__arrow",
    description: iconDescription
  }), helper, error));
};

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  labelText: PropTypes.node,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
  iconDescription: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
  helperText: PropTypes.node,
  light: PropTypes.bool
};
Select.defaultProps = {
  disabled: false,
  labelText: 'Select',
  inline: false,
  iconDescription: 'open list of options',
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};
export default Select;