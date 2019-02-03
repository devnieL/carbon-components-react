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

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var Footer = function Footer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      labelOne = _ref.labelOne,
      linkTextOne = _ref.linkTextOne,
      linkHrefOne = _ref.linkHrefOne,
      labelTwo = _ref.labelTwo,
      linkTextTwo = _ref.linkTextTwo,
      linkHrefTwo = _ref.linkHrefTwo,
      buttonText = _ref.buttonText,
      other = _objectWithoutProperties(_ref, ["className", "children", "labelOne", "linkTextOne", "linkHrefOne", "labelTwo", "linkTextTwo", "linkHrefTwo", "buttonText"]);

  var classNames = (0, _classnames.default)("".concat(prefix, "--footer ").concat(prefix, "--footer--bottom-fixed"), className);
  var footer = children ? _react.default.createElement("footer", _extends({}, other, {
    className: classNames
  }), children) : _react.default.createElement("footer", _extends({}, other, {
    className: classNames
  }), _react.default.createElement("div", {
    className: "".concat(prefix, "--footer-info")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--footer-info__item")
  }, _react.default.createElement("p", {
    className: "".concat(prefix, "--footer-label")
  }, labelOne), _react.default.createElement(_Link.default, {
    href: linkHrefOne
  }, linkTextOne)), _react.default.createElement("div", {
    className: "".concat(prefix, "--footer-info__item")
  }, _react.default.createElement("p", {
    className: "".concat(prefix, "--footer-label")
  }, labelTwo), _react.default.createElement(_Link.default, {
    href: linkHrefTwo
  }, linkTextTwo))), _react.default.createElement("div", {
    className: "".concat(prefix, "--footer-cta")
  }, _react.default.createElement(_Button.default, {
    type: "submit"
  }, buttonText)));
  return footer;
};

Footer.propTypes = {
  /**
   * Provide children to be rendered instead of the default footer information
   */
  children: _propTypes.default.node,

  /**
   * Provide a custom className to be applied to the containing <footer> node
   */
  className: _propTypes.default.string,

  /**
   * Provide the label for the first footer information item
   */
  labelOne: _propTypes.default.string,

  /**
   * Provide the text for the first footer information item
   */
  linkTextOne: _propTypes.default.string,

  /**
   * Provide the href attribute for the first footer information item
   */
  linkHrefOne: _propTypes.default.string,

  /**
   * Provide the label for the second footer information item
   */
  labelTwo: _propTypes.default.string,

  /**
   * Provide the text for the second footer information item
   */
  linkTextTwo: _propTypes.default.string,

  /**
   * Provide the href for the second footer information item
   */
  linkHrefTwo: _propTypes.default.string,

  /**
   * Provide the text for the footer button
   */
  buttonText: _propTypes.default.string
};
Footer.defaultProps = {
  labelOne: 'Need Help?',
  linkTextOne: 'Contact Bluemix Sales',
  linkHrefOne: '#',
  labelTwo: 'Estimate Monthly Cost',
  linkTextTwo: 'Cost Calculator',
  linkHrefTwo: '#',
  buttonText: 'Create'
};
var _default = Footer;
exports.default = _default;