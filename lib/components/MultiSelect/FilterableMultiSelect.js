"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _downshift = _interopRequireDefault(require("downshift"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _carbonComponents = require("carbon-components");

var _ListBox = _interopRequireDefault(require("../ListBox"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _Selection = _interopRequireDefault(require("../../internal/Selection"));

var _MultiSelectPropTypes = require("./MultiSelectPropTypes");

var _itemToString = require("./tools/itemToString");

var _sorting = require("./tools/sorting");

var _filter = require("../ComboBox/tools/filter");

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

var prefix = _carbonComponents.settings.prefix;

var FilterableMultiSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FilterableMultiSelect, _React$Component);

  function FilterableMultiSelect(props) {
    var _this;

    _classCallCheck(this, FilterableMultiSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterableMultiSelect).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnChange", function (changes) {
      if (_this.props.onChange) {
        _this.props.onChange(changes);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnToggleMenu", function () {
      _this.setState(function (state) {
        return {
          isOpen: !state.isOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnOuterClick", function () {
      _this.setState({
        isOpen: false,
        inputValue: ''
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
              // is the active element in thedocument, then keep the menu open
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnInputKeyDown", function (event) {
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnInputValueChange", function (inputValue, _ref) {
      var type = _ref.type;
      if (type === _downshift.default.stateChangeTypes.changeInput) _this.setState(function () {
        if (Array.isArray(inputValue)) {
          return {
            inputValue: ''
          };
        }

        return {
          inputValue: inputValue || ''
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearInputValue", function (event) {
      event.stopPropagation();

      _this.setState({
        inputValue: ''
      });

      _this.inputNode && _this.inputNode.focus && _this.inputNode.focus();
    });

    _this.state = {
      highlightedIndex: null,
      isOpen: false,
      inputValue: ''
    };
    return _this;
  }

  _createClass(FilterableMultiSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          highlightedIndex = _this$state.highlightedIndex,
          isOpen = _this$state.isOpen,
          inputValue = _this$state.inputValue;
      var _this$props = this.props,
          containerClassName = _this$props.className,
          disabled = _this$props.disabled,
          filterItems = _this$props.filterItems,
          items = _this$props.items,
          itemToString = _this$props.itemToString,
          initialSelectedItems = _this$props.initialSelectedItems,
          id = _this$props.id,
          locale = _this$props.locale,
          placeholder = _this$props.placeholder,
          sortItems = _this$props.sortItems,
          compareItems = _this$props.compareItems,
          light = _this$props.light,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText;
      var className = (0, _classnames.default)("".concat(prefix, "--multi-select"), "".concat(prefix, "--combo-box"), containerClassName, _defineProperty({}, "".concat(prefix, "--list-box--light"), light));
      return _react.default.createElement(_Selection.default, {
        onChange: this.handleOnChange,
        initialSelectedItems: initialSelectedItems,
        render: function render(_ref2) {
          var selectedItems = _ref2.selectedItems,
              onItemChange = _ref2.onItemChange,
              clearSelection = _ref2.clearSelection;
          return _react.default.createElement(_downshift.default, {
            highlightedIndex: highlightedIndex,
            isOpen: isOpen,
            inputValue: inputValue,
            onInputValueChange: _this2.handleOnInputValueChange,
            onChange: onItemChange,
            itemToString: itemToString,
            onStateChange: _this2.handleOnStateChange,
            onOuterClick: _this2.handleOnOuterClick,
            selectedItem: selectedItems,
            render: function render(_ref3) {
              var getButtonProps = _ref3.getButtonProps,
                  getInputProps = _ref3.getInputProps,
                  getItemProps = _ref3.getItemProps,
                  getRootProps = _ref3.getRootProps,
                  isOpen = _ref3.isOpen,
                  inputValue = _ref3.inputValue,
                  selectedItem = _ref3.selectedItem;
              return _react.default.createElement(_ListBox.default, _extends({
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
              }), _react.default.createElement("input", _extends({
                className: "".concat(prefix, "--text-input"),
                ref: function ref(el) {
                  return _this2.inputNode = el;
                }
              }, getInputProps({
                disabled: disabled,
                id: id,
                placeholder: placeholder,
                onKeyDown: _this2.handleOnInputKeyDown
              }))), inputValue && isOpen && _react.default.createElement(_ListBox.default.Selection, {
                clearSelection: _this2.clearInputValue
              }), _react.default.createElement(_ListBox.default.MenuIcon, {
                isOpen: isOpen
              })), isOpen && _react.default.createElement(_ListBox.default.Menu, null, sortItems(filterItems(items, {
                itemToString: itemToString,
                inputValue: inputValue
              }), {
                selectedItems: selectedItems,
                itemToString: itemToString,
                compareItems: compareItems,
                locale: locale
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

  return FilterableMultiSelect;
}(_react.default.Component);

exports.default = FilterableMultiSelect;

_defineProperty(FilterableMultiSelect, "propTypes", _objectSpread({}, _MultiSelectPropTypes.sortingPropTypes, {
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
   * Generic `placeholder` that will be used as the textual representation of
   * what this field is for
   */
  placeholder: _propTypes.default.string.isRequired,

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

_defineProperty(FilterableMultiSelect, "defaultProps", {
  compareItems: _sorting.defaultCompareItems,
  disabled: false,
  filterItems: _filter.defaultFilterItems,
  initialSelectedItems: [],
  itemToString: _itemToString.defaultItemToString,
  locale: 'en',
  sortItems: _sorting.defaultSortItems,
  light: false
});