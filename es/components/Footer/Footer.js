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
import classnames from 'classnames';
import { settings } from 'carbon-components';
import Link from '../Link';
import Button from '../Button';
var prefix = settings.prefix;

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

  var classNames = classnames("".concat(prefix, "--footer ").concat(prefix, "--footer--bottom-fixed"), className);
  var footer = children ? React.createElement("footer", _extends({}, other, {
    className: classNames
  }), children) : React.createElement("footer", _extends({}, other, {
    className: classNames
  }), React.createElement("div", {
    className: "".concat(prefix, "--footer-info")
  }, React.createElement("div", {
    className: "".concat(prefix, "--footer-info__item")
  }, React.createElement("p", {
    className: "".concat(prefix, "--footer-label")
  }, labelOne), React.createElement(Link, {
    href: linkHrefOne
  }, linkTextOne)), React.createElement("div", {
    className: "".concat(prefix, "--footer-info__item")
  }, React.createElement("p", {
    className: "".concat(prefix, "--footer-label")
  }, labelTwo), React.createElement(Link, {
    href: linkHrefTwo
  }, linkTextTwo))), React.createElement("div", {
    className: "".concat(prefix, "--footer-cta")
  }, React.createElement(Button, {
    type: "submit"
  }, buttonText)));
  return footer;
};

Footer.propTypes = {
  /**
   * Provide children to be rendered instead of the default footer information
   */
  children: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <footer> node
   */
  className: PropTypes.string,

  /**
   * Provide the label for the first footer information item
   */
  labelOne: PropTypes.string,

  /**
   * Provide the text for the first footer information item
   */
  linkTextOne: PropTypes.string,

  /**
   * Provide the href attribute for the first footer information item
   */
  linkHrefOne: PropTypes.string,

  /**
   * Provide the label for the second footer information item
   */
  labelTwo: PropTypes.string,

  /**
   * Provide the text for the second footer information item
   */
  linkTextTwo: PropTypes.string,

  /**
   * Provide the href for the second footer information item
   */
  linkHrefTwo: PropTypes.string,

  /**
   * Provide the text for the footer button
   */
  buttonText: PropTypes.string
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
export default Footer;