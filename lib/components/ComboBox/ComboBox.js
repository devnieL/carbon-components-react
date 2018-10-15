"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _downshift = _interopRequireDefault(require("downshift"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ListBox = _interopRequireWildcard(require("../ListBox"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var defaultItemToString = function defaultItemToString(item) {
  if (typeof item === 'string') {
    return item;
  }

  return item && item.label;
};

var defaultShouldFilterItem = function defaultShouldFilterItem(_ref) {
  var inputValue = _ref.inputValue,
      item = _ref.item,
      itemToString = _ref.itemToString;
  return !inputValue || itemToString(item).toLowerCase().includes(inputValue.toLowerCase());
};

var getInputValue = function getInputValue(props, state) {
  if (props.initialSelectedItem) {
    return props.itemToString(props.initialSelectedItem);
  }

  return state.inputValue || '';
};

var ComboBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComboBox, _React$Component);

  function ComboBox(props) {
    var _this;

    _classCallCheck(this, ComboBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboBox).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterItems", function (items, itemToString, inputValue) {
      return items.filter(function (item) {
        return _this.props.shouldFilterItem({
          item: item,
          itemToString: itemToString,
          inputValue: inputValue
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnChange", function (selectedItem) {
      if (_this.props.onChange) {
        _this.props.onChange({
          selectedItem: selectedItem
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnInputKeyDown", function (event) {
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnInputValueChange", function (inputValue) {
      var onInputChange = _this.props.onInputChange;

      _this.setState(function () {
        return {
          // Default to empty string if we have a false-y `inputValue`
          inputValue: inputValue || ''
        };
      }, function () {
        if (onInputChange) {
          onInputChange(inputValue);
        }
      });
    });

    _this.state = {
      inputValue: getInputValue(props, {})
    };
    return _this;
  }

  _createClass(ComboBox, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState(function (state) {
        return {
          inputValue: getInputValue(nextProps, state)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          containerClassName = _this$props.className,
          disabled = _this$props.disabled,
          id = _this$props.id,
          items = _this$props.items,
          itemToString = _this$props.itemToString,
          placeholder = _this$props.placeholder,
          initialSelectedItem = _this$props.initialSelectedItem,
          ariaLabel = _this$props.ariaLabel,
          translateWithId = _this$props.translateWithId,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText,
          light = _this$props.light;
      var className = (0, _classnames.default)('bx--combo-box', containerClassName);
      return _react.default.createElement(_downshift.default, {
        onChange: this.handleOnChange,
        onInputValueChange: this.handleOnInputValueChange,
        inputValue: this.state.inputValue || '',
        itemToString: itemToString,
        defaultSelectedItem: initialSelectedItem
      }, function (_ref2) {
        var getButtonProps = _ref2.getButtonProps,
            getInputProps = _ref2.getInputProps,
            getItemProps = _ref2.getItemProps,
            getRootProps = _ref2.getRootProps,
            isOpen = _ref2.isOpen,
            inputValue = _ref2.inputValue,
            selectedItem = _ref2.selectedItem,
            highlightedIndex = _ref2.highlightedIndex,
            clearSelection = _ref2.clearSelection;
        return _react.default.createElement(_ListBox.default, _extends({
          className: className,
          disabled: disabled,
          invalid: invalid,
          invalidText: invalidText,
          light: light
        }, getRootProps({
          refKey: 'innerRef'
        })), _react.default.createElement(_ListBox.default.Field, getButtonProps({
          disabled: disabled
        }), _react.default.createElement("input", _extends({
          className: "bx--text-input",
          "aria-label": ariaLabel
        }, getInputProps({
          disabled: disabled,
          id: id,
          placeholder: placeholder,
          onKeyDown: _this2.handleOnInputKeyDown
        }))), inputValue && isOpen && _react.default.createElement(_ListBox.default.Selection, {
          clearSelection: clearSelection,
          translateWithId: translateWithId
        }), _react.default.createElement(_ListBox.default.MenuIcon, {
          isOpen: isOpen,
          translateWithId: translateWithId
        })), isOpen && _react.default.createElement(_ListBox.default.Menu, null, _this2.filterItems(items, itemToString, inputValue).map(function (item, index) {
          return _react.default.createElement(_ListBox.default.MenuItem, _extends({
            key: itemToString(item),
            isActive: selectedItem === item,
            isHighlighted: highlightedIndex === index
          }, getItemProps({
            item: item,
            index: index
          })), itemToString(item));
        })));
      });
    }
  }]);

  return ComboBox;
}(_react.default.Component);

exports.default = ComboBox;

_defineProperty(ComboBox, "propTypes", {
  /**
   * An optional className to add to the container node
   */
  className: _propTypes.default.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: _propTypes.default.bool,

  /**
   * Specify a custom `id` for the input
   */
  id: _propTypes.default.string,

  /**
   * Allow users to pass in an arbitrary item or a string (in case their items are an array of strings)
   * from their collection that are pre-selected
   */
  initialSelectedItem: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),

  /**
   * We try to stay as generic as possible here to allow individuals to pass
   * in a collection of whatever kind of data structure they prefer
   */
  items: _propTypes.default.array.isRequired,

  /**
   * Helper function passed to downshift that allows the library to render a
   * given item to a string label. By default, it extracts the `label` field
   * from a given item to serve as the item label in the list
   */
  itemToString: _propTypes.default.func,

  /**
   * `onChange` is a utility for this controlled component to communicate to a
   * consuming component when a specific dropdown item is selected.
   * @param {{ selectedItem }}
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * Used to provide a placeholder text node before a user enters any input.
   * This is only present if the control has no items selected
   */
  placeholder: _propTypes.default.string.isRequired,

  /**
   * Specify your own filtering logic by passing in a `shouldFilterItem`
   * function that takes in the current input and an item and passes back
   * whether or not the item should be filtered.
   */
  shouldFilterItem: _propTypes.default.func,

  /**
   * Specify if the currently selected value is invalid.
   */
  invalid: _propTypes.default.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: _propTypes.default.string,

  /**
   * Specify a custom translation function that takes in a message identifier
   * and returns the localized string for the message
   */
  translateWithId: _propTypes.default.func,

  /**
   * Currently supports either the default type, or an inline variant
   */
  type: _ListBox.PropTypes.ListBoxType,

  /**
   * Callback function to notify consumer when the text input changes.
   * This provides support to change available items based on the text.
   * @param {string} inputText
   */
  onInputChange: _propTypes.default.func,

  /**
   * should use "light theme" (white background)?
   */
  light: _propTypes.default.bool
});

_defineProperty(ComboBox, "defaultProps", {
  disabled: false,
  itemToString: defaultItemToString,
  shouldFilterItem: defaultShouldFilterItem,
  type: 'default',
  ariaLabel: 'ListBox input field',
  light: false
});