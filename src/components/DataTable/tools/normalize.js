/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getCellId } from './cells';
import flat from './flat';
import objectPath from 'object-path';

/**
 * Normalize a collection of rows with the given headers.
 *
 * @param {Array<Object>} rows
 * @param {Array<Object>} headers
 * @returns {Object}
 */
const normalize = (rows, headers, prevState = {}) => {
  const { rowsById: prevRowsByIds } = prevState;
  const rowIds = new Array(rows.length);
  const rowsById = {};
  const cellsById = {};

  const flatHeaders = flat(headers);

  rows.forEach((row, i) => {
    rowIds[i] = row.id;
    // Initialize the row info and state values, namely for selection and
    // expansion
    rowsById[row.id] = {
      id: row.id,
      isSelected: false,
      isExpanded: false,
      cells: new Array(flatHeaders),
    };

    // If we have a previous state, and the row existed in that previous state,
    // then we'll set the state values of the row to the previous state values.
    if (prevRowsByIds && prevRowsByIds[row.id] !== undefined) {
      rowsById[row.id].isSelected = prevRowsByIds[row.id].isSelected;
      rowsById[row.id].isExpanded = prevRowsByIds[row.id].isExpanded;
    }

    flatHeaders.forEach(({ key }, i) => {
      const id = getCellId(row.id, key);
      // Initialize the cell info and state values, namely for editing
      cellsById[id] = {
        id,
        value: objectPath.get(row, key),
        isEditable: false,
        isEditing: false,
        isValid: true,
        errors: null,
        info: {
          header: key,
        },
      };

      // TODO: When working on inline edits, we'll need to derive the state
      // values similarly to rows above.

      rowsById[row.id].cells[i] = id;
    });
  });

  return {
    rowIds,
    rowsById,
    cellsById,
  };
};

export default normalize;
