"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _downshift = _interopRequireDefault(require("downshift"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _ListBox = _interopRequireDefault(require("../ListBox"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _Selection = _interopRequireDefault(require("../../internal/Selection"));

var _MultiSelectPropTypes = require("./MultiSelectPropTypes");

var _itemToString = require("./tools/itemToString");

var _sorting = require("./tools/sorting");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var MultiSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MultiSelect, _React$Component);

  function MultiSelect(props) {
    var _this;

    _classCallCheck(this, MultiSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiSelect).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnChange", function (changes) {
      if (_this.props.onChange) {
        _this.props.onChange(changes);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnOuterClick", function () {
      _this.setState({
        isOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnStateChange", function (changes) {
      var type = changes.type;

      switch (type) {
        case _downshift.default.stateChangeTypes.keyDownArrowDown:
        case _downshift.default.stateChangeTypes.keyDownArrowUp:
        case _downshift.default.stateChangeTypes.itemMouseEnter:
          _this.setState({
            highlightedIndex: changes.highlightedIndex
          });

          break;

        case _downshift.default.stateChangeTypes.keyDownEscape:
        case _downshift.default.stateChangeTypes.mouseUp:
          _this.setState({
            isOpen: false
          });

          break;
        // Opt-in to some cases where we should be toggling the menu based on
        // a given key press or mouse handler
        // Reference: https://github.com/paypal/downshift/issues/206

        case _downshift.default.stateChangeTypes.clickButton:
        case _downshift.default.stateChangeTypes.keyDownSpaceButton:
          _this.setState(function () {
            var nextIsOpen = changes.isOpen || false;

            if (changes.isOpen === false) {
              // If Downshift is trying to close the menu, but we know the input
              // is the active element in the document, then keep the menu open
              if (_this.inputNode === document.activeElement) {
                nextIsOpen = true;
              }
            }

            return {
              isOpen: nextIsOpen
            };
          });

          break;
      }
    });

    _this.state = {
      highlightedIndex: null,
      isOpen: false
    };
    return _this;
  }

  _createClass(MultiSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          highlightedIndex = _this$state.highlightedIndex,
          isOpen = _this$state.isOpen;
      var _this$props = this.props,
          containerClassName = _this$props.className,
          items = _this$props.items,
          itemToString = _this$props.itemToString,
          label = _this$props.label,
          type = _this$props.type,
          disabled = _this$props.disabled,
          initialSelectedItems = _this$props.initialSelectedItems,
          sortItems = _this$props.sortItems,
          compareItems = _this$props.compareItems,
          light = _this$props.light,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText,
          useTitleInItem = _this$props.useTitleInItem;
      var className = (0, _classnames.default)('bx--multi-select', containerClassName, {
        'bx--list-box--light': light
      });
      return _react.default.createElement(_Selection.default, {
        onChange: this.handleOnChange,
        initialSelectedItems: initialSelectedItems,
        render: function render(_ref) {
          var selectedItems = _ref.selectedItems,
              onItemChange = _ref.onItemChange,
              clearSelection = _ref.clearSelection;
          return _react.default.createElement(_downshift.default, {
            highlightedIndex: highlightedIndex,
            isOpen: isOpen,
            itemToString: itemToString,
            onChange: onItemChange,
            onStateChange: _this2.handleOnStateChange,
            onOuterClick: _this2.handleOnOuterClick,
            selectedItem: selectedItems,
            render: function render(_ref2) {
              var getRootProps = _ref2.getRootProps,
                  selectedItem = _ref2.selectedItem,
                  isOpen = _ref2.isOpen,
                  itemToString = _ref2.itemToString,
                  highlightedIndex = _ref2.highlightedIndex,
                  getItemProps = _ref2.getItemProps,
                  getButtonProps = _ref2.getButtonProps;
              return _react.default.createElement(_ListBox.default, _extends({
                type: type,
                className: className,
                disabled: disabled,
                invalid: invalid,
                invalidText: invalidText
              }, getRootProps({
                refKey: 'innerRef'
              })), _react.default.createElement(_ListBox.default.Field, getButtonProps({
                disabled: disabled
              }), selectedItem.length > 0 && _react.default.createElement(_ListBox.default.Selection, {
                clearSelection: clearSelection,
                selectionCount: selectedItem.length
              }), _react.default.createElement("span", {
                className: "bx--list-box__label"
              }, label), _react.default.createElement(_ListBox.default.MenuIcon, {
                isOpen: isOpen
              })), isOpen && _react.default.createElement(_ListBox.default.Menu, null, sortItems(items, {
                selectedItems: selectedItems,
                itemToString: itemToString,
                compareItems: compareItems,
                locale: 'en'
              }).map(function (item, index) {
                var itemProps = getItemProps({
                  item: item
                });
                var itemText = itemToString(item);
                var isChecked = selectedItem.filter(function (selected) {
                  return (0, _lodash.default)(selected, item);
                }).length > 0;
                return _react.default.createElement(_ListBox.default.MenuItem, _extends({
                  key: itemProps.id,
                  isActive: isChecked,
                  isHighlighted: highlightedIndex === index
                }, itemProps), _react.default.createElement(_Checkbox.default, {
                  id: itemProps.id,
                  title: useTitleInItem ? itemText : null,
                  name: itemText,
                  checked: isChecked,
                  readOnly: true,
                  tabIndex: "-1",
                  labelText: itemText
                }));
              })));
            }
          });
        }
      });
    }
  }]);

  return MultiSelect;
}(_react.default.Component);

exports.default = MultiSelect;

_defineProperty(MultiSelect, "propTypes", _objectSpread({}, _MultiSelectPropTypes.sortingPropTypes, {
  /**
   * Disable the control
   */
  disabled: _propTypes.default.bool,

  /**
   * We try to stay as generic as possible here to allow individuals to pass
   * in a collection of whatever kind of data structure they prefer
   */
  items: _propTypes.default.array.isRequired,

  /**
   * Allow users to pass in arbitrary items from their collection that are
   * pre-selected
   */
  initialSelectedItems: _propTypes.default.array,

  /**
   * Helper function passed to downshift that allows the library to render a
   * given item to a string label. By default, it extracts the `label` field
   * from a given item to serve as the item label in the list.
   */
  itemToString: _propTypes.default.func,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  label: _propTypes.default.node.isRequired,

  /**
   * Specify the locale of the control. Used for the default `compareItems`
   * used for sorting the list of items in the control.
   */
  locale: _propTypes.default.string,

  /**
   * `onChange` is a utility for this controlled component to communicate to a
   * consuming component what kind of internal state changes are occuring.
   */
  onChange: _propTypes.default.func,

  /**
   * Specify 'inline' to create an inline multi-select.
   */
  type: _propTypes.default.oneOf(['default', 'inline']),

  /**
   *  Specify title to show title on hover
   */
  useTitleInItem: _propTypes.default.bool,

  /**
   * `true` to use the light version.
   */
  light: _propTypes.default.bool,

  /**
   * Is the current selection invalid?
   */
  invalid: _propTypes.default.bool,

  /**
   * If invalid, what is the error?
   */
  invalidText: _propTypes.default.string
}));

_defineProperty(MultiSelect, "defaultProps", {
  compareItems: _sorting.defaultCompareItems,
  disabled: false,
  locale: 'en',
  itemToString: _itemToString.defaultItemToString,
  initialSelectedItems: [],
  sortItems: _sorting.defaultSortItems,
  type: 'default',
  light: false,
  title: false
});