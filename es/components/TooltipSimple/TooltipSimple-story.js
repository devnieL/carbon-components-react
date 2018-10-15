import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { iconInfoGlyph, iconAdd } from 'carbon-icons';
import TooltipSimple from '../TooltipSimple';
var icons = {
  iconInfoGlyph: 'Info (iconInfo from `carbon-icons`)',
  iconAdd: 'Add (iconAdd from `carbon-icons`)'
};
var iconMap = {
  iconInfoGlyph: iconInfoGlyph,
  iconAdd: iconAdd
};
var directions = {
  bottom: 'Bottom (bottom)',
  top: 'Top (top)'
};
var props = {
  withIcon: function withIcon() {
    return {
      className: 'some-class',
      clickToOpen: boolean('Click to open (clickToOpen)', false),
      direction: select('Tooltip direction (direction)', directions, 'bottom'),
      text: text('Tooltip content (text)', 'This is some Tooltip text.'),
      icon: iconMap[select('The icon (icon)', icons, 'iconInfoGlyph')],
      iconDescription: text('Icon description (iconDescription)', 'tooltip')
    };
  },
  withoutIcon: function withoutIcon() {
    return {
      className: 'some-class',
      showIcon: false,
      direction: select('Tooltip direction (direction)', directions, 'bottom'),
      text: text('Tooltip content (text)', 'This is some Tooltip text.')
    };
  }
};
storiesOf('TooltipSimple', module).addDecorator(withKnobs).add('default', withInfo({
  text: "\n        Tooltips are used to supply additional information to an element when hovering over it. By default,\n        the tooltip will render above the element. The example below shows the default scenario.\n      "
})(function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(TooltipSimple, props.withIcon(), React.createElement("p", {
    className: "bx--tooltip__trigger"
  }, "Tooltip - hover")));
})).add('no icon', withInfo({
  text: "\n        Tooltips are used to supply additional information to an element when hovering over it. By default,\n        the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n      "
})(function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(TooltipSimple, props.withoutIcon(), React.createElement("p", {
    className: "bx--tooltip__trigger"
  }, "Tooltip - hover")));
}));