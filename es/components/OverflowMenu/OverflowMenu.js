var _triggerButtonPositio, _triggerButtonPositio2;

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

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import invariant from 'invariant';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import warning from 'warning';
import { iconOverflowMenu } from 'carbon-icons';
import { settings } from 'carbon-components';
import ClickListener from '../../internal/ClickListener';
import FloatingMenu, { DIRECTION_TOP, DIRECTION_BOTTOM } from '../../internal/FloatingMenu';
import OptimizedResize from '../../internal/OptimizedResize';
import Icon from '../Icon'; // TODO: import { OverflowMenuVertical16 } from '@carbon/icons-react';

import OverflowMenuVertical16 from '@carbon/icons-react/lib/overflow-menu--vertical/16';
import { componentsX } from '../../internal/FeatureFlags';
var prefix = settings.prefix;
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

var on = function on(element) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  element.addEventListener.apply(element, args);
  return {
    release: function release() {
      element.removeEventListener.apply(element, args);
      return null;
    }
  };
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
 * The CSS property names of the arrow keyed by the floating menu direction.
 * @type {Object<string, string>}
 */


var triggerButtonPositionProps = (_triggerButtonPositio = {}, _defineProperty(_triggerButtonPositio, DIRECTION_TOP, 'bottom'), _defineProperty(_triggerButtonPositio, DIRECTION_BOTTOM, 'top'), _triggerButtonPositio);
/**
 * Determines how the position of arrow should affect the floating menu position.
 * @type {Object<string, number>}
 */

var triggerButtonPositionFactors = (_triggerButtonPositio2 = {}, _defineProperty(_triggerButtonPositio2, DIRECTION_TOP, -2), _defineProperty(_triggerButtonPositio2, DIRECTION_BOTTOM, -1), _triggerButtonPositio2);
/**
 * @param {Element} menuBody The menu body with the menu arrow.
 * @param {string} direction The floating menu direction.
 * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
 * @private
 */

export var getMenuOffset = function getMenuOffset(menuBody, direction, trigger, flip) {
  var triggerButtonPositionProp = triggerButtonPositionProps[direction];
  var triggerButtonPositionFactor = triggerButtonPositionFactors[direction];

  if (process.env.NODE_ENV !== "production") {
    !(triggerButtonPositionProp && triggerButtonPositionFactor) ? process.env.NODE_ENV !== "production" ? invariant(false, '[OverflowMenu] wrong floating menu direction: `%s`', direction) : invariant(false) : void 0;
  }

  var menuWidth = menuBody.offsetWidth,
      menuHeight = menuBody.offsetHeight;
  var arrowStyle = menuBody.ownerDocument.defaultView.getComputedStyle(menuBody, ':before');
  var values = [triggerButtonPositionProp, 'left', 'width', 'height', 'border-top-width'].reduce(function (o, name) {
    return _objectSpread({}, o, _defineProperty({}, name, Number((/^([\d-.]+)px$/.exec(arrowStyle.getPropertyValue(name)) || [])[1])));
  }, {});

  if (Object.keys(values).every(function (name) {
    return !isNaN(values[name]);
  })) {
    var left = values.left,
        width = values.width,
        height = values.height,
        borderTopWidth = values['border-top-width'];
    return {
      left: menuWidth / 2 - (left + Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2),
      top: Math.sqrt(Math.pow(borderTopWidth, 2) * 2) + triggerButtonPositionFactor * values[triggerButtonPositionProp]
    };
  }

  if (componentsX) {
    switch (triggerButtonPositionProp) {
      case 'top':
      case 'bottom':
        {
          var triggerWidth = trigger.offsetWidth;
          return {
            left: (!flip ? 1 : -1) * (menuWidth / 2 - triggerWidth / 2),
            top: 0
          };
        }

      case 'left':
      case 'right':
        {
          var triggerHeight = trigger.offsetHeight;
          return {
            left: 0,
            top: (!flip ? 1 : -1) * (menuHeight / 2 - triggerHeight / 2)
          };
        }

      default:
        break;
    }
  }
};

var OverflowMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(OverflowMenu, _Component);

  function OverflowMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OverflowMenu);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OverflowMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_hFocusIn", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMenuPosition", function () {
      if (_this.menuEl) {
        var menuPosition = _this.menuEl.getBoundingClientRect();

        _this.setState({
          menuPosition: menuPosition
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (evt) {
      _this.setState({
        open: !_this.state.open
      });

      _this.props.onClick(evt);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (evt) {
      if (evt.which === 40) {
        _this.setState({
          open: !_this.state.open
        });

        _this.props.onClick(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (evt) {
      // only respond to key events when the menu is closed, so that menu items still respond to key events
      var key = evt.key || evt.which;

      if (!_this.state.open) {
        if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
          _this.setState({
            open: true
          });
        }
      } // Close the overflow menu on escape


      if (key === 'Escape' || key === 'Esc' || key === 27) {
        _this.closeMenu(); // Stop the esc keypress from bubbling out and closing something it shouldn't


        evt.stopPropagation();
        evt.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOutside", function (evt) {
      if (!_this._menuBody || !_this._menuBody.contains(evt.target)) {
        _this.closeMenu();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeMenu", function () {
      var wasOpen = _this.state.open;

      _this.setState({
        open: false
      }, function () {
        if (wasOpen) {
          _this.focusMenuEl();
        }

        _this.props.onClose();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bindMenuEl", function (menuEl) {
      _this.menuEl = menuEl;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focusMenuEl", function () {
      if (_this.menuEl) {
        _this.menuEl.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_bindMenuBody", function (menuBody) {
      if (!menuBody) {
        _this._menuBody = menuBody;

        if (_this._hFocusIn) {
          _this._hFocusIn = _this._hFocusIn.release();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handlePlace", function (menuBody) {
      if (menuBody) {
        _this._menuBody = menuBody;
        (menuBody.querySelector('[data-floating-menu-primary-focus]') || menuBody).focus();
        var hasFocusin = 'onfocusin' in window;
        var focusinEventName = hasFocusin ? 'focusin' : 'focus';
        _this._hFocusIn = on(menuBody.ownerDocument, focusinEventName, function (event) {
          var target = event.target;

          if (!menuBody.contains(target) && _this.menuEl && !matches(target, ".".concat(prefix, "--overflow-menu,.").concat(prefix, "--overflow-menu-options"))) {
            _this.closeMenu();
          }
        }, !hasFocusin);

        _this.props.onOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getTarget", function () {
      return _this.menuEl && closest(_this.menuEl, '[data-floating-menu-container]') || document.body;
    });

    return _this;
  }

  _createClass(OverflowMenu, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this2 = this;

      if (nextState.open && !this.state.open) {
        requestAnimationFrame(function () {
          _this2.getMenuPosition();
        });
        return false; // Let `.getMenuPosition()` cause render
      }

      return true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      requestAnimationFrame(function () {
        _this3.getMenuPosition();
      });
      this.hResize = OptimizedResize.add(function () {
        _this3.getMenuPosition();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          onOpen = _this$props.onOpen,
          floatingMenu = _this$props.floatingMenu;

      if (this.state.open) {
        if (!floatingMenu) {
          (this.menuEl.querySelector('[data-overflow-menu-primary-focus]') || this.menuEl).focus();
          onOpen();
        }
      } else {
        onClose();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.hResize.release();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2,
          _this4 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          tabIndex = _this$props2.tabIndex,
          ariaLabel = _this$props2.ariaLabel,
          children = _this$props2.children,
          iconDescription = _this$props2.iconDescription,
          icon = _this$props2.icon,
          iconName = _this$props2.iconName,
          direction = _this$props2.direction,
          flipped = _this$props2.flipped,
          floatingMenu = _this$props2.floatingMenu,
          menuOffset = _this$props2.menuOffset,
          menuOffsetFlip = _this$props2.menuOffsetFlip,
          iconClass = _this$props2.iconClass,
          onClick = _this$props2.onClick,
          onOpen = _this$props2.onOpen,
          renderIcon = _this$props2.renderIcon,
          other = _objectWithoutProperties(_this$props2, ["id", "tabIndex", "ariaLabel", "children", "iconDescription", "icon", "iconName", "direction", "flipped", "floatingMenu", "menuOffset", "menuOffsetFlip", "iconClass", "onClick", "onOpen", "renderIcon"]);

      if (process.env.NODE_ENV !== "production") {
        process.env.NODE_ENV !== "production" ? warning(floatingMenu || direction === DIRECTION_BOTTOM, '[OverflowMenu] menu direction other than `bottom` is only supporting with `floatingMenu` option. Received: `%s`', direction) : void 0;
      }

      var open = this.state.open;
      var overflowMenuClasses = classNames(this.props.className, "".concat(prefix, "--overflow-menu"), _defineProperty({}, "".concat(prefix, "--overflow-menu--open"), open));
      var overflowMenuOptionsClasses = classNames("".concat(prefix, "--overflow-menu-options"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--overflow-menu--flip"), this.props.flipped), _defineProperty(_classNames2, "".concat(prefix, "--overflow-menu-options--open"), open), _classNames2));
      var overflowMenuIconClasses = classNames("".concat(prefix, "--overflow-menu__icon"), iconClass);
      var childrenWithProps = React.Children.toArray(children).map(function (child) {
        return React.cloneElement(child, {
          closeMenu: _this4.closeMenu,
          floatingMenu: floatingMenu || undefined
        });
      });
      var menuBody = React.createElement("ul", {
        className: overflowMenuOptionsClasses,
        tabIndex: "-1",
        ref: !floatingMenu && this._bindMenuBody,
        role: "menu"
      }, childrenWithProps);
      var wrappedMenuBody = !floatingMenu ? menuBody : React.createElement("div", {
        role: "menuitem"
      }, React.createElement(FloatingMenu, {
        menuPosition: this.state.menuPosition,
        menuDirection: direction,
        menuOffset: flipped ? menuOffsetFlip : menuOffset,
        menuRef: this._bindMenuBody,
        menuEl: this.menuEl,
        flipped: this.props.flipped,
        target: this._getTarget,
        onPlace: this._handlePlace
      }, React.cloneElement(menuBody, {
        'data-floating-menu-direction': direction
      })));
      var iconProps = {
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        className: overflowMenuIconClasses,
        description: iconDescription,
        focusable: 'false' // Prevent `<svg>` in trigger icon from getting focus for IE11

      };

      var overflowMenuIcon = function () {
        if (renderIcon) {
          return renderIcon(iconProps);
        }

        if (!componentsX) {
          return React.createElement(Icon, _extends({}, iconProps, {
            icon: !icon && !iconName ? iconOverflowMenu : icon,
            name: iconName
          }));
        }

        return React.createElement(OverflowMenuVertical16, null);
      }();

      return React.createElement(ClickListener, {
        onClickOutside: this.handleClickOutside
      }, React.createElement("div", _extends({}, other, {
        role: "menu",
        "aria-haspopup": true,
        "aria-expanded": this.state.open,
        className: overflowMenuClasses,
        onKeyDown: this.handleKeyPress,
        onClick: this.handleClick,
        "aria-label": ariaLabel,
        id: id,
        tabIndex: tabIndex,
        ref: this.bindMenuEl
      }), overflowMenuIcon, open && wrappedMenuBody));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var open = _ref.open;
      var prevOpen = state.prevOpen;
      return prevOpen === open ? null : {
        open: open,
        prevOpen: open
      };
    }
  }]);

  return OverflowMenu;
}(Component);

_defineProperty(OverflowMenu, "propTypes", {
  /**
   * `true` if the menu should be open.
   */
  open: PropTypes.bool,

  /**
   * The menu direction, supported only with `floatingMenu={true}`.
   */
  direction: PropTypes.oneOf([DIRECTION_TOP, DIRECTION_BOTTOM]),

  /**
   * `true` if the menu alignment should be flipped.
   */
  flipped: PropTypes.bool,

  /**
   * `true` if the menu should be floated, making the DOM of the menu body orphaned from the trigger button.
   * Useful when the container of the triggering element cannot have `overflow:visible` style, etc.
   */
  floatingMenu: PropTypes.bool,

  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * The `tabindex` attribute.
   */
  tabIndex: PropTypes.number,

  /**
   * The element ID.
   */
  id: PropTypes.string,

  /**
   * The ARIA label.
   */
  ariaLabel: PropTypes.string,

  /**
   * The event handler for the `click` event.
   */
  onClick: PropTypes.func,

  /**
   * The event handler for the `focus` event.
   */
  onFocus: PropTypes.func,

  /**
   * The event handler for the `keydown` event.
   */
  onKeyDown: PropTypes.func,

  /**
   * The icon description.
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * The icon.
   */
  icon: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string.isRequired,
    svgData: PropTypes.object.isRequired
  }),

  /**
   * The icon name.
   */
  iconName: PropTypes.string,

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffset: PropTypes.oneOfType([PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number
  }), PropTypes.func]),

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffsetFlip: PropTypes.oneOfType([PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number
  }), PropTypes.func]),

  /**
   * The CSS class for the icon.
   */
  iconClass: PropTypes.string,

  /**
   * Function called to override icon rendering.
   */
  renderIcon: PropTypes.func,

  /**
   * Function called when menu is closed
   */
  onClose: PropTypes.func,

  /**
   * Function called when menu is closed
   */
  onOpen: PropTypes.func
});

_defineProperty(OverflowMenu, "defaultProps", {
  ariaLabel: 'list of options',
  iconDescription: 'open and close list of options',
  open: false,
  direction: DIRECTION_BOTTOM,
  flipped: false,
  floatingMenu: false,
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {},
  onClose: function onClose() {},
  onOpen: function onOpen() {},
  tabIndex: 0,
  menuOffset: getMenuOffset,
  menuOffsetFlip: getMenuOffset
});

export { OverflowMenu as default };