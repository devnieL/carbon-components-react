function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { iconInfoGlyph } from 'carbon-icons';
import classNames from 'classnames';
import warning from 'warning';
import Icon from '../Icon';
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

  var tooltipClasses = classNames("bx--tooltip--simple__".concat(position));
  var tooltipWrapperClasses = classNames("bx--tooltip--simple", className);
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
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(['bottom', 'top']),
  text: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
  icon: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string.isRequired,
    svgData: PropTypes.object.isRequired
  }),
  iconName: PropTypes.string,
  iconDescription: PropTypes.string
};
TooltipSimple.defaultProps = {
  position: 'top',
  showIcon: true,
  iconDescription: 'tooltip',
  text: 'Provide text'
};
export default TooltipSimple;