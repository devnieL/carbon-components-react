function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { iconInfoGlyph } from 'carbon-icons';
import classNames from 'classnames';
import warning from 'warning';
import { settings } from 'carbon-components';
import Icon from '../Icon';
var prefix = settings.prefix;
var didWarnAboutDeprecation = false;

var TooltipSimple = function TooltipSimple(_ref) {
  var children = _ref.children,
      className = _ref.className,
      position = _ref.position,
      text = _ref.text,
      showIcon = _ref.showIcon,
      icon = _ref.icon,
      iconName = _ref.iconName,
      iconDescription = _ref.iconDescription,
      other = _objectWithoutProperties(_ref, ["children", "className", "position", "text", "showIcon", "icon", "iconName", "iconDescription"]);

  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning(didWarnAboutDeprecation, 'The `TooltipSimple` component has been deprecated and will be removed ' + 'in the next major release of `carbon-components-react`. Please use ' + '`TooltipDefinition` or `TooltipIcon` instead.') : void 0;
    didWarnAboutDeprecation = true;
  }

  var tooltipClasses = classNames("".concat(prefix, "--tooltip--simple__").concat(position));
  var tooltipWrapperClasses = classNames("".concat(prefix, "--tooltip--simple"), className);
  return React.createElement("div", {
    className: tooltipWrapperClasses
  }, showIcon ? React.createElement(React.Fragment, null, children, React.createElement("div", _extends({
    className: tooltipClasses,
    "data-tooltip-text": text,
    tabIndex: "0",
    role: "button"
  }, other), React.createElement(Icon, {
    role: "img",
    icon: !icon && !iconName ? iconInfoGlyph : icon,
    name: iconName,
    description: iconDescription
  }))) : React.createElement("div", _extends({
    className: tooltipClasses,
    "data-tooltip-text": text,
    tabIndex: "0",
    role: "button"
  }, other), children));
};

TooltipSimple.propTypes = {
  /**
   * The content to put into the trigger UI, except the (default) tooltip icon.
   */
  children: PropTypes.node,

  /**
   * The CSS class names of the tooltip.
   */
  className: PropTypes.string,

  /**
   * Where to put the tooltip, relative to the trigger UI.
   */
  position: PropTypes.oneOf(['bottom', 'top']),

  /**
   * Contents to put into the tooltip.
   */
  text: PropTypes.string.isRequired,

  /**
   * `true` to show the default tooltip icon.
   */
  showIcon: PropTypes.bool,

  /**
   * The the default tooltip icon.
   */
  icon: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string.isRequired,
    svgData: PropTypes.object.isRequired
  }),

  /**
   * The name of the default tooltip icon.
   */
  iconName: PropTypes.string,

  /**
   * The description of the default tooltip icon, to be put in its SVG `<title>` element.
   */
  iconDescription: PropTypes.string
};
TooltipSimple.defaultProps = {
  position: 'top',
  showIcon: true,
  iconDescription: 'tooltip',
  text: 'Provide text'
};
export default TooltipSimple;