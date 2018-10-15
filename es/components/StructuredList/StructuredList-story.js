import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { iconCheckmarkSolid } from 'carbon-icons';
import Icon from '../Icon';
import { StructuredListWrapper, StructuredListHead, StructuredListBody, StructuredListRow, StructuredListInput, StructuredListCell } from '../StructuredList';
import StructuredListSkeleton from '../StructuredList/StructuredList.Skeleton';
storiesOf('StructuredList', module).add('Simple', withInfo({
  text: "\n        Structured Lists group content that is similar or related, such as terms or definitions.\n      "
})(function () {
  return React.createElement(StructuredListWrapper, null, React.createElement(StructuredListHead, null, React.createElement(StructuredListRow, {
    head: true
  }, React.createElement(StructuredListCell, {
    head: true
  }, "ColumnA"), React.createElement(StructuredListCell, {
    head: true
  }, "ColumnB"), React.createElement(StructuredListCell, {
    head: true
  }, "ColumnC"))), React.createElement(StructuredListBody, null, React.createElement(StructuredListRow, null, React.createElement(StructuredListCell, {
    noWrap: true
  }, "Row 1"), React.createElement(StructuredListCell, null, "Row 1"), React.createElement(StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.")), React.createElement(StructuredListRow, null, React.createElement(StructuredListCell, {
    noWrap: true
  }, "Row 2"), React.createElement(StructuredListCell, null, "Row 2"), React.createElement(StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum."))));
})).add('Selection', withInfo({
  text: "\n        Structured Lists with selection allow a row of list content to be selected.\n      "
})(function () {
  return React.createElement(StructuredListWrapper, {
    selection: true,
    border: true
  }, React.createElement(StructuredListHead, null, React.createElement(StructuredListRow, {
    head: true
  }, React.createElement(StructuredListCell, {
    head: true
  }, ''), React.createElement(StructuredListCell, {
    head: true
  }, "ColumnA"), React.createElement(StructuredListCell, {
    head: true
  }, "ColumnB"), React.createElement(StructuredListCell, {
    head: true
  }, "ColumnC"))), React.createElement(StructuredListBody, null, React.createElement(StructuredListRow, {
    label: true,
    htmlFor: "row-1"
  }, React.createElement(StructuredListInput, {
    id: "row-1",
    value: "row-1",
    title: "row-1",
    name: "row-1",
    defaultChecked: true
  }), React.createElement(StructuredListCell, null, React.createElement(Icon, {
    className: "bx--structured-list-svg",
    icon: iconCheckmarkSolid,
    description: "select an option"
  })), React.createElement(StructuredListCell, null, "Row 1"), React.createElement(StructuredListCell, null, "Row 1"), React.createElement(StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.")), React.createElement(StructuredListRow, {
    label: true,
    htmlFor: "row-2"
  }, React.createElement(StructuredListInput, {
    id: "row-2",
    value: "row-2",
    title: "row-2",
    name: "row-1"
  }), React.createElement(StructuredListCell, null, React.createElement(Icon, {
    className: "bx--structured-list-svg",
    icon: iconCheckmarkSolid,
    description: "select an option"
  })), React.createElement(StructuredListCell, null, "Row 2"), React.createElement(StructuredListCell, null, "Row 2"), React.createElement(StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum."))));
})).add('skeleton', withInfo({
  text: "\n        Placeholder skeleton state to use when content is loading.\n      "
})(function () {
  return React.createElement("div", {
    style: {
      width: '800px'
    }
  }, React.createElement(StructuredListSkeleton, null), React.createElement(StructuredListSkeleton, {
    border: true
  }));
}));