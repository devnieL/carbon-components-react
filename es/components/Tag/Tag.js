function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { componentsX } from '../../internal/FeatureFlags';
var prefix = settings.prefix;
var TYPES = componentsX ? {
  basic: 'Component',
  red: 'Red',
  magenta: 'Magenta',
  purple: 'Purple',
  blue: 'Blue',
  cyan: 'Cyan',
  teal: 'Teal',
  green: 'Green',
  'cool-gray': 'Cool-Gray',
  'warm-gray': 'Warm-Gray'
} : {
  beta: 'Beta',
  community: 'Community',
  custom: 'Custom',
  dedicated: 'Dedicated',
  experimental: 'Experimental',
  ibm: 'IBM',
  local: 'Local',
  private: 'Private',
  'third-party': 'Third-Party'
};

var Tag = function Tag(_ref) {
  var children = _ref.children,
      className = _ref.className,
      type = _ref.type,
      other = _objectWithoutProperties(_ref, ["children", "className", "type"]);

  var tagClass = "".concat(prefix, "--tag--").concat(type);
  var tagClasses = classNames("".concat(prefix, "--tag"), tagClass, className);
  return React.createElement("span", _extends({
    className: tagClasses
  }, other), children !== null && children !== undefined ? children : TYPES[type]);
};

Tag.propTypes = {
  /**
   * Provide content to be rendered inside of a <Tag>
   */
  children: PropTypes.node,

  /**
   * Provide a custom className that is applied to the containing <span>
   */
  className: PropTypes.string,

  /**
   * Specify the type of the <Tag>
   */
  type: PropTypes.oneOf(Object.keys(TYPES)).isRequired
};
export var types = Object.keys(TYPES);
export default Tag;