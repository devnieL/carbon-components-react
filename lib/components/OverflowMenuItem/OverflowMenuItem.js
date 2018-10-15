"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var OverflowMenuItem = function OverflowMenuItem(_ref) {
  var className = _ref.className,
      itemText = _ref.itemText,
      hasDivider = _ref.hasDivider,
      isDelete = _ref.isDelete,
      disabled = _ref.disabled,
      closeMenu = _ref.closeMenu,
      onClick = _ref.onClick,
      primaryFocus = _ref.primaryFocus,
      floatingMenu = _ref.floatingMenu,
      wrapperClassName = _ref.wrapperClassName,
      requireTitle = _ref.requireTitle,
      other = _objectWithoutProperties(_ref, ["className", "itemText", "hasDivider", "isDelete", "disabled", "closeMenu", "onClick", "primaryFocus", "floatingMenu", "wrapperClassName", "requireTitle"]);

  var overflowMenuBtnClasses = (0, _classnames.default)('bx--overflow-menu-options__btn', className);
  var overflowMenuItemClasses = (0, _classnames.default)('bx--overflow-menu-options__option', {
    'bx--overflow-menu--divider': hasDivider,
    'bx--overflow-menu-options__option--danger': isDelete,
    'bx--overflow-menu-options__option--disabled': disabled
  }, wrapperClassName);

  var handleClick = function handleClick(evt) {
    onClick(evt);
    closeMenu();
  };

  var primaryFocusProp = function (_ref2) {
    var primaryFocus = _ref2.primaryFocus,
        floatingMenu = _ref2.floatingMenu;

    if (!primaryFocus) {
      return {};
    }

    return floatingMenu ? {
      'data-floating-menu-primary-focus': true
    } : {
      'data-overflow-menu-primary-focus': true
    };
  }({
    primaryFocus: primaryFocus,
    floatingMenu: floatingMenu
  });

  var item = _react.default.createElement("li", {
    className: overflowMenuItemClasses,
    role: "menuitem"
  }, _react.default.createElement("button", _extends({}, other, primaryFocusProp, {
    className: overflowMenuBtnClasses,
    disabled: disabled,
    onClick: handleClick,
    title: requireTitle ? itemText : null,
    tabIndex: disabled ? -1 : 0
  }), itemText));

  return item;
};

OverflowMenuItem.propTypes = {
  /**
   * The CSS class name to be placed on the button element
   */
  className: _propTypes.default.string,

  /**
   * The CSS class name to be placed on the wrapper list item element
   */
  wrapperClassName: _propTypes.default.string,

  /**
   * The text in the menu item.
   */
  itemText: _propTypes.default.node.isRequired,

  /**
   * `true` to make this menu item a divider.
   */
  hasDivider: _propTypes.default.bool,

  /**
   * `true` to make this menu item a "danger button".
   */
  isDelete: _propTypes.default.bool,

  /**
   * `true` to make this menu item disabled.
   */
  disabled: _propTypes.default.bool,
  onBlur: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  onKeyUp: _propTypes.default.func,
  onMouseDown: _propTypes.default.func,
  onMouseEnter: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func,
  onMouseUp: _propTypes.default.func,

  /**
   * A callback to tell the parent menu component that the menu should be closed.
   */
  closeMenu: _propTypes.default.func,

  /**
   * `true` if this menu item should get focus when the menu gets open.
   */
  primaryFocus: _propTypes.default.bool,

  /**
   * `true` if this menu item belongs to a floating OverflowMenu
   */
  floatingMenu: _propTypes.default.bool,

  /**
   * `true` if this menu item has long text and requires a browser tooltip
   */
  requireTitle: _propTypes.default.bool
};
OverflowMenuItem.defaultProps = {
  hasDivider: false,
  isDelete: false,
  disabled: false,
  itemText: 'Provide itemText',
  onClick: function onClick() {}
};
var _default = OverflowMenuItem;
exports.default = _default;