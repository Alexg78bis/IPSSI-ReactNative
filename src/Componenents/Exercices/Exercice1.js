import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const Exercice1 = () => {
  const [growAnimation] = useState(new Animated.Value(1))

  useEffect(() =>
    Animated.loop(
      Animated.sequence([
        Animated.timing(growAnimation, {
          toValue: 5,
          duration: 1000
        }),
        Animated.timing(growAnimation, {
          toValue: 1,
          duration: 1500
        })
      ])
    ).start()
  )

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.top, flexGrow(growAnimation)]}>
        <Text>TOP</Text>
      </Animated.View>
      <View style={styles.bottom}>
        <Text>BOTTOM</Text>
      </View>
    </View>
  )
}

const flexGrow = animation => ({
  flexGrow: animation
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'silver'
  },
  top: {
    paddingTop: 50,
    paddingLeft: 20,
    backgroundColor: 'pink'
  },
  bottom: {
    padding: 20,
    flex: 1,
    backgroundColor: 'tomato'
  }
})

export default Exercice1
