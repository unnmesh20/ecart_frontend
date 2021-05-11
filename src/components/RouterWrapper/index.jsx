import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { ROOT_PATH, CATEGORIES, ORDERS } from '../../routes'
import Categories from '../../containers/Categories';
import Orders from '../../containers/Orders';
import Home from '../../containers/Home';
class RouterWrapper extends React.Component
{
    render(){
        return(
            <Router>
                <Switch>
                    {/* <Route exact path ={ROOT_PATH} render ={() =>(
                        <div>Welcome,to the ecommerce site.</div>
                    )}/> */}
                    <Route exact path = {ROOT_PATH} component = {Home} />
                    <Route exact path = {CATEGORIES} component ={Categories}/> 
                    <Route exact path = {ORDERS} component = {Orders} />
                </Switch>
            </Router>
        );
    }

}

export default RouterWrapper;