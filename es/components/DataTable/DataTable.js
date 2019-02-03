var _defaultTranslations;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
import React from 'react';
import isEqual from 'lodash.isequal';
import getDerivedStateFromProps from './state/getDerivedStateFromProps';
import { getNextSortState } from './state/sorting';
import denormalize from './tools/denormalize';
import { composeEventHandlers } from '../../tools/events';
import { defaultFilterRows } from './tools/filter';
import { defaultSortRow } from './tools/sorting';
import setupGetInstanceId from './tools/instanceId';
var getInstanceId = setupGetInstanceId();
var translationKeys = {
  expandRow: 'carbon.table.row.expand',
  collapseRow: 'carbon.table.row.collapse',
  selectAll: 'carbon.table.all.select',
  unselectAll: 'carbon.table.all.unselect',
  selectRow: 'carbon.table.row.select',
  unselectRow: 'carbon.table.row.unselect'
};
var defaultTranslations = (_defaultTranslations = {}, _defineProperty(_defaultTranslations, translationKeys.expandRow, 'Expand current row'), _defineProperty(_defaultTranslations, translationKeys.collapseRow, 'Collapse current row'), _defineProperty(_defaultTranslations, translationKeys.selectAll, 'Select all rows'), _defineProperty(_defaultTranslations, translationKeys.unselectAll, 'Unselect all rows'), _defineProperty(_defaultTranslations, translationKeys.selectRow, 'Select row'), _defineProperty(_defaultTranslations, translationKeys.unselectRow, 'Unselect row'), _defaultTranslations);

var translateWithId = function translateWithId(id) {
  return defaultTranslations[id];
};
/**
 * Data Tables are used to represent a collection of resources, displaying a
 * subset of their fields in columns, or headers. We prioritize direct updates
 * to the state of what we're rendering, so internally we end up normalizing the
 * given data and then denormalizing it when rendering.
 *
 * As a result, each part of the DataTable is accessible through look-up by id,
 * and updating the state of the single entity will cascade updates to the
 * consumer.
 */


var DataTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DataTable, _React$Component);

  function DataTable(_props) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this, _props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getHeaderProps", function (_ref) {
      var header = _ref.header,
          onClick = _ref.onClick,
          _ref$isSortable = _ref.isSortable,
          isSortable = _ref$isSortable === void 0 ? true : _ref$isSortable,
          rest = _objectWithoutProperties(_ref, ["header", "onClick", "isSortable"]);

      var _this$state = _this.state,
          sortDirection = _this$state.sortDirection,
          sortHeaderKey = _this$state.sortHeaderKey;
      return _objectSpread({}, rest, {
        key: header.key,
        sortDirection: sortDirection,
        isSortable: isSortable,
        isSortHeader: sortHeaderKey === header.key,
        // Compose the event handlers so we don't overwrite a consumer's `onClick`
        // handler
        onClick: composeEventHandlers([_this.handleSortBy(header.key), onClick])
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRowProps", function (_ref2) {
      var row = _ref2.row,
          onClick = _ref2.onClick,
          rest = _objectWithoutProperties(_ref2, ["row", "onClick"]);

      var t = _this.props.translateWithId;
      var translationKey = row.isExpanded ? translationKeys.collapseRow : translationKeys.expandRow;
      return _objectSpread({}, rest, {
        key: row.id,
        // Compose the event handlers so we don't overwrite a consumer's `onClick`
        // handler
        onExpand: composeEventHandlers([_this.handleOnExpandRow(row.id), onClick]),
        isExpanded: row.isExpanded,
        ariaLabel: t(translationKey),
        isSelected: row.isSelected
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectionProps", function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          onClick = _ref3.onClick,
          row = _ref3.row,
          rest = _objectWithoutProperties(_ref3, ["onClick", "row"]);

      var t = _this.props.translateWithId; // If we're given a row, return the selection state values for that row

      if (row) {
        var _translationKey = row.isSelected ? translationKeys.unselectRow : translationKeys.selectRow;

        return _objectSpread({}, rest, {
          checked: row.isSelected,
          onSelect: composeEventHandlers([_this.handleOnSelectRow(row.id), onClick]),
          id: "".concat(_this.getTablePrefix(), "__select-row-").concat(row.id),
          name: "select-row-".concat(row.id),
          ariaLabel: t(_translationKey)
        });
      } // Otherwise, we're working on `TableSelectAll` which handles toggling the
      // selection state of all rows.


      var rowCount = _this.state.rowIds.length;

      var selectedRowCount = _this.getSelectedRows().length;

      var checked = rowCount > 0 && selectedRowCount === rowCount;
      var indeterminate = rowCount > 0 && selectedRowCount > 0 && selectedRowCount !== rowCount;
      var translationKey = checked ? translationKeys.unselectAll : translationKeys.selectAll;
      return _objectSpread({}, rest, {
        ariaLabel: t(translationKey),
        checked: checked,
        id: "".concat(_this.getTablePrefix(), "__select-all"),
        indeterminate: indeterminate,
        name: 'select-all',
        onSelect: composeEventHandlers([_this.handleSelectAll, onClick])
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getBatchActionProps", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var shouldShowBatchActions = _this.state.shouldShowBatchActions;

      var totalSelected = _this.getSelectedRows().length;

      return _objectSpread({}, props, {
        shouldShowBatchActions: shouldShowBatchActions,
        totalSelected: totalSelected,
        onCancel: _this.handleOnCancel
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTableProps", function () {
      var _this$props = _this.props,
          short = _this$props.short,
          shouldShowBorder = _this$props.shouldShowBorder;
      return {
        short: short,
        shouldShowBorder: shouldShowBorder
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedRows", function () {
      return _this.state.rowIds.filter(function (id) {
        var row = _this.state.rowsById[id];
        return row.isSelected;
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTablePrefix", function () {
      return "data-table-".concat(_this.instanceId);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setAllSelectedState", function (initialState, isSelected) {
      var rowIds = initialState.rowIds;
      return {
        rowsById: rowIds.reduce(function (acc, id) {
          return _objectSpread({}, acc, _defineProperty({}, id, _objectSpread({}, initialState.rowsById[id], {
            isSelected: isSelected
          })));
        }, {})
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnCancel", function () {
      _this.setState(function (state) {
        return _objectSpread({
          shouldShowBatchActions: false
        }, _this.setAllSelectedState(state, false));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelectAll", function () {
      _this.setState(function (state) {
        var rowIds = state.rowIds;
        var isSelected = _this.getSelectedRows().length !== rowIds.length;
        return _objectSpread({
          shouldShowBatchActions: isSelected
        }, _this.setAllSelectedState(state, isSelected));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnSelectRow", function (rowId) {
      return function () {
        _this.setState(function (state) {
          var row = state.rowsById[rowId];
          var selectedRows = state.rowIds.filter(function (id) {
            return state.rowsById[id].isSelected;
          }).length; // Predict the length of the selected rows after this change occurs

          var selectedRowsCount = !row.isSelected ? selectedRows + 1 : selectedRows - 1;
          return {
            // Basic assumption here is that we want to show the batch action bar if
            // the row is being selected. If it's being unselected, then see if we
            // have a non-zero number of selected rows that batch actions could
            // still apply to
            shouldShowBatchActions: !row.isSelected || selectedRowsCount > 0,
            rowsById: _objectSpread({}, state.rowsById, _defineProperty({}, rowId, _objectSpread({}, row, {
              isSelected: !row.isSelected
            })))
          };
        });
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnExpandRow", function (rowId) {
      return function () {
        _this.setState(function (state) {
          var row = state.rowsById[rowId];
          return {
            rowsById: _objectSpread({}, state.rowsById, _defineProperty({}, rowId, _objectSpread({}, row, {
              isExpanded: !row.isExpanded
            })))
          };
        });
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSortBy", function (headerKey) {
      return function () {
        _this.setState(function (state) {
          return getNextSortState(_this.props, state, {
            key: headerKey
          });
        });
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnInputValueChange", function (event) {
      _this.setState({
        filterInputValue: event.target.value
      });
    });

    _this.state = getDerivedStateFromProps(_props, {});
    _this.instanceId = getInstanceId();
    return _this;
  }

  _createClass(DataTable, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var rowIds = this.props.rows.map(function (row) {
        return row.id;
      });
      var nextRowIds = nextProps.rows.map(function (row) {
        return row.id;
      });

      if (!isEqual(rowIds, nextRowIds)) {
        this.setState(function (state) {
          return getDerivedStateFromProps(nextProps, state);
        });
        return;
      }

      var headers = this.props.headers.map(function (header) {
        return header.key;
      });
      var nextHeaders = nextProps.headers.map(function (header) {
        return header.key;
      });

      if (!isEqual(headers, nextHeaders)) {
        this.setState(function (state) {
          return getDerivedStateFromProps(nextProps, state);
        });
        return;
      }

      if (!isEqual(this.props.rows, nextProps.rows)) {
        this.setState(function (state) {
          return getDerivedStateFromProps(nextProps, state);
        });
        return;
      }
    }
    /**
     * Get the props associated with the given header. Mostly used for adding in
     * sorting behavior.
     *
     * @param {Object} config
     * @param {string} config.header the header we want the props for
     * @param {Function} config.onClick a custom click handler for the header
     * @returns {Object}
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          filterRows = _this$props2.filterRows,
          headers = _this$props2.headers,
          render = _this$props2.render;
      var _this$state2 = this.state,
          filterInputValue = _this$state2.filterInputValue,
          rowIds = _this$state2.rowIds,
          rowsById = _this$state2.rowsById,
          cellsById = _this$state2.cellsById;
      var filteredRowIds = typeof filterInputValue === 'string' ? filterRows({
        rowIds: rowIds,
        headers: headers,
        cellsById: cellsById,
        inputValue: filterInputValue
      }) : rowIds;
      var renderProps = {
        // Data derived from state
        rows: denormalize(filteredRowIds, rowsById, cellsById),
        headers: this.props.headers,
        selectedRows: denormalize(this.getSelectedRows(), rowsById, cellsById),
        // Prop accessors/getters
        getHeaderProps: this.getHeaderProps,
        getRowProps: this.getRowProps,
        getSelectionProps: this.getSelectionProps,
        getBatchActionProps: this.getBatchActionProps,
        getTableProps: this.getTableProps,
        // Custom event handlers
        onInputChange: this.handleOnInputValueChange,
        // Expose internal state change actions
        sortBy: function sortBy(headerKey) {
          return _this2.handleSortBy(headerKey)();
        },
        selectAll: this.handleSelectAll,
        selectRow: function selectRow(rowId) {
          return _this2.handleOnSelectRow(rowId)();
        },
        expandRow: function expandRow(rowId) {
          return _this2.handleOnExpandRow(rowId)();
        }
      };

      if (render !== undefined) {
        return render(renderProps);
      }

      if (children !== undefined) {
        return children(renderProps);
      }

      return null;
    }
  }]);

  return DataTable;
}(React.Component);

_defineProperty(DataTable, "propTypes", {
  /**
   * The `rows` prop is where you provide us with a list of all the rows that
   * you want to render in the table. The only hard requirement is that this
   * is an array of objects, and that each object has a unique `id` field
   * available on it.
   */
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })).isRequired,

  /**
   * The `headers` prop represents the order in which the headers should
   * appear in the table. We expect an array of objects to be passed in, where
   * `key` is the name of the key in a row object, and `header` is the name of
   * the header.
   */
  headers: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    header: PropTypes.node.isRequired
  })).isRequired,

  /**
   * Optional hook to manually control sorting of the rows.
   */
  sortRow: PropTypes.func,

  /**
   * Optional hook to manually control filtering of the rows from the
   * TableToolbarSearch component
   */
  filterRows: PropTypes.func,

  /**
   * Provide a string for the current locale
   */
  locale: PropTypes.string,

  /**
   * Optional method that takes in a message id and returns an
   * internationalized string. See `DataTable.translationKeys` for all
   * available message ids.
   */
  translateWithId: PropTypes.func,

  /**
   * Optional boolean to create a short data table.
   */
  short: PropTypes.bool,

  /**
   * Optional boolean to remove borders from data table.
   */
  shouldShowBorder: PropTypes.bool
});

_defineProperty(DataTable, "defaultProps", {
  sortRow: defaultSortRow,
  filterRows: defaultFilterRows,
  locale: 'en',
  translateWithId: translateWithId,
  short: false,
  shouldShowBorder: true
});

_defineProperty(DataTable, "translationKeys", Object.values(translationKeys));

export { DataTable as default };