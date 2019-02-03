function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import { iconAddSolid } from 'carbon-icons';
import Button from '../Button';

var TableBatchAction = function TableBatchAction(props) {
  return React.createElement(Button, _extends({
    small: true,
    kind: "ghost",
    icon: iconAddSolid
  }, props));
};

TableBatchAction.propTypes = {
  /**
   * Provide a text description for the icon in the button
   */
  iconDescription: PropTypes.string.isRequired
};
TableBatchAction.defaultProps = {
  iconDescription: 'Add'
};
export default TableBatchAction;