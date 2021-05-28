export const transformCartItem = (cartItem) =>({
    id:cartItem.id,
    cart_id:cartItem.cart_id,
    quantity:cartItem.quantity,
    product:cartItem.product,
});


