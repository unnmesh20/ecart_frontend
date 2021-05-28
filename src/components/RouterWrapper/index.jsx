import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { ROOT_PATH, 
    CATEGORIES, 
    CATEGORY,
    ORDERS, 
    PRODUCTS, 
    PRODUCT, 
    CART_ITEMS, 
    CART_ITEM,
    CHECKOUT, 
    SESSIONS
} from '../../routes'
import Categories from '../../containers/Categories';
import Home from '../../containers/Home';
import Category from '../../components/Category';
import Products from '../../containers/Products';
import Product from '../../components/ProductDetail';
import Checkout from '../../components/Checkout';
import CartItems from '../../containers/CartItems';
import CartItem from '../../components/CartItem';
import Orders from '../../containers/Orders'
import Login from '../Login';


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
                    <Route exact path = {CATEGORY} component ={Category}/>
                    
                    <Route exact path = {PRODUCTS} component ={Products}></Route>

                    <Route exact path = {PRODUCT} component ={Product}></Route>
                    <Route exact path = {CHECKOUT} component ={Checkout}></Route>
                    <Route exact path = {CART_ITEMS} component = {CartItems}></Route>
                    <Route exact path = {CART_ITEM} component = {CartItem}></Route>
                    <Route exact path = {ORDERS} component = {Orders}></Route>
                    <Route exact path = {SESSIONS} component = {Login}></Route>

                </Switch>
            </Router>
        );
    }

}

export default RouterWrapper;