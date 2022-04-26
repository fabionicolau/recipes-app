import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Profile from '../pages/Profile';
import Drinks from '../pages/Drinks';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreFoodsIngredients from '../pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from '../pages/ExploreDrinksIngredientes';
import ExploreFoodsNationalities from '../pages/ExploreFoodsNationalities';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/foods" component={ Foods } />
    <Route exact path="/drinks" component={ Drinks } />
    <Route exact path="/profile" component={ Profile } />
    <Route exact path="/explore" component={ Explore } />
    <Route exact path="/explore/foods" component={ ExploreFoods } />
    <Route exact path="/explore/drinks" component={ ExploreDrinks } />
    <Route
      exact
      path="/explore/foods/ingredients"
      component={ ExploreFoodsIngredients }
    />
    <Route
      exact
      path="/explore/drinks/ingredients"
      component={ ExploreDrinksIngredients }
    />
    <Route
      exact
      path="/explore/foods/nationalities"
      component={ ExploreFoodsNationalities }
    />
    <Route
      exact
      path="/done-recipes"
      component={ DoneRecipes }
    />
    <Route
      exact
      path="/favorite-recipes"
      component={ FavoriteRecipes }
    />
  </Switch>
);

export default Routes;
