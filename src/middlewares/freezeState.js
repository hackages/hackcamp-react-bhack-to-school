// https://github.com/jsdf/deep-freeze
import deepFreeze from 'deep-freeze-strict';

const isFreezable = x => x !== null && typeof x === 'object';

export const freezeState = ({getState}) => next => action => {
  const state = getState();
  if (isFreezable(state)) {
    deepFreeze(state);
  }
  return next(action);
};
