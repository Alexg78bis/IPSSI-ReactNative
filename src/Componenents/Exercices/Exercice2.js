import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

const FirstPage = props => {
  const { push } = props.navigation
  return (
    <View style={[styles.screen, { backgroundColor: 'tomato' }]}>
      <Text>Page 1</Text>
      <Button title="Go to second page" onPress={() => push('SecondPage')}/>
    </View>
  )
}

const SecondPage = props => {
  const { push } = props.navigation
  return (
    <View style={[styles.screen, { backgroundColor: 'yellow' }]}>
      <Text>Page 2</Text>
      <Button title="Go to third Page" onPress={() => push('ThirdPage')}/>
    </View>
  )
}

const ThirdPage = props => {
  const { popToTop } = props.navigation
  return (
    <View style={[styles.screen, { backgroundColor: 'blue' }]}>
      <Text>Page 3</Text>
      <Button title="Go to first page" onPress={() => popToTop()}/>
    </View>
  )
}

const MapScreen = () => (
  <View style={[styles.screen, { backgroundColor: 'pink' }]}>
    <Text>Carte</Text>
  </View>
)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const ListNavigator = createStackNavigator({
  FirstPage: { screen: FirstPage },
  SecondPage: { screen: SecondPage },
  ThirdPage: { screen: ThirdPage }
})

const TabNavigator = createBottomTabNavigator({
  Liste: { screen: createAppContainer(ListNavigator) },
  Map: { screen: MapScreen }
})

export default createAppContainer(TabNavigator)
