"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _carbonIcons = require("carbon-icons");

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/warning--filled/16"));

var _index = _interopRequireDefault(require("@carbon/icons-react/lib/caret--down/index"));

var _index2 = _interopRequireDefault(require("@carbon/icons-react/lib/caret--up/index"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _FeatureFlags = require("../../internal/FeatureFlags");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

var NumberInput =
/*#__PURE__*/
function (_Component) {
  _inherits(NumberInput, _Component);

  function NumberInput(props) {
    var _this;

    _classCallCheck(this, NumberInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberInput).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_inputRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (evt) {
      if (!_this.props.disabled) {
        evt.persist();
        evt.imaginaryTarget = _this._inputRef;

        _this.setState({
          value: evt.target.value
        }, function () {
          _this.props.onChange(evt);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleArrowClick", function (evt, direction) {
      var value = typeof _this.state.value === 'string' ? Number(_this.state.value) : _this.state.value;
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step;
      var conditional = direction === 'down' ? min !== undefined && value > min || min === undefined : max !== undefined && value < max || max === undefined;

      if (!disabled && conditional) {
        value = direction === 'down' ? value - step : value + step;
        evt.persist();
        evt.imaginaryTarget = _this._inputRef;

        _this.setState({
          value: value
        }, function () {
          _this.props.onClick(evt, direction);

          _this.props.onChange(evt, direction);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleInputRef", function (ref) {
      _this._inputRef = ref;
    });

    var _value = props.value;

    if (props.min || props.min === 0) {
      _value = Math.max(props.min, _value);
    }

    _this.state = {
      value: _value
    };
    return _this;
  }

  _createClass(NumberInput, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          iconDescription = _this$props2.iconDescription,
          id = _this$props2.id,
          hideLabel = _this$props2.hideLabel,
          label = _this$props2.label,
          max = _this$props2.max,
          min = _this$props2.min,
          step = _this$props2.step,
          invalid = _this$props2.invalid,
          invalidText = _this$props2.invalidText,
          helperText = _this$props2.helperText,
          light = _this$props2.light,
          allowEmpty = _this$props2.allowEmpty,
          other = _objectWithoutProperties(_this$props2, ["className", "disabled", "iconDescription", "id", "hideLabel", "label", "max", "min", "step", "invalid", "invalidText", "helperText", "light", "allowEmpty"]);

      var numberInputClasses = (0, _classnames.default)("".concat(prefix, "--number ").concat(prefix, "--number--helpertext"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--number--light"), light), _defineProperty(_classNames, "".concat(prefix, "--number--nolabel"), hideLabel), _classNames));
      var props = {
        disabled: disabled,
        id: id,
        max: max,
        min: min,
        step: step,
        onChange: this.handleChange,
        value: this.state.value
      };
      var buttonProps = {
        disabled: disabled,
        type: 'button'
      };
      var inputWrapperProps = {};
      var error = null;

      if (invalid || !allowEmpty && this.state.value === '') {
        inputWrapperProps['data-invalid'] = true;
        error = _react.default.createElement("div", {
          className: "".concat(prefix, "--form-requirement")
        }, invalidText);
      }

      var helper = helperText ? _react.default.createElement("div", {
        className: "".concat(prefix, "--form__helper-text")
      }, helperText) : null;
      var labelClasses = (0, _classnames.default)("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--visually-hidden"), hideLabel));
      var labelText = label ? _react.default.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, label) : null;
      return _react.default.createElement("div", {
        className: "".concat(prefix, "--form-item")
      }, _react.default.createElement("div", _extends({
        className: numberInputClasses
      }, inputWrapperProps), _FeatureFlags.componentsX ? _react.default.createElement(_react.default.Fragment, null, labelText, helper, _react.default.createElement("div", {
        className: "".concat(prefix, "--number__input-wrapper")
      }, _react.default.createElement("input", _extends({
        type: "number",
        pattern: "[0-9]*"
      }, other, props, {
        ref: this._handleInputRef
      })), invalid && _react.default.createElement(_.default, {
        className: "".concat(prefix, "--number__invalid"),
        role: "img"
      }), _react.default.createElement("div", {
        className: "".concat(prefix, "--number__controls")
      }, _react.default.createElement("button", _extends({
        className: "".concat(prefix, "--number__control-btn up-icon")
      }, buttonProps, {
        onClick: function onClick(evt) {
          return _this2.handleArrowClick(evt, 'up');
        }
      }), _react.default.createElement(_index2.default, {
        className: "up-icon"
      })), _react.default.createElement("button", _extends({
        className: "".concat(prefix, "--number__control-btn down-icon")
      }, buttonProps, {
        onClick: function onClick(evt) {
          return _this2.handleArrowClick(evt, 'down');
        }
      }), _react.default.createElement(_index.default, {
        className: "down-icon"
      }))))) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: "".concat(prefix, "--number__controls")
      }, _react.default.createElement("button", _extends({
        className: "".concat(prefix, "--number__control-btn up-icon")
      }, buttonProps, {
        onClick: function onClick(evt) {
          return _this2.handleArrowClick(evt, 'up');
        }
      }), _react.default.createElement(_Icon.default, {
        className: "up-icon",
        icon: _carbonIcons.iconCaretUp,
        description: this.props.iconDescription,
        viewBox: "0 0 10 5"
      })), _react.default.createElement("button", _extends({
        className: "".concat(prefix, "--number__control-btn down-icon")
      }, buttonProps, {
        onClick: function onClick(evt) {
          return _this2.handleArrowClick(evt, 'down');
        }
      }), _react.default.createElement(_Icon.default, {
        className: "down-icon",
        icon: _carbonIcons.iconCaretDown,
        viewBox: "0 0 10 5",
        description: this.props.iconDescription
      }))), labelText, _react.default.createElement("input", _extends({
        type: "number",
        pattern: "[0-9]*"
      }, other, props, {
        ref: this._handleInputRef
      }))), error, !_FeatureFlags.componentsX && helper));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var min = _ref.min,
          value = _ref.value;
      var prevValue = state.prevValue;
      return prevValue === value ? null : {
        value: isNaN(min) ? value : Math.max(min, value),
        prevValue: value
      };
    }
  }]);

  return NumberInput;
}(_react.Component);

