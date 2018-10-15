"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Generic utility to initialize a method that will return a unique instance id
 * for a component.
 */
var setupGetInstanceId = function setupGetInstanceId() {
  var instanceId = 0;
  return function getInstanceId() {
    return ++instanceId;
  };
};

var _default = setupGetInstanceId;
exports.default = _default;