import {Route, Switch} from 'react-router-dom'
import React from 'react';

import Main from './pages/Main'

function Routes(){
    return (
        <Switch>
            <Route path='/' exact component={Main} />
        </Switch>
    );
}

export default Routes;