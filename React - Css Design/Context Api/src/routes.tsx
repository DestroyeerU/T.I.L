import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn'

const routes = () => (
  <Switch>
    <Route path='/signin'component={SignIn} />
  </Switch>
)


export default routes;
