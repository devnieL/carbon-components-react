"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _carbonComponents = require("carbon-components");

var _Search = _interopRequireDefault(require("../Search"));

var _instanceId = _interopRequireDefault(require("./tools/instanceId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;
var getInstanceId = (0, _instanceId.default)();
var translationKeys = {
  'carbon.table.toolbar.search.label': 'Filter table',
  'carbon.table.toolbar.search.placeholder': 'Search'
};

var translateWithId = function translateWithId(id) {
  return translationKeys[id];
};

var TableToolbarSearch = function TableToolbarSearch(_ref) {
  var className = _ref.className,
      searchContainerClass = _ref.searchContainerClass,
      onChange = _ref.onChange,
      t = _ref.translateWithId,
      placeHolderText = _ref.placeHolderText,
      labelText = _ref.labelText,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "data-table-search-".concat(getInstanceId()) : _ref$id,
      rest = _objectWithoutProperties(_ref, ["className", "searchContainerClass", "onChange", "translateWithId", "placeHolderText", "labelText", "id"]);

  var searchContainerClasses = (0, _classnames.default)(searchContainerClass, "".concat(prefix, "--toolbar-search-container"));
  return _react.default.createElement("div", {
    className: searchContainerClasses
  }, _react.default.createElement(_Search.default, _extends({
    light: true,
    className: className
  }, rest, {
    small: true,
    id: id,
    labelText: labelText || t('carbon.table.toolbar.search.label'),
    placeHolderText: placeHolderText || t('carbon.table.toolbar.search.placeholder'),
    onChange: onChange
  })));
};

TableToolbarSearch.propTypes = {
  children: _propTypes.default.node,

  /**
   * Provide an optional class name for the search container
   */
  className: _propTypes.default.string,

  /**
   * Provide an optional id for the search container
   */
  id: _propTypes.default.string,

  /**
   * Provide an optional className for the overal container of the Search
   */
  searchContainerClasses: _propTypes.default.string,

  /**
   * Provide an optional hook that is called each time the input is updated
   */
  onChange: _propTypes.default.func,

  /**
   * Provide an optional placeholder text for the Search component
   */
  placeHolderText: _propTypes.default.string,

  /**
   * Provide an optional label text for the Search component icon
   */
  labelText: _propTypes.default.string,

  /**
   * Provide custom text for the component for each translation id
   */
  translateWithId: _propTypes.default.func.isRequired
};
TableToolbarSearch.defaultProps = {
  translateWithId: translateWithId
};
var _default = TableToolbarSearch;
exports.default = _default;