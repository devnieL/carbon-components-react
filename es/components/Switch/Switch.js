function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

var Switch = function Switch(props) {
  var className = props.className,
      index = props.index,
      kind = props.kind,
      name = props.name,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      selected = props.selected,
      text = props.text,
      icon = props.icon,
      href = props.href,
      other = _objectWithoutProperties(props, ["className", "index", "kind", "name", "onClick", "onKeyDown", "selected", "text", "icon", "href"]);

  var handleClick = function handleClick(e) {
    e.preventDefault();
    onClick({
      index: index,
      name: name,
      text: text
    });
  };

  var handleKeyDown = function handleKeyDown(e) {
    var key = e.key || e.which;

    if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
      onKeyDown({
        index: index,
        name: name,
        text: text
      });
    }
  };

  var classes = classNames(className, 'bx--content-switcher-btn', {
    'bx--content-switcher--selected': selected
  });
  var commonProps = {
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    className: classes
  };
  var btnIcon = icon ? React.cloneElement(icon, {
    className: classNames(icon.props.className, ' bx--content-switcher__icon')
  }) : null;

  if (kind === 'button') {
    return React.createElement("button", _extends({}, other, commonProps), btnIcon, text);
  }

  return React.createElement("a", _extends({
    href: href
  }, other, commonProps), btnIcon, text);
};

Switch.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number,
  kind: PropTypes.oneOf(['button', 'anchor']).isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  href: PropTypes.string
};
Switch.defaultProps = {
  selected: false,
  kind: 'anchor',
  text: 'Provide text',
  href: '',
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {}
};
export default Switch;