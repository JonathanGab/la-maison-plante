import React, { useState, useContext } from 'react';
import '../styles/cart.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CartContext } from '../contexts/CartContext';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import RemoveIcon from '@material-ui/icons/Remove';
export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(true);

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  return isOpen ? (
    <div className="lmj-cart">
      <button onClick={() => setIsOpen(!isOpen)} className="lmj-button-cart">
        Fermer
      </button>
      <h1>
        {' '}
        <ShoppingCartOutlinedIcon />
        Panier :
      </h1>

      {cart.map((plant, index) => (
        <div key={plant.id} className="lmj-cart-content">
          <div className="lmj-img-container">
            <img src={plant.cover} alt="" className="lmj-cart-img" />
          </div>
          <div className="lmj-cart-product">
            {plant.name} {plant.price}€ x {plant.amount}
          </div>

          <button
            onClick={() => {
              const newCart = cart.slice();
              if (plant.amount > 1) {
                newCart[index].amount -= 1;
                setCart(newCart);
              } else {
                newCart.splice(index, 1);
                setCart(newCart);
              }
            }}
            className="btn"
          >
            {plant.amount > 1 ? <RemoveIcon /> : <DeleteOutlineIcon />}
          </button>
        </div>
      ))}
      <h3>Montant Total : {total}€</h3>
      <button onClick={() => setCart([])}>Vider mon panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button onClick={() => setIsOpen(!isOpen)} className="lmj-button-cart">
        Ouvrir
      </button>
    </div>
  );
}
