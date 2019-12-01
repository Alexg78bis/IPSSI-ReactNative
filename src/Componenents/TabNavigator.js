import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {ListNavigator, MapNavigator} from './ListNavigator'

const TabNavigator = createBottomTabNavigator({
  Liste: { screen: createAppContainer(ListNavigator) },
  Map: { screen: createAppContainer(MapNavigator) }
})

export default createAppContainer(TabNavigator)
