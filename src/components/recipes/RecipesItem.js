import React from 'react'
import {Link} from 'react-router-dom'

const RecipesItem = ({recipe: {id, title, image, imageUrls}}) => {
  return (        
    <div className="col-md-4 mb-4">
      <div className="card bg-dark text-white">
        <img 
          src={`https://spoonacular.com/recipeImages/${id}-556x370.jpg`}
          className="card-img" 
          alt="..."
          style={{filter: "brightness(55%)"}}
        />

        <div className="card-img-overlay">
          <h5 className="card-title text-center">
          
            <Link to={`/recipe/${id}`}
              style={{textDecoration: "none", color: "white"}}>
                {title}
            </Link>
                      
          </h5>          
        </div>
        
      </div>

    </div>    
  )
}

export default RecipesItem
