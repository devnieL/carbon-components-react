function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import MultiSelect from '../MultiSelect';
var items = [{
  id: 'item-1',
  text: 'Item 1'
}, {
  id: 'item-2',
  text: 'Item 2'
}];
var defaultLabel = 'MultiSelect Label';
var defaultPlaceholder = 'Filter';
var types = {
  'Default (default)': 'default',
  'Inline (inline)': 'inline'
};

var props = function props() {
  return {
    filterable: boolean('Filterable (`<MultiSelect.Filterable>` instead of `<MultiSelect>`)', false),
    disabled: boolean('Disabled (disabled)', false),
    light: boolean('Light variant (light)', false),
    useTitleInItem: boolean('Show tooltip on hover', false),
    type: select('UI type (Only for `<MultiSelect>`) (type)', types, 'default'),
    label: text('Label (label)', defaultLabel),
    invalid: boolean('Show form validation UI (invalid)', false),
    invalidText: text('Form validation UI content (invalidText)', 'Invalid Selection'),
    onChange: action('onChange')
  };
};

storiesOf('MultiSelect', module).addDecorator(withKnobs).add('default', function () {
  var _props = props(),
      filterable = _props.filterable,
      multiSelectProps = _objectWithoutProperties(_props, ["filterable"]);

  var ComponentToUse = !filterable ? MultiSelect : MultiSelect.Filterable;
  var placeholder = !filterable ? undefined : defaultPlaceholder;
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(ComponentToUse, _extends({}, multiSelectProps, {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    placeholder: placeholder
  })));
}, {
  info: {
    text: "\n            MultiSelect\n          "
  }
}).add('with initial selected items', function () {
  var _props2 = props(),
      filterable = _props2.filterable,
      multiSelectProps = _objectWithoutProperties(_props2, ["filterable"]);

  var ComponentToUse = !filterable ? MultiSelect : MultiSelect.Filterable;
  var placeholder = !filterable ? undefined : defaultPlaceholder;
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(ComponentToUse, _extends({}, multiSelectProps, {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    initialSelectedItems: [items[0], items[1]],
    placeholder: placeholder
  })));
}, {
  info: {
    text: "\n            Provide a set of items to initially select in the control\n          "
  }
});