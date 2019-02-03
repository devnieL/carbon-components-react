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

var Switch = function Switch(props) {
  var className = props.className,
      index = props.index,
      kind = props.kind,
      name = props.name,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      selected = props.selected,
      text = props.text,
      icon = props.icon,
      href = props.href,
      other = _objectWithoutProperties(props, ["className", "index", "kind", "name", "onClick", "onKeyDown", "selected", "text", "icon", "href"]);

  var handleClick = function handleClick(e) {
    e.preventDefault();
    onClick({
      index: index,
      name: name,
      text: text
    });
  };

  var handleKeyDown = function handleKeyDown(e) {
    var key = e.key || e.which;

    if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
      onKeyDown({
        index: index,
        name: name,
        text: text
      });
    }
  };

  var classes = classNames(className, "".concat(prefix, "--content-switcher-btn"), _defineProperty({}, "".concat(prefix, "--content-switcher--selected"), selected));
  var commonProps = {
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    className: classes
  };
  var btnIcon = icon ? React.cloneElement(icon, {
    className: classNames(icon.props.className, " ".concat(prefix, "--content-switcher__icon"))
  }) : null;

  if (kind === 'button') {
    return React.createElement("button", _extends({}, other, commonProps), btnIcon, React.createElement("span", null, text));
  }

  return React.createElement("a", _extends({
    href: href
  }, other, commonProps), btnIcon, React.createElement("span", null, text));
};

Switch.propTypes = {
  /**
   * Specify an optional className to be added to your Switch
   */
  className: PropTypes.string,

  /**
   * The index of your Switch in your ContentSwitcher that is used for event handlers.
   * Reserved for usage in ContentSwitcher
   */
  index: PropTypes.number,

  /**
   * Specify whether the <Switch> should be used as a <button> element or an <a> element
   */
  kind: PropTypes.oneOf(['button', 'anchor']).isRequired,

  /**
   * Provide the name of your Switch that is used for event handlers
   */
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * A handler that is invoked when a user clicks on the control.
   * Reserved for usage in ContentSwitcher
   */
  onClick: PropTypes.func,

  /**
   * A handler that is invoked on the key down event for the control.
   * Reserved for usage in ContentSwitcher
   */
  onKeyDown: PropTypes.func,

  /**
   * Whether your Switch is selected. Reserved for usage in ContentSwitcher
   */
  selected: PropTypes.bool,

  /**
   * Provide the contents of your Switch
   */
  text: PropTypes.string.isRequired,

  /**
   * Specify an icon to include in your Switch
   */
  icon: PropTypes.element,

  /**
   * Optional string representing the link location for the Switch,
   * if Switch is used as an <a> element
   */
  href: PropTypes.string
};
Switch.defaultProps = {
  selected: false,
  kind: 'anchor',
  text: 'Provide text',
  href: '',
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {}
};
export default Switch;