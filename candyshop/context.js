import { createContext, useState, useEffect } from 'react'

export const MyContext = createContext()

export function MyProvider({ children }) {
    const [inMyShoppingCart, setInMyShoppingCart] = useState([]);
    const [inMyFavourites, setInMyFavourites] = useState([]);

    useEffect(() => {
        const shoppingCart = localStorage.getItem('shoppingCart');
        if (shoppingCart) {
            setInMyShoppingCart(JSON.parse(shoppingCart));
        }

        const localFavourites = localStorage.getItem('favourites');
        if (localFavourites) {
            setInMyFavourites(JSON.parse(localFavourites));
        }
    }, []);

    return (
      <MyContext.Provider value={{ inMyShoppingCart, setInMyShoppingCart, inMyFavourites, setInMyFavourites}}>
        {children}
      </MyContext.Provider>
    )
  }