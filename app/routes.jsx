import React from 'react';
import { IndexRoute, Route, Link } from 'react-router';
import * as LC from './components';

let routes = (
  <Route path="/" component={LC.App}>
    <IndexRoute component={LC.Home} />
    <Route path="home" component={LC.Home} />
    <Route path="color-palette" component={LC.ColorPalette} />
    <Route path="gradient" component={LC.Gradient} />
  </Route>
)

export default routes;
