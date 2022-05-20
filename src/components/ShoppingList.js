import React, { useState, useContext } from 'react';
import '../styles/shoppinglist.css';
import { plantList } from '../datas/plantList.js';
import PlantItem from './PlantItem';
import Categories from './Categories';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { CartContext } from '../contexts/CartContext';
export default function ShoppingList() {
  // ** States
  const { cart, setCart } = useContext(CartContext);
  const [activeCategory, setActiveCategory] = useState('');
  const [filteredName, setFilteredName] = useState('');
  // ?---------------------------------------------------------------------------
  // ! filter category
  const list = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  // ?---------------------------------------------------------------------------
  // ! function for add product to cart
  const addToCart = (price, name, cover, id) => {
    // ** création d'une variable pour trouver le nom de la plante
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    // ** si le produit est déjà ajouté au panier
    // ** on additionne le montant a celui déjà présent
    if (currentPlantAdded) {
      const cartFilterredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      setCart([
        ...cartFilterredCurrentPlant,
        { name, price, amount: currentPlantAdded.amount + 1, cover, id },
      ]);
    } else {
      // ** sinon on l'ajoute directement dans le panier avec
      // ** un valeur initial de 1 produit
      setCart([...cart, { name, price, amount: 1, cover, id }]);
    }
  };
  // ?---------------------------------------------------------------------------

  return (
    <div className="plant-list-container">
      <div>
        {/* //**  je passe fais remonter category setCategory 
        //** et list dans le composant Categories */}
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          list={list}
          filteredName={filteredName}
          setFilteredName={setFilteredName}
        />
      </div>
      <div className="plant-list">
        {plantList
          .filter((plant) => plant.name.includes(filteredName))
          .map((plant) =>
            !activeCategory || activeCategory === plant.category ? (
              <div key={plant.id} className="plant-list-card">
                <PlantItem
                  id={plant.id}
                  cover={plant.cover}
                  name={plant.name}
                  price={plant.price}
                  water={plant.water}
                  light={plant.light}
                />
                <div className="btn-container">
                  <button
                    onClick={() =>
                      addToCart(plant.price, plant.name, plant.cover, plant.id)
                    }
                    className="btn"
                  >
                    <AddShoppingCartOutlinedIcon
                      fontSize="small"
                      className="btn-icon"
                    />
                  </button>
                </div>
              </div>
            ) : null
          )}
      </div>
    </div>
  );
}
