import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps'
import { connect } from 'react-redux'
import {addFavorite, removeFavorite} from '../Action/favorite'
import favorite from '../Reducers/favorite'

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },

  content: {
    padding: 20
  },
  text: { fontSize: 16 }
})


const StationPage = props => {
  const { navigation, dispatch } = props
  const { name, distance, location, nbebike, nbedock, nbbike, nbdock } = navigation.getParam('station')

  const addToFavorite = station => {
    dispatch(addFavorite(station))
  }

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
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude
            }}
            title={name}
            description={Math.round(distance) + 'm'}
          />
        </MapView>
      </View>

      <View style={styles.content}>
        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', paddingBottom: 20 }}>{name}</Text>
        <Text style={styles.text}>Vélo éléctrique : {nbebike}/{nbedock}</Text>
        <Text style={styles.text}>Vélo : ‍{nbbike}/{nbdock}</Text>
        <TouchableOpacity onPress={addToFavorite}>
          <Text>Ajouter aux favoris</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const mapStateToProps = state => ({ favorite: state.favorite })

const ConnectedStation = connect(mapStateToProps)(StationPage)

export default ConnectedStation

