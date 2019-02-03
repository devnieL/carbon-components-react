"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var Toggle = function Toggle(_ref) {
  var _classNames;

  var className = _ref.className,
      defaultToggled = _ref.defaultToggled,
      toggled = _ref.toggled,
      _onChange = _ref.onChange,
      onToggle = _ref.onToggle,
      id = _ref.id,
      labelText = _ref.labelText,
      labelA = _ref.labelA,
      labelB = _ref.labelB,
      other = _objectWithoutProperties(_ref, ["className", "defaultToggled", "toggled", "onChange", "onToggle", "id", "labelText", "labelA", "labelB"]);

  var input;
  var wrapperClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--form-item"), true), _defineProperty(_classNames, className, className), _classNames));
  var checkedProps = {};

  if (typeof toggled !== 'undefined') {
    checkedProps.checked = toggled;
  } else {
    checkedProps.defaultChecked = defaultToggled;
  }

  var ToggleBody = function ToggleBody() {
    return _react.default.createElement("div", {
      className: wrapperClasses
    }, _react.default.createElement("input", _extends({}, other, checkedProps, {
      type: "checkbox",
      id: id,
      className: "".concat(prefix, "--toggle"),
      onChange: function onChange(evt) {
        _onChange && _onChange(evt);
        onToggle(input.checked, id, evt);
      },
      ref: function ref(el) {
        input = el;
      }
    })), _react.default.createElement("label", {
      className: "".concat(prefix, "--toggle__label"),
      htmlFor: id
    }, _react.default.createElement("span", {
      className: "".concat(prefix, "--toggle__text--left")
    }, labelA), _react.default.createElement("span", {
      className: "".concat(prefix, "--toggle__appearance")
    }), _react.default.createElement("span", {
      className: "".concat(prefix, "--toggle__text--right")
    }, labelB)));
  };

  return labelText ? _react.default.createElement("fieldset", {
    className: "".concat(prefix, "--fieldset")
  }, _react.default.createElement("legend", {
    className: "".concat(prefix, "--label")
  }, labelText), _react.default.createElement(ToggleBody, null)) : _react.default.createElement(ToggleBody, null);
};

Toggle.propTypes = {
  /**
   * Specify a custom className to apply to the form-item node
   */
  className: _propTypes.default.string,

  /**
   * Specify whether the toggle should be on by default
   */
  defaultToggled: _propTypes.default.bool,

  /**
   * Provide an optional hook that is called when the control is toggled
   */
  onToggle: _propTypes.default.func,

  /**
   * Provide an id that unique represents the underlying <input>
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Specify whether the control is toggled
   */
  toggled: _propTypes.default.bool,

  /**
   * Specify the label for the "off" position
   */
  labelA: _propTypes.default.string.isRequired,

  /**
   * Specify the label for the "on" position
   */
  labelB: _propTypes.default.string.isRequired
};
Toggle.defaultProps = {
  defaultToggled: false,
  label: '',
  labelA: 'Off',
  labelB: 'On',
  onToggle: function onToggle() {}
};
var _default = Toggle;
exports.default = _default;