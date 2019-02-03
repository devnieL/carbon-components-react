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
import { iconCaretDown, iconCaretUp } from 'carbon-icons';
import { settings } from 'carbon-components';
import Icon from '../Icon';
var prefix = settings.prefix;

var TableHeader = function TableHeader(props) {
  var children = props.children,
      className = props.className,
      iconClassName = props.iconClassName,
      sortDir = props.sortDir,
      iconDescriptionAscending = props.iconDescriptionAscending,
      iconDescriptionDescending = props.iconDescriptionDescending,
      other = _objectWithoutProperties(props, ["children", "className", "iconClassName", "sortDir", "iconDescriptionAscending", "iconDescriptionDescending"]);

  var tableHeaderClasses = classNames(className, "".concat(prefix, "--table-header"));
  var iconClasses = classNames(iconClassName, "".concat(prefix, "--table-sort__svg"));
  var sortContent;

  if (sortDir) {
    sortContent = sortDir === 'DESC' ? React.createElement(Icon, {
      icon: iconCaretDown,
      description: iconDescriptionDescending,
      className: iconClasses
    }) : React.createElement(Icon, {
      icon: iconCaretUp,
      description: iconDescriptionAscending,
      className: iconClasses
    });
  } else {
    sortContent = '';
  }

  return React.createElement("th", _extends({}, other, {
    className: tableHeaderClasses
  }), children, sortContent);
};

TableHeader.propTypes = {
  /**
   * Provide the contents of your TableHeader.
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to your TableHeader.
   */
  className: PropTypes.string,

  /**
   * The CSS class name for the icon.
   */
  iconClassName: PropTypes.string,

  /**
   * The description for the ascending icon.
   */
  iconDescriptionAscending: PropTypes.string,

  /**
   * The description for the descending icon.
   */
  iconDescriptionDescending: PropTypes.string,

  /**
   * The sorting direction, `DESC` or `ASC`.
   */
  sortDir: PropTypes.string
};
TableHeader.defaultProps = {
  iconDescriptionAscending: 'ascending sort',
  iconDescriptionDescending: 'descending sort'
};
export default TableHeader;