exports.default = NumberInput;

_defineProperty(NumberInput, "propTypes", {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: _propTypes.default.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: _propTypes.default.bool,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: _propTypes.default.bool,

  /**
   * Provide a description for up/down icons that can be read by screen readers
   */
  iconDescription: _propTypes.default.string.isRequired,

  /**
   * Specify a custom `id` for the input
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  label: _propTypes.default.node,

  /**
   * The maximum value.
   */
  max: _propTypes.default.number,

  /**
   * The minimum value.
   */
  min: _propTypes.default.number,

  /**
   * The new value is available in 'imaginaryTarget.value'
   * i.e. to get the value: evt.imaginaryTarget.value
   */
  onChange: _propTypes.default.func,

  /**
   * Provide an optional function to be called when the up/down button is clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Specify how much the valus should increase/decrease upon clicking on up/down button
   */
  step: _propTypes.default.number,

  /**
   * Specify the value of the input
   */
  value: _propTypes.default.number,

  /**
   * Specify if the currently value is invalid.
   */
  invalid: _propTypes.default.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: _propTypes.default.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: _propTypes.default.node,

  /**
   * `true` to use the light version.
   */
  light: _propTypes.default.bool,

  /**
   * `true` to allow empty string.
   */
  allowEmpty: _propTypes.default.bool
});

_defineProperty(NumberInput, "defaultProps", {
  disabled: false,
  hideLabel: false,
  iconDescription: 'choose a number',
  label: ' ',
  onChange: function onChange() {},
  onClick: function onClick() {},
  step: 1,
  value: 0,
  invalid: false,
  invalidText: 'Provide invalidText',
  helperText: '',
  light: false,
  allowEmpty: false
});