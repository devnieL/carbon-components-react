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
import classnames from 'classnames';
import { settings } from 'carbon-components';
import Link from '../Link';
var prefix = settings.prefix;

var newChild = function newChild(children, href, prefix) {
  if (typeof children === 'string' && !(href === undefined)) {
    return React.createElement(Link, {
      href: href
    }, children);
  } else {
    return React.cloneElement(React.Children.only(children), {
      className: "".concat(prefix, "--link")
    });
  }
};

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      other = _objectWithoutProperties(_ref, ["children", "className", "href"]);

  var classNames = classnames("".concat(prefix, "--breadcrumb-item"), className);
  return React.createElement("div", _extends({
    className: classNames
  }, other), newChild(children, href, prefix));
};

BreadcrumbItem.propTypes = {
  /**
   * Pass in content that will be inside of the BreadcrumbItem
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Optional string representing the link location for the BreadcrumbItem
   */
  href: PropTypes.string
};
export default BreadcrumbItem;