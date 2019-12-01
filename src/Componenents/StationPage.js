import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../Action/favorite";
import favorite from "../Reducers/favorite";

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },

  content: {
    padding: 20
  },
  text: { fontSize: 16 }
});

class StationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false,
      station: {
        distance: 0,
        name: "",
        location: {
          longitude: 0,
          latitude: 0
        }
      }
    };
  }

  componentDidMount = () => {
    this.setState({
      station: this.props.navigation.getParam("station")
    });
    this.setState(state => ({
      isFavorite:
        this.props.favorite.filter(item => item.code === state.station.code)
          .length > 0
    }));
  };

  render() {
    const addToFavorite = () => {
      this.props.dispatch(addFavorite(this.state.station));
      this.setState({ isFavorite: true });
    };

    const removeFromFavorite = () => {
      this.props.dispatch(removeFavorite(this.state.station));
      this.setState({ isFavorite: false });
    };

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_DEFAULT}
            style={styles.map}
            pitchEnabled={false}
            showsUserLocation={true}
            showsPointsOfInterest={false}
            region={{
              latitude: this.state.station.location.latitude,
              longitude: this.state.station.location.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.015
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.state.station.location.latitude,
                longitude: this.state.station.location.longitude
              }}
              title={this.state.station.name}
              description={Math.round(this.state.station.distance) + "m"}
            />
          </MapView>
        </View>

        <View style={styles.content}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              fontWeight: "bold",
              paddingBottom: 20
            }}
          >
            {this.state.station.name}
          </Text>
          <Text style={styles.text}>
            Vélo éléctrique : {this.state.station.nbebike}/
            {this.state.station.nbedock}
          </Text>
          <Text style={styles.text}>
            Vélo : ‍{this.state.station.nbbike}/{this.state.station.nbdock}
          </Text>
          {!this.state.isFavorite && (
            <TouchableOpacity onPress={addToFavorite}>
              <Text>Ajouter aux favoris</Text>
            </TouchableOpacity>
          )}

          {this.state.isFavorite && (
            <TouchableOpacity onPress={removeFromFavorite}>
              <Text>Retirer des favoris</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({ favorite: state.favorite });

const ConnectedStation = connect(mapStateToProps)(StationPage);

export default ConnectedStation;
