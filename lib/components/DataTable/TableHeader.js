"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _carbonIcons = require("carbon-icons");

var _Icon = _interopRequireDefault(require("../Icon"));

var _sorting = require("./state/sorting");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var translationKeys = {
  iconDescription: 'carbon.table.header.icon.description'
};

var translateWithId = function translateWithId(key, _ref) {
  var sortDirection = _ref.sortDirection,
      isSortHeader = _ref.isSortHeader,
      sortStates = _ref.sortStates;

  if (key === translationKeys.iconDescription) {
    if (isSortHeader) {
      var order = sortDirection === sortStates.DESC ? 'descending' : 'ascending';
      return "Sort rows by this header in ".concat(order, " order");
    }

    return "Sort rows by this header in descending order";
  }

  return '';
};

var TableHeader = function TableHeader(_ref2) {
  var headerClassName = _ref2.className,
      children = _ref2.children,
      isSortable = _ref2.isSortable,
      isSortHeader = _ref2.isSortHeader,
      onClick = _ref2.onClick,
      scope = _ref2.scope,
      sortDirection = _ref2.sortDirection,
      t = _ref2.translateWithId,
      rest = _objectWithoutProperties(_ref2, ["className", "children", "isSortable", "isSortHeader", "onClick", "scope", "sortDirection", "translateWithId"]);

  if (!isSortable) {
    return _react.default.createElement("th", _extends({}, rest, {
      className: headerClassName,
      scope: scope
    }), children);
  }

  var className = (0, _classnames.default)(headerClassName, {
    'bx--table-sort-v2': true,
    'bx--table-sort-v2--active': isSortHeader && sortDirection !== _sorting.sortStates.NONE,
    'bx--table-sort-v2--ascending': isSortHeader && sortDirection === _sorting.sortStates.ASC
  });
  return _react.default.createElement("th", {
    scope: scope,
    className: headerClassName
  }, _react.default.createElement("button", _extends({
    className: className,
    onClick: onClick
  }, rest), _react.default.createElement("span", {
    className: "bx--table-header-label"
  }, children), _react.default.createElement(_Icon.default, {
    className: "bx--table-sort-v2__icon",
    icon: _carbonIcons.iconCaretUp,
    description: t('carbon.table.header.icon.description', {
      header: children,
      sortDirection: sortDirection,
      isSortHeader: isSortHeader,
      sortStates: _sorting.sortStates
    })
  })));
};

TableHeader.propTypes = {
  /**
   * Specify an optional className to be applied to the container node
   */
  className: _propTypes.default.string,

  /**
   * Pass in children that will be embedded in the table header label
   */
  children: _propTypes.default.node,

  /**
   * Specify whether this header is one through which a user can sort the table
   */
  isSortable: _propTypes.default.bool,

  /**
   * Specify whether this header is the header by which a table is being sorted
   * by
   */
  isSortHeader: _propTypes.default.bool,

  /**
   * Hook that is invoked when the header is clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Specify the scope of this table header. You can find more info about this
   * attribute at the following URL:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope
   */
  scope: _propTypes.default.string.isRequired,

  /**
   * Specify which direction we are currently sorting by, should be one of DESC,
   * NONE, or ASC.
   */
  sortDirection: _propTypes.default.oneOf(Object.values(_sorting.sortStates)),

  /**
   * Supply a method to translate internal strings with your i18n tool of
   * choice. Translation keys are avabile on the `translationKeys` field for
   * this component.
   */
  translateWithId: _propTypes.default.func
};
TableHeader.defaultProps = {
  isSortable: false,
  scope: 'col',
  translateWithId: translateWithId
};
TableHeader.translationKeys = Object.values(translationKeys);
var _default = TableHeader;
exports.default = _default;