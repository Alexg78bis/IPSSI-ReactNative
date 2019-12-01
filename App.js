import React from 'react'
import TabNavigator from './src/Componenents/TabNavigator'
import configureStore from './src/Store/configureStore'
import { Provider } from 'react-redux'
import { getAllStations } from './src/Providers/stations'
import { setStation } from './src/Action/stations'

const store = configureStore()

export default class App extends React.Component {
  async componentDidMount () {
    getAllStations(48.8534, 2.3488).then(stations =>
      store.dispatch(setStation(stations))
    )
  }

  render () {
    return (
      <Provider store={store}>
        <TabNavigator/>
      </Provider>
    )
  }
}
