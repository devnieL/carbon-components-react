"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _carbonComponents = require("carbon-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AriaPropTypes = require("../../prop-types/AriaPropTypes");

var _key = require("../../tools/key");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

var HeaderNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderNavigation, _React$Component);

  function HeaderNavigation(props) {
    var _this;

    _classCallCheck(this, HeaderNavigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderNavigation).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnKeyDown", function (event) {
      if ((0, _key.matches)(event, [_key.keys.LEFT, _key.keys.RIGHT, _key.keys.HOME, _key.keys.END])) {
        event.stopPropagation();
        var which = event.which;

        _this.setState(function (state) {
          var selectedIndex = state.selectedIndex;
          var length = _this.items.length;
          var nextSelectedIndex = null; // We use the modulo (%) operator here to implement a circular
          // buffer so that when we hit the end of the list it wraps to the
          // beginning, and when it hits the beginning of a list it wraps to the
          // end.

          if ((0, _key.match)(which, _key.keys.RIGHT)) {
            nextSelectedIndex = (selectedIndex + 1) % length;
          }

          if ((0, _key.match)(which, _key.keys.LEFT)) {
            nextSelectedIndex = (selectedIndex + length - 1) % length;
          }

          if ((0, _key.match)(which, _key.keys.HOME)) {
            nextSelectedIndex = 0;
          }

          if ((0, _key.match)(which, _key.keys.END)) {
            nextSelectedIndex = length - 1;
          }

          return {
            selectedIndex: nextSelectedIndex
          };
        }, function () {
          _this.items[_this.state.selectedIndex].focus();
        });

        return;
      } // Support transitioning to next item through typing the first letter of
      // that menu item


      var character = (0, _key.getCharacterFor)(event);

      _this.setState(function (state) {
        var nextSelectedIndex = null;

        for (var i = state.selectedIndex; i < _this.items.length; i++) {
          var item = _this.items[i];

          if (item.textContent[0].toLowerCase() === character.toLowerCase()) {
            item.focus();
            nextSelectedIndex = i;
            break;
          }
        }

        if (nextSelectedIndex) {
          return {
            selectedIndex: nextSelectedIndex
          };
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleItemRef", function (index) {
      return function (node) {
        _this.items[index] = node;
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_renderNavItem", function (child, index) {
      return _react.default.cloneElement(child, {
        ref: _this.handleItemRef(index),
        tabIndex: _this.state.selectedIndex !== index ? -1 : 0
      });
    });

    _this.items = [];
    _this.state = {
      selectedIndex: 0
    };
    return _this;
  }

  _createClass(HeaderNavigation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ariaLabel = _this$props['aria-label'],
          ariaLabelledBy = _this$props['aria-labelledby'],
          children = _this$props.children,
          customClassName = _this$props.className,
          rest = _objectWithoutProperties(_this$props, ["aria-label", "aria-labelledby", "children", "className"]);

      var className = (0, _classnames.default)("".concat(prefix, "--header__nav"), customClassName); // Assign both label strategies in this option, only one should be defined
      // so when we spread that should be the one that is applied to the node

      var accessibilityLabel = {
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy
      }; // Since the menubar presents a site navigation system, it is wrapped in a
      // navigation region implemented with a nav element that has an aria-label
      // that matches the label on the menubar.
      // https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html#

      return _react.default.createElement("nav", _extends({}, rest, accessibilityLabel, {
        className: className
      }), _react.default.createElement("ul", _extends({}, accessibilityLabel, {
        className: "".concat(prefix, "--header__menu-bar"),
        role: "menubar",
        onKeyDown: this.handleOnKeyDown
      }), _react.default.Children.map(children, this._renderNavItem)));
    }
    /**
     * Render an individual menuitem, adding a `ref` for each child inside of
     * `this.items` to properly manage focus. In addition to this focus management,
     * all items receive a `tabIndex: -1`, unless it is the selected item,
     * so the user won't hit a large number of items in their tab sequence when they
     * might not want to go through all the items.
     */

  }]);

  return HeaderNavigation;
}(_react.default.Component);

exports.default = HeaderNavigation;

_defineProperty(HeaderNavigation, "propTypes", _objectSpread({}, _AriaPropTypes.AriaLabelPropType, {
  /**
   * Optionally provide a custom class to apply to the underlying <nav> node
   */
  className: _propTypes.default.string,

  /**
   * Provide valid children of HeaderNavigation, for example `HeaderMenuItem`
   * or `HeaderMenu`
   */
  children: _propTypes.default.node
}));