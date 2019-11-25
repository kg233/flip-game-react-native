import GameScreen from './GameScreen'
import AboutScreen from './AboutScreen.js'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const MainNavigator = createStackNavigator({
  Game: {
    screen: GameScreen,
    navigationOptions: {
      title: 'game',
    },
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'About',
      headerLeft: null,
    },
  },
})

const App = createAppContainer(MainNavigator)

export default App
