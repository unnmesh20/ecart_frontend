import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { ROOT_PATH, CATEGORIES } from '../../routes'
import Categories from '../../containers/Categories';
class RouterWrapper extends React.Component
{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path ={ROOT_PATH} render ={() =>(
                        <div>Welcome,to the ecommerce site.</div>
                    )}/>
                    <Route exact path = {CATEGORIES} component ={Categories}/> 
                </Switch>
            </Router>
        );
    }

}

export default RouterWrapper;