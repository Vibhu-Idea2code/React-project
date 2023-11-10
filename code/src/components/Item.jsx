import React from 'react'
import { useCart } from '../Context/Cart';

const Item = (props) => {
  const cart= useCart();
  console.log("cart",cart);
  return (
    <div className='item-card'>
      <h4>{props.name}</h4>
      <p>price : ${props.price}</p>
      <button onClick={()=> cart.setItems([...cart.items,{name:props.name,price:props.price},])}>Add To Cart</button>
    </div>
  );
};

export default Item
