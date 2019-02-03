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

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import warning from 'warning';
import { iconCaretDown } from 'carbon-icons';
import { settings } from 'carbon-components';
import ClickListener from '../../internal/ClickListener';
import Icon from '../Icon';
var prefix = settings.prefix;
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
      process.env.NODE_ENV !== "production" ? warning(didWarnAboutDeprecation, 'The `Dropdown` component is being updated in the next release of ' + '`carbon-components-react`. Please use `DropdownV2` instead.') : void 0;
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
      React.Children.forEach(children, function (child) {
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

      var children = React.Children.toArray(this.props.children).filter(Boolean).map(function (child) {
        return React.cloneElement(child, {
          onClick: function onClick() {
            var _child$props;

            child.props.onClick && (_child$props = child.props).onClick.apply(_child$props, arguments);

            _this2.handleItemClick.apply(_this2, arguments);
          },
          isDropdownOpen: _this2.state.open
        });
      });
      var dropdownClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--dropdown"), true), _defineProperty(_classNames, "".concat(prefix, "--dropdown--open"), this.state.open), _defineProperty(_classNames, "".concat(prefix, "--dropdown--disabled"), disabled), _defineProperty(_classNames, "".concat(prefix, "--dropdown--light"), light), _defineProperty(_classNames, this.props.className, this.props.className), _classNames));
      var dropdown = React.createElement(ClickListener, {
        onClickOutside: this.close
      }, React.createElement("ul", _extends({}, other, {
        onClick: this.toggle,
        onKeyPress: this.toggle,
        value: this.state.value,
        className: dropdownClasses,
        tabIndex: tabIndex,
        "aria-label": ariaLabel,
        role: "listbox"
      }), React.createElement("li", {
        className: "".concat(prefix, "--dropdown-text")
      }, this.state.selectedText), React.createElement("li", null, React.createElement(Icon, {
        icon: iconCaretDown,
        className: "".concat(prefix, "--dropdown__arrow"),
        description: iconDescription
      })), React.createElement("li", null, React.createElement("ul", {
        role: "menu",
        className: "".concat(prefix, "--dropdown-list"),
        "aria-label": "inner dropdown menu"
      }, children))));
      return dropdown;
    }
  }]);

  return Dropdown;
}(PureComponent);

_defineProperty(Dropdown, "propTypes", {
  /**
   * Specify a label to be read by screen readers on the container node
   */
  ariaLabel: PropTypes.string.isRequired,

  /**
   * Specify the drop down items
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Specify the text for the trigger button until a selection is made
   */
  defaultText: PropTypes.string,

  /**
   * Specify the value of the selected dropdown item
   */
  value: PropTypes.string,

  /**
   * Specify the tab index of the container node
   */
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,

  /**
   * Specify an `onChange` handler that is called whenever the Dropdown
   * changes which item is selected
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Function called when menu is open
   */
  onOpen: PropTypes.func,

  /**
   * Function called when menu is closed
   */
  onClose: PropTypes.func,

  /**
   * Specify the text content of the selected dropdown item
   */
  selectedText: PropTypes.string,

  /**
   * `true` if the menu should be open.
   */
  open: PropTypes.bool,

  /**
   * Specify a description for the twistie icon that can be read by screen
   * readers
   */
  iconDescription: PropTypes.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Specify whether you want the light version of this control
   */
  light: PropTypes.bool
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

export { Dropdown as default };