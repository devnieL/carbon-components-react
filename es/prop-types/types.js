import { oneOf } from 'prop-types';
export var ButtonTypes = {
  buttonKind: oneOf(['primary', 'secondary', 'danger', 'ghost', 'danger--primary', 'tertiary'])
};