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
import Icon from '../Icon';
import classNames from 'classnames';
import { settings } from 'carbon-components';
import { ButtonTypes } from '../../prop-types/types';
import { componentsX } from '../../internal/FeatureFlags';
var prefix = settings.prefix;

var Button = function Button(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      small = _ref.small,
      kind = _ref.kind,
      href = _ref.href,
      tabIndex = _ref.tabIndex,
      type = _ref.type,
      icon = _ref.icon,
      iconDescription = _ref.iconDescription,
      other = _objectWithoutProperties(_ref, ["children", "className", "disabled", "small", "kind", "href", "tabIndex", "type", "icon", "iconDescription"]);

  var buttonClasses = classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--btn"), true), _defineProperty(_classNames, "".concat(prefix, "--btn--sm"), small), _defineProperty(_classNames, "".concat(prefix, "--btn--primary"), kind === 'primary'), _defineProperty(_classNames, "".concat(prefix, "--btn--danger"), kind === 'danger'), _defineProperty(_classNames, "".concat(prefix, "--btn--secondary"), kind === 'secondary'), _defineProperty(_classNames, "".concat(prefix, "--btn--ghost"), kind === 'ghost'), _defineProperty(_classNames, "".concat(prefix, "--btn--danger--primary"), kind === 'danger--primary'), _defineProperty(_classNames, "".concat(prefix, "--btn--tertiary"), kind === 'tertiary'), _classNames));
  var commonProps = {
    tabIndex: tabIndex,
    className: buttonClasses
  };

  var buttonImage = function () {
    if (componentsX && icon && React.isValidElement(icon)) {
      return icon;
    }

    if (!componentsX && icon) {
      return React.createElement(Icon, {
        icon: Object(icon) === icon ? icon : undefined,
        name: Object(icon) !== icon ? icon : undefined,
        description: iconDescription,
        className: "".concat(prefix, "--btn__icon"),
        "aria-hidden": "true"
      });
    }

    return null;
  }();

  var button = React.createElement("button", _extends({}, other, commonProps, {
    disabled: disabled,
    type: type,
    ref: other.inputref
  }), children, buttonImage);
  var anchor = React.createElement("a", _extends({}, other, commonProps, {
    href: href,
    role: "button",
    ref: other.inputref
  }), children, buttonImage);
  return href ? anchor : button;
};

Button.propTypes = {
  /**
   * Specify the content of your Button
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be added to your Button
   */
  className: PropTypes.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Specify whether the Button should be a small variant
   */
  small: PropTypes.bool,

  /**
   * Specify the kind of Button you want to create
   */
  kind: ButtonTypes.buttonKind.isRequired,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: PropTypes.string,

  /**
   * Optional prop to specify the tabIndex of the Button
   */
  tabIndex: PropTypes.number,

  /**
   * Optional prop to specify the type of the Button
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),

  /**
   * Optional prop to specify the role of the Button
   */
  role: PropTypes.string,

  /**
   * Specify an icon to include in the Button through a string or object
   * representing the SVG data of the icon
   */
  icon: PropTypes.oneOfType([PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string.isRequired,
    svgData: PropTypes.object.isRequired
  }), PropTypes.string, PropTypes.node]),

  /**
   * If specifying the `icon` prop, provide a description for that icon that can
   * be read by screen readers
   */
  iconDescription: function iconDescription(props) {
    if (props.icon && !props.iconDescription) {
      return new Error('icon property specified without also providing an iconDescription property.');
    }

    return undefined;
  }
};
Button.defaultProps = {
  iconDescription: 'Provide icon description if icon is used',
  tabIndex: 0,
  type: 'button',
  disabled: false,
  small: false,
  kind: 'primary'
};
export default Button;