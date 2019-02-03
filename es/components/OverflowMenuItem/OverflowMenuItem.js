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

var OverflowMenuItem = function OverflowMenuItem(_ref) {
  var _classNames;

  var href = _ref.href,
      className = _ref.className,
      itemText = _ref.itemText,
      hasDivider = _ref.hasDivider,
      isDelete = _ref.isDelete,
      disabled = _ref.disabled,
      closeMenu = _ref.closeMenu,
      onClick = _ref.onClick,
      primaryFocus = _ref.primaryFocus,
      floatingMenu = _ref.floatingMenu,
      wrapperClassName = _ref.wrapperClassName,
      requireTitle = _ref.requireTitle,
      other = _objectWithoutProperties(_ref, ["href", "className", "itemText", "hasDivider", "isDelete", "disabled", "closeMenu", "onClick", "primaryFocus", "floatingMenu", "wrapperClassName", "requireTitle"]);

  var overflowMenuBtnClasses = classNames("".concat(prefix, "--overflow-menu-options__btn"), className);
  var overflowMenuItemClasses = classNames("".concat(prefix, "--overflow-menu-options__option"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--overflow-menu--divider"), hasDivider), _defineProperty(_classNames, "".concat(prefix, "--overflow-menu-options__option--danger"), isDelete), _defineProperty(_classNames, "".concat(prefix, "--overflow-menu-options__option--disabled"), disabled), _classNames), wrapperClassName);

  var handleClick = function handleClick(evt) {
    onClick(evt);
    closeMenu();
  };

  var primaryFocusProp = {};

  if (primaryFocus && floatingMenu) {
    primaryFocusProp = {
      'data-floating-menu-primary-focus': true
    };
  } else if (primaryFocus) {
    primaryFocusProp = {
      'data-overflow-menu-primary-focus': true
    };
  }

  var TagToUse = href ? 'a' : 'button';
  return React.createElement("li", {
    className: overflowMenuItemClasses,
    role: "menuitem"
  }, React.createElement(TagToUse, _extends({}, other, primaryFocusProp, {
    href: href,
    className: overflowMenuBtnClasses,
    disabled: disabled,
    onClick: handleClick,
    title: requireTitle ? itemText : null,
    tabIndex: disabled ? -1 : 0
  }), itemText));
};

OverflowMenuItem.propTypes = {
  /**
   * The CSS class name to be placed on the button element
   */
  className: PropTypes.string,

  /**
   * The CSS class name to be placed on the wrapper list item element
   */
  wrapperClassName: PropTypes.string,

  /**
   * The text in the menu item.
   */
  itemText: PropTypes.node.isRequired,

  /**
   * If given, overflow item will render as a link with the given href
   */
  href: PropTypes.string,

  /**
   * `true` to make this menu item a divider.
   */
  hasDivider: PropTypes.bool,

  /**
   * `true` to make this menu item a "danger button".
   */
  isDelete: PropTypes.bool,

  /**
   * `true` to make this menu item disabled.
   */
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,

  /**
   * A callback to tell the parent menu component that the menu should be closed.
   */
  closeMenu: PropTypes.func,

  /**
   * `true` if this menu item should get focus when the menu gets open.
   */
  primaryFocus: PropTypes.bool,

  /**
   * `true` if this menu item belongs to a floating OverflowMenu
   */
  floatingMenu: PropTypes.bool,

  /**
   * `true` if this menu item has long text and requires a browser tooltip
   */
  requireTitle: PropTypes.bool
};
OverflowMenuItem.defaultProps = {
  hasDivider: false,
  isDelete: false,
  disabled: false,
  itemText: 'Provide itemText',
  onClick: function onClick() {}
};
export default OverflowMenuItem;