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

var TableRow = function TableRow(props) {
  var _classNames;

  var even = props.even,
      header = props.header,
      className = props.className,
      children = props.children,
      other = _objectWithoutProperties(props, ["even", "header", "className", "children"]);

  var tableRowClasses = classNames(className, "".concat(prefix, "--table-row"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--parent-row"), !header), _defineProperty(_classNames, "".concat(prefix, "--parent-row--even"), even), _classNames));
  return React.createElement("tr", _extends({}, other, {
    className: tableRowClasses
  }), children);
};

TableRow.propTypes = {
  /**
   * Specify whether your TableRow should be used as a header row
   */
  header: PropTypes.bool,

  /**
   * Specify an optional className to be applied to your TableRow
   */
  className: PropTypes.string,

  /**
   * Provide the contents of your TableRow
   */
  children: PropTypes.node,

  /**
   * Specify whether the TableRow is at an even position
   */
  even: PropTypes.bool
};
TableRow.defaultProps = {
  header: false
};
export default TableRow;