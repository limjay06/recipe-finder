import React, {useReducer} from 'react'
import axios from 'axios'
import RecipeContext from './recipeContext'
import RecipeReducer from './recipeReducer'
import {SEARCH_RECIPES, SET_LOADING, CLEAR_RECIPES, GET_RECIPE} from '../types'

const RecipeState = props => {
  const initialState = {
    recipes: [],
    recipe: {},
    loading: false
  }

  const [state, dispatch] = useReducer(RecipeReducer, initialState)

  // Search recipes
  const searchRecipes = async (text) => {
    setLoading()

    const res = await axios.get(`https://api.spoonacular.com/recipes/search?query=${text}&number=30&apiKey=${process.env.REACT_APP_API_KEY}`)

    dispatch({
      type: SEARCH_RECIPES,
      payload: res.data.results
    })
  }

  // Get recipe
  const getRecipe = async (id) => {
    setLoading()

    const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`)

    dispatch({
      type: GET_RECIPE,
      payload: res.data
    })       
  }

  // Clear recipes
  const clearRecipes = async () => dispatch({type: CLEAR_RECIPES})

  // Set loading
  const setLoading = () => dispatch({type: SET_LOADING})

  return <RecipeContext.Provider value={{
    recipes: state.recipes,
    recipe: state.recipe,
    loading: state.loading,
    searchRecipes,
    clearRecipes,
    getRecipe
  }}>

    {props.children}
  
  </RecipeContext.Provider>
}

export default RecipeState