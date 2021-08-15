import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Repositories from './Repositories/Repositories';
import Home from './Home/Home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = '/' exact component = {Home} />
                 <Route path = '/repositories' component = {Repositories} />
             </Switch>
        </BrowserRouter>
        
    )
}