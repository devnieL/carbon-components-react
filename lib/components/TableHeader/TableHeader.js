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

var TableHeader = function TableHeader(props) {
  var children = props.children,
      className = props.className,
      iconClassName = props.iconClassName,
      sortDir = props.sortDir,
      iconDescriptionAscending = props.iconDescriptionAscending,
      iconDescriptionDescending = props.iconDescriptionDescending,
      other = _objectWithoutProperties(props, ["children", "className", "iconClassName", "sortDir", "iconDescriptionAscending", "iconDescriptionDescending"]);

  var tableHeaderClasses = (0, _classnames.default)(className, "".concat(prefix, "--table-header"));
  var iconClasses = (0, _classnames.default)(iconClassName, "".concat(prefix, "--table-sort__svg"));
  var sortContent;

  if (sortDir) {
    sortContent = sortDir === 'DESC' ? _react.default.createElement(_Icon.default, {
      icon: _carbonIcons.iconCaretDown,
      description: iconDescriptionDescending,
      className: iconClasses
    }) : _react.default.createElement(_Icon.default, {
      icon: _carbonIcons.iconCaretUp,
      description: iconDescriptionAscending,
      className: iconClasses
    });
  } else {
    sortContent = '';
  }

  return _react.default.createElement("th", _extends({}, other, {
    className: tableHeaderClasses
  }), children, sortContent);
};

TableHeader.propTypes = {
  /**
   * Provide the contents of your TableHeader.
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to your TableHeader.
   */
  className: _propTypes.default.string,

  /**
   * The CSS class name for the icon.
   */
  iconClassName: _propTypes.default.string,

  /**
   * The description for the ascending icon.
   */
  iconDescriptionAscending: _propTypes.default.string,

  /**
   * The description for the descending icon.
   */
  iconDescriptionDescending: _propTypes.default.string,

  /**
   * The sorting direction, `DESC` or `ASC`.
   */
  sortDir: _propTypes.default.string
};
TableHeader.defaultProps = {
  iconDescriptionAscending: 'ascending sort',
  iconDescriptionDescending: 'descending sort'
};
var _default = TableHeader;
exports.default = _default;