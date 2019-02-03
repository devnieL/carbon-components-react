"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _carbonIcons = require("carbon-icons");

var _classnames = _interopRequireDefault(require("classnames"));

var _warning = _interopRequireDefault(require("warning"));

var _carbonComponents = require("carbon-components");

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;
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
    process.env.NODE_ENV !== "production" ? (0, _warning.default)(didWarnAboutDeprecation, 'The `TooltipSimple` component has been deprecated and will be removed ' + 'in the next major release of `carbon-components-react`. Please use ' + '`TooltipDefinition` or `TooltipIcon` instead.') : void 0;
    didWarnAboutDeprecation = true;
  }

  var tooltipClasses = (0, _classnames.default)("".concat(prefix, "--tooltip--simple__").concat(position));
  var tooltipWrapperClasses = (0, _classnames.default)("".concat(prefix, "--tooltip--simple"), className);
  return _react.default.createElement("div", {
    className: tooltipWrapperClasses
  }, showIcon ? _react.default.createElement(_react.default.Fragment, null, children, _react.default.createElement("div", _extends({
    className: tooltipClasses,
    "data-tooltip-text": text,
    tabIndex: "0",
    role: "button"
  }, other), _react.default.createElement(_Icon.default, {
    role: "img",
    icon: !icon && !iconName ? _carbonIcons.iconInfoGlyph : icon,
    name: iconName,
    description: iconDescription
  }))) : _react.default.createElement("div", _extends({
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
  children: _propTypes.default.node,

  /**
   * The CSS class names of the tooltip.
   */
  className: _propTypes.default.string,

  /**
   * Where to put the tooltip, relative to the trigger UI.
   */
  position: _propTypes.default.oneOf(['bottom', 'top']),

  /**
   * Contents to put into the tooltip.
   */
  text: _propTypes.default.string.isRequired,

  /**
   * `true` to show the default tooltip icon.
   */
  showIcon: _propTypes.default.bool,

  /**
   * The the default tooltip icon.
   */
  icon: _propTypes.default.shape({
    width: _propTypes.default.string,
    height: _propTypes.default.string,
    viewBox: _propTypes.default.string.isRequired,
    svgData: _propTypes.default.object.isRequired
  }),

  /**
   * The name of the default tooltip icon.
   */
  iconName: _propTypes.default.string,

  /**
   * The description of the default tooltip icon, to be put in its SVG `<title>` element.
   */
  iconDescription: _propTypes.default.string
};
TooltipSimple.defaultProps = {
  position: 'top',
  showIcon: true,
  iconDescription: 'tooltip',
  text: 'Provide text'
};
var _default = TooltipSimple;
exports.default = _default;