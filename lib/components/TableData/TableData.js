"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonIcons = require("carbon-icons");

var _carbonComponents = require("carbon-components");

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var TableData = function TableData(props) {
  var children = props.children,
      className = props.className,
      iconClassName = props.iconClassName,
      expanded = props.expanded,
      iconDescription = props.iconDescription,
      other = _objectWithoutProperties(props, ["children", "className", "iconClassName", "expanded", "iconDescription"]);

  var tableDataClasses = (0, _classnames.default)(className);
  var iconClasses = (0, _classnames.default)(iconClassName, "".concat(prefix, "--table-expand__svg"));
  var style = expanded ? {
    transform: 'rotate(90deg)'
  } : {};
  return _react.default.createElement("td", _extends({}, other, {
    className: tableDataClasses
  }), expanded === undefined ? children : _react.default.createElement(_Icon.default, {
    className: iconClasses,
    icon: _carbonIcons.iconChevronRight,
    description: iconDescription,
    style: style,
    tabIndex: 0,
    onKeyPress: function onKeyPress(evt) {
      if (props.onClick && (evt.which === 13 || evt.which === 32)) {
        props.onClick(evt);
      }
    }
  }));
};

TableData.propTypes = {
  /**
   * Provide the contents of your TableData.
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to your TableData.
   */
  className: _propTypes.default.string,

  /**
   * The CSS class name for the icon.
   */
  iconClassName: _propTypes.default.string,

  /**
   * The icon description.
   */
  iconDescription: _propTypes.default.string,

  /**
   * The expanded state for expando cell. `undefined` for regular cells.
   */
  expanded: _propTypes.default.bool
};
TableData.defaultProps = {
  iconDescription: 'expand row'
};
var _default = TableData;
exports.default = _default;