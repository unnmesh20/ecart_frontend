import React from 'react';
import { post } from '../../http';

class Checkout extends React.Component
{
    state={
        orderPlaced:""
    }
     async componentDidMount(){
         const response = await post("/orders")
         console.log(response)
        this.setState({orderPlaced:response.master_says})


    }

    render()
    {
        return(
            <div>
                {this.state.orderPlaced}
            </div>
        )
    }

}

export default Checkout;