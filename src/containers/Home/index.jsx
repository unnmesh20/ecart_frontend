import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CART_ITEM, CART_ITEMS,CHECKOUT,ORDERS, SESSIONS} from '../../routes';

class Home extends React.Component
{
    render(){
        return(
            <div>
                <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Shopify</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Contribute</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Electronics</NavDropdown.Item>
                    <NavDropdown.Item href="#">Pantry</NavDropdown.Item>
                    <NavDropdown.Item href="#">Clothes</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">Coming Soon</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#">Signin</Nav.Link>
                    <Nav.Link href="/orders">Orders</Nav.Link>
                </Nav>

                </Navbar.Collapse>
                </Navbar>
            </div>
                <p>Welcome, to the ecommerce site SHOPKAR.</p>

                <div> <Link to = '/categories'>CATEGORIES</Link> </div>
                 
                 <div><Link to = {CART_ITEMS}>VIEW_CART_ITEMS</Link></div>
                 <div><Link to ={ORDERS}>YOUR ORDERS</Link></div>
                 <div><Link to = {SESSIONS}>LOGIN</Link></div>

            </div>
        )}
}


export default Home;