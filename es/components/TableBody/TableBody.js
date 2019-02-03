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
import TableRow from '../TableRow';
var prefix = settings.prefix;
/**
 * Adds striping to TableRows if the `even` prop wasn’t explicitly set.
 * @param {Array} rows React elements that are children of the `<TableBody>`.
 * @returns {Array} The updated child elements.
 */

var handleRowStriping = function handleRowStriping(rows) {
  var count = 0;
  return rows.map(function (child) {
    // Only make changes if it's a TableRow
    if (child.type === TableRow) {
      // manually increase the TableRow count
      count++; // Don’t override user-set `even` prop

      var even = 'even' in child.props ? child.props.even : count % 2 === 1; // Return a clone of the element with the `even` prop set.

      return React.cloneElement(child, {
        even: even
      });
    }

    return child;
  });
};

var TableBody = function TableBody(props) {
  var children = props.children,
      className = props.className,
      other = _objectWithoutProperties(props, ["children", "className"]);

  var tableBodyClasses = classNames(className, "".concat(prefix, "--table-body"));
  var childArray = React.Children.toArray(children);
  var childrenWithProps = handleRowStriping(childArray);
  return React.createElement("tbody", _extends({}, other, {
    className: tableBodyClasses
  }), childrenWithProps);
};

TableBody.propTypes = {
  /**
   * Provide the contents of your TableBody
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to your TableBody
   */
  className: PropTypes.string
};
export default TableBody;