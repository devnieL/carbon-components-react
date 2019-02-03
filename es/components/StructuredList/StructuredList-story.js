function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { iconCheckmarkSolid } from 'carbon-icons';
import Icon from '../Icon';
import { StructuredListWrapper, StructuredListHead, StructuredListBody, StructuredListRow, StructuredListInput, StructuredListCell } from '../StructuredList';
import StructuredListSkeleton from '../StructuredList/StructuredList.Skeleton';
import { componentsX } from '../../internal/FeatureFlags';
storiesOf('StructuredList', module).add('Simple', function () {
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
}, {
  info: {
    text: "\n            Structured Lists group content that is similar or related, such as terms or definitions.\n          "
  }
}).add('Selection', function () {
  var emptyStructuredListHeadCell = React.createElement(StructuredListCell, {
    head: true
  }, '');
  var structuredListHeadColumns = [React.createElement(StructuredListCell, {
    head: true
  }, "ColumnA"), React.createElement(StructuredListCell, {
    head: true
  }, "ColumnB"), React.createElement(StructuredListCell, {
    head: true
  }, "ColumnC")];

  var structuredListBodyRowGenerator = function structuredListBodyRowGenerator(numRows) {
    var checkbox = function checkbox(i) {
      return React.createElement(React.Fragment, null, React.createElement(StructuredListInput, {
        id: "row-".concat(i),
        value: "row-".concat(i),
        title: "row-".concat(i),
        name: "row-0",
        defaultChecked: !i || null
      }), React.createElement(StructuredListCell, null, React.createElement(Icon, {
        className: "bx--structured-list-svg",
        icon: iconCheckmarkSolid,
        description: "select an option"
      })));
    };

    var structuredListBodyColumns = function structuredListBodyColumns(i) {
      return [React.createElement(StructuredListCell, null, "Row ", i), React.createElement(StructuredListCell, null, "Row ", i), React.createElement(StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.")];
    };

    return Array.apply(null, Array(numRows)).map(function (n, i) {
      return React.createElement(StructuredListRow, {
        label: true,
        htmlFor: "row-".concat(i)
      }, componentsX ? _toConsumableArray(structuredListBodyColumns(i)).concat([checkbox(i)]) : [checkbox(i)].concat(_toConsumableArray(structuredListBodyColumns(i))));
    });
  };

  return React.createElement(StructuredListWrapper, {
    selection: true,
    border: true
  }, React.createElement(StructuredListHead, null, React.createElement(StructuredListRow, {
    head: true
  }, componentsX ? structuredListHeadColumns.concat([emptyStructuredListHeadCell]) : [emptyStructuredListHeadCell].concat(structuredListHeadColumns))), React.createElement(StructuredListBody, null, structuredListBodyRowGenerator(4)));
}, {
  info: {
    text: "\n        Structured Lists with selection allow a row of list content to be selected.\n      "
  }
}).add('skeleton', function () {
  return React.createElement("div", {
    style: {
      width: '800px'
    }
  }, React.createElement(StructuredListSkeleton, null), React.createElement(StructuredListSkeleton, {
    border: true
  }));
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n          "
  }
});