import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import Recipe from './components/recipes/Recipe'
import RecipeState from './context/recipe/RecipeState'
import AlertState from './context/alert/AlertState'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import './App.css';

const App = () => {      
  return (
    <RecipeState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />

            <div className="container mt-5">
              <Alert />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/recipe/:id" component={Recipe} />              
                <Route component={NotFound} />
              </Switch>              
            </div>                    
          </div>
        </Router>
      </AlertState>
    </RecipeState>
  )  
}

export default App;


