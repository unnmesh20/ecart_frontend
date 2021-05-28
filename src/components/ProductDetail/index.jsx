import React from 'react';
import { get } from '../../http';
import {post} from '../../http' ;
class Product extends React.Component
{
    state ={
        product: {},
        quantity: ""
    };

    UNSAFE_componentWillMount(){
        this.fetchProduct();
    }

    fetchProduct = async() =>{
        const productUrl = window.location.pathname;
        await get(productUrl).then((res) =>{
            
            this.setState({product:res});
        })

    }
    handleChange = (e) =>{
        console.log(e.target.value)
        this.setState({quantity:e.target.value})
    }

    handleSubmit = async(e) =>{
        e.preventDefault();
        
        var formdata = new FormData();
        formdata.append("quantity", this.state.quantity);
        formdata.append("product_id", this.props.match.params.product_id);
        await post("/cart_items",formdata);
        this.props.history.push("/");

        console.log(formdata)


    }


    render()
    {
        console.log("User id",this.props.match.params.product_id)
        const {product} = this.state;
        return(
            <React.Fragment>
                <a href={`/categories/${product.category?.id}/products`}>{product.category?.name}</a>
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>{product.category?.name}</div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Quantity</label>
                    <input type="text" value={this.state.quantity} onChange={this.handleChange}/>
                    <button>Add Item to Cart</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Product;