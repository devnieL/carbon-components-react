import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

var StructuredListSkeleton = function StructuredListSkeleton(_ref) {
  var rowCount = _ref.rowCount,
      border = _ref.border;
  var StructuredListSkeletonClasses = classNames({
    'bx--skeleton': true,
    'bx--structured-list': true,
    'bx--structured-list--border': border
  });
  var rows = [];

  for (var i = 0; i < rowCount; i++) {
    rows.push(React.createElement("div", {
      className: "bx--structured-list-row",
      key: i
    }, React.createElement("div", {
      className: "bx--structured-list-td"
    }), React.createElement("div", {
      className: "bx--structured-list-td"
    }), React.createElement("div", {
      className: "bx--structured-list-td"
    })));
  }

  return React.createElement("section", {
    className: StructuredListSkeletonClasses
  }, React.createElement("div", {
    className: "bx--structured-list-thead"
  }, React.createElement("div", {
    className: "bx--structured-list-row bx--structured-list-row--header-row"
  }, React.createElement("div", {
    className: "bx--structured-list-th"
  }, React.createElement("span", null)), React.createElement("div", {
    className: "bx--structured-list-th"
  }, React.createElement("span", null)), React.createElement("div", {
    className: "bx--structured-list-th"
  }, React.createElement("span", null)))), React.createElement("div", {
    className: "bx--structured-list-tbody"
  }, rows));
};

StructuredListSkeleton.propTypes = {
  /**
   * number of table rows
   */
  rowCount: PropTypes.number,
  border: PropTypes.bool
};
StructuredListSkeleton.defaultProps = {
  rowCount: 5,
  border: false
};
export default StructuredListSkeleton;