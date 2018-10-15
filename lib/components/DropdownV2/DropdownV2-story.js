"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _DropdownV = _interopRequireDefault(require("../DropdownV2"));

var _Dropdown = _interopRequireDefault(require("../DropdownV2/Dropdown.Skeleton"));

var _withState = _interopRequireDefault(require("../../tools/withState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    type: (0, _addonKnobs.select)('Dropdown type (type)', types, 'default'),
    label: (0, _addonKnobs.text)('Label (label)', 'Label'),
    ariaLabel: (0, _addonKnobs.text)('Aria Label (ariaLabel)', 'Dropdown'),
    disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
    light: (0, _addonKnobs.boolean)('Light variant (light)', false)
  };
};

(0, _react2.storiesOf)('DropdownV2', module).addDecorator(_addonKnobs.withKnobs).add('default', (0, _addonInfo.withInfo)({
  text: 'DropdownV2'
})(function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_DropdownV.default, _extends({}, props(), {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _addonActions.action)('onChange')
  })));
})).add('fully controlled', (0, _addonInfo.withInfo)({
  text: "\n        Sometimes you want to control everything.\n      "
})(function () {
  return _react.default.createElement(_withState.default, {
    initialState: {
      selectedItem: items[0]
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return _react.default.createElement("div", {
      style: {
        width: 300
      }
    }, _react.default.createElement(_DropdownV.default, _extends({}, props(), {
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
})).add('skeleton', (0, _addonInfo.withInfo)({
  text: "\n        Placeholder skeleton state to use when content is loading.\n      "
})(function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_Dropdown.default, null), "\xA0", _react.default.createElement(_Dropdown.default, {
    inline: true
  }));
}));