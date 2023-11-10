import {createContext,useState,useContext} from "react";
// import React,{useState, useEffect} from 'react';
export const CartContext=createContext(null);
export const useCart=()=>{
    const cart= useContext(CartContext);
    return cart
}
export const CartProvider=(props)=>{
    const [items, setItems] = useState([])
    // const [cart,setCart]=useState([]);
    // const [total,setTotal]=useState(0);
    // const [count,setCount]=useState(0);

    // const addToCart=(item)=>{
    //     setCart([...cart,item]);
    //     setTotal(total+item.price);
    //     setCount(count+1);
    // }

    // const removeFromCart=(item)=>{
    //     setCart(cart.filter(i=>i.id!==item.id));
    //     setTotal(total-item.price);
    //     setCount(count-1);
    // }
    return(
        <CartContext.Provider value={{items,setItems}}>
            {props.children}
        </CartContext.Provider>
    );
};
