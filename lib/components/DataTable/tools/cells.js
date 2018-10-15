"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCellId = void 0;

/**
 * Generic helper used to consolidate all call sites for getting a cell id into
 * one method. The strategy currently is that a "cellId" is just the combination
 * of the row id and the header key used to access this field in a row.
 *
 * @param {string} rowId
 * @param {string} header
 * @returns {string}
 */
var getCellId = function getCellId(rowId, header) {
  return "".concat(rowId, ":").concat(header);
};

exports.getCellId = getCellId;