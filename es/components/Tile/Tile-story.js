function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { Tile, ClickableTile, SelectableTile, ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent } from '../Tile';
import TileGroup from '../TileGroup';
import RadioTile from '../RadioTile';
var radioValues = {
  '': 'None',
  standard: 'standard',
  'default-selected': 'default-selected',
  selected: 'selected'
};
var props = {
  selectable: function selectable() {
    return {
      selected: boolean('Selected (selected)', false),
      handleClick: action('handleClick'),
      handleKeyDown: action('handleKeyDown')
    };
  },
  group: function group() {
    return {
      name: text('Form item (name in <TileGroup>)', 'tile-group'),
      valueSelected: select('Value of the selected item (valueSelected in <TileGroup>)', radioValues, ''),
      onChange: action('onChange')
    };
  },
  radio: function radio() {
    return {
      name: text('Form item name (name in <RadioTile>)', 'tiles'),
      onChange: action('onChange')
    };
  },
  expandable: function expandable() {
    return {
      tabIndex: number('Tab index (tabIndex)', 0),
      expanded: boolean('Expanded (expanded)', false),
      tileMaxHeight: number('Max height (tileMaxHeight)', 0),
      tileCollapsedIconText: text('Collapsed icon text (tileCollapsedIconText)', 'Expand'),
      tileExpandedIconText: text('Collapsed icon text (tileExpandedIconText)', 'Collapse'),
      handleClick: action('handleClick')
    };
  }
};
storiesOf('Tile', module).addDecorator(withKnobs).add('Default', withInfo({
  text: "\n        Default tile without any interactions\n      "
})(function () {
  return React.createElement(Tile, null, "Default tile");
})).add('Clickable', withInfo({
  text: "\n        Clickable tile\n      "
})(function () {
  return React.createElement(ClickableTile, {
    href: text('Href for clicable UI (href)', '#')
  }, "Clickable Tile");
})).add('Multi-select', withInfo({
  text: "\n        Selectable tile\n\n        Use this to select multiple tiles.\n      "
})(function () {
  var selectableProps = props.selectable();
  return React.createElement("div", null, React.createElement(SelectableTile, _extends({
    id: "tile-1",
    name: "tiles"
  }, selectableProps), "Multi-select Tile"), React.createElement(SelectableTile, _extends({
    id: "tile-1",
    name: "tiles"
  }, selectableProps), "Multi-select Tile"), React.createElement(SelectableTile, _extends({
    id: "tile-1",
    name: "tiles"
  }, selectableProps), "Multi-select Tile"));
})).add('Selectable', withInfo({
  text: "\n         The example below shows a Tile Group component with a default selected Tile.\n         Although you can set the checked prop on the Tile, when using the RadioTile component\n         as a child of the Tile Group, either set the defaultSelected or valueSelected which will\n         automatically set the selected prop on the corresponding RadioTile component.\n\n         Use defaultSelected when you want a tile to be selected initially, but don't need to set it\n         at a later time. If you do need to set it dynamically at a later time, then use the valueSelected property instead.\n\n         Use this to select one tile at a time.\n      "
})(function () {
  var radioProps = props.radio();
  return React.createElement(TileGroup, _extends({
    defaultSelected: "default-selected",
    legend: "Selectable Tile Group"
  }, props.group()), React.createElement(RadioTile, _extends({
    value: "standard",
    id: "tile-1",
    labelText: "Selectable Tile"
  }, radioProps), "Selectable Tile"), React.createElement(RadioTile, _extends({
    value: "default-selected",
    labelText: "Default selected tile",
    id: "tile-2"
  }, radioProps), "Selectable Tile"), React.createElement(RadioTile, _extends({
    value: "selected",
    labelText: "Selectable Tile",
    id: "tile-3"
  }, radioProps), "Selectable Tile"));
})).add('Expandable', withInfo({
  text: "\n        Expandable tile\n      "
})(function () {
  return React.createElement(ExpandableTile, props.expandable(), React.createElement(TileAboveTheFoldContent, null, React.createElement("div", {
    style: {
      height: '200px'
    }
  }, "Above the fold content here")), React.createElement(TileBelowTheFoldContent, null, React.createElement("div", {
    style: {
      height: '400px'
    }
  }, "Below the fold content here")));
}));