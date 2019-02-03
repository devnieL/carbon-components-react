/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { settings } from 'carbon-components';
import uid from '../../tools/uniqueId';

const { prefix } = settings;

export default class RadioButton extends React.Component {
  static propTypes = {
    /**
     * Specify whether the <RadioButton> is currently checked
     */
    checked: PropTypes.bool,

    /**
     * Provide an optional className to be applied to the containing node
     */
    className: PropTypes.string,

    /**
     * Specify whether the <RadioButton> should be checked by default
     */
    defaultChecked: PropTypes.bool,

    /**
     * Specify whether the control is disabled
     */
    disabled: PropTypes.bool,

    /**
     * Provide a unique id for the underlying <input> node
     */
    id: PropTypes.string,

    /**
     * Provide label text to be read by screen readers when interacting with the
     * control
     */
    labelText: PropTypes.node.isRequired,

    /**
     * Provide position (left, right, top, bottom) relative to the radio button.
     */
    labelPosition: PropTypes.string,

    /**
     * Provide a name for the underlying <input> node
     */
    name: PropTypes.string,

    /**
     * Provide an optional `onChange` hook that is called each time the value of
     * the underlying <input> changes
     */
    onChange: PropTypes.func,

    /**
     * Specify the value of the <RadioButton>
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

  static defaultProps = {
    labelPosition: 'right',
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.uid = props.id || uid();
  }

  handleChange = evt => {
    this.props.onChange(this.props.value, this.props.name, evt);
  };

  render() {
    const { labelText, labelPosition, ...other } = this.props;

    const wrapperClasses = classNames(
      `${prefix}--radio-button-wrapper`,
      `${prefix}--radio-button-wrapper--label-${labelPosition}`,
      this.props.className
    );

    return (
      <div className={wrapperClasses}>
        <input
          {...other}
          type="radio"
          className={`${prefix}--radio-button`}
          onChange={this.handleChange}
          id={this.uid}
        />
        <label htmlFor={this.uid} className={`${prefix}--radio-button__label`}>
          <span className={`${prefix}--radio-button__appearance`} />
          <span className={`${prefix}--radio-button__label-text`}>
            {labelText}
          </span>
        </label>
      </div>
    );
  }
}
