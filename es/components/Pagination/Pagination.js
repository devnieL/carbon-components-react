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
import React, { Component } from 'react';
import classnames from 'classnames';
import debounce from 'lodash.debounce';
import warning from 'warning';
import { iconChevronLeft, iconChevronRight } from 'carbon-icons';
import { settings } from 'carbon-components';
import Icon from '../Icon';
import Select from '../Select';
import SelectItem from '../SelectItem';
import TextInput from '../TextInput';
import { equals } from '../../tools/array';
var prefix = settings.prefix;
var didWarnAboutDeprecation = false;

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      page: _this.props.page,
      pageSize: _this.props.pageSize && _this.props.pageSizes.includes(_this.props.pageSize) ? _this.props.pageSize : _this.props.pageSizes[0]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSizeChange", function (evt) {
      var pageSize = Number(evt.target.value);

      _this.setState({
        pageSize: pageSize,
        page: 1
      });

      _this.props.onChange({
        page: 1,
        pageSize: pageSize
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePageInputChange", function (evt) {
      var page = Number(evt.target.value);

      if ( // Added props for defaultPageText and defaultItemText to be
      // used for case when page # is 0 or empty. For other cases
      // existing props will be used.
      page >= 0 && page <= Math.max(Math.ceil(_this.props.totalItems / _this.state.pageSize), 1)) {
        _this.setState({
          page: page
        }, function () {
          return _this.pageInputDebouncer(_this.state.page);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "incrementPage", function () {
      var page = _this.state.page + 1;

      _this.setState({
        page: page
      });

      _this.props.onChange({
        page: page,
        pageSize: _this.state.pageSize
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "decrementPage", function () {
      var page = _this.state.page - 1;

      _this.setState({
        page: page
      });

      _this.props.onChange({
        page: page,
        pageSize: _this.state.pageSize
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getItemsText", function () {
      var _this$props = _this.props,
          pagesUnknown = _this$props.pagesUnknown,
          totalItems = _this$props.totalItems,
          itemRangeText = _this$props.itemRangeText,
          itemText = _this$props.itemText,
          defaultItemText = _this$props.defaultItemText;
      var _this$state = _this.state,
          pageSize = _this$state.pageSize,
          page = _this$state.page;

      if (pagesUnknown) {
        return itemText(pageSize * (page - 1) + 1, page * pageSize);
      } else if (page > 0) {
        return itemRangeText(Math.min(pageSize * (page - 1) + 1, totalItems), Math.min(page * pageSize, totalItems), totalItems);
      }

      return defaultItemText(totalItems);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPagesText", function () {
      var _this$props2 = _this.props,
          pagesUnknown = _this$props2.pagesUnknown,
          totalItems = _this$props2.totalItems,
          pageRangeText = _this$props2.pageRangeText,
          pageText = _this$props2.pageText,
          defaultPageText = _this$props2.defaultPageText;
      var _this$state2 = _this.state,
          pageSize = _this$state2.pageSize,
          page = _this$state2.page;

      if (pagesUnknown) {
        return pageText(page);
      } else if (page > 0) {
        return pageRangeText(page, Math.max(Math.ceil(totalItems / pageSize), 1));
      }

      return defaultPageText(Math.ceil(totalItems / pageSize));
    });

    if (process.env.NODE_ENV !== "production") {
      process.env.NODE_ENV !== "production" ? warning(didWarnAboutDeprecation, 'The `Pagination` component is being updated in the next release of ' + '`carbon-components-react`. Please use `PaginationV2` instead.') : void 0;
      didWarnAboutDeprecation = true;
    }

    return _this;
  }

  _createClass(Pagination, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.uniqueId = "".concat(Math.floor(Math.random() * 0xffff));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.pageInputDebouncer = debounce(function (page) {
        return page > 0 && _this2.props.onChange({
          page: page,
          pageSize: _this2.state.pageSize
        });
      }, this.props.onChangeInterval);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.pageInputDebouncer.cancel();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(_ref) {
      var pageSizes = _ref.pageSizes,
          page = _ref.page,
          pageSize = _ref.pageSize;

      if (!equals(pageSizes, this.props.pageSizes)) {
        this.setState({
          pageSize: pageSizes[0],
          page: 1
        });
      }

      if (page !== this.props.page) {
        this.setState({
          page: page
        });
      }

      if (pageSize !== this.props.pageSize) {
        this.setState({
          pageSize: pageSize
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          backwardText = _this$props3.backwardText,
          className = _this$props3.className,
          defaultItemText = _this$props3.defaultItemText,
          defaultPageText = _this$props3.defaultPageText,
          forwardText = _this$props3.forwardText,
          id = _this$props3.id,
          itemsPerPageText = _this$props3.itemsPerPageText,
          itemRangeText = _this$props3.itemRangeText,
          pageNumberText = _this$props3.pageNumberText,
          pageRangeText = _this$props3.pageRangeText,
          pageSize = _this$props3.pageSize,
          pageSizes = _this$props3.pageSizes,
          itemText = _this$props3.itemText,
          pageText = _this$props3.pageText,
          pagesUnknown = _this$props3.pagesUnknown,
          isLastPage = _this$props3.isLastPage,
          pageInputDisabled = _this$props3.pageInputDisabled,
          totalItems = _this$props3.totalItems,
          onChange = _this$props3.onChange,
          onChangeInterval = _this$props3.onChangeInterval,
          pageNumber = _this$props3.page,
          other = _objectWithoutProperties(_this$props3, ["backwardText", "className", "defaultItemText", "defaultPageText", "forwardText", "id", "itemsPerPageText", "itemRangeText", "pageNumberText", "pageRangeText", "pageSize", "pageSizes", "itemText", "pageText", "pagesUnknown", "isLastPage", "pageInputDisabled", "totalItems", "onChange", "onChangeInterval", "page"]);

      var statePage = this.state.page;
      var statePageSize = this.state.pageSize;
      var totalPages = Math.max(Math.ceil(totalItems / statePageSize), 1);
      var classNames = classnames("".concat(prefix, "--pagination"), className);
      var inputId = id || this.uniqueId;
      return React.createElement("div", _extends({
        className: classNames
      }, other), React.createElement("div", {
        className: "".concat(prefix, "--pagination__left")
      }, React.createElement(Select, {
        id: "".concat(prefix, "-pagination-select-").concat(inputId),
        labelText: itemsPerPageText,
        hideLabel: true,
        onChange: this.handleSizeChange,
        value: statePageSize
      }, pageSizes.map(function (size) {
        return React.createElement(SelectItem, {
          key: size,
          value: size,
          text: String(size)
        });
      })), React.createElement("span", {
        className: "".concat(prefix, "--pagination__text")
      }, itemsPerPageText), React.createElement("span", {
        className: "".concat(prefix, "--pagination__text")
      }, this.getItemsText())), React.createElement("div", {
        className: "".concat(prefix, "--pagination__right")
      }, React.createElement("span", {
        className: "".concat(prefix, "--pagination__text")
      }, this.getPagesText()), React.createElement("button", {
        className: "".concat(prefix, "--pagination__button ").concat(prefix, "--pagination__button--backward"),
        onClick: this.decrementPage,
        disabled: this.props.disabled || statePage === 1
      }, React.createElement(Icon, {
        className: "".concat(prefix, "--pagination__button-icon"),
        icon: iconChevronLeft,
        description: backwardText
      })), pageInputDisabled ? React.createElement("span", {
        className: "".concat(prefix, "--pagination__text")
      }, "|") : React.createElement(TextInput, {
        id: "".concat(prefix, "-pagination-input-").concat(inputId),
        value: statePage > 0 ? statePage : '',
        onChange: this.handlePageInputChange,
        labelText: pageNumberText,
        hideLabel: true
      }), React.createElement("button", {
        className: "".concat(prefix, "--pagination__button ").concat(prefix, "--pagination__button--forward"),
        onClick: this.incrementPage,
        disabled: this.props.disabled || statePage === totalPages || isLastPage
      }, React.createElement(Icon, {
        className: "".concat(prefix, "--pagination__button-icon"),
        icon: iconChevronRight,
        description: forwardText
      }))));
    }
  }]);

  return Pagination;
}(Component);

_defineProperty(Pagination, "propTypes", {
  /**
   * The description for the backward icon.
   */
  backwardText: PropTypes.string,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * The function returning a translatable text showing where the current page is,
   * in a manner of the range of items.
   */
  itemRangeText: PropTypes.func,

  /**
   * The description for the forward icon.
   */
  forwardText: PropTypes.string,

  /**
   * The unique ID of this component instance.
   */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The translatable text indicating the number of items per page.
   */
  itemsPerPageText: PropTypes.string,

  /**
   * A variant of `itemRangeText`, used if the total number of items is unknown.
   */
  itemText: PropTypes.func,

  /**
   * The callback function called when the current page changes.
   */
  onChange: PropTypes.func,

  /**
   * The label to be read by screen readers on input box showing the current page number
   */
  pageNumberText: PropTypes.string,

  /**
   * A function returning PII showing where the current page is.
   */
  pageRangeText: PropTypes.func,

  /**
   * The translatable text showing the current page.
   */
  pageText: PropTypes.func,

  /**
   * The choices for `pageSize`.
   */
  pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,

  /**
   * The total number of items.
   */
  totalItems: PropTypes.number,

  /**
   * `true` if the backward/forward buttons should be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The current page.
   */
  page: PropTypes.number,

  /**
   * The number dictating how many items a page contains.
   */
  pageSize: PropTypes.number,

  /**
   * `true` if the total number of items is unknown.
   */
  pagesUnknown: PropTypes.bool,

  /**
   * `true` if the current page should be the last page.
   */
  isLastPage: PropTypes.bool,

  /**
   * `true` if the select box to change the page should be disabled.
   */
  pageInputDisabled: PropTypes.bool,

  /**
   * The duration of debouncing `onChange` event.
   */
  onChangeInterval: PropTypes.number,

  /**
   * A function returning PII showing how many pages there are.
   */
  defaultPageText: PropTypes.func,

  /**
   * A function returning PII showing how many items there are.
   */
  defaultItemText: PropTypes.func
});

_defineProperty(Pagination, "defaultProps", {
  backwardText: 'Backward',
  itemRangeText: function itemRangeText(min, max, total) {
    return "".concat(min, "-").concat(max, " of ").concat(total, " items");
  },
  forwardText: 'Forward',
  itemsPerPageText: 'items per page | ',
  onChange: function onChange() {},
  pageNumberText: 'Page Number',
  pageRangeText: function pageRangeText(current, total) {
    return "".concat(current, " of ").concat(total, " pages");
  },
  disabled: false,
  page: 1,
  pagesUnknown: false,
  isLastPage: false,
  pageInputDisabled: false,
  itemText: function itemText(min, max) {
    return "".concat(min, "-").concat(max, " items");
  },
  pageText: function pageText(page) {
    return "page ".concat(page);
  },
  defaultPageText: function defaultPageText(totalPages) {
    return "".concat(totalPages, " pages");
  },
  defaultItemText: function defaultItemText(totalItems) {
    return "".concat(totalItems, " items");
  },
  onChangeInterval: 250
});

export { Pagination as default };