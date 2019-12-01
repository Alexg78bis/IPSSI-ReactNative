import { combineReducers, createStore } from 'redux'
import locationReducer from '../Reducers/location'
import stationsReducer from '../Reducers/stations'
import FavoriteReducer from '../Reducers/favorite'

export default () => (createStore(
    combineReducers({
      location: locationReducer,
      stations: stationsReducer,
      favorite: FavoriteReducer
    })
  )
);
