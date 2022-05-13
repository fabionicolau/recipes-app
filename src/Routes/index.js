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
import FoodDetails from '../pages/FoodDetails';
import DrinkDetails from '../pages/DrinkDetails';
import FoodsInProgress from '../pages/FoodsInProgress';
import DrinksInProgress from '../pages/DrinksInProgress';
import NotFound from '../pages/NotFound';
import GroupInfo from '../pages/GroupInfo';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/foods" component={ Foods } />
    <Route exact path="/foods/:id" component={ FoodDetails } />
    <Route exact path="/drinks" component={ Drinks } />
    <Route exact path="/drinks/:id" component={ DrinkDetails } />
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
      path="/foods/:id/in-progress"
      component={ FoodsInProgress }
    />
    <Route
      exact
      path="/drinks/:id/in-progress"
      component={ DrinksInProgress }
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
    <Route
      exact
      path="/group-info"
      component={ GroupInfo }
    />
    <Route
      exact
      path="*"
      component={ NotFound }
    />
  </Switch>
);

export default Routes;
