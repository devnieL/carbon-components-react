"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _carbonIcons = require("carbon-icons");

var _Button = _interopRequireDefault(require("../../Button"));

var _DataTable = _interopRequireWildcard(require("../../DataTable"));

var _shared = require("./shared");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _default = function _default() {
  return _react.default.createElement(_DataTable.default, {
    rows: _shared.initialRows,
    headers: _shared.headers,
    render: function render(_ref) {
      var rows = _ref.rows,
          headers = _ref.headers,
          getHeaderProps = _ref.getHeaderProps,
          getRowProps = _ref.getRowProps,
          onInputChange = _ref.onInputChange;
      return _react.default.createElement(_DataTable.TableContainer, {
        title: "DataTable with toolbar"
      }, _react.default.createElement(_DataTable.TableToolbar, null, _react.default.createElement(_DataTable.TableToolbarSearch, {
        onChange: onInputChange
      }), _react.default.createElement(_DataTable.TableToolbarContent, null, _react.default.createElement(_DataTable.TableToolbarAction, {
        icon: _carbonIcons.iconDownload,
        iconDescription: "Download",
        onClick: (0, _addonActions.action)('TableToolbarAction - Download')
      }), _react.default.createElement(_DataTable.TableToolbarAction, {
        icon: _carbonIcons.iconEdit,
        iconDescription: "Edit",
        onClick: (0, _addonActions.action)('TableToolbarAction - Edit')
      }), _react.default.createElement(_DataTable.TableToolbarAction, {
        icon: _carbonIcons.iconSettings,
        iconDescription: "Settings",
        onClick: (0, _addonActions.action)('TableToolbarAction - Settings')
      }), _react.default.createElement(_Button.default, {
        onClick: (0, _addonActions.action)('Add new row'),
        small: true,
        kind: "primary"
      }, "Add new"))), _react.default.createElement(_DataTable.Table, null, _react.default.createElement(_DataTable.TableHead, null, _react.default.createElement(_DataTable.TableRow, null, headers.map(function (header) {
        return _react.default.createElement(_DataTable.TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), _react.default.createElement(_DataTable.TableBody, null, rows.map(function (row) {
        return _react.default.createElement(_DataTable.TableRow, getRowProps({
          row: row
        }), row.cells.map(function (cell) {
          return _react.default.createElement(_DataTable.TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  });
};

exports.default = _default;