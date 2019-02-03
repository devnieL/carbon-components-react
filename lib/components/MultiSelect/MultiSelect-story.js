"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _MultiSelect = _interopRequireDefault(require("../MultiSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
    filterable: (0, _addonKnobs.boolean)('Filterable (`<MultiSelect.Filterable>` instead of `<MultiSelect>`)', false),
    disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
    light: (0, _addonKnobs.boolean)('Light variant (light)', false),
    useTitleInItem: (0, _addonKnobs.boolean)('Show tooltip on hover', false),
    type: (0, _addonKnobs.select)('UI type (Only for `<MultiSelect>`) (type)', types, 'default'),
    label: (0, _addonKnobs.text)('Label (label)', defaultLabel),
    invalid: (0, _addonKnobs.boolean)('Show form validation UI (invalid)', false),
    invalidText: (0, _addonKnobs.text)('Form validation UI content (invalidText)', 'Invalid Selection'),
    onChange: (0, _addonActions.action)('onChange')
  };
};

(0, _react2.storiesOf)('MultiSelect', module).addDecorator(_addonKnobs.withKnobs).add('default', function () {
  var _props = props(),
      filterable = _props.filterable,
      multiSelectProps = _objectWithoutProperties(_props, ["filterable"]);

  var ComponentToUse = !filterable ? _MultiSelect.default : _MultiSelect.default.Filterable;
  var placeholder = !filterable ? undefined : defaultPlaceholder;
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(ComponentToUse, _extends({}, multiSelectProps, {
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

  var ComponentToUse = !filterable ? _MultiSelect.default : _MultiSelect.default.Filterable;
  var placeholder = !filterable ? undefined : defaultPlaceholder;
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(ComponentToUse, _extends({}, multiSelectProps, {
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