const initState = {
  count: 0,
};

export const operationReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + 1,
      };
    case "REMOVE":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
