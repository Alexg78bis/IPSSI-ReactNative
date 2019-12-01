import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const ListItem = props => {
  const { push } = props.navigation
  const {name, distance } = props.station;

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
       onPress={() => push('StationInfo', {station: props.station})}
    >
      <View style={{ flexDirection: 'row' }}>
        {props.isFavorite && <Text>♥</Text>}
        {!props.isFavorite && <Text>♡</Text>}
        <Text style={{marginLeft: 10}}>{name}</Text>
      </View>
      <Text>{Math.round(distance)}m</Text>
    </TouchableOpacity>
  )
}

export default ListItem
