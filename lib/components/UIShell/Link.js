"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LinkPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Link is a custom component that allows us to supporting rendering elements
 * other than `a` in our markup. The goal is to allow users to support passing
 * in their own components to support use-cases like `react-router` or
 * `@reach/router`
 */
var Link = function Link(_ref) {
  var element = _ref.element,
      rest = _objectWithoutProperties(_ref, ["element"]);

  return _react.default.createElement(element, rest);
};

var LinkPropTypes = {
  /**
   * The base element to use to build the link. Defaults to `a`, can also accept
   * alternative tag names or custom components like `Link` from `react-router`.
   */
  element: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node, _propTypes.default.func])
};
exports.LinkPropTypes = LinkPropTypes;
Link.propTypes = LinkPropTypes;
Link.defaultProps = {
  element: 'a'
};
var _default = Link;
exports.default = _default;