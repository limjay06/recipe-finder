import React, {Fragment} from 'react'
import Search from '../recipes/Search'
import Recipes from '../recipes/Recipes'

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Recipes />
    </Fragment>
  )
}

export default Home