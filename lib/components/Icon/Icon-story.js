"use strict";

var _react = _interopRequireDefault(require("react"));

var _carbonIcons = _interopRequireWildcard(require("carbon-icons"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _Icon = _interopRequireWildcard(require("../Icon"));

var _Icon2 = _interopRequireDefault(require("../Icon/Icon.Skeleton"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
(0, _Icon.setIconsList)(_carbonIcons.default);
var icons = {
  'Add (iconAdd from `carbon-icons`)': 'iconAdd',
  'Add with filled circle (iconAddSolid from `carbon-icons`)': 'iconAddSolid',
  'Add with circle (iconAddOutline from `carbon-icons`)': 'iconAddOutline',
  'Legacy add (icon--add)': 'icon--add',
  'Legacy add with filled circle (add--solid)': 'add--solid',
  'Legacy add with circle (add--outline)': 'add--outline'
};
var iconMap = {
  iconAdd: _carbonIcons.iconAdd,
  iconAddSolid: _carbonIcons.iconAddSolid,
  iconAddOutline: _carbonIcons.iconAddOutline
};

var props = function props() {
  var selectedIcon = (0, _addonKnobs.select)('The icon (icon (regular)/name (legacy))', icons, 'iconAdd');
  return {
    style: {
      margin: '50px'
    },
    icon: iconMap[selectedIcon],
    name: iconMap[selectedIcon] ? undefined : selectedIcon,
    role: (0, _addonKnobs.text)('ARIA role (role)', ''),
    fill: (0, _addonKnobs.text)('The SVG `fill` attribute (fill)', 'grey'),
    fillRule: (0, _addonKnobs.text)('The SVG `fillRule` attribute (fillRule)', ''),
    width: (0, _addonKnobs.text)('The SVG `width` attribute (width)', ''),
    height: (0, _addonKnobs.text)('The SVG `height` attribute (height)', ''),
    description: (0, _addonKnobs.text)('The a11y text (description)', 'This is a description of the icon and what it does in context'),
    iconTitle: (0, _addonKnobs.text)('The content in <title> in SVG (iconTitle)', ''),
    className: 'extra-class'
  };
};

var propsSkeleton = {
  style: {
    margin: '50px'
  }
};
var propsSkeleton2 = {
  style: {
    margin: '50px',
    width: '24px',
    height: '24px'
  }
};
(0, _react2.storiesOf)('Icon', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_Icon.default, props()));
}, {
  info: {
    text: "\n            Icons are used in the product to present common actions and commands. Modify the fill property to change the color of the icon. The name property defines which icon to display. For accessibility, provide a context-rich description with the description prop. For a full list of icon names, see carbondesignsystem.com/style/iconography/library\n          "
  }
}).add('Skeleton', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_Icon2.default, propsSkeleton), _react.default.createElement(_Icon2.default, propsSkeleton2));
}, {
  info: {
    text: "\n            Icons are used in the product to present common actions and commands. Modify the fill property to change the color of the icon. The name property defines which icon to display. For accessibility, provide a context-rich description with the description prop. For a full list of icon names, see carbondesignsystem.com/style/iconography/library\n          "
  }
});