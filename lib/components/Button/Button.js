"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _types = require("../../prop-types/types");

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var Button = function Button(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      small = _ref.small,
      kind = _ref.kind,
      href = _ref.href,
      tabIndex = _ref.tabIndex,
      type = _ref.type,
      icon = _ref.icon,
      iconDescription = _ref.iconDescription,
      other = _objectWithoutProperties(_ref, ["children", "className", "disabled", "small", "kind", "href", "tabIndex", "type", "icon", "iconDescription"]);

  var buttonClasses = (0, _classnames.default)(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--btn"), true), _defineProperty(_classNames, "".concat(prefix, "--btn--sm"), small), _defineProperty(_classNames, "".concat(prefix, "--btn--primary"), kind === 'primary'), _defineProperty(_classNames, "".concat(prefix, "--btn--danger"), kind === 'danger'), _defineProperty(_classNames, "".concat(prefix, "--btn--secondary"), kind === 'secondary'), _defineProperty(_classNames, "".concat(prefix, "--btn--ghost"), kind === 'ghost'), _defineProperty(_classNames, "".concat(prefix, "--btn--danger--primary"), kind === 'danger--primary'), _defineProperty(_classNames, "".concat(prefix, "--btn--tertiary"), kind === 'tertiary'), _classNames));
  var commonProps = {
    tabIndex: tabIndex,
    className: buttonClasses
  };

  var buttonImage = function () {
    if (_FeatureFlags.componentsX && icon && _react.default.isValidElement(icon)) {
      return icon;
    }

    if (!_FeatureFlags.componentsX && icon) {
      return _react.default.createElement(_Icon.default, {
        icon: Object(icon) === icon ? icon : undefined,
        name: Object(icon) !== icon ? icon : undefined,
        description: iconDescription,
        className: "".concat(prefix, "--btn__icon"),
        "aria-hidden": "true"
      });
    }

    return null;
  }();

  var button = _react.default.createElement("button", _extends({}, other, commonProps, {
    disabled: disabled,
    type: type,
    ref: other.inputref
  }), children, buttonImage);

  var anchor = _react.default.createElement("a", _extends({}, other, commonProps, {
    href: href,
    role: "button",
    ref: other.inputref
  }), children, buttonImage);

  return href ? anchor : button;
};

Button.propTypes = {
  /**
   * Specify the content of your Button
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be added to your Button
   */
  className: _propTypes.default.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: _propTypes.default.bool,

  /**
   * Specify whether the Button should be a small variant
   */
  small: _propTypes.default.bool,

  /**
   * Specify the kind of Button you want to create
   */
  kind: _types.ButtonTypes.buttonKind.isRequired,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: _propTypes.default.string,

  /**
   * Optional prop to specify the tabIndex of the Button
   */
  tabIndex: _propTypes.default.number,

  /**
   * Optional prop to specify the type of the Button
   */
  type: _propTypes.default.oneOf(['button', 'reset', 'submit']),

  /**
   * Optional prop to specify the role of the Button
   */
  role: _propTypes.default.string,

  /**
   * Specify an icon to include in the Button through a string or object
   * representing the SVG data of the icon
   */
  icon: _propTypes.default.oneOfType([_propTypes.default.shape({
    width: _propTypes.default.string,
    height: _propTypes.default.string,
    viewBox: _propTypes.default.string.isRequired,
    svgData: _propTypes.default.object.isRequired
  }), _propTypes.default.string, _propTypes.default.node]),

  /**
   * If specifying the `icon` prop, provide a description for that icon that can
   * be read by screen readers
   */
  iconDescription: function iconDescription(props) {
    if (props.icon && !props.iconDescription) {
      return new Error('icon property specified without also providing an iconDescription property.');
    }

    return undefined;
  }
};
Button.defaultProps = {
  iconDescription: 'Provide icon description if icon is used',
  tabIndex: 0,
  type: 'button',
  disabled: false,
  small: false,
  kind: 'primary'
};
var _default = Button;
exports.default = _default;