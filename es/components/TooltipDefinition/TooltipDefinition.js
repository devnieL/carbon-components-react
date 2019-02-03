function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import setupGetInstanceId from '../../tools/setupGetInstanceId';
var prefix = settings.prefix;
var getInstanceId = setupGetInstanceId();

var TooltipDefinition = function TooltipDefinition(_ref) {
  var _cx, _cx2;

  var id = _ref.id,
      className = _ref.className,
      children = _ref.children,
      direction = _ref.direction,
      tooltipText = _ref.tooltipText,
      rest = _objectWithoutProperties(_ref, ["id", "className", "children", "direction", "tooltipText"]);

  var tooltipId = id || "definition-tooltip-".concat(getInstanceId());
  var definitionClassName = cx((_cx = {}, _defineProperty(_cx, className, !!className), _defineProperty(_cx, "".concat(prefix, "--tooltip--definition"), true), _cx));
  var directionClassName = cx((_cx2 = {}, _defineProperty(_cx2, "".concat(prefix, "--tooltip--definition__bottom"), direction === 'bottom'), _defineProperty(_cx2, "".concat(prefix, "--tooltip--definition__top"), direction === 'top'), _cx2));
  return React.createElement("div", _extends({}, rest, {
    className: definitionClassName
  }), React.createElement("button", {
    className: "".concat(prefix, "--tooltip__trigger"),
    "aria-describedby": tooltipId
  }, children), React.createElement("div", {
    id: tooltipId,
    className: directionClassName,
    role: "tooltip",
    "aria-label": tooltipText
  }, React.createElement("span", {
    className: "".concat(prefix, "--tooltip__caret")
  }), React.createElement("p", null, tooltipText)));
};

TooltipDefinition.propTypes = {
  /**
   * Specify the tooltip trigger text that is rendered to the UI for the user to
   * interact with in order to display the tooltip.
   */
  children: PropTypes.string.isRequired,

  /**
   * Specify the direction of the tooltip. Can be either bottom or top.
   */
  direction: PropTypes.oneOf(['top', 'bottom']).isRequired,

  /**
   * Optionally specify a custom id for the tooltip. If one is not provided, we
   * generate a unique id for you.
   */
  id: PropTypes.string,

  /**
   * Provide the text that will be displayed in the tooltip when it is rendered.
   */
  tooltipText: PropTypes.node.isRequired
};
TooltipDefinition.defaultProps = {
  direction: 'bottom'
};
export default TooltipDefinition;