import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import OnboardPage from './containers/OnboardPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.ONBOARD} component={OnboardPage} />
    </Switch>
  </App>
);
