import PropTypes from 'prop-types';
import React from 'react';

var DatePickerSkeleton = function DatePickerSkeleton(_ref) {
  var range = _ref.range,
      id = _ref.id;
  var dateInput = React.createElement("div", {
    className: "bx--date-picker-container"
  },
  /* eslint-disable jsx-a11y/label-has-for */
  React.createElement("label", {
    className: "bx--label",
    htmlFor: id
  }), React.createElement("div", {
    className: "bx--date-picker__input bx--skeleton"
  }));

  if (range) {
    return React.createElement("div", {
      className: "bx--form-item"
    }, React.createElement("div", {
      className: "bx--date-picker bx--date-picker--range bx--skeleton"
    }, dateInput, dateInput));
  }

  return React.createElement("div", {
    className: "bx--form-item"
  }, React.createElement("div", {
    className: "bx--date-picker bx--date-picker--short bx--date-picker--simple bx--skeleton"
  }, dateInput));
};

DatePickerSkeleton.propTypes = {
  range: PropTypes.bool
};
export default DatePickerSkeleton;