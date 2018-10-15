import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ListItem from '../ListItem';
import UnorderedList from '../UnorderedList';
storiesOf('UnorderedList', module).add('default', withInfo({
  text: 'Lists consist of related content grouped together and organized ' + 'vertically. Unordered lists are used to present content of equal ' + 'status or value.'
})(function () {
  return React.createElement(UnorderedList, null, React.createElement(ListItem, null, "Unordered List level 1"), React.createElement(ListItem, null, "Unordered List level 1"), React.createElement(ListItem, null, "Unordered List level 1"));
})).add('nested', withInfo({
  text: 'Lists consist of related content grouped together and organized ' + 'vertically. Unordered lists are used to present content of equal ' + 'status or value.'
})(function () {
  return React.createElement(UnorderedList, null, React.createElement(ListItem, null, "Unordered List level 1"), React.createElement(UnorderedList, {
    nested: true
  }, React.createElement(ListItem, null, "Unordered List level 2"), React.createElement(ListItem, null, "Unordered List level 2")), React.createElement(ListItem, null, "Unordered List level 1"), React.createElement(ListItem, null, "Unordered List level 1"));
}));