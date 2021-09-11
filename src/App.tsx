import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetaills';

const App = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route path="/dock-challenge-react/" exact>
          <Home />
        </Route>
        <Route path="/dock-challenge-react/movie/:id" exact>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default hot(App);
