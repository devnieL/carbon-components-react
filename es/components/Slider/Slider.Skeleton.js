import PropTypes from 'prop-types';
import React from 'react';

var SliderSkeleton = function SliderSkeleton(_ref) {
  var hideLabel = _ref.hideLabel,
      id = _ref.id;
  var label = hideLabel ? null : // eslint-disable-next-line jsx-a11y/label-has-for
  React.createElement("label", {
    className: "bx--label bx--skeleton",
    htmlFor: id
  });
  return React.createElement("div", {
    className: "bx--form-item"
  }, label, React.createElement("div", {
    className: "bx--slider-container bx--skeleton"
  }, React.createElement("span", {
    className: "bx--slider__range-label"
  }), React.createElement("div", {
    className: "bx--slider"
  }, React.createElement("div", {
    className: "bx--slider__track"
  }), React.createElement("div", {
    className: "bx--slider__filled-track"
  }), React.createElement("div", {
    className: "bx--slider__thumb"
  })), React.createElement("span", {
    className: "bx--slider__range-label"
  })));
};

SliderSkeleton.propTypes = {
  hideLabel: PropTypes.bool
};
export default SliderSkeleton;