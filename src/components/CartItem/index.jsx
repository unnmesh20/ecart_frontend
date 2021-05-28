import React from 'react';
import { Link } from 'react-router-dom';
import { destroy, get, put } from '../../http';
import { CHECKOUT } from '../../routes';



class CartItem extends React.Component
{
   
    
    deleteCartItem = async(id) =>{
        console.log("Delete ke andar")
        
        await destroy(`/cart_items/${id}`)
        this.props.refreshCart();

    }
    updateQuantity =async(e,id) =>{
        console.log("Inside increase qunatity");
        var formdata = new FormData();
        formdata.append("quantity", e.target.value);
        await put(`/cart_items/${id}`,formdata)
        this.props.refreshCart();

    }
    render(){
        const {cart_item} =this.props;
        return(
            <div>

                   <div>Product Name:{cart_item.product.name}</div>
                   <label htmlFor="">Set Quantity</label>
                   <input type="number"  style={{width:"75px",height:"30px"}}
                   value={cart_item.quantity}
                   onChange = {(e) =>this.updateQuantity(e,cart_item.id)}>
                   </input>
                   <div>Quantity:{cart_item.quantity}</div> 
                    <div>Price:{cart_item.product.price}</div>
                    <div>Id:{cart_item.id}</div>
                    <div>Total Price: {cart_item.quantity*cart_item.product.price}</div>
                    <div><button onClick= {() =>this.deleteCartItem(cart_item.id)}>Delete Item</button></div>
                    <hr/>
            </div>
        )
    }

}

export default CartItem;