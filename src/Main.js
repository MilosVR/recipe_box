import React from 'react';
import Modal from '@material-ui/core/Modal';

import Recipes from './Recipes';
import Ingredients from './Recipe/Ingredients';

class Main extends React.Component {
  state = {
    recipes: this.props.recipes,
    newRecipe: {
      imageURL: '',
      title: '',
      instructions: '',
      ingredients: []
    },
    modalOpen: false,
    addingIngredient: false,
    ingredientInput: '',
  }

  handleDelete = (recipeToDeleteTitle) => {
    const filteredRecipes = this.state.recipes.filter((recipe) => {
      return recipe.title !== recipeToDeleteTitle
    });
    this.setState({recipes: filteredRecipes});
  }

  handleAdd = () => {
    this.setState({modalOpen: true});
  }

  handleClose = () => {
    this.setState({modalOpen: false});
  }

  handleAddIngredient = () => {
    this.setState({addingIngredient: true});
  }

  handleCancelAddIngredient = () => {
    this.setState({addingIngredient: false});
  }

  addIngredient = () => {
    const newIngredients = this.state.newRecipe.ingredients.concat(this.state.ingredientInput);
    let newRecipe = this.state.newRecipe;
    newRecipe.ingredients = newIngredients;
    this.setState({newRecipe: newRecipe, addingIngredient: false, ingredientInput: ''});
  }

  AddRecipe = () => {
    
    const newRecepies = this.state.recipes.concat(this.state.newRecipe);
    this.setState({recipes: newRecepies, addingIngredient: false, ingredientInput: '',
                    newRecipe: {imageURL: '', title: '', instructions: '', ingredients: []}, modalOpen: false});
  }

  handleIngredientInput = (e) => {
    this.setState({ingredientInput: e.target.value})
  }

  handleTitleInput = (e) => {
    let newRecipe = Object.assign({}, this.state.newRecipe);
    newRecipe.title = e.target.value;
    this.setState({newRecipe: newRecipe})
  }

  handleImageURLInput = (e) => {
    let newRecipe = Object.assign({}, this.state.newRecipe);
    newRecipe.imageURL = e.target.value;
    this.setState({newRecipe: newRecipe})
  }

  handleInstructionsInput = (e) => {
    let newRecipe = Object.assign({}, this.state.newRecipe);
    newRecipe.instructions = e.target.value;
    this.setState({newRecipe: newRecipe})
  }

  render() {
    console.log(JSON.stringify(this.state.newRecipe.ingredients));
    return (
    <div>
        <button onClick={() => this.handleAdd()}>Add</button>
        <Recipes recipes={this.state.recipes} handleDelete={this.handleDelete} />
        <Modal open={this.state.modalOpen}>
          <div>
            <label htmlFor="title-input">Title</label>
            <input onChange={(evt) => this.handleTitleInput(evt)} value={this.state.newRecipe.title} type="text" id="title-input" />
            <label htmlFor="instructions-input">Instructions</label>
            <textarea onChange={(evt) => this.handleInstructionsInput(evt)} value={this.state.newRecipe.instructions} id="instructions-input"></textarea>
            <label htmlFor="img-url-input">Image URL</label>
            <input onChange={(evt) => this.handleImageURLInput(evt)} value={this.state.newRecipe.imageURL} type="text" id="img-url-input" />
            <Ingredients ingredients={this.state.newRecipe.ingredients} />
            {
              this.state.addingIngredient ?
              <div>
                <input onChange={(evt) => this.handleIngredientInput(evt)} value={this.state.ingredientInput} type="text" />
                <button onClick={() => this.handleCancelAddIngredient()}>Cancel</button>
                <button onClick={() => this.addIngredient()}>Save</button>
              </div>
                :
              <button onClick={() => this.handleAddIngredient()}>+</button>
            }
            <button onClick={() => this.AddRecipe()}>Save</button>
            <button onClick={() => this.handleClose()}>Close</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Main;
