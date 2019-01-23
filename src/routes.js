import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Landing, Player } from './components';

export const Routes = () => (
  <Switch>
    <Route path="/player" component={Player} />
    <Route exact path="/" component={Landing} />
  </Switch>
);
