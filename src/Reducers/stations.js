const stationsReducerDefaultState = [];

export default (state = stationsReducerDefaultState, action) => {
  switch (action.type) {
    case "STATIONS_SET":
      return action.stations;
    default:
      return state;
  }
};
