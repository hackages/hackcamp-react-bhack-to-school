/* eslint-disable no-console */
export const logger = store => next => action => {
  console.group('logger middleware');
  console.log('action', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd('logger middleware');
  return result;
};
