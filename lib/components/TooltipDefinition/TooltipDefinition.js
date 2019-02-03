"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _carbonComponents = require("carbon-components");

var _setupGetInstanceId = _interopRequireDefault(require("../../tools/setupGetInstanceId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;
var getInstanceId = (0, _setupGetInstanceId.default)();

var TooltipDefinition = function TooltipDefinition(_ref) {
  var _cx, _cx2;

  var id = _ref.id,
      className = _ref.className,
      children = _ref.children,
      direction = _ref.direction,
      tooltipText = _ref.tooltipText,
      rest = _objectWithoutProperties(_ref, ["id", "className", "children", "direction", "tooltipText"]);

  var tooltipId = id || "definition-tooltip-".concat(getInstanceId());
  var definitionClassName = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, className, !!className), _defineProperty(_cx, "".concat(prefix, "--tooltip--definition"), true), _cx));
  var directionClassName = (0, _classnames.default)((_cx2 = {}, _defineProperty(_cx2, "".concat(prefix, "--tooltip--definition__bottom"), direction === 'bottom'), _defineProperty(_cx2, "".concat(prefix, "--tooltip--definition__top"), direction === 'top'), _cx2));
  return _react.default.createElement("div", _extends({}, rest, {
    className: definitionClassName
  }), _react.default.createElement("button", {
    className: "".concat(prefix, "--tooltip__trigger"),
    "aria-describedby": tooltipId
  }, children), _react.default.createElement("div", {
    id: tooltipId,
    className: directionClassName,
    role: "tooltip",
    "aria-label": tooltipText
  }, _react.default.createElement("span", {
    className: "".concat(prefix, "--tooltip__caret")
  }), _react.default.createElement("p", null, tooltipText)));
};

TooltipDefinition.propTypes = {
  /**
   * Specify the tooltip trigger text that is rendered to the UI for the user to
   * interact with in order to display the tooltip.
   */
  children: _propTypes.default.string.isRequired,

  /**
   * Specify the direction of the tooltip. Can be either bottom or top.
   */
  direction: _propTypes.default.oneOf(['top', 'bottom']).isRequired,

  /**
   * Optionally specify a custom id for the tooltip. If one is not provided, we
   * generate a unique id for you.
   */
  id: _propTypes.default.string,

  /**
   * Provide the text that will be displayed in the tooltip when it is rendered.
   */
  tooltipText: _propTypes.default.node.isRequired
};
TooltipDefinition.defaultProps = {
  direction: 'bottom'
};
var _default = TooltipDefinition;
exports.default = _default;