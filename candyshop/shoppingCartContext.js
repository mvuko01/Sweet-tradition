import { createContext, useState, useEffect } from 'react'

export const MyContext = createContext()

export function MyProvider({ children }) {
    const [inMyShoppingCart, setInMyShoppingCart] = useState([]);

    useEffect(() => {
        const shoppingCart = localStorage.getItem('shoppingCart');
        if (shoppingCart) {
            setInMyShoppingCart(JSON.parse(shoppingCart));
        }
    }, []);

    console.log(inMyShoppingCart, "shoppingCart in context")
  
    return (
      <MyContext.Provider value={{ inMyShoppingCart, setInMyShoppingCart }}>
        {children}
      </MyContext.Provider>
    )
  }