import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

import shuffle from 'shuffle-array'

export default class Game extends Component {
  state = {
    buttons: [
      { id: 1, value: 'a', hidden: true },
      { id: 2, value: 'a', hidden: true },
      { id: 3, value: 'b', hidden: true },
      { id: 4, value: 'b', hidden: true },
      { id: 5, value: 'c', hidden: true },
      { id: 6, value: 'c', hidden: true },
      { id: 7, value: 'd', hidden: true },
      { id: 8, value: 'd', hidden: true },
      { id: 9, value: 'e', hidden: true },
      { id: 10, value: 'e', hidden: true },
      { id: 11, value: 'f', hidden: true },
      { id: 12, value: 'f', hidden: true },
      { id: 13, value: 'g', hidden: true },
      { id: 14, value: 'g', hidden: true },
      { id: 15, value: 'h', hidden: true },
      { id: 16, value: 'h', hidden: true },
    ],

    firstFlip: null,
    secondFlip: null,
    matches: 0,
    gameWon: false,
  }

  componentDidMount() {
    let copy = this.state.buttons.slice()
    shuffle(copy)
    this.setState({
      buttons: copy,
    })
  }

  restart() {
    let copy = [
      { id: 1, value: 'a', hidden: true },
      { id: 2, value: 'a', hidden: true },
      { id: 3, value: 'b', hidden: true },
      { id: 4, value: 'b', hidden: true },
      { id: 5, value: 'c', hidden: true },
      { id: 6, value: 'c', hidden: true },
      { id: 7, value: 'd', hidden: true },
      { id: 8, value: 'd', hidden: true },
      { id: 9, value: 'e', hidden: true },
      { id: 10, value: 'e', hidden: true },
      { id: 11, value: 'f', hidden: true },
      { id: 12, value: 'f', hidden: true },
      { id: 13, value: 'g', hidden: true },
      { id: 14, value: 'g', hidden: true },
      { id: 15, value: 'h', hidden: true },
      { id: 16, value: 'h', hidden: true },
    ]

    shuffle(copy)

    this.setState({
      buttons: copy,
      firstFlip: null,
      secondFlip: null,
      matches: 0,
      gameWon: false,
    })
  }

  componentDidUpdate(_, prevState) {
    if (prevState.secondFlip === null && this.state.secondFlip !== null) {
      if (!this.checkForMatch(this.state.firstFlip, this.state.secondFlip)) {
        let first = this.state.buttons[this.state.firstFlip].id
        let second = this.state.buttons[this.state.secondFlip].id
        setTimeout(() => {
          this.hideButton(first)
          this.hideButton(second)
          this.setState({ firstFlip: null, secondFlip: null })
        }, 500)
      } else {
        this.setState({
          firstFlip: null,
          secondFlip: null,
          matches: this.state.matches + 1,
        })

        if (this.state.matches == this.state.buttons.length / 2) {
          this.setState({ gameWon: true })
        }
      }
    }
  }

  checkForMatch(ind1, ind2) {
    return this.state.buttons[ind1].value === this.state.buttons[ind2].value
  }

  showButton(id) {
    //console.log(this.state.firstFlip, this.state.secondFlip)
    if (this.state.firstFlip === null || this.state.secondFlip === null) {
      let copy = this.state.buttons.map((buttons, index) => {
        if (buttons.id === id && buttons.hidden) {
          if (this.state.firstFlip === null) {
            this.setState({ firstFlip: index })
          } else {
            this.setState({ secondFlip: index })
          }

          return { id: buttons.id, value: buttons.value, hidden: false }
        }
        return buttons
      })

      this.setState({ buttons: copy })
    }
  }

  hideButton(id) {
    let copy = this.state.buttons.map((buttons, index) => {
      if (buttons.id === id) {
        return { id: buttons.id, value: buttons.value, hidden: true }
      }
      return buttons
    })

    this.setState({ buttons: copy })
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={{ ...Styles.textContainer, paddingTop: 10 }}>hello</Text>
        <Text style={Styles.textContainer}>
          {this.state.matches == this.state.buttons.length / 2
            ? 'You got it good job'
            : 'matches made: ' + this.state.matches}
        </Text>
        <View style={Styles.gameContainer}>
          {this.state.buttons.map(button => (
            <TouchableOpacity
              key={button.id}
              style={Styles.buttonContainer}
              onPress={() => this.showButton(button.id)}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: button.hidden ? 'white' : 'yellow',
                  fontSize: 20,
                }}
              >
                {button.hidden ? '?' : button.value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={Styles.restartButton}>
          <TouchableOpacity
            onPress={() => this.restart()}
            style={{ backgroundColor: 'grey', padding: '5%' }}
          >
            <Text>Restart</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'flex-start',
  },

  textContainer: {
    textAlign: 'center',
    flex: 1,
  },

  gameContainer: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    // backgroundColor: 'grey',
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '25%',
    aspectRatio: 1,
    backgroundColor: '#03fcc6',
    borderColor: 'white',
    borderWidth: 2,
  },

  restartButton: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
})
