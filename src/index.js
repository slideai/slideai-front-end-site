import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

import Main from './screens/Main';

ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route path="/" component={Main} exact />
  </Switch>
</BrowserRouter>
, document.getElementById('root'));
