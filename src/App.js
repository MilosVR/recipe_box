import React, { Component } from 'react';

import Main from './Main.js';

import './App.css';

const recipes = [
  {
    title: 'Spageti',
    instructions: 'Snadji se sam!',
    imageURL: 'img/spaghetti.jpg',
    ingredients: [
      'pasta', '8 cups water', '1 box spaghetti'
    ]
  },
  {
    title: 'Milkshake',
    instructions: 'Snadji se sam!',
    imageURL: 'img/MilkShake.jpg',
    ingredients: [
      '2 Scoops ice cream', '8 cups water'
    ]
  },
];

class App extends Component {
  render() {
    return (
      <Main recipes={recipes} />
    );
  }
}

export default App;
