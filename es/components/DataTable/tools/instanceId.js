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

export default setupGetInstanceId;