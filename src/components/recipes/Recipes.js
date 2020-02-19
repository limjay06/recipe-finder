import React, {useContext} from 'react'
import RecipesItem from './RecipesItem'
import Spinner from '../layout/Spinner'
import RecipeContext from '../../context/recipe/recipeContext'

const Recipes = () => {
  const recipeContext = useContext(RecipeContext)

  const {loading, recipes} = recipeContext

  if(loading) {
    return <Spinner />
  } else {
    return (
      <div className="row">
        
        {
          recipes.map(recipe => (
            <RecipesItem key={recipe.id} recipe={recipe} />
          ))
          
        }       
      </div>             
    )
  }
}

export default Recipes