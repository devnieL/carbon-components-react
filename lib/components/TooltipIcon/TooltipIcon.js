"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var TooltipIcon = function TooltipIcon(_ref) {
  var _cx, _cx2;

  var className = _ref.className,
      children = _ref.children,
      direction = _ref.direction,
      tooltipText = _ref.tooltipText,
      rest = _objectWithoutProperties(_ref, ["className", "children", "direction", "tooltipText"]);

  var tooltipClassName = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, className, !!className), _defineProperty(_cx, "".concat(prefix, "--tooltip-icon"), true), _cx));
  var triggerClassName = (0, _classnames.default)((_cx2 = {}, _defineProperty(_cx2, "".concat(prefix, "--tooltip__trigger"), true), _defineProperty(_cx2, "".concat(prefix, "--tooltip--icon__bottom"), direction === 'bottom'), _defineProperty(_cx2, "".concat(prefix, "--tooltip--icon__top"), direction === 'top'), _cx2));
  return _react.default.createElement("div", _extends({}, rest, {
    className: tooltipClassName
  }), _react.default.createElement("button", {
    className: triggerClassName,
    "aria-label": tooltipText
  }, children));
};

TooltipIcon.propTypes = {
  /**
   * Specify an icon as children that will be used as the tooltip trigger. This
   * can be an icon from our Icon component, or a custom SVG element.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Specify the direction of the tooltip. Can be either bottom or top.
   */
  direction: _propTypes.default.oneOf(['bottom', 'top']).isRequired,

  /**
   * Provide the text that will be displayed in the tooltip when it is rendered.
   */
  tooltipText: _propTypes.default.node.isRequired
};
TooltipIcon.defaultProps = {
  direction: 'bottom'
};
var _default = TooltipIcon;
exports.default = _default;