function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import ComboBox from '../ComboBox';
import WithState from '../../tools/withState';
var items = [{
  id: 'option-1',
  text: 'Option 1'
}, {
  id: 'option-2',
  text: 'Option 2'
}, {
  id: 'option-3',
  text: 'Option 3'
}, {
  id: 'option-4',
  text: 'Option 4'
}];

var props = function props() {
  return {
    disabled: boolean('Disabled (disabled)', false),
    placeholder: text('Placeholder text (placeholder)', 'Filter...'),
    onChange: action('onChange')
  };
};

storiesOf('ComboBox', module).addDecorator(withKnobs).add('Default', withInfo({
  text: 'ComboBox'
})(function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(ComboBox, _extends({
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    }
  }, props())));
})).add('custom text input handling', withInfo({
  text: "Sometimes you want to perform an async action to trigger a backend call on input change."
})(function () {
  return React.createElement(WithState, {
    initialState: {
      inputText: ''
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return React.createElement("div", {
      style: {
        width: 300
      }
    }, React.createElement(ComboBox, _extends({
      items: items,
      itemToString: function itemToString(item) {
        return item ? "".concat(item.text, " queried with ").concat(state.inputText) : '';
      },
      shouldFilterItem: function shouldFilterItem() {
        return true;
      },
      onInputChange: function onInputChange(text) {
        return setState({
          inputText: text
        });
      }
    }, props())));
  });
}));