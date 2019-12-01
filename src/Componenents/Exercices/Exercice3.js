import React from 'react'
import { AsyncStorage, SafeAreaView, Text } from 'react-native'

const API_URL =
  'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state'

export default class Exercice3 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      result: '',
      source: '',
      error: ''
    }
  }

  async componentDidMount () {
    try {
      const response = await fetch(API_URL)
      const jsonResonse = await response.json()
      await AsyncStorage.setItem('velib', JSON.stringify(jsonResonse))
      this.setState(state => (state.result = jsonResonse))
      this.setState(state => (state.source = 'api'))
    } catch (e) {
      const result = JSON.parse(await AsyncStorage.getItem('velib'))
      this.setState(state => (state.result = result))
      this.setState(state => (state.error = e.message))
      this.setState(state => (state.source = 'local'))
    }
  }

  render () {
    return (
      <SafeAreaView>
        <Text>Exercice 3</Text>
        <Text>{JSON.stringify(this.state.result)}</Text>
        <Text>{this.state.source}</Text>
        <Text>{this.state.error}</Text>
      </SafeAreaView>
    )
  }
}
