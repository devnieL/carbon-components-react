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
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { iconChevronRight } from 'carbon-icons';
import { settings } from 'carbon-components';
import Icon from '../Icon';
import TableCell from './TableCell';
var prefix = settings.prefix;

var TableExpandRow = function TableExpandRow(_ref) {
  var _cx;

  var ariaLabel = _ref.ariaLabel,
      rowClassName = _ref.className,
      children = _ref.children,
      isExpanded = _ref.isExpanded,
      onExpand = _ref.onExpand,
      expandIconDescription = _ref.expandIconDescription,
      isSelected = _ref.isSelected,
      rest = _objectWithoutProperties(_ref, ["ariaLabel", "className", "children", "isExpanded", "onExpand", "expandIconDescription", "isSelected"]);

  var className = cx((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--parent-row-v2"), true), _defineProperty(_cx, "".concat(prefix, "--expandable-row-v2"), isExpanded), _defineProperty(_cx, "".concat(prefix, "--data-table-v2--selected"), isSelected), _cx), rowClassName);
  var previousValue = isExpanded ? 'collapsed' : undefined;
  return React.createElement("tr", _extends({}, rest, {
    className: className,
    "data-parent-row": true
  }), React.createElement(TableCell, {
    className: "".concat(prefix, "--table-expand-v2"),
    "data-previous-value": previousValue
  }, React.createElement("button", {
    className: "".concat(prefix, "--table-expand-v2__button"),
    onClick: onExpand,
    "aria-label": ariaLabel
  }, React.createElement(Icon, {
    className: "".concat(prefix, "--table-expand-v2__svg"),
    icon: iconChevronRight,
    description: expandIconDescription
  }))), children);
};

TableExpandRow.propTypes = {
  /**
   * Specify the string read by a voice reader when the expand trigger is
   * focused
   */
  ariaLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,

  /**
   * Specify whether this row is expanded or not. This helps coordinate data
   * attributes so that `TableExpandRow` and `TableExapndedRow` work together
   */
  isExpanded: PropTypes.bool.isRequired,

  /**
   * Hook for when a listener initiates a request to expand the given row
   */
  onExpand: PropTypes.func.isRequired,

  /**
   * The description of the chevron right icon, to be put in its SVG `<title>` element.
   */
  expandIconDescription: PropTypes.string
};
export default TableExpandRow;