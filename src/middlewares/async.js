export default function({ dispatch }) { // dispatch sends the action through everything again, like its fresh
  return next => action => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    // Make sure the actions promise resolves
    action.payload.then(response => dispatch({ ...action, payload: response }));
  };
}

/* Equivalent to
return function(next) {
  return function(action) {
    console.log('Action: ', action);
    next(action);
  }
} */
