"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultFilterRows = void 0;

var _cells = require("./cells");

/**
 * Default implemention of how we filter rows internally. The idea behind this
 * implementation is to use the given list of row ids and headers to get the
 * individual cell values for a row. Then, we go through each cell value and see
 * if any of them includes the given inputValue.
 *
 * @param {Object} config
 * @param {Array<string>} config.rowIds array of all the row ids in the table
 * @param {Array<Object>} config.headers
 * @param {Object} config.cellsById object containing a map of cell id to cell
 * @param {string} config.inputValue the current input value in the Table Search
 * @returns {Array<string>} rowIds
 */
var defaultFilterRows = function defaultFilterRows(_ref) {
  var rowIds = _ref.rowIds,
      headers = _ref.headers,
      cellsById = _ref.cellsById,
      inputValue = _ref.inputValue;
  return rowIds.filter(function (rowId) {
    return headers.some(function (_ref2) {
      var key = _ref2.key;
      var id = (0, _cells.getCellId)(rowId, key);
      return ('' + cellsById[id].value).toLowerCase().includes(inputValue.toLowerCase());
    });
  });
};

exports.defaultFilterRows = defaultFilterRows;