import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import ListPage from './ListPage'
import StationPage from './StationPage'
import MapPage from './MapPage'

export const ListNavigator = createStackNavigator({
  List: { screen: ListPage },
  StationInfo: {screen: StationPage}
})

export const MapNavigator = createStackNavigator({
  List: { screen: MapPage },
  StationInfo: {screen: StationPage}
})

