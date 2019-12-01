import React from "react";
import TabNavigator from "./src/Componenents/TabNavigator";
import configureStore from "./src/Store/configureStore";
import { Provider } from "react-redux";
import { getAllStations } from "./src/Providers/stations";
import { setStation } from "./src/Action/stations";
import { setLocation } from "./src/Action/location";

const store = configureStore();

export default class App extends React.Component {
  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState(state => ({ ...state, position: position.coords }));

        store.dispatch(setLocation(position.coords));

        getAllStations(
          position.coords.latitude,
          position.coords.longitude
        ).then(stations => store.dispatch(setStation(stations)));
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}
