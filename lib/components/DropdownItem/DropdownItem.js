"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _warning = _interopRequireDefault(require("warning"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;
var didWarnAboutDeprecation = false;

var DropdownItem = function DropdownItem(_ref) {
  var _classNames;

  var className = _ref.className,
      value = _ref.value,
      isDropdownOpen = _ref.isDropdownOpen,
      itemText = _ref.itemText,
      onClick = _ref.onClick,
      onKeyPress = _ref.onKeyPress,
      href = _ref.href,
      selected = _ref.selected,
      other = _objectWithoutProperties(_ref, ["className", "value", "isDropdownOpen", "itemText", "onClick", "onKeyPress", "href", "selected"]);

  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? (0, _warning.default)(didWarnAboutDeprecation, 'The `DropdownItem` component has been deprecated and will be ' + 'removed in the next major release of `carbon-components-react`. ' + 'Please use `DropdownV2` instead.') : void 0;
    didWarnAboutDeprecation = true;
  }

  var dropdownItemClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--dropdown-item"), true), _defineProperty(_classNames, className, className), _classNames));

  var handleClick = function handleClick() {
    var info = {
      value: value,
      itemText: itemText
    };
    onClick(info);
  };

  var handleKeypress = function handleKeypress() {
    var info = {
      value: value,
      itemText: itemText
    };
    onKeyPress(info);
  };

  return _react.default.createElement("li", _extends({}, other, {
    value: value,
    className: dropdownItemClasses,
    onClick: handleClick,
    onKeyPress: handleKeypress,
    tabIndex: -1,
    "aria-selected": selected,
    role: "option"
  }), _react.default.createElement("a", {
    tabIndex: isDropdownOpen ? 0 : -1,
    href: href,
    onClick:
    /* istanbul ignore next */
    function onClick(evt) {
      return evt.preventDefault();
    },
    className: "".concat(prefix, "--dropdown-link")
  }, itemText));
};

DropdownItem.propTypes = {
  /**
   * Specify the value of the <DropdownItem>
   */
  value: _propTypes.default.string.isRequired,

  /**
   * Specify the content of the <DropdownItem>
   */
  itemText: _propTypes.default.string.isRequired,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: _propTypes.default.string,

  /**
   * Provide an optional function to be called when the container node is
   * clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Provide an optional function to be called when a key is pressed on the <DropdownItem>
   */
  onKeyPress: _propTypes.default.func,

  /**
   * Optional string representing the link location for the <DropdownItem>
   */
  href: _propTypes.default.string,

  /**
   * Specify whether the <DropdownItem> is selected
   */
  selected: _propTypes.default.bool
};
DropdownItem.defaultProps = {
  onClick:
  /* istanbul ignore next */
  function onClick() {},
  onKeyPress:
  /* istanbul ignore next */
  function onKeyPress() {},
  href: '',
  selected: false
};
var _default = DropdownItem;
exports.default = _default;