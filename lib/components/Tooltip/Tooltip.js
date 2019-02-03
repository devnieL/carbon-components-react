"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonIcons = require("carbon-icons");

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/information/16"));

var _carbonComponents = require("carbon-components");

var _FloatingMenu = _interopRequireWildcard(require("../../internal/FloatingMenu"));

var _ClickListener = _interopRequireDefault(require("../../internal/ClickListener"));

var _FeatureFlags = require("../../internal/FeatureFlags");

var ReactIs = _interopRequireWildcard(require("react-is"));

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;
var matchesFuncName = typeof Element !== 'undefined' && ['matches', 'webkitMatchesSelector', 'msMatchesSelector'].filter(function (name) {
  return typeof Element.prototype[name] === 'function';
})[0];
/**
 * @param {Node} elem A DOM node.
 * @param {string} selector A CSS selector
 * @returns {boolean} `true` if the given DOM element is a element node and matches the given selector.
 * @private
 */

var matches = function matches(elem, selector) {
  return typeof elem[matchesFuncName] === 'function' && elem[matchesFuncName](selector);
};
/**
 * @param {Element} elem An element.
 * @param {string} selector An query selector.
 * @returns {Element} The ancestor of the given element matching the given selector.
 * @private
 */


var closest = function closest(elem, selector) {
  var doc = elem.ownerDocument;

  for (var traverse = elem; traverse && traverse !== doc; traverse = traverse.parentNode) {
    if (matches(traverse, selector)) {
      return traverse;
    }
  }

  return null;
};
/**
 * @param {Element} menuBody The menu body with the menu arrow.
 * @param {string} menuDirection Where the floating menu menu should be placed relative to the trigger button.
 * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
 * @private
 */


var getMenuOffset = function getMenuOffset(menuBody, menuDirection) {
  var _DIRECTION_LEFT$DIREC, _DIRECTION_LEFT$DIREC2;

  var arrowStyle = menuBody.ownerDocument.defaultView.getComputedStyle(menuBody, ':before');
  var arrowPositionProp = (_DIRECTION_LEFT$DIREC = {}, _defineProperty(_DIRECTION_LEFT$DIREC, _FloatingMenu.DIRECTION_LEFT, 'right'), _defineProperty(_DIRECTION_LEFT$DIREC, _FloatingMenu.DIRECTION_TOP, 'bottom'), _defineProperty(_DIRECTION_LEFT$DIREC, _FloatingMenu.DIRECTION_RIGHT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC, _FloatingMenu.DIRECTION_BOTTOM, 'top'), _DIRECTION_LEFT$DIREC)[menuDirection];
  var menuPositionAdjustmentProp = (_DIRECTION_LEFT$DIREC2 = {}, _defineProperty(_DIRECTION_LEFT$DIREC2, _FloatingMenu.DIRECTION_LEFT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC2, _FloatingMenu.DIRECTION_TOP, 'top'), _defineProperty(_DIRECTION_LEFT$DIREC2, _FloatingMenu.DIRECTION_RIGHT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC2, _FloatingMenu.DIRECTION_BOTTOM, 'top'), _DIRECTION_LEFT$DIREC2)[menuDirection];
  var values = [arrowPositionProp, 'border-bottom-width'].reduce(function (o, name) {
    return _objectSpread({}, o, _defineProperty({}, name, Number((/^([\d-]+)px$/.exec(arrowStyle.getPropertyValue(name)) || [])[1])));
  }, {});
  values[arrowPositionProp] = values[arrowPositionProp] || -6; // IE, etc.

  if (Object.keys(values).every(function (name) {
    return !isNaN(values[name]);
  })) {
    var arrowPosition = values[arrowPositionProp],
        borderBottomWidth = values['border-bottom-width'];
    return _defineProperty({
      left: 0,
      top: 0
    }, menuPositionAdjustmentProp, Math.sqrt(Math.pow(borderBottomWidth, 2) * 2) - arrowPosition);
  }
};

