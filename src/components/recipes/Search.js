import React, {useState, useContext} from 'react'
import RecipeContext from '../../context/recipe/recipeContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const recipeContext = useContext(RecipeContext)
  const alertContext = useContext(AlertContext)

  const [text, setText] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    if(text === "") {
      alertContext.setAlert("Please enter something!", "primary")
    } else {
      recipeContext.searchRecipes(text)
      setText("")
    }
  }

  const onChange = (e) => setText(e.target.value)
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input 
            className="form-control" 
            type="search" 
            name="text"
            placeholder="Search Food... e.g. Pasta, Cheeseburger, Sushi, Tacos, Meat, Chicken, Beef, Korean, Mexican" 
            aria-label="Search" 
            value={text}
            onChange={onChange}
          />

          <button 
            className="btn btn-dark btn-block mt-2 mb-4" 
            type="submit"
          >
          SEARCH
          </button>
        </div>
      </form>

      {
        recipeContext.recipes.length > 0 && 
          <button 
            className="btn btn-outline-danger btn-block mb-4"
            onClick={recipeContext.clearRecipes}
            style={{marginTop: "-15px"}}>CLEAR</button>
      }
            
    </div>
  )
  
}

export default Search