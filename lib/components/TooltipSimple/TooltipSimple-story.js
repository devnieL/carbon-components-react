"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _carbonIcons = require("carbon-icons");

var _TooltipSimple = _interopRequireDefault(require("../TooltipSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  iconInfoGlyph: 'Info (iconInfo from `carbon-icons`)',
  iconAdd: 'Add (iconAdd from `carbon-icons`)'
};
var iconMap = {
  iconInfoGlyph: _carbonIcons.iconInfoGlyph,
  iconAdd: _carbonIcons.iconAdd
};
var directions = {
  bottom: 'Bottom (bottom)',
  top: 'Top (top)'
};
var props = {
  withIcon: function withIcon() {
    return {
      className: 'some-class',
      clickToOpen: (0, _addonKnobs.boolean)('Click to open (clickToOpen)', false),
      direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
      text: (0, _addonKnobs.text)('Tooltip content (text)', 'This is some Tooltip text.'),
      icon: iconMap[(0, _addonKnobs.select)('The icon (icon)', icons, 'iconInfoGlyph')],
      iconDescription: (0, _addonKnobs.text)('Icon description (iconDescription)', 'tooltip')
    };
  },
  withoutIcon: function withoutIcon() {
    return {
      className: 'some-class',
      showIcon: false,
      direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
      text: (0, _addonKnobs.text)('Tooltip content (text)', 'This is some Tooltip text.')
    };
  }
};
(0, _react2.storiesOf)('TooltipSimple', module).addDecorator(_addonKnobs.withKnobs).add('default', (0, _addonInfo.withInfo)({
  text: "\n        Tooltips are used to supply additional information to an element when hovering over it. By default,\n        the tooltip will render above the element. The example below shows the default scenario.\n      "
})(function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_TooltipSimple.default, props.withIcon(), _react.default.createElement("p", {
    className: "bx--tooltip__trigger"
  }, "Tooltip - hover")));
})).add('no icon', (0, _addonInfo.withInfo)({
  text: "\n        Tooltips are used to supply additional information to an element when hovering over it. By default,\n        the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n      "
})(function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_TooltipSimple.default, props.withoutIcon(), _react.default.createElement("p", {
    className: "bx--tooltip__trigger"
  }, "Tooltip - hover")));
}));