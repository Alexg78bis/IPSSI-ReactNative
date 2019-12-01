import React from 'react'
import { AsyncStorage, SafeAreaView, Text } from 'react-native'

const API_URL =
  'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state'

class Exercice6 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      location: {},
      stations: {}
    }
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState(state => ({ ...state, location: position.coords }))
        this.getNearestCycle(
          position.coords.latitude,
          position.coords.longitude
        )
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  async getNearestCycle (latitude, longitude) {
    const url = `${API_URL}&geofilter.distance=${latitude},${longitude},2000`
    const response = await fetch(url)
    const json = await response.json()
    await AsyncStorage.setItem('stations', JSON.stringify(json))

    this.setState({ stations: json.records })
  }

  render () {
    return (
      <SafeAreaView>
        <Text style={{ fontSize: 30 }}>Your location is :</Text>
        <Text>Longitude : {this.state.location.longitude}</Text>
        <Text>Latitude : {this.state.location.latitude}</Text>

        <Text>{Object.keys(this.state.stations).length}</Text>
      </SafeAreaView>
    )
  }
}

export default Exercice6
