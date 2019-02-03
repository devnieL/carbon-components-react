function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { settings } from 'carbon-components';
import Search from '../Search';
import setupGetInstanceId from './tools/instanceId';
var prefix = settings.prefix;
var getInstanceId = setupGetInstanceId();
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

  var searchContainerClasses = cx(searchContainerClass, "".concat(prefix, "--toolbar-search-container"));
  return React.createElement("div", {
    className: searchContainerClasses
  }, React.createElement(Search, _extends({
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
  children: PropTypes.node,

  /**
   * Provide an optional class name for the search container
   */
  className: PropTypes.string,

  /**
   * Provide an optional id for the search container
   */
  id: PropTypes.string,

  /**
   * Provide an optional className for the overal container of the Search
   */
  searchContainerClasses: PropTypes.string,

  /**
   * Provide an optional hook that is called each time the input is updated
   */
  onChange: PropTypes.func,

  /**
   * Provide an optional placeholder text for the Search component
   */
  placeHolderText: PropTypes.string,

  /**
   * Provide an optional label text for the Search component icon
   */
  labelText: PropTypes.string,

  /**
   * Provide custom text for the component for each translation id
   */
  translateWithId: PropTypes.func.isRequired
};
TableToolbarSearch.defaultProps = {
  translateWithId: translateWithId
};
export default TableToolbarSearch;