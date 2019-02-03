function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { iconDownload, iconEdit, iconSettings } from 'carbon-icons';
import DataTable, { Table, TableBatchAction, TableBatchActions, TableBody, TableCell, TableContainer, TableExpandHeader, TableExpandRow, TableExpandedRow, TableHead, TableHeader, TableRow, TableSelectAll, TableSelectRow, TableToolbar, TableToolbarAction, TableToolbarContent, TableToolbarSearch } from '../../DataTable';
import Button from '../../Button';
import { batchActionClick, initialRows, headers } from './shared';
export default (function () {
  var insertInRandomPosition = function insertInRandomPosition(array, element) {
    var index = Math.floor(Math.random() * (array.length + 1));
    return _toConsumableArray(array.slice(0, index)).concat([element], _toConsumableArray(array.slice(index)));
  };

  var DynamicRows =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DynamicRows, _React$Component);

    function DynamicRows() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DynamicRows);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DynamicRows)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        rows: initialRows,
        headers: headers,
        id: 0
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnHeaderAdd", function () {
        var length = _this.state.headers.length;
        var header = {
          key: "header_".concat(length),
          header: "Header ".concat(length)
        };

        _this.setState(function (state) {
          var rows = state.rows.map(function (row) {
            return _objectSpread({}, row, _defineProperty({}, header.key, header.header));
          });
          return {
            rows: rows,
            headers: state.headers.concat(header)
          };
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnRowAdd", function () {
        _this.setState(function (state) {
          var _id = state.id,
              rows = state.rows;
          var id = _id + 1;
          var row = {
            id: '' + id,
            name: "New Row ".concat(id),
            protocol: 'HTTP',
            port: id * 100,
            rule: id % 2 === 0 ? 'Round robin' : 'DNS delegation',
            attached_groups: "Row ".concat(id, "'s VM Groups"),
            status: 'Starting'
          };
          state.headers.filter(function (header) {
            return row[header.key] === undefined;
          }).forEach(function (header) {
            row[header.key] = header.header;
          });
          return {
            id: id,
            rows: insertInRandomPosition(rows, row)
          };
        });
      });

      return _this;
    }

    _createClass(DynamicRows, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement(DataTable, {
          rows: this.state.rows,
          headers: this.state.headers,
          render: function render(_ref) {
            var rows = _ref.rows,
                headers = _ref.headers,
                getHeaderProps = _ref.getHeaderProps,
                getSelectionProps = _ref.getSelectionProps,
                getBatchActionProps = _ref.getBatchActionProps,
                getRowProps = _ref.getRowProps,
                onInputChange = _ref.onInputChange,
                selectedRows = _ref.selectedRows;
            return React.createElement(TableContainer, {
              title: "DataTable with dynamic rows"
            }, React.createElement(Button, {
              small: true,
              onClick: _this2.handleOnRowAdd
            }, "Add new row"), React.createElement(Button, {
              small: true,
              onClick: _this2.handleOnHeaderAdd
            }, "Add new header"), React.createElement(TableToolbar, null, React.createElement(TableBatchActions, getBatchActionProps(), React.createElement(TableBatchAction, {
              onClick: batchActionClick(selectedRows)
            }, "Ghost"), React.createElement(TableBatchAction, {
              onClick: batchActionClick(selectedRows)
            }, "Ghost"), React.createElement(TableBatchAction, {
              onClick: batchActionClick(selectedRows)
            }, "Ghost")), React.createElement(TableToolbarSearch, {
              onChange: onInputChange
            }), React.createElement(TableToolbarContent, null, React.createElement(TableToolbarAction, {
              icon: iconDownload,
              iconDescription: "Download",
              onClick: action('TableToolbarAction - Download')
            }), React.createElement(TableToolbarAction, {
              icon: iconEdit,
              iconDescription: "Edit",
              onClick: action('TableToolbarAction - Edit')
            }), React.createElement(TableToolbarAction, {
              icon: iconSettings,
              iconDescription: "Settings",
              onClick: action('TableToolbarAction - Settings')
            }))), React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableExpandHeader, null), React.createElement(TableSelectAll, getSelectionProps()), headers.map(function (header) {
              return React.createElement(TableHeader, getHeaderProps({
                header: header
              }), header.header);
            }))), React.createElement(TableBody, null, rows.map(function (row) {
              return React.createElement(React.Fragment, {
                key: row.id
              }, React.createElement(TableExpandRow, getRowProps({
                row: row
              }), React.createElement(TableSelectRow, getSelectionProps({
                row: row
              })), row.cells.map(function (cell) {
                return React.createElement(TableCell, {
                  key: cell.id
                }, cell.value);
              })), row.isExpanded && React.createElement(TableExpandedRow, null, React.createElement(TableCell, {
                colSpan: headers.length + 3
              }, React.createElement("h1", null, "Expandable row content"), React.createElement("p", null, "Description here"))));
            }))));
          }
        });
      }
    }]);

    return DynamicRows;
  }(React.Component);

  return React.createElement(DynamicRows, null);
});