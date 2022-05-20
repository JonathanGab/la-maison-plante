import { createContext, useState, useEffect } from 'react';
import { plantList } from '../datas/plantList';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  // ! Je fais remonter cart dans app
  // ! j'initialise le localstorage dans une variable et je pointe le state cart
  const useStorage = localStorage.getItem('cart');

  // ! si le state possède une valeur alors il le retourne, sinon il renvoi un tableau vide
  const [cart, setCart] = useState(useStorage ? JSON.parse(useStorage) : []);
  console.log(cart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
