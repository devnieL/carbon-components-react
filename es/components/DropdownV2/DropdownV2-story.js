function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import DropdownV2 from '../DropdownV2';
import DropdownItem from '../DropdownItem';
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
var stringItems = ['Option 1', 'Option 2', 'Option 3'];
var dropdownItems = [{
  itemText: 'hello',
  value: 'hello',
  style: {
    opacity: 1
  }
}, {
  itemText: 'world',
  value: 'world',
  style: {
    opacity: 1
  }
}];
var types = {
  'Default (default)': 'default',
  'Inline (inline)': 'inline'
};

var props = function props() {
  return {
    type: select('Dropdown type (type)', types, 'default'),
    label: text('Label (label)', 'Label'),
    ariaLabel: text('Aria Label (ariaLabel)', 'Dropdown'),
    disabled: boolean('Disabled (disabled)', false),
    light: boolean('Light variant (light)', false),
    titleText: text('Title (titleText)', 'This is not a dropdown title.'),
    helperText: text('Helper text (helperText)', 'This is not some helper text.')
  };
};

var itemToElement = function itemToElement(item) {
  var itemAsArray = item.text.split(' ');
  return React.createElement("div", null, React.createElement("span", null, itemAsArray[0]), React.createElement("span", {
    style: {
      color: 'red'
    }
  }, " ", itemAsArray[1]));
};

storiesOf('DropdownV2', module).addDecorator(withKnobs).add('default', function () {
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
}, {
  info: {
    text: 'DropdownV2'
  }
}).add('items as strings', function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownV2, _extends({}, props(), {
    items: stringItems,
    onChange: action('onChange')
  })));
}, {
  info: {
    text: 'Rendering an array of strings as `items`'
  }
}).add('items as components', function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownV2, _extends({}, props(), {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    itemToElement: itemToElement,
    onChange: action('onChange')
  })));
}, {
  info: {
    text: "Rendering items as custom components"
  }
}).add('with DropdownItems', function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownV2, _extends({}, props(), {
    items: dropdownItems,
    itemToString: function itemToString(item) {
      return item ? item.itemText : '';
    },
    itemToElement: DropdownItem,
    onChange: action('onChange')
  })));
}, {
  info: {
    text: "\n          Using DropdownItem as the components to render. Has some kinks due to the onClick in the DropdownItem.\n        "
  }
}).add('fully controlled', function () {
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
}, {
  info: {
    text: "\n            Sometimes you want to control everything.\n          "
  }
}).add('skeleton', function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownSkeleton, null), "\xA0", React.createElement(DropdownSkeleton, {
    inline: true
  }));
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n          "
  }
});