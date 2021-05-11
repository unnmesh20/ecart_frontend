import React from 'react';
import { ORDERS } from '../../routes';
import {Link} from 'react-router-dom';

class Orders extends React.Component
{
    render(){
        return(
            <div>
                <p>Displaying the orders placed by the user.</p>
                <div>
                    <Link to = '/'>Home</Link>
                </div>
            </div>
        )
    }
}

export default Orders;