var Tooltip =
/*#__PURE__*/
function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tooltip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_hasContextMenu", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_tooltipEl", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTriggerPosition", function () {
      if (_this.triggerEl) {
        var triggerPosition = _this.triggerEl.getBoundingClientRect();

        _this.setState({
          triggerPosition: triggerPosition
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleHover", function (state, relatedTarget) {
      if (state === 'over') {
        _this.getTriggerPosition();

        _this.setState({
          open: true
        });
      } else {
        // Note: SVGElement in IE11 does not have `.contains()`
        var shouldPreventClose = relatedTarget && (_this.triggerEl && _this.triggerEl.contains && _this.triggerEl.contains(relatedTarget) || _this._tooltipEl && _this._tooltipEl.contains(relatedTarget));

        if (!shouldPreventClose) {
          _this.setState({
            open: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_debouncedHandleHover", (0, _lodash.default)(_this._handleHover, 200));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getTarget", function () {
      return _this.triggerEl && closest(_this.triggerEl, '[data-floating-menu-container]') || document.body;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouse", function (evt) {
      var state = {
        mouseover: 'over',
        mouseout: 'out',
        focus: 'over',
        blur: 'out',
        click: 'click'
      }[evt.type];
      var hadContextMenu = _this._hasContextMenu;
      _this._hasContextMenu = evt.type === 'contextmenu';

      if (_this.props.clickToOpen) {
        if (state === 'click') {
          evt.stopPropagation();
          var shouldOpen = !_this.state.open;

          if (shouldOpen) {
            _this.getTriggerPosition();
          }

          _this.setState({
            open: shouldOpen
          });
        }
      } else if (state && (state !== 'out' || !hadContextMenu)) {
        _this._debouncedHandleHover(state, evt.relatedTarget);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOutside", function (evt) {
      var shouldPreventClose = evt && evt.target && _this._tooltipEl && _this._tooltipEl.contains(evt.target);

      if (!shouldPreventClose) {
        _this.setState({
          open: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (evt) {
      var key = evt.key || evt.which;

      if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
        evt.stopPropagation();

        _this.setState({
          open: !_this.state.open
        });
      }
    });

    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      requestAnimationFrame(function () {
        _this2.getTriggerPosition();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          _this$props$triggerId = _this$props.triggerId,
          triggerId = _this$props$triggerId === void 0 ? this.triggerId = this.triggerId || "__carbon-tooltip-trigger_".concat(Math.random().toString(36).substr(2)) : _this$props$triggerId,
          _this$props$tooltipId = _this$props.tooltipId,
          tooltipId = _this$props$tooltipId === void 0 ? this.tooltipId = this.tooltipId || "__carbon-tooltip_".concat(Math.random().toString(36).substr(2)) : _this$props$tooltipId,
          children = _this$props.children,
          className = _this$props.className,
          triggerClassName = _this$props.triggerClassName,
          direction = _this$props.direction,
          triggerText = _this$props.triggerText,
          showIcon = _this$props.showIcon,
          icon = _this$props.icon,
          iconName = _this$props.iconName,
          iconTitle = _this$props.iconTitle,
          iconDescription = _this$props.iconDescription,
          IconCustomElement = _this$props.renderIcon,
          menuOffset = _this$props.menuOffset,
          clickToOpen = _this$props.clickToOpen,
          _this$props$tabIndex = _this$props.tabIndex,
          tabIndex = _this$props$tabIndex === void 0 ? 0 : _this$props$tabIndex,
          other = _objectWithoutProperties(_this$props, ["triggerId", "tooltipId", "children", "className", "triggerClassName", "direction", "triggerText", "showIcon", "icon", "iconName", "iconTitle", "iconDescription", "renderIcon", "menuOffset", "clickToOpen", "tabIndex"]);

      var open = this.state.open;
      var tooltipClasses = (0, _classnames.default)("".concat(prefix, "--tooltip"), _defineProperty({}, "".concat(prefix, "--tooltip--shown"), open), className);
      var triggerClasses = (0, _classnames.default)(_defineProperty({}, "".concat(prefix, "--tooltip__trigger"), !_FeatureFlags.componentsX), _defineProperty({}, "".concat(prefix, "--tooltip__label"), _FeatureFlags.componentsX), triggerClassName);
      var ariaOwnsProps = !open ? {} : {
        'aria-owns': tooltipId
      };
      console.log('IconCustomElement:', IconCustomElement);
      var finalIcon = IconCustomElement ? _react.default.createElement(IconCustomElement, {
        name: iconName,
        className: "".concat(prefix, "--tooltip__custom-icon"),
        "aria-labelledby": triggerId,
        "aria-label": iconDescription,
        ref: function ref(node) {
          _this3.triggerEl = node;
        }
      }) : _FeatureFlags.componentsX ? _react.default.createElement(_.default, {
        name: iconName,
        "aria-labelledby": triggerId,
        "aria-label": iconDescription,
        ref: function ref(node) {
          _this3.triggerEl = node;
        }
      }) : _react.default.createElement(_Icon.default, {
        icon: !icon && !iconName ? _carbonIcons.iconInfoGlyph : icon,
        name: iconName,
        description: iconDescription,
        iconTitle: iconTitle,
        iconRef: function iconRef(node) {
          _this3.triggerEl = node;
        }
      });
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ClickListener.default, {
        onClickOutside: this.handleClickOutside
      }, showIcon ? _react.default.createElement("div", {
        className: triggerClasses
      }, triggerText, _react.default.createElement("div", _extends({
        id: triggerId,
        className: _FeatureFlags.componentsX ? "".concat(prefix, "--tooltip__trigger") : null,
        role: "button",
        tabIndex: tabIndex,
        onClick: this.handleMouse,
        onKeyDown: this.handleKeyPress,
        onMouseOver: this.handleMouse,
        onMouseOut: this.handleMouse,
        onFocus: this.handleMouse,
        onBlur: this.handleMouse,
        "aria-haspopup": "true",
        "aria-label": iconDescription,
        "aria-expanded": open
      }, ariaOwnsProps), finalIcon)) : _react.default.createElement("div", _extends({
        tabIndex: tabIndex,
        id: triggerId,
        className: triggerClasses,
        ref: function ref(node) {
          _this3.triggerEl = node;
        },
        onMouseOver: this.handleMouse,
        onMouseOut: this.handleMouse,
        onFocus: this.handleMouse,
        onBlur: this.handleMouse,
        "aria-haspopup": "true",
        "aria-expanded": open
      }, ariaOwnsProps, {
        role: "tooltip"
      }), triggerText)), open && _react.default.createElement(_FloatingMenu.default, {
        target: this._getTarget,
        menuPosition: this.state.triggerPosition,
        menuDirection: direction,
        menuOffset: menuOffset,
        menuRef: function menuRef(node) {
          _this3._tooltipEl = node;
        }
      }, _react.default.createElement("div", _extends({
        id: tooltipId,
        className: tooltipClasses
      }, other, {
        "data-floating-menu-direction": direction,
        "aria-labelledby": triggerId,
        onMouseOver: this.handleMouse,
        onMouseOut: this.handleMouse,
        onFocus: this.handleMouse,
        onBlur: this.handleMouse,
        onContextMenu: this.handleMouse
      }), _react.default.createElement("span", {
        className: "".concat(prefix, "--tooltip__caret")
      }), children)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var open = _ref2.open;

      /**
       * so that tooltip can be controlled programmatically through this `open` prop
       */
      var prevOpen = state.prevOpen;
      return prevOpen === open ? null : {
        open: open,
        prevOpen: open
      };
    }
  }]);

  return Tooltip;
}(_react.Component);

exports.default = Tooltip;

_defineProperty(Tooltip, "propTypes", {
  /**
   * The ID of the trigger button.
   */
  triggerId: _propTypes.default.string,

  /**
   * The ID of the tooltip content.
   */
  tooltipId: _propTypes.default.string,

  /**
   * Open/closed state.
   */
  open: _propTypes.default.bool,

  /**
   * Contents to put into the tooltip.
   */
  children: _propTypes.default.node,

  /**
   * The CSS class names of the tooltip.
   */
  className: _propTypes.default.string,

  /**
   * The CSS class names of the trigger UI.
   */
  triggerClassName: _propTypes.default.string,

  /**
   * Where to put the tooltip, relative to the trigger UI.
   */
  direction: _propTypes.default.oneOf(['bottom', 'top', 'left', 'right']),

  /**
   * The adjustment of the tooltip position.
   */
  menuOffset: _propTypes.default.oneOfType([_propTypes.default.shape({
    top: _propTypes.default.number,
    left: _propTypes.default.number
  }), _propTypes.default.func]),

  /**
   * The content to put into the trigger UI, except the (default) tooltip icon.
   */
  triggerText: _propTypes.default.node,

  /**
   * The callback function to optionally render the icon element.
   * It should be a component with React.forwardRef().
   */
  renderIcon: function renderIcon(props, propName, componentName) {
    if (!ReactIs.isForwardRef(props[propName])) return new Error("Invalid prop '".concat(propName, "' supplied to '").concat(componentName, "', it should be wrapped with React.forwardRef()."));
  },

  /**
   * `true` to show the default tooltip icon.
   */
  showIcon: _propTypes.default.bool,

  /**
   * The tooltip icon element or `<Icon>` metadata.
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
   * The description of the default tooltip icon, to be put in its SVG 'aria-label' and 'alt' .
   */
  iconDescription: _propTypes.default.string,

  /**
   * The title of the default tooltip icon, to be put in its SVG `<title>` element.
   */
  iconTitle: _propTypes.default.string,

  /**
   * `true` if opening tooltip should be triggered by clicking the trigger button.
   */
  clickToOpen: _propTypes.default.bool,

  /**
   * Optional prop to specify the tabIndex of the Tooltip
   */
  tabIndex: _propTypes.default.number
});

_defineProperty(Tooltip, "defaultProps", {
  open: false,
  direction: _FloatingMenu.DIRECTION_BOTTOM,
  showIcon: true,
  iconDescription: 'tooltip',
  iconTitle: '',
  triggerText: 'Provide triggerText',
  menuOffset: getMenuOffset
});