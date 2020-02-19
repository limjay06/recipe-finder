import React, {Fragment, useEffect, useContext} from 'react'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
import RecipeContext from '../../context/recipe/recipeContext'

const Recipe = ({match}) => {
  const recipeContext = useContext(RecipeContext)

  const {recipe, loading, getRecipe} = recipeContext

  useEffect(() => {
    getRecipe(match.params.id)
  }, [])
  
  const {
    title,
    image,
    extendedIngredients,
    instructions,
    vegetarian,
    vegan,
    glutenFree,
    dairyFree
  } = recipe
  
  const regex = /(<([^>]+)>)/ig;
  const isntructionsStrippedHtml = instructions && instructions.replace(regex, '');

  if(loading) return <Spinner />

  return (
    <Fragment>
      <Link 
        to="/" 
        style={{marginTop:"-50px"}}
        className="btn btn-light">Back to Search</Link>

      <h3 className="text-center mb-4">{title && title.toUpperCase()}</h3>

      <div className="row">
        <div className="col-md-6">
          <img src={image} className="" alt="" style={{borderRadius:"50px"}} />
        </div>

        <div className="col-md-6 ingredients">
          <div className="card">
            <div className="card-header">
              INGREDIENTS
            </div>
            <ul className="list-group list-group-flush">
              {
                extendedIngredients && extendedIngredients.map(ing =>                                                 
                  <li key={ing.original} className="list-group-item">{ing.original}</li>              
                )
              }
            </ul>
          </div>
        </div>        
      </div>

      <div className="card mt-3 mb-3">
        <div className="card-body">
          <h5 className="card-title">INSTRUCTIONS</h5>
          {instructions === null ? "No instructions for this recipe." : isntructionsStrippedHtml}
        </div>
      </div>

      <div className="card mb-3 text-center">
        <div className="card-body">

          <span className="badge badge-primary mr-1">
            Vegetarian: {vegetarian ? <i className="fas fa-check" /> : <i className="fas fa-times-circle" />}
          </span>

          <span className="badge badge-secondary mr-1">
            Vegan: {vegan ? <i className="fas fa-check" /> : <i className="fas fa-times-circle" />}
          </span>

          <span className="badge badge-danger mr-1">
            GlutenFree: {glutenFree ? <i className="fas fa-check" /> : <i className="fas fa-times-circle" />}
          </span>

          <span className="badge badge-info mr-1">
            DairyFree: {dairyFree ? <i className="fas fa-check" /> : <i className="fas fa-times-circle" />}
          </span>

        </div>
      </div>
                                                              
    </Fragment>
  )
  
}

export default Recipe

