/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { iconDownload, iconEdit, iconSettings } from 'carbon-icons';
import Button from '../../Button';
import DataTable, { Table, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow, TableToolbar, TableToolbarAction, TableToolbarContent, TableToolbarSearch } from '../../DataTable';
import { initialRows, headers } from './shared';
export default (function () {
  return React.createElement(DataTable, {
    rows: initialRows,
    headers: headers,
    render: function render(_ref) {
      var rows = _ref.rows,
          headers = _ref.headers,
          getHeaderProps = _ref.getHeaderProps,
          getRowProps = _ref.getRowProps,
          onInputChange = _ref.onInputChange;
      return React.createElement(TableContainer, {
        title: "DataTable with toolbar"
      }, React.createElement(TableToolbar, null, React.createElement(TableToolbarSearch, {
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
      }), React.createElement(Button, {
        onClick: action('Add new row'),
        small: true,
        kind: "primary"
      }, "Add new"))), React.createElement(Table, null, React.createElement(TableHead, null, React.createElement(TableRow, null, headers.map(function (header) {
        return React.createElement(TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), React.createElement(TableBody, null, rows.map(function (row) {
        return React.createElement(TableRow, getRowProps({
          row: row
        }), row.cells.map(function (cell) {
          return React.createElement(TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  });
});