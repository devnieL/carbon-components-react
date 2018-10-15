"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StructuredListSkeleton = function StructuredListSkeleton(_ref) {
  var rowCount = _ref.rowCount,
      border = _ref.border;
  var StructuredListSkeletonClasses = (0, _classnames.default)({
    'bx--skeleton': true,
    'bx--structured-list': true,
    'bx--structured-list--border': border
  });
  var rows = [];

  for (var i = 0; i < rowCount; i++) {
    rows.push(_react.default.createElement("div", {
      className: "bx--structured-list-row",
      key: i
    }, _react.default.createElement("div", {
      className: "bx--structured-list-td"
    }), _react.default.createElement("div", {
      className: "bx--structured-list-td"
    }), _react.default.createElement("div", {
      className: "bx--structured-list-td"
    })));
  }

  return _react.default.createElement("section", {
    className: StructuredListSkeletonClasses
  }, _react.default.createElement("div", {
    className: "bx--structured-list-thead"
  }, _react.default.createElement("div", {
    className: "bx--structured-list-row bx--structured-list-row--header-row"
  }, _react.default.createElement("div", {
    className: "bx--structured-list-th"
  }, _react.default.createElement("span", null)), _react.default.createElement("div", {
    className: "bx--structured-list-th"
  }, _react.default.createElement("span", null)), _react.default.createElement("div", {
    className: "bx--structured-list-th"
  }, _react.default.createElement("span", null)))), _react.default.createElement("div", {
    className: "bx--structured-list-tbody"
  }, rows));
};

StructuredListSkeleton.propTypes = {
  /**
   * number of table rows
   */
  rowCount: _propTypes.default.number,
  border: _propTypes.default.bool
};
StructuredListSkeleton.defaultProps = {
  rowCount: 5,
  border: false
};
var _default = StructuredListSkeleton;
exports.default = _default;