const favoriteReducerDefaultState = [];

export default (state = favoriteReducerDefaultState, action) => {
  switch (action.type) {
    case "FAVORITE_ADD":
      return action.station;
    case "FAVORITE_REMOVE":
      return state.filter(station => station.code !== action.station.code);
    default:
      return state;
  }
};
