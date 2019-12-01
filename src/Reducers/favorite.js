const favoriteReducerDefaultState = [];

export default (state = favoriteReducerDefaultState, action) => {
  switch (action.type) {
    case "FAVORITE_ADD":
      const stationExist = state.filter(
        item => item.code === action.station.code
      );
      return stationExist.length > 0 ? state : [...state, action.station];
    case "FAVORITE_REMOVE":
      return state.filter(station => station.code !== action.station.code);
    default:
      return state;
  }
};
