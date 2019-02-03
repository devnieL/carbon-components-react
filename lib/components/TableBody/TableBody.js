"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _TableRow = _interopRequireDefault(require("../TableRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;
/**
 * Adds striping to TableRows if the `even` prop wasn’t explicitly set.
 * @param {Array} rows React elements that are children of the `<TableBody>`.
 * @returns {Array} The updated child elements.
 */

var handleRowStriping = function handleRowStriping(rows) {
  var count = 0;
  return rows.map(function (child) {
    // Only make changes if it's a TableRow
    if (child.type === _TableRow.default) {
      // manually increase the TableRow count
      count++; // Don’t override user-set `even` prop

      var even = 'even' in child.props ? child.props.even : count % 2 === 1; // Return a clone of the element with the `even` prop set.

      return _react.default.cloneElement(child, {
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

  var tableBodyClasses = (0, _classnames.default)(className, "".concat(prefix, "--table-body"));

  var childArray = _react.default.Children.toArray(children);

  var childrenWithProps = handleRowStriping(childArray);
  return _react.default.createElement("tbody", _extends({}, other, {
    className: tableBodyClasses
  }), childrenWithProps);
};

TableBody.propTypes = {
  /**
   * Provide the contents of your TableBody
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to your TableBody
   */
  className: _propTypes.default.string
};
var _default = TableBody;
exports.default = _default;