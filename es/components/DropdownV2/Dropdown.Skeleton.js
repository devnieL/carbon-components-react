import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

var DropdownSkeleton = function DropdownSkeleton(_ref) {
  var inline = _ref.inline;
  var wrapperClasses = classNames({
    'bx--skeleton': true,
    'bx--dropdown-v2': true,
    'bx--list-box': true,
    'bx--form-item': true,
    'bx--list-box--inline': inline
  });
  return React.createElement("div", {
    className: wrapperClasses
  }, React.createElement("div", {
    role: "button",
    className: "bx--list-box__field"
  }, React.createElement("span", {
    className: "bx--list-box__label"
  })));
};

DropdownSkeleton.propTypes = {
  inline: PropTypes.bool
};
DropdownSkeleton.defaultProps = {
  inline: false
};
export default DropdownSkeleton;