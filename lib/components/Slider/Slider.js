"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var defaultFormatLabel = function defaultFormatLabel(value, label) {
  return typeof label === 'function' ? label(value) : "".concat(value).concat(label);
};

var Slider =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Slider, _PureComponent);

  function Slider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      dragging: false,
      value: _this.props.value,
      left: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePosition", function (evt) {
      if (evt && _this.props.disabled) {
        return;
      }

      if (evt && evt.dispatchConfig) {
        evt.persist();
      }

      if (_this.state.dragging) {
        return;
      }

      _this.setState({
        dragging: true
      });

      requestAnimationFrame(function () {
        _this.setState(function (prevState, props) {
          // Note: In FF, `evt.target` of `mousemove` event can be `HTMLDocument` which doesn't have `classList`.
          // One example is dragging out of browser viewport.
          var fromInput = evt && evt.target && evt.target.classList && evt.target.classList.contains('bx-slider-text-input');

          var _this$calcValue = _this.calcValue(evt, prevState, props),
              left = _this$calcValue.left,
              newSliderValue = _this$calcValue.newValue;

          var newValue = fromInput ? Number(evt.target.value) : newSliderValue;

          if (prevState.left === left && prevState.value === newValue) {
            return {
              dragging: false
            };
          }

          if (typeof props.onChange === 'function') {
            props.onChange({
              value: newValue
            });
          }

          return {
            dragging: false,
            left: left,
            value: newValue
          };
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calcValue", function (evt, prevState, props) {
      var min = props.min,
          max = props.max,
          step = props.step,
          stepMuliplier = props.stepMuliplier;
      var value = prevState.value;
      var range = max - min;
      var valuePercentage = (value - min) / range * 100;
      var left;
      var newValue;
      left = valuePercentage;
      newValue = value;

      if (evt) {
        var type = evt.type;

        if (type === 'keydown') {
          var direction = {
            40: -1,
            // decreasing
            37: -1,
            // decreasing
            38: 1,
            // increasing
            39: 1 // increasing

          }[evt.which];

          if (direction !== undefined) {
            var multiplier = evt.shiftKey === true ? range / step / stepMuliplier : 1;
            var stepMultiplied = step * multiplier;
            var stepSize = stepMultiplied / range * 100;
            left = valuePercentage + stepSize * direction;
            newValue = Number(value) + stepMultiplied * direction;
          }
        }

        if (type === 'mousemove' || type === 'click' || type === 'touchmove') {
          var clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;

          var track = _this.track.getBoundingClientRect();

          var ratio = (clientX - track.left) / track.width;
          var rounded = min + Math.round(range * ratio / step) * step;
          left = (rounded - min) / range * 100;
          newValue = rounded;
        }
      }

      if (newValue <= Number(min)) {
        left = 0;
        newValue = min;
      }

      if (newValue >= Number(max)) {
        left = 100;
        newValue = max;
      }

      return {
        left: left,
        newValue: newValue
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseStart", function () {
      _this.element.ownerDocument.addEventListener('mousemove', _this.updatePosition);

      _this.element.ownerDocument.addEventListener('mouseup', _this.handleMouseEnd);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseEnd", function () {
      _this.element.ownerDocument.removeEventListener('mousemove', _this.updatePosition);

      _this.element.ownerDocument.removeEventListener('mouseup', _this.handleMouseEnd);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTouchStart", function () {
      _this.element.ownerDocument.addEventListener('touchmove', _this.updatePosition);

      _this.element.ownerDocument.addEventListener('touchup', _this.handleTouchEnd);

      _this.element.ownerDocument.addEventListener('touchend', _this.handleTouchEnd);

      _this.element.ownerDocument.addEventListener('touchcancel', _this.handleTouchEnd);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTouchEnd", function () {
      _this.element.ownerDocument.removeEventListener('touchmove', _this.updatePosition);

      _this.element.ownerDocument.removeEventListener('touchup', _this.handleTouchEnd);

      _this.element.ownerDocument.removeEventListener('touchend', _this.handleTouchEnd);

      _this.element.ownerDocument.removeEventListener('touchcancel', _this.handleTouchEnd);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (evt) {
      _this.setState({
        value: evt.target.value
      });

      _this.updatePosition(evt);
    });

    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updatePosition();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (!(0, _lodash.default)(nextProps, this.props)) {
        this.updatePosition();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          ariaLabelInput = _this$props.ariaLabelInput,
          className = _this$props.className,
          hideTextInput = _this$props.hideTextInput,
          _this$props$id = _this$props.id,
          id = _this$props$id === void 0 ? this.inputId = this.inputId || "__carbon-slider_".concat(Math.random().toString(36).substr(2)) : _this$props$id,
          min = _this$props.min,
          minLabel = _this$props.minLabel,
          max = _this$props.max,
          maxLabel = _this$props.maxLabel,
          _this$props$formatLab = _this$props.formatLabel,
          formatLabel = _this$props$formatLab === void 0 ? defaultFormatLabel : _this$props$formatLab,
          labelText = _this$props.labelText,
          step = _this$props.step,
          stepMuliplier = _this$props.stepMuliplier,
          inputType = _this$props.inputType,
          required = _this$props.required,
          disabled = _this$props.disabled,
          name = _this$props.name,
          light = _this$props.light,
          other = _objectWithoutProperties(_this$props, ["ariaLabelInput", "className", "hideTextInput", "id", "min", "minLabel", "max", "maxLabel", "formatLabel", "labelText", "step", "stepMuliplier", "inputType", "required", "disabled", "name", "light"]);

      var _this$state = this.state,
          value = _this$state.value,
          left = _this$state.left;
      var sliderClasses = (0, _classnames.default)('bx--slider', {
        'bx--slider--disabled': disabled
      }, className);
      var inputClasses = (0, _classnames.default)('bx-slider-text-input', {
        'bx--text-input--light': light
      });
      var filledTrackStyle = {
        transform: "translate(0%, -50%) scaleX(".concat(left / 100, ")")
      };
      var thumbStyle = {
        left: "".concat(left, "%")
      };
      return _react.default.createElement("div", {
        className: "bx--form-item"
      }, _react.default.createElement("label", {
        htmlFor: id,
        className: "bx--label"
      }, labelText), _react.default.createElement("div", {
        className: "bx--slider-container"
      }, _react.default.createElement("span", {
        className: "bx--slider__range-label"
      }, formatLabel(min, minLabel)), _react.default.createElement("div", _extends({
        className: sliderClasses,
        ref: function ref(node) {
          _this2.element = node;
        },
        onClick: this.updatePosition,
        onKeyPress: this.updatePosition,
        role: "presentation",
        tabIndex: -1
      }, other), _react.default.createElement("div", {
        className: "bx--slider__track",
        ref: function ref(node) {
          _this2.track = node;
        }
      }), _react.default.createElement("div", {
        className: "bx--slider__filled-track",
        style: filledTrackStyle
      }), _react.default.createElement("div", {
        className: "bx--slider__thumb",
        role: "slider",
        id: id,
        tabIndex: 0,
        "aria-valuemax": max,
        "aria-valuemin": min,
        "aria-valuenow": value,
        style: thumbStyle,
        onMouseDown: this.handleMouseStart,
        onTouchStart: this.handleTouchStart,
        onKeyDown: this.updatePosition
      }), _react.default.createElement("input", {
        type: "hidden",
        name: name,
        value: value,
        required: required,
        min: min,
        max: max,
        step: step,
        onChange: this.handleChange
      })), _react.default.createElement("span", {
        className: "bx--slider__range-label"
      }, formatLabel(max, maxLabel)), !hideTextInput && _react.default.createElement(_TextInput.default, {
        type: inputType,
        id: "input-for-slider",
        className: inputClasses,
        value: value,
        onChange: this.handleChange,
        labelText: "",
        "aria-label": ariaLabelInput
      })));
    }
  }]);

  return Slider;
}(_react.PureComponent);

exports.default = Slider;

_defineProperty(Slider, "propTypes", {
  /**
   * The CSS class name for the slider.
   */
  className: _propTypes.default.string,

  /**
   * `true` to hide the number input box.
   */
  hideTextInput: _propTypes.default.bool,

  /**
   * The ID of the `<input>`.
   */
  id: _propTypes.default.string,

  /**
   * The callback to get notified of change in value.
   */
  onChange: _propTypes.default.func,

  /**
   * The value.
   */
  value: _propTypes.default.number.isRequired,

  /**
   * The minimum value.
   */
  min: _propTypes.default.number.isRequired,

  /**
   * The label associated with the minimum value.
   */
  minLabel: _propTypes.default.string,

  /**
   * The maximum value.
   */
  max: _propTypes.default.number.isRequired,

  /**
   * The label associated with the maximum value.
   */
  maxLabel: _propTypes.default.string,

  /**
   * The callback to format the label associated with the minimum/maximum value.
   */
  formatLabel: _propTypes.default.func,

  /**
   * The label for the slider.
   */
  labelText: _propTypes.default.node,

  /**
   * A value determining how much the value should increase/decrease by moving the thumb by mouse.
   */
  step: _propTypes.default.number,

  /**
   * A value determining how much the value should increase/decrease by Shift+arrow keys,
   * which will be `(max - min) / stepMuliplier`.
   */
  stepMuliplier: _propTypes.default.number,

  /**
   * The child nodes.
   */
  children: _propTypes.default.node,

  /**
   * `true` to disable this slider.
   */
  disabled: _propTypes.default.bool,

  /**
   * The `name` attribute of the `<input>`.
   */
  name: _propTypes.default.bool,

  /**
   * The `type` attribute of the `<input>`.
   */
  inputType: _propTypes.default.string,

  /**
   * The `ariaLabel` for the `<input>`.
   */
  ariaLabelInput: _propTypes.default.string,

  /**
   * `true` to use the light version.
   */
  light: _propTypes.default.bool
});

_defineProperty(Slider, "defaultProps", {
  hideTextInput: false,
  step: 1,
  stepMuliplier: 4,
  disabled: false,
  minLabel: '',
  maxLabel: '',
  inputType: 'number',
  ariaLabelInput: 'Slider number input',
  light: false
});