function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

var TableRow = function TableRow(props) {
  var even = props.even,
      header = props.header,
      className = props.className,
      children = props.children,
      other = _objectWithoutProperties(props, ["even", "header", "className", "children"]);

  var tableRowClasses = classNames(className, 'bx--table-row', {
    'bx--parent-row': !header,
    'bx--parent-row--even': even
  });
  return React.createElement("tr", _extends({}, other, {
    className: tableRowClasses
  }), children);
};

TableRow.propTypes = {
  header: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  even: PropTypes.bool
};
TableRow.defaultProps = {
  header: false
};
export default TableRow;