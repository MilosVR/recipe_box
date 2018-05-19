import React from 'react';

import Ingredients from './Ingredients';

class Recipe extends React.Component {
  state = {
    imageURL: this.props.imageURL,
    title: this.props.title,
    instructions: this.props.instructions
  }

  handleDelete() {
    this.props.handleDelete(this.state.title);
  }

  render() {
    return (
      <div className="recipe">
        <img className="recipe_image" src={this.state.imageURL} />
        <h6>{this.state.title}</h6>
        <Ingredients ingredients={this.props.ingredients} />
        <p>Instructions</p>
        <p>{this.state.instructions}</p>
        <button onClick={() => this.handleDelete()}>Delete</button>
      </div>
    )
  }
}

export default Recipe;
