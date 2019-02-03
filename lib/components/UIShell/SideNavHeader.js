"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _carbonComponents = require("carbon-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _SideNavIcon = _interopRequireDefault(require("./SideNavIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;

var SideNavHeader = function SideNavHeader(_ref) {
  var customClassName = _ref.className,
      children = _ref.children,
      icon = _ref.icon;
  var className = (0, _classnames.default)("".concat(prefix, "--side-nav__header"), customClassName);
  return _react.default.createElement("header", {
    className: className
  }, _react.default.createElement(_SideNavIcon.default, null, icon), children);
};

SideNavHeader.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: _propTypes.default.string,

  /**
   * Provide an icon to render in the header of the side navigation. Should be
   * an <svg> element.
   */
  icon: _propTypes.default.node.isRequired
};
var _default = SideNavHeader;
exports.default = _default;