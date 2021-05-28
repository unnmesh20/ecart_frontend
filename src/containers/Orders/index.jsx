import React from 'react';
import { get } from '../../http';
import Order from '../../components/Order';

import {fetchOrders} from '../../effects';
import {getOrders} from '../../reducers/orders';
import {connect} from 'react-redux';

class Orders extends React.Component
{

    state ={
        orders: null

    }
    UNSAFE_componentWillMount(){
        this.props.fetchOrders();
    }

    fetchOrders = async() =>
    {
        await get("/orders").then((res)=>{
            this.setState({orders:res})

        
        })
        
    }


    render(){
        const {orders} = this.props
        return(
            <div>
                <div>
                {orders?.map((order) =>(
                    <div>
                    <hr/>
                    <Order key = {`order-${order.order_id}`} order = {order}/>
                    </div>
                ))}
            </div>
               
            </div>
        )
    }
}


// export default Orders;

const mapDispatchToProps = (dispatch) => ({
    fetchOrders: () => dispatch(fetchOrders()),
  });
  
  const mapStateToProps = (state) => ({
    orders: getOrders(state),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Orders);
