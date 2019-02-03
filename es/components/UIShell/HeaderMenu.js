function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ChevronDownGlyph } from '@carbon/icons-react';
import { settings } from 'carbon-components';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { keys, match, matches } from '../../tools/key';
import { AriaLabelPropType } from '../../prop-types/AriaPropTypes';
var prefix = settings.prefix;
/**
 * `HeaderMenu` is used to render submenu's in the `Header`. Most often children
 * will be a `HeaderMenuItem`. It handles certain keyboard events to help
 * with managing focus. It also passes along refs to each child so that it can
 * help manage focus state of its children.
 */

var HeaderMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderMenu, _React$Component);

  function HeaderMenu(props) {
    var _this;

    _classCallCheck(this, HeaderMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnMouseOver", function () {
      _this.setState({
        expanded: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnMouseLeave", function () {
      _this.setState({
        expanded: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnKeyDown", function (event) {
      // If we recieve a RIGHT or LEFT key event we should close our menu and
      // allow the event to propagate to the corresponding parent menubar or menu
      if (matches(event, [keys.RIGHT, keys.LEFT])) {
        _this.setState({
          expanded: false,
          selectedIndex: null
        });

        return;
      } // If we receive an ESC key event we want to close the menu and restore
      // focus to the menu button


      if (match(event, keys.ESC)) {
        event.stopPropagation();

        _this.setState({
          expanded: false,
          selectedIndex: null
        }, function () {
          _this.menuButtonRef.focus();
        });

        return;
      } // If we recieve a HOME or END keyboard event we want to prevent the default
      // behavior (which is to scroll to the beginning or end of the document) and
      // also stop the event from propagating.
      //
      // We also want to update the selectedIndex value accordingly and then focus
      // the corresponding menuitem.
      //
      // Our final check on selectedIndex is to make sure that we don't cancel the
      // HOME or END events for the menubar. We should propagate these events if
      // our menu is not open.


      if (matches(event, [keys.HOME, keys.END]) && _this.state.selectedIndex !== null) {
        event.preventDefault();
        event.stopPropagation();
        var selectedIndex = match(event, keys.HOME) ? 0 : _this.items.length - 1;

        _this.setState({
          selectedIndex: selectedIndex
        }, function () {
          _this.items[_this.state.selectedIndex].focus();
        });

        return;
      }

      if (matches(event, [keys.DOWN, keys.UP])) {
        event.stopPropagation();
        var which = event.which;

        _this.setState(function (state) {
          // We use the modulo (%) operator here to implement a circular
          // buffer so that when we hit the end of the list it wraps to the
          // beginning, and when it hits the beginning of a list it wraps to the
          // end.
          var selectedIndex = match(which, keys.DOWN) ? (state.selectedIndex + 1) % _this.items.length : (state.selectedIndex + _this.items.length - 1) % _this.items.length;
          return {
            selectedIndex: selectedIndex
          };
        }, function () {
          _this.items[_this.state.selectedIndex].focus();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMenuButtonKeyDown", function (event) {
      if (matches(event, [keys.DOWN, keys.UP])) {
        event.stopPropagation();
        var selectedIndex = event.which === keys.DOWN ? 0 : _this.items.length - 1;

        _this.setState({
          expanded: true,
          selectedIndex: selectedIndex
        }, function () {
          _this.items[_this.state.selectedIndex].focus();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnBlur", function (event) {
      // Rough guess for a blur event that is triggered outside of our menu or
      // menubar context
      if (!event.relatedTarget) {
        _this.setState({
          expanded: false,
          selectedIndex: null
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMenuButtonRef", function (node) {
      if (_this.props.focusRef) {
        _this.props.focusRef(node);
      }

      _this.menuButtonRef = node;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleItemRef", function (index) {
      return function (node) {
        _this.items[index] = node;
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_renderMenuItem", function (item, index) {
      return React.cloneElement(item, {
        ref: _this.handleItemRef(index),
        role: 'none',
        tabIndex: index !== 0 ? -1 : 0
      });
    });

    _this.state = {
      // Used to manage the expansion state of the menu
      expanded: false,
      // Refers to the menuitem that is currently focused
      // Note: children should have `role="menuitem"` on node consuming ref
      selectedIndex: null
    };
    _this.items = [];
    return _this;
  }
  /**
   * Handle expansion state
   */


  _createClass(HeaderMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ariaLabel = _this$props['aria-label'],
          ariaLabelledBy = _this$props['aria-labelledby'],
          customClassName = _this$props.className,
          children = _this$props.children,
          tabIndex = _this$props.tabIndex;
      var accessibilityLabel = {
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy
      };
      var className = cx("".concat(prefix, "--header__submenu"), customClassName); // Notes on eslint comments and based on the examples in:
      // https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html#
      // - The focus is handled by the <a> menuitem, onMouseOver is for mouse
      // users
      // - aria-haspopup can definitely have the value "menu"
      // - aria-expanded is on their example node with role="menuitem"
      // - href can be set to javascript:void(0), ideally this will be a button

      return React.createElement("li", {
        // eslint-disable-line jsx-a11y/mouse-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        className: className,
        onKeyDown: this.handleOnKeyDown,
        onMouseOver: this.handleOnMouseOver,
        onMouseLeave: this.handleOnMouseLeave,
        onBlur: this.handleOnBlur
      }, React.createElement("a", {
        // eslint-disable-line jsx-a11y/role-supports-aria-props,jsx-a11y/anchor-is-valid
        "aria-haspopup": "menu" // eslint-disable-line jsx-a11y/aria-proptypes
        ,
        "aria-expanded": this.state.expanded,
        className: cx("".concat(prefix, "--header__menu-item"), "".concat(prefix, "--header__menu-title")),
        href: "javascript:void(0)",
        ref: this.handleMenuButtonRef,
        role: "menuitem",
        tabIndex: tabIndex,
        onKeyDown: this.handleMenuButtonKeyDown
      }, ariaLabel, React.createElement(ChevronDownGlyph, {
        className: "".concat(prefix, "--header__menu-arrow")
      })), React.createElement("ul", _extends({}, accessibilityLabel, {
        className: "".concat(prefix, "--header__menu"),
        role: "menu"
      }), React.Children.map(children, this._renderMenuItem)));
    }
    /**
     * Render an individual menuitem, passing along `role: 'none'` because the
     * host node <li> doesn't apply when in a <ul> with `role="menu"` and so we
     * need to revert the semantics.
     *
     * We also capture the `ref` for each child inside of `this.items` to properly
     * manage focus. In addition to this focus management, all items receive a
     * `tabIndex: -1` so the user won't hit a large number of items in their tab
     * sequence when they might not want to go through all the items.
     */

  }]);

  return HeaderMenu;
}(React.Component);

_defineProperty(HeaderMenu, "propTypes", _objectSpread({}, AriaLabelPropType, {
  /**
   * Provide a custom ref handler for the menu button
   */
  focusRef: PropTypes.func,

  /**
   * Optionally provide a tabIndex for the underlying menu button
   */
  tabIndex: PropTypes.number
}));

export default React.forwardRef(function (props, ref) {
  return React.createElement(HeaderMenu, _extends({}, props, {
    focusRef: ref
  }));
});