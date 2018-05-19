import React from 'react';


import Recipe from './Recipe/Recipe';

class Recipes extends React.Component {

  handleDelete = (titleToDelete) => {
    this.props.handleDelete(titleToDelete);
  }
  
  render() {
    const recipeCompononents = this.props.recipes.map((recipe) => {
      return <Recipe
          key={recipe.title}
          title={recipe.title}
          instructions={recipe.instructions}
          imageURL={recipe.imageURL}
          ingredients={recipe.ingredients}
          handleDelete={this.handleDelete}
        />
    });
    return (
      <div className="flex_container">
        {recipeCompononents}
      </div>
    )
  }
}

export default Recipes;
