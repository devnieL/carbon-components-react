/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import InlineCheckbox from '../InlineCheckbox';

var TableSelectRow = function TableSelectRow(_ref) {
  var ariaLabel = _ref.ariaLabel,
      checked = _ref.checked,
      id = _ref.id,
      name = _ref.name,
      onSelect = _ref.onSelect,
      disabled = _ref.disabled;
  return React.createElement("td", null, React.createElement(InlineCheckbox, {
    id: id,
    name: name,
    onClick: onSelect,
    checked: checked,
    ariaLabel: ariaLabel,
    disabled: disabled
  }));
};

TableSelectRow.propTypes = {
  /**
   * Specify the aria label for the underlying input control
   */
  ariaLabel: PropTypes.string.isRequired,

  /**
   * Specify whether all items are selected, or not
   */
  checked: PropTypes.bool.isRequired,

  /**
   * Provide an `id` for the underlying input control
   */
  id: PropTypes.string.isRequired,

  /**
   * Provide a `name` for the underlying input control
   */
  name: PropTypes.string.isRequired,

  /**
   * Provide a handler to listen to when a user initiates a selection request
   */
  onSelect: PropTypes.func.isRequired
};
export default TableSelectRow;