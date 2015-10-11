import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes';

require('./stylesheets/main.scss');

ReactDOM.render((
  <Router children={routes} />
), document.getElementById('app'));
