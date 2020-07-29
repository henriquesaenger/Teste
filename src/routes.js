import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home'
import Sobre from './pages/sobre'


/*Routes é quem redireciona para as rotas de cada página criada*/

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/sobre" component={Sobre}/>
        </Switch>
    </BrowserRouter>

);


export default Routes;