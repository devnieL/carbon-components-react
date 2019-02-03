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
import warning from 'warning';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
var didWarnAboutDeprecation = false;

var DropdownItem = function DropdownItem(_ref) {
  var _classNames;

  var className = _ref.className,
      value = _ref.value,
      isDropdownOpen = _ref.isDropdownOpen,
      itemText = _ref.itemText,
      onClick = _ref.onClick,
      onKeyPress = _ref.onKeyPress,
      href = _ref.href,
      selected = _ref.selected,
      other = _objectWithoutProperties(_ref, ["className", "value", "isDropdownOpen", "itemText", "onClick", "onKeyPress", "href", "selected"]);

  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning(didWarnAboutDeprecation, 'The `DropdownItem` component has been deprecated and will be ' + 'removed in the next major release of `carbon-components-react`. ' + 'Please use `DropdownV2` instead.') : void 0;
    didWarnAboutDeprecation = true;
  }

  var dropdownItemClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--dropdown-item"), true), _defineProperty(_classNames, className, className), _classNames));

  var handleClick = function handleClick() {
    var info = {
      value: value,
      itemText: itemText
    };
    onClick(info);
  };

  var handleKeypress = function handleKeypress() {
    var info = {
      value: value,
      itemText: itemText
    };
    onKeyPress(info);
  };

  return React.createElement("li", _extends({}, other, {
    value: value,
    className: dropdownItemClasses,
    onClick: handleClick,
    onKeyPress: handleKeypress,
    tabIndex: -1,
    "aria-selected": selected,
    role: "option"
  }), React.createElement("a", {
    tabIndex: isDropdownOpen ? 0 : -1,
    href: href,
    onClick:
    /* istanbul ignore next */
    function onClick(evt) {
      return evt.preventDefault();
    },
    className: "".concat(prefix, "--dropdown-link")
  }, itemText));
};

DropdownItem.propTypes = {
  /**
   * Specify the value of the <DropdownItem>
   */
  value: PropTypes.string.isRequired,

  /**
   * Specify the content of the <DropdownItem>
   */
  itemText: PropTypes.string.isRequired,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Provide an optional function to be called when the container node is
   * clicked
   */
  onClick: PropTypes.func,

  /**
   * Provide an optional function to be called when a key is pressed on the <DropdownItem>
   */
  onKeyPress: PropTypes.func,

  /**
   * Optional string representing the link location for the <DropdownItem>
   */
  href: PropTypes.string,

  /**
   * Specify whether the <DropdownItem> is selected
   */
  selected: PropTypes.bool
};
DropdownItem.defaultProps = {
  onClick:
  /* istanbul ignore next */
  function onClick() {},
  onKeyPress:
  /* istanbul ignore next */
  function onKeyPress() {},
  href: '',
  selected: false
};
export default DropdownItem;