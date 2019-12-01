const locationReducerDefaultState = [];

export default (state = locationReducerDefaultState, action) => {
  switch (action.type) {
    case "LOCATION_SET":
      return action.location;
    default:
      return state;
  }
};
