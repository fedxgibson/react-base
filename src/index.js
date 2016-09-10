import 'core-js/fn/object/assign';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'
import App from './components/Main';
import UsersStore from 'stores/UsersStore';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('app'))
