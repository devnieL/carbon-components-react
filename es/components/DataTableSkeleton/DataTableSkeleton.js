function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

var DataTableSkeleton = function DataTableSkeleton(_ref) {
  var rowCount = _ref.rowCount,
      zebra = _ref.zebra,
      compact = _ref.compact,
      other = _objectWithoutProperties(_ref, ["rowCount", "zebra", "compact"]);

  var dataTableSkeletonClasses = classNames({
    'bx--skeleton': true,
    'bx--data-table-v2': true,
    'bx--data-table-v2--zebra': zebra,
    'bx--data-table-v2--compact': compact
  });
  var rows = [];
  var rowRepeat = rowCount - 1;

  for (var i = 0; i < rowRepeat; i++) {
    rows.push(React.createElement("tr", {
      key: i
    }, React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)));
  }

  return React.createElement("table", _extends({
    className: dataTableSkeletonClasses
  }, other), React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null), React.createElement("th", null), React.createElement("th", null), React.createElement("th", null), React.createElement("th", null))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("span", null)), React.createElement("td", null, React.createElement("span", null)), React.createElement("td", null, React.createElement("span", null)), React.createElement("td", null, React.createElement("span", null)), React.createElement("td", null, React.createElement("span", null))), rows));
};

DataTableSkeleton.propTypes = {
  /**
   * Specify the number of rows that you want to render in the skeleton state
   */
  rowCount: PropTypes.number,

  /**
   * Optionally specify whether you want the DataTable to be zebra striped
   */
  zebra: PropTypes.bool,

  /**
   * Optionally specify whether you want the Skeleton to be rendered as a
   * compact DataTable
   */
  compact: PropTypes.bool
};
DataTableSkeleton.defaultProps = {
  rowCount: 5,
  zebra: false,
  compact: false
};
export default DataTableSkeleton;