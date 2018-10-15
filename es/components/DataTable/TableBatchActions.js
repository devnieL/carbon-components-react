function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var translationKeys = {
  'carbon.table.batch.cancel': 'Cancel',
  'carbon.table.batch.items.selected': 'items selected',
  'carbon.table.batch.item.selected': 'item selected'
};

var translateWithId = function translateWithId(id, state) {
  if (id === 'carbon.table.batch.cancel') {
    return translationKeys[id];
  }

  return "".concat(state.totalSelected, " ").concat(translationKeys[id]);
};

var TableBatchActions = function TableBatchActions(_ref) {
  var className = _ref.className,
      children = _ref.children,
      shouldShowBatchActions = _ref.shouldShowBatchActions,
      totalSelected = _ref.totalSelected,
      onCancel = _ref.onCancel,
      t = _ref.translateWithId,
      rest = _objectWithoutProperties(_ref, ["className", "children", "shouldShowBatchActions", "totalSelected", "onCancel", "translateWithId"]);

  var batchActionsClasses = cx({
    'bx--batch-actions': true,
    'bx--batch-actions--active': shouldShowBatchActions
  }, className);
  return React.createElement("div", _extends({}, rest, {
    className: batchActionsClasses
  }), children, React.createElement("div", {
    className: "bx--batch-summary"
  }, React.createElement("p", {
    className: "bx--batch-summary__para"
  }, React.createElement("span", null, totalSelected > 1 ? t('carbon.table.batch.items.selected', {
    totalSelected: totalSelected
  }) : t('carbon.table.batch.item.selected', {
    totalSelected: totalSelected
  }))), React.createElement("button", {
    className: "bx--batch-summary__cancel",
    onClick: onCancel
  }, t('carbon.table.batch.cancel'))));
};

TableBatchActions.translationKeys = Object.keys(translationKeys);
TableBatchActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  /**
   * Boolean specifier for whether or not the batch action bar should be
   * displayed
   */
  shouldShowBatchActions: PropTypes.bool,

  /**
   * Numeric representation of the total number of items selected in a table.
   * This number is used to derive the selection message
   */
  totalSelected: PropTypes.number.isRequired,

  /**
   * Hook required to listen for when the user initiates a cancel request
   * through this comopnent
   */
  onCancel: PropTypes.func.isRequired,

  /**
   * Supply a method to translate internal strings with your i18n tool of
   * choice. Translation keys are avabile on the `translationKeys` field for
   * this component.
   */
  translateWithId: PropTypes.func
};
TableBatchActions.defaultProps = {
  translateWithId: translateWithId
};
export default TableBatchActions;