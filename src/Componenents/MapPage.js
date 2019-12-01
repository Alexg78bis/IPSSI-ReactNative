import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps'
import { connect } from 'react-redux'

// UiAnimationLayout

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

class MapPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      position: {
        latitude: 0,
        longitude: 0
      }
    }
  }

  static navigationOptions = {
    title: 'Carte des stations'
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState(state => ({ ...state, position: position.coords }))
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_DEFAULT}
          style={styles.map}
          pitchEnabled={false}
          showsUserLocation={true}
          showsPointsOfInterest={false}
          region={{
            latitude: this.props.stations[0].location.latitude,
            longitude: this.props.stations[0].location.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
          }}
        >
          {this.props.stations.map(station => (
            <MapView.Marker
              key={station.code}
              coordinate={{
                latitude: station.location.latitude,
                longitude: station.location.longitude,
              }}
              onPress={() => {this.props.navigation.push('StationInfo', {station})}}
            />
          ))}
        </MapView>
      </View>
    )
  }
}

const mapStateToProps = state => ({ stations: state.stations })

const ConnectedMap = connect(mapStateToProps)(MapPage)

export default ConnectedMap
