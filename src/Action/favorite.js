export const addFavorite = station => ({
  type: "FAVORITE_ADD",
  station
});

export const removeFavorite = station => ({
  type: "FAVORITE_REMOVE",
  station
});
