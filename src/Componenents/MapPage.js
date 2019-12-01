import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import { connect } from "react-redux";

// UiAnimationLayout

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class MapPage extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.location);
  }

  static navigationOptions = {
    title: "Carte des stations"
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_DEFAULT}
          style={styles.map}
          pitchEnabled={false}
          showsUserLocation={true}
          showsPointsOfInterest={false}
          region={{
            latitude: this.props.location.latitude,
            longitude: this.props.location.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
          }}
        >
          {this.props.stations.map(station => (
            <MapView.Marker
              key={station.code}
              coordinate={{
                latitude: station.location.latitude,
                longitude: station.location.longitude
              }}
              onPress={() => {
                this.props.navigation.push("StationInfo", { station });
              }}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  stations: state.stations,
  location: state.location
});

const ConnectedMap = connect(mapStateToProps)(MapPage);

export default ConnectedMap;
