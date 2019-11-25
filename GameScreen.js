import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Game from './components/Game.js'
import Nav from './components/Nav.js'

export default function GameScreen(props) {
  return (
    <View style={styles.container}>
      <Game />
      <Nav home={() => {}} about={() => props.navigation.navigate('About')} />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
}
