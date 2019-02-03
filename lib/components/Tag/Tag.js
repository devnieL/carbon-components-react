"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.types = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;
var TYPES = _FeatureFlags.componentsX ? {
  basic: 'Component',
  red: 'Red',
  magenta: 'Magenta',
  purple: 'Purple',
  blue: 'Blue',
  cyan: 'Cyan',
  teal: 'Teal',
  green: 'Green',
  'cool-gray': 'Cool-Gray',
  'warm-gray': 'Warm-Gray'
} : {
  beta: 'Beta',
  community: 'Community',
  custom: 'Custom',
  dedicated: 'Dedicated',
  experimental: 'Experimental',
  ibm: 'IBM',
  local: 'Local',
  private: 'Private',
  'third-party': 'Third-Party'
};

var Tag = function Tag(_ref) {
  var children = _ref.children,
      className = _ref.className,
      type = _ref.type,
      other = _objectWithoutProperties(_ref, ["children", "className", "type"]);

  var tagClass = "".concat(prefix, "--tag--").concat(type);
  var tagClasses = (0, _classnames.default)("".concat(prefix, "--tag"), tagClass, className);
  return _react.default.createElement("span", _extends({
    className: tagClasses
  }, other), children !== null && children !== undefined ? children : TYPES[type]);
};

Tag.propTypes = {
  /**
   * Provide content to be rendered inside of a <Tag>
   */
  children: _propTypes.default.node,

  /**
   * Provide a custom className that is applied to the containing <span>
   */
  className: _propTypes.default.string,

  /**
   * Specify the type of the <Tag>
   */
  type: _propTypes.default.oneOf(Object.keys(TYPES)).isRequired
};
var types = Object.keys(TYPES);
exports.types = types;
var _default = Tag;
exports.default = _default;