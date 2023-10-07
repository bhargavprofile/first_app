const initialState = {
  count: 0,
};

function count100Reducer(state = initialState, action) {
  console.log(state, action);
  if (action.type === "inc") {
    return {
      ...state,
      count: state.count + 100,
    };
  }
  if (action.type === "dec") {
    return {
      ...state,
      count: state.count - 100,
    };
  }
  return state;
}

export default count100Reducer;
