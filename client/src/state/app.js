export const TEST = "dank-toggle/app/TEST";

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case TEST:
      return { ...state, god: "Damn" };
    default:
      return state;
  }
};

export default reducer;
