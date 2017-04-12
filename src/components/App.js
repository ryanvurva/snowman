import React, { Component } from 'react'
import _ from 'lodash'
import LetterButton from './LetterButton'
import Snowman from './Snowman'
import Word from './Word'
import Reset from './Reset'
// import Music from './Music'

// ALPHABET is an array of 26 letters, 'a' through 'z', i.e. ['a', 'b', 'c', ...'z']
const ALPHABET = _.range(26).map(i => String.fromCharCode(i + 97))

// WORDS is an array of 1024 different seven letter words
const WORDS = require('raw!../wordList.txt').trim().split('\n')

class App extends Component {
  state = {
    guesses: [],
    word: _.sample(WORDS)
  }

  choose (letter) {
    console.log('You clicked', letter)
    this.setState({
      guesses: [...this.state.guesses, letter]
    })
  }

  get points () {
    return this.state.word.split('').filter((letter) => {
      return this.state.guesses.includes(letter)
    }).length
  }

  reset = () => {
    this.setState({
      guesses: [],
      word: _.sample(WORDS)
    })
  }

  render () {
    const letter = ALPHABET.map((letter, i) => {
      return <LetterButton value={letter} onChoose={() => this.choose(letter)} disabled={this.state.guesses.includes(letter)} key={i} />
    })
    return <div className='app'>
      <main>
        <div className='upper'><Snowman step={this.points} size={400} /></div>
        <Word value={this.state.word} guesses={this.state.guesses} />
        <div className='keyboard'>
          {letter}
        </div>
        <Reset reset={this.reset} />
        {/* <Music /> */}
      </main>
      <footer>It's like hangman, but, um... backwards or something.</footer>
    </div>
  }
}

export default App
