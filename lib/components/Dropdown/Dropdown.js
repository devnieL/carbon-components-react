"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _warning = _interopRequireDefault(require("warning"));

var _carbonIcons = require("carbon-icons");

var _carbonComponents = require("carbon-components");

var _ClickListener = _interopRequireDefault(require("../../internal/ClickListener"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var didWarnAboutDeprecation = false;

var Dropdown =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Dropdown, _PureComponent);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "close", function () {
      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function (evt) {
      if (_this.props.disabled) {
        return;
      } // Open on click, enter, or space


      if (evt.which === 13 || evt.which === 32 || evt.type === 'click') {
        _this.setState({
          open: !_this.state.open
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeydown", function (evt) {
      var key = evt.keyCode || evt.which;

      if (key === 27 && _this.state.open) {
        _this.setState({
          open: !_this.state.open
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleItemClick", function (info) {
      _this.props.onChange(info);

      _this.setState({
        selectedText: info.itemText,
        value: info.value
      });
    });

    _this.state = _this.resetState(props);

    if (process.env.NODE_ENV !== "production") {
      process.env.NODE_ENV !== "production" ? (0, _warning.default)(didWarnAboutDeprecation, 'The `Dropdown` component is being updated in the next release of ' + '`carbon-components-react`. Please use `DropdownV2` instead.') : void 0;
      didWarnAboutDeprecation = true;
    }

    return _this;
  }

  _createClass(Dropdown, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState(this.resetState(nextProps));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.open && this.state.open) {
        this.props.onOpen();
      }

      if (prevState.open && !this.state.open) {
        this.props.onClose();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeydown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeydown);
    }
  }, {
    key: "resetState",
    value: function resetState(props) {
      var children = props.children,
          selectedText = props.selectedText,
          value = props.value,
          defaultText = props.defaultText,
          open = props.open;
      var matchingChild;

      _react.default.Children.forEach(children, function (child) {
        if (child && (child.props.itemText === selectedText || child.props.value === value)) {
          matchingChild = child;
        }
      });

      if (matchingChild) {
        return {
          open: open,
          selectedText: matchingChild.props.itemText,
          value: matchingChild.props.value
        };
      }

      return {
        open: open,
        selectedText: defaultText,
        value: ''
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _classNames;

      var _this$props = this.props,
          ariaLabel = _this$props.ariaLabel,
          tabIndex = _this$props.tabIndex,
          defaultText = _this$props.defaultText,
          iconDescription = _this$props.iconDescription,
          disabled = _this$props.disabled,
          light = _this$props.light,
          selectedText = _this$props.selectedText,
          onOpen = _this$props.onOpen,
          onClose = _this$props.onClose,
          other = _objectWithoutProperties(_this$props, ["ariaLabel", "tabIndex", "defaultText", "iconDescription", "disabled", "light", "selectedText", "onOpen", "onClose"]);

      var children = _react.default.Children.toArray(this.props.children).filter(Boolean).map(function (child) {
        return _react.default.cloneElement(child, {
          onClick: function onClick() {
            var _child$props;

            child.props.onClick && (_child$props = child.props).onClick.apply(_child$props, arguments);

            _this2.handleItemClick.apply(_this2, arguments);
          },
          isDropdownOpen: _this2.state.open
        });
      });

      var dropdownClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--dropdown"), true), _defineProperty(_classNames, "".concat(prefix, "--dropdown--open"), this.state.open), _defineProperty(_classNames, "".concat(prefix, "--dropdown--disabled"), disabled), _defineProperty(_classNames, "".concat(prefix, "--dropdown--light"), light), _defineProperty(_classNames, this.props.className, this.props.className), _classNames));

      var dropdown = _react.default.createElement(_ClickListener.default, {
        onClickOutside: this.close
      }, _react.default.createElement("ul", _extends({}, other, {
        onClick: this.toggle,
        onKeyPress: this.toggle,
        value: this.state.value,
        className: dropdownClasses,
        tabIndex: tabIndex,
        "aria-label": ariaLabel,
        role: "listbox"
      }), _react.default.createElement("li", {
        className: "".concat(prefix, "--dropdown-text")
      }, this.state.selectedText), _react.default.createElement("li", null, _react.default.createElement(_Icon.default, {
        icon: _carbonIcons.iconCaretDown,
        className: "".concat(prefix, "--dropdown__arrow"),
        description: iconDescription
      })), _react.default.createElement("li", null, _react.default.createElement("ul", {
        role: "menu",
        className: "".concat(prefix, "--dropdown-list"),
        "aria-label": "inner dropdown menu"
      }, children))));

      return dropdown;
    }
  }]);

  return Dropdown;
}(_react.PureComponent);

exports.default = Dropdown;

_defineProperty(Dropdown, "propTypes", {
  /**
   * Specify a label to be read by screen readers on the container node
   */
  ariaLabel: _propTypes.default.string.isRequired,

  /**
   * Specify the drop down items
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: _propTypes.default.string,

  /**
   * Specify the text for the trigger button until a selection is made
   */
  defaultText: _propTypes.default.string,

  /**
   * Specify the value of the selected dropdown item
   */
  value: _propTypes.default.string,

  /**
   * Specify the tab index of the container node
   */
  tabIndex: _propTypes.default.number,
  onClick: _propTypes.default.func,

  /**
   * Specify an `onChange` handler that is called whenever the Dropdown
   * changes which item is selected
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * Function called when menu is open
   */
  onOpen: _propTypes.default.func,

  /**
   * Function called when menu is closed
   */
  onClose: _propTypes.default.func,

  /**
   * Specify the text content of the selected dropdown item
   */
  selectedText: _propTypes.default.string,

  /**
   * `true` if the menu should be open.
   */
  open: _propTypes.default.bool,

  /**
   * Specify a description for the twistie icon that can be read by screen
   * readers
   */
  iconDescription: _propTypes.default.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: _propTypes.default.bool,

  /**
   * Specify whether you want the light version of this control
   */
  light: _propTypes.default.bool
});

_defineProperty(Dropdown, "defaultProps", {
  tabIndex: 0,
  open: false,
  disabled: false,
  light: false,
  iconDescription: 'open list of options',
  onChange: function onChange() {},
  onOpen: function onOpen() {},
  onClose: function onClose() {}
});