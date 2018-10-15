"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StructuredListCell = exports.StructuredListBody = exports.StructuredListRow = exports.StructuredListInput = exports.StructuredListHead = exports.StructuredListWrapper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _uniqueId = _interopRequireDefault(require("../../tools/uniqueId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StructuredListWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(StructuredListWrapper, _Component);

  function StructuredListWrapper() {
    _classCallCheck(this, StructuredListWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListWrapper).apply(this, arguments));
  }

  _createClass(StructuredListWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          selection = _this$props.selection,
          className = _this$props.className,
          border = _this$props.border,
          ariaLabel = _this$props.ariaLabel,
          other = _objectWithoutProperties(_this$props, ["children", "selection", "className", "border", "ariaLabel"]);

      var classes = (0, _classnames.default)('bx--structured-list', className, {
        'bx--structured-list--border': border,
        'bx--structured-list--selection': selection
      });
      return _react.default.createElement("section", _extends({
        className: classes
      }, other, {
        "aria-label": ariaLabel
      }), children);
    }
  }]);

  return StructuredListWrapper;
}(_react.Component);

exports.StructuredListWrapper = StructuredListWrapper;

_defineProperty(StructuredListWrapper, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  border: _propTypes.default.bool,
  selection: _propTypes.default.bool,
  ariaLabel: _propTypes.default.string
});

_defineProperty(StructuredListWrapper, "defaultProps", {
  border: false,
  selection: false,
  ariaLabel: 'Structured list section'
});

var StructuredListHead =
/*#__PURE__*/
function (_Component2) {
  _inherits(StructuredListHead, _Component2);

  function StructuredListHead() {
    _classCallCheck(this, StructuredListHead);

    return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListHead).apply(this, arguments));
  }

  _createClass(StructuredListHead, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          other = _objectWithoutProperties(_this$props2, ["children", "className"]);

      var classes = (0, _classnames.default)('bx--structured-list-thead', className);
      return _react.default.createElement("div", _extends({
        className: classes
      }, other), children);
    }
  }]);

  return StructuredListHead;
}(_react.Component);

exports.StructuredListHead = StructuredListHead;

_defineProperty(StructuredListHead, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string
});

var StructuredListInput =
/*#__PURE__*/
function (_Component3) {
  _inherits(StructuredListInput, _Component3);

  function StructuredListInput() {
    _classCallCheck(this, StructuredListInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListInput).apply(this, arguments));
  }

  _createClass(StructuredListInput, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.uid = this.props.id || (0, _uniqueId.default)();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          value = _this$props3.value,
          name = _this$props3.name,
          title = _this$props3.title,
          other = _objectWithoutProperties(_this$props3, ["className", "value", "name", "title"]);

      var classes = (0, _classnames.default)('bx--structured-list-input', className);
      return _react.default.createElement("input", _extends({}, other, {
        type: "radio",
        tabIndex: -1,
        id: this.uid,
        className: classes,
        value: value,
        name: name,
        title: title
      }));
    }
  }]);

  return StructuredListInput;
}(_react.Component);

exports.StructuredListInput = StructuredListInput;

_defineProperty(StructuredListInput, "propTypes", {
  className: _propTypes.default.string,
  id: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  name: _propTypes.default.string,
  title: _propTypes.default.string,
  defaultChecked: _propTypes.default.bool,
  onChange: _propTypes.default.func
});

_defineProperty(StructuredListInput, "defaultProps", {
  onChange: function onChange() {},
  value: 'value',
  title: 'title'
});

var StructuredListRow =
/*#__PURE__*/
function (_Component4) {
  _inherits(StructuredListRow, _Component4);

  function StructuredListRow() {
    _classCallCheck(this, StructuredListRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListRow).apply(this, arguments));
  }

  _createClass(StructuredListRow, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          onKeyDown = _this$props4.onKeyDown,
          tabIndex = _this$props4.tabIndex,
          children = _this$props4.children,
          className = _this$props4.className,
          head = _this$props4.head,
          label = _this$props4.label,
          other = _objectWithoutProperties(_this$props4, ["onKeyDown", "tabIndex", "children", "className", "head", "label"]);

      var classes = (0, _classnames.default)('bx--structured-list-row', className, {
        'bx--structured-list-row--header-row': head
      });
      return label ? _react.default.createElement("label", _extends({}, other, {
        tabIndex: tabIndex,
        className: classes,
        onKeyDown: onKeyDown,
        role: "presentation"
      }), children) : _react.default.createElement("div", _extends({}, other, {
        className: classes
      }), children);
    }
  }]);

  return StructuredListRow;
}(_react.Component);

exports.StructuredListRow = StructuredListRow;

_defineProperty(StructuredListRow, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  head: _propTypes.default.bool,
  label: _propTypes.default.bool,
  tabIndex: _propTypes.default.number,
  onKeyDown: _propTypes.default.func
});

_defineProperty(StructuredListRow, "defaultProps", {
  head: false,
  label: false,
  tabIndex: 0,
  onKeyDown: function onKeyDown() {}
});

var StructuredListBody =
/*#__PURE__*/
function (_Component5) {
  _inherits(StructuredListBody, _Component5);

  function StructuredListBody() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StructuredListBody);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StructuredListBody)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      labelRows: null,
      rowSelected: 0
    });

    return _this;
  }

  _createClass(StructuredListBody, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          className = _this$props5.className,
          other = _objectWithoutProperties(_this$props5, ["children", "className"]);

      var classes = (0, _classnames.default)('bx--structured-list-tbody', className);
      return _react.default.createElement("div", _extends({
        className: classes
      }, other), children);
    }
  }]);

  return StructuredListBody;
}(_react.Component);

exports.StructuredListBody = StructuredListBody;

_defineProperty(StructuredListBody, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  head: _propTypes.default.bool,
  onKeyDown: _propTypes.default.func
});

_defineProperty(StructuredListBody, "defaultProps", {
  onKeyDown: function onKeyDown() {}
});

var StructuredListCell =
/*#__PURE__*/
function (_Component6) {
  _inherits(StructuredListCell, _Component6);

  function StructuredListCell() {
    _classCallCheck(this, StructuredListCell);

    return _possibleConstructorReturn(this, _getPrototypeOf(StructuredListCell).apply(this, arguments));
  }

  _createClass(StructuredListCell, [{
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          children = _this$props6.children,
          className = _this$props6.className,
          head = _this$props6.head,
          noWrap = _this$props6.noWrap,
          other = _objectWithoutProperties(_this$props6, ["children", "className", "head", "noWrap"]);

      var classes = (0, _classnames.default)(className, {
        'bx--structured-list-th': head,
        'bx--structured-list-td': !head,
        'bx--structured-list-content--nowrap': noWrap
      });
      return _react.default.createElement("div", _extends({
        className: classes
      }, other), children);
    }
  }]);

  return StructuredListCell;
}(_react.Component);

exports.StructuredListCell = StructuredListCell;

_defineProperty(StructuredListCell, "propTypes", {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  head: _propTypes.default.bool,
  noWrap: _propTypes.default.bool
});

_defineProperty(StructuredListCell, "defaultProps", {
  head: false,
  noWrap: false
});