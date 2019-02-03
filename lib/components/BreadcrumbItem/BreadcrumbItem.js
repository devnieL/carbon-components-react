"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _Link = _interopRequireDefault(require("../Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var newChild = function newChild(children, href, prefix) {
  if (typeof children === 'string' && !(href === undefined)) {
    return _react.default.createElement(_Link.default, {
      href: href
    }, children);
  } else {
    return _react.default.cloneElement(_react.default.Children.only(children), {
      className: "".concat(prefix, "--link")
    });
  }
};

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      other = _objectWithoutProperties(_ref, ["children", "className", "href"]);

  var classNames = (0, _classnames.default)("".concat(prefix, "--breadcrumb-item"), className);
  return _react.default.createElement("div", _extends({
    className: classNames
  }, other), newChild(children, href, prefix));
};

BreadcrumbItem.propTypes = {
  /**
   * Pass in content that will be inside of the BreadcrumbItem
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: _propTypes.default.string,

  /**
   * Optional string representing the link location for the BreadcrumbItem
   */
  href: _propTypes.default.string
};
var _default = BreadcrumbItem;
exports.default = _default;