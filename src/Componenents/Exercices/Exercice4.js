import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps'

// UiAnimationLayout

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  infos: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFF',
    height: 'auto',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: Platform.OS === 'ios' ? 25 : 15
  }
})

const Exercice4 = ({
  position = { latitude: 48.85, longitude: 2.34 },
  name,
  distance
} = props) => (
  <View>
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        showsMyLocationButton={true}
        region={{
          latitude: position.latitude,
          longitude: position.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: position.latitude,
            longitude: position.longitude
          }}
          title={'title'}
          description={'description'}
        />
      </MapView>
      <View style={styles.infos}>
        <Text style={{ fontSize: 25, marginBottom: 20, textAlign: 'center' }}>
          Informations
        </Text>
        <Text>Nom du point : {name}</Text>
        <Text>Distance : {distance}</Text>
      </View>
    </View>
  </View>
)

Exercice4.propTypes = {
  position: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number
  }),
  name: PropTypes.string,
  distance: PropTypes.string
}

export default Exercice4
