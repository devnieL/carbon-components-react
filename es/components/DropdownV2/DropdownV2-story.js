function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import DropdownV2 from '../DropdownV2';
import DropdownSkeleton from '../DropdownV2/Dropdown.Skeleton';
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
var types = {
  default: 'Default (default)',
  inline: 'Inline (inline)'
};

var props = function props() {
  return {
    type: select('Dropdown type (type)', types, 'default'),
    label: text('Label (label)', 'Label'),
    ariaLabel: text('Aria Label (ariaLabel)', 'Dropdown'),
    disabled: boolean('Disabled (disabled)', false),
    light: boolean('Light variant (light)', false)
  };
};

storiesOf('DropdownV2', module).addDecorator(withKnobs).add('default', withInfo({
  text: 'DropdownV2'
})(function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownV2, _extends({}, props(), {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange')
  })));
})).add('fully controlled', withInfo({
  text: "\n        Sometimes you want to control everything.\n      "
})(function () {
  return React.createElement(WithState, {
    initialState: {
      selectedItem: items[0]
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return React.createElement("div", {
      style: {
        width: 300
      }
    }, React.createElement(DropdownV2, _extends({}, props(), {
      items: items,
      itemToString: function itemToString(item) {
        return item ? item.text : '';
      },
      onChange: function onChange(_ref2) {
        var selectedItem = _ref2.selectedItem;
        return setTimeout(function () {
          return setState({
            selectedItem: selectedItem
          });
        }, 1000);
      },
      selectedItem: state.selectedItem
    })));
  });
})).add('skeleton', withInfo({
  text: "\n        Placeholder skeleton state to use when content is loading.\n      "
})(function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownSkeleton, null), "\xA0", React.createElement(DropdownSkeleton, {
    inline: true
  }));
}));