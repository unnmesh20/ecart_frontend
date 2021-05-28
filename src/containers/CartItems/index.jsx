import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { get } from '../../http';
import { CHECKOUT } from '../../routes';
import { getCartItems } from '../../reducers/cartItems';
import {fetchCartItems} from '../../effects';
import {connect} from 'react-redux';



class CartItems extends React.Component
{
    state ={
        cartItems: null

    }
    UNSAFE_componentWillMount(){
        this.props.fetchCartItems();
    }

    // fetchCartItems = async() =>
    // {
    //     await get("/cart_items").then((res)=>{
    //         this.setState({cart_items:res})
    //         //debugger;
    //         //console.log(res[0].cart_id)
        
    //     })
        
    // }
    

    render(){
        const {cartItems} = this.props
       // console.log("cart_items",cart_items)

        

        return(
            <div>
                <div>
                    
                {cartItems?.map((cart_item) =>(
                    
                    <CartItem key = {`cart_item-${cart_item.id}`} cart_item = {cart_item}
                    refreshCart = {this.props.fetchCartItems} />
                ))}
            </div>

            {/* <div>
                TOTAL COST: {this.totalCost}
            </div> */}

            <div style={{marginLeft:"75%",marginTop:"30%"}}> <Link to = {CHECKOUT}> <button>PLACE ORDER</button></Link> </div>
               
            </div>
        )
        
        
    }
    

}

// export default CartItems;


const mapDispatchToProps = (dispatch) => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
  });
  
  const mapStateToProps = (state) => ({
    cartItems: getCartItems(state),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
