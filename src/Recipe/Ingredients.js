import React from 'react';

import Ingredient from './Ingredient';

class Ingredients extends React.Component {
  render() {
    const ingredientCompononents = this.props.ingredients.map((ingredient, index) => {
      return <Ingredient key={index} ingredient={ingredient} />
    });
    return (
      <ul>
        {ingredientCompononents}
      </ul>
    )
  }
}

export default Ingredients