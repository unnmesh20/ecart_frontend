import React from 'react';

class Order extends React.Component
{


    render(){
        const {order} = this.props
        return(
            <div>
                <p>Invoice Number: {order.invoice_number}</p>
                <div>
                    <p>Purchased Items:</p>
                    {order.items.map( (item) =>(
                        <div>
                            <section>
                                
                                {item.product_name}
                                <div>Price: {item.product_price}</div>
                                <div>Quantity: {item.quantity}</div>
                                <div>Total Price: {item.product_price*item.quantity}</div>
                            </section>
                            
                        </div>
                    ))}
                </div>

            </div>
        )
    }
}

export default Order;