function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import warning from 'warning';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import window from 'window-or-global';
/**
 * The structure for the position of floating menu.
 * @typedef {Object} FloatingMenu~position
 * @property {number} left The left position.
 * @property {number} top The top position.
 * @property {number} right The right position.
 * @property {number} bottom The bottom position.
 */

/**
 * The structure for the size of floating menu.
 * @typedef {Object} FloatingMenu~size
 * @property {number} width The width.
 * @property {number} height The height.
 */

/**
 * The structure for the position offset of floating menu.
 * @typedef {Object} FloatingMenu~offset
 * @property {number} top The top position.
 * @property {number} left The left position.
 */

export var DIRECTION_LEFT = 'left';
export var DIRECTION_TOP = 'top';
export var DIRECTION_RIGHT = 'right';
export var DIRECTION_BOTTOM = 'bottom';
/**
 * @param {FloatingMenu~offset} [oldMenuOffset={}] The old value.
 * @param {FloatingMenu~offset} [menuOffset={}] The new value.
 * @returns `true` if the parent component wants to change in the adjustment of the floating menu position.
 * @private
 */

var hasChangeInOffset = function hasChangeInOffset() {
  var oldMenuOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var menuOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (_typeof(oldMenuOffset) !== _typeof(menuOffset)) {
    return true;
  } else if (Object(menuOffset) === menuOffset && typeof menuOffset !== 'function') {
    return oldMenuOffset.top !== menuOffset.top || oldMenuOffset.left !== menuOffset.left;
  }

  return oldMenuOffset !== menuOffset;
};
/**
 * @param {Object} params The parameters.
 * @param {FloatingMenu~size} params.menuSize The size of the menu.
 * @param {FloatingMenu~position} params.refPosition The position of the triggering element.
 * @param {FloatingMenu~offset} [params.offset={ left: 0, top: 0 }] The position offset of the menu.
 * @param {string} [params.direction=bottom] The menu direction.
 * @param {number} [params.scrollX=0] The scroll position of the viewport.
 * @param {number} [params.scrollY=0] The scroll position of the viewport.
 * @returns {FloatingMenu~offset} The position of the menu, relative to the top-left corner of the viewport.
 * @private
 */


var getFloatingPosition = function getFloatingPosition(_ref) {
  var _DIRECTION_LEFT$DIREC;

  var menuSize = _ref.menuSize,
      refPosition = _ref.refPosition,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? {} : _ref$offset,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? DIRECTION_BOTTOM : _ref$direction,
      _ref$scrollX = _ref.scrollX,
      scrollX = _ref$scrollX === void 0 ? 0 : _ref$scrollX,
      _ref$scrollY = _ref.scrollY,
      scrollY = _ref$scrollY === void 0 ? 0 : _ref$scrollY;
  var _refPosition$left = refPosition.left,
      refLeft = _refPosition$left === void 0 ? 0 : _refPosition$left,
      _refPosition$top = refPosition.top,
      refTop = _refPosition$top === void 0 ? 0 : _refPosition$top,
      _refPosition$right = refPosition.right,
      refRight = _refPosition$right === void 0 ? 0 : _refPosition$right,
      _refPosition$bottom = refPosition.bottom,
      refBottom = _refPosition$bottom === void 0 ? 0 : _refPosition$bottom;
  var width = menuSize.width,
      height = menuSize.height;
  var _offset$top = offset.top,
      top = _offset$top === void 0 ? 0 : _offset$top,
      _offset$left = offset.left,
      left = _offset$left === void 0 ? 0 : _offset$left;
  var refCenterHorizontal = (refLeft + refRight) / 2;
  var refCenterVertical = (refTop + refBottom) / 2;
  return (_DIRECTION_LEFT$DIREC = {}, _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_LEFT, function () {
    return {
      left: refLeft - width + scrollX - left,
      top: refCenterVertical - height / 2 + scrollY + top
    };
  }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_TOP, function () {
    return {
      left: refCenterHorizontal - width / 2 + scrollX + left,
      top: refTop - height + scrollY - top
    };
  }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_RIGHT, function () {
    return {
      left: refRight + scrollX + left,
      top: refCenterVertical - height / 2 + scrollY + top
    };
  }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_BOTTOM, function () {
    return {
      left: refCenterHorizontal - width / 2 + scrollX + left,
      top: refBottom + scrollY + top
    };
  }), _DIRECTION_LEFT$DIREC)[direction]();
};
/**
 * A menu that is detached from the triggering element.
 * Useful when the container of the triggering element cannot have `overflow:visible` style, etc.
 */


var FloatingMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FloatingMenu, _React$Component);

  function FloatingMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FloatingMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FloatingMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_placeInProgress", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      /**
       * The position of the menu, relative to the top-left corner of the viewport.
       * @type {FloatingMenu~offset}
       */
      floatingPosition: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_menuContainer", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_menuBody", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_updateMenuSize", function () {
      var prevProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var menuBody = _this._menuBody;
      process.env.NODE_ENV !== "production" ? warning(menuBody, 'The DOM node for menu body for calculating its position is not available. Skipping...') : void 0;

      if (!menuBody) {
        return;
      }

      var _prevProps$menuPositi = prevProps.menuPosition,
          oldRefPosition = _prevProps$menuPositi === void 0 ? {} : _prevProps$menuPositi,
          _prevProps$menuOffset = prevProps.menuOffset,
          oldMenuOffset = _prevProps$menuOffset === void 0 ? {} : _prevProps$menuOffset,
          oldMenuDirection = prevProps.menuDirection;
      var _this$props = _this.props,
          _this$props$menuPosit = _this$props.menuPosition,
          refPosition = _this$props$menuPosit === void 0 ? {} : _this$props$menuPosit,
          _this$props$menuOffse = _this$props.menuOffset,
          menuOffset = _this$props$menuOffse === void 0 ? {} : _this$props$menuOffse,
          menuDirection = _this$props.menuDirection;

      if (oldRefPosition.top !== refPosition.top || oldRefPosition.right !== refPosition.right || oldRefPosition.bottom !== refPosition.bottom || oldRefPosition.left !== refPosition.left || hasChangeInOffset(oldMenuOffset, menuOffset) || oldMenuDirection !== menuDirection) {
        var menuSize = menuBody.getBoundingClientRect();
        var offset = typeof menuOffset !== 'function' ? menuOffset : menuOffset(menuBody, menuDirection); // Skips if either in the following condition:
        // a) Menu body has `display:none`
        // b) `menuOffset` as a callback returns `undefined` (The callback saw that it couldn't calculate the value)

        if (menuSize.width > 0 && menuSize.height > 0 || !offset) {
          _this.setState({
            floatingPosition: getFloatingPosition({
              menuSize: menuSize,
              refPosition: refPosition,
              direction: menuDirection,
              offset: offset,
              scrollX: window.pageXOffset,
              scrollY: window.pageYOffset
            })
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_menuRef", function (menuBody) {
      var menuRef = _this.props.menuRef;
      _this._placeInProgress = !!menuBody;
      menuRef && menuRef(_this._menuBody = menuBody);

      if (menuBody) {
        _this._updateMenuSize();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_getChildrenWithProps", function () {
      var _this$props2 = _this.props,
          styles = _this$props2.styles,
          children = _this$props2.children;
      var pos = _this.state.floatingPosition; // If no pos available, we need to hide the element (offscreen to the left)
      // This is done so we can measure the content before positioning it correctly.

      var positioningStyle = pos ? {
        left: "".concat(pos.left, "px"),
        top: "".concat(pos.top, "px"),
        right: 'auto'
      } : {
        visibility: 'hidden',
        top: '0px'
      };
      return React.cloneElement(children, {
        ref: _this._menuRef,
        style: _objectSpread({}, styles, positioningStyle, {
          position: 'absolute',
          margin: 0,
          opacity: 1
        })
      });
    });

    return _this;
  }

  _createClass(FloatingMenu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this._updateMenuSize(prevProps);

      var onPlace = this.props.onPlace;

      if (this._placeInProgress && this.state.floatingPosition && typeof onPlace === 'function') {
        onPlace(this._menuBody);
        this._placeInProgress = false;
      }
    }
    /**
     * A callback for called when menu body is mounted or unmounted.
     * @param {Element} menuBody The menu body being mounted. `null` if the menu body is being unmounted.
     */

  }, {
    key: "render",
    value: function render() {
      if (typeof document !== 'undefined') {
        var target = this.props.target;
        return ReactDOM.createPortal(this._getChildrenWithProps(), !target ? document.body : target());
      }

      return null;
    }
  }]);

  return FloatingMenu;
}(React.Component);

_defineProperty(FloatingMenu, "propTypes", {
  /**
   * Contents to put into the floating menu.
   */
  children: PropTypes.object,

  /**
   * The query selector indicating where the floating menu body should be placed.
   */
  target: PropTypes.func,

  /**
   * The position in the viewport of the trigger button.
   */
  menuPosition: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number
  }),

  /**
   * Where to put the tooltip, relative to the trigger button.
   */
  menuDirection: PropTypes.oneOf([DIRECTION_LEFT, DIRECTION_TOP, DIRECTION_RIGHT, DIRECTION_BOTTOM]),

  /**
   * The adjustment of the floating menu position, considering the position of dropdown arrow, etc.
   */
  menuOffset: PropTypes.oneOfType([PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number
  }), PropTypes.func]),

  /**
   * The additional styles to put to the floating menu.
   */
  styles: PropTypes.object,

  /**
   * The callback called when the menu body has been mounted to/will be unmounted from the DOM.
   */
  menuRef: PropTypes.func,

  /**
   * The callback called when the menu body has been mounted and positioned.
   */
  onPlace: PropTypes.func
});

_defineProperty(FloatingMenu, "defaultProps", {
  menuPosition: {},
  menuOffset: {},
  menuDirection: DIRECTION_BOTTOM
});

export default FloatingMenu;