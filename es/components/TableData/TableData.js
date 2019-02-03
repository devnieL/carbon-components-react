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
import { iconChevronRight } from 'carbon-icons';
import { settings } from 'carbon-components';
import Icon from '../Icon';
var prefix = settings.prefix;

var TableData = function TableData(props) {
  var children = props.children,
      className = props.className,
      iconClassName = props.iconClassName,
      expanded = props.expanded,
      iconDescription = props.iconDescription,
      other = _objectWithoutProperties(props, ["children", "className", "iconClassName", "expanded", "iconDescription"]);

  var tableDataClasses = classNames(className);
  var iconClasses = classNames(iconClassName, "".concat(prefix, "--table-expand__svg"));
  var style = expanded ? {
    transform: 'rotate(90deg)'
  } : {};
  return React.createElement("td", _extends({}, other, {
    className: tableDataClasses
  }), expanded === undefined ? children : React.createElement(Icon, {
    className: iconClasses,
    icon: iconChevronRight,
    description: iconDescription,
    style: style,
    tabIndex: 0,
    onKeyPress: function onKeyPress(evt) {
      if (props.onClick && (evt.which === 13 || evt.which === 32)) {
        props.onClick(evt);
      }
    }
  }));
};

TableData.propTypes = {
  /**
   * Provide the contents of your TableData.
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to your TableData.
   */
  className: PropTypes.string,

  /**
   * The CSS class name for the icon.
   */
  iconClassName: PropTypes.string,

  /**
   * The icon description.
   */
  iconDescription: PropTypes.string,

  /**
   * The expanded state for expando cell. `undefined` for regular cells.
   */
  expanded: PropTypes.bool
};
TableData.defaultProps = {
  iconDescription: 'expand row'
};
export default TableData;