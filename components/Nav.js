import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Button } from 'react-native'

export default function Nav(props) {
  return (
    <View style={Styles.viewContainer}>
      <TouchableOpacity style={Styles.button} onPress={props.home}>
        <Text>Game</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.button} onPress={props.about}>
        <Text>About</Text>
      </TouchableOpacity>
    </View>
  )
}

const Styles = {
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    borderLeftWidth: 0.5,
    borderColor: 'lightgrey',
  },
}
