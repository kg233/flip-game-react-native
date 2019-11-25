import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import About from './components/About.js'
import Nav from './components/Nav.js'

export default function AboutScreen(props) {
  return (
    <View style={styles.container}>
      <About />
      <Nav
        home={() => {
          props.navigation.navigate('Game')
        }}
        about={() => {}}
      />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
}
