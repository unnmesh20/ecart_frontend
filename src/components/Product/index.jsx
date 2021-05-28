import React from 'react'

class Product extends React.Component
{
    render(){
        const {product} =this.props;
        console.log("printing user id")
        return(
            <a href={`/categories/${product.category_id}/products/${product.id}`}>
                <div>
                    <div>{product.name}</div>
                    <p>{product.price}</p>
                </div>
          </a>
        )

    }
}


export default Product;