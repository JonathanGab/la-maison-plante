import React from "react";
import CareScale from "./CareScale";
import "../styles/plantitem.css";

export default function PlantItem({ name, cover, light, water, price }) {
  return (
    <li className="plant-item">
      <span className="plant-item-price">{price}€</span>
      <img src={cover} alt="" className="plant-item-cover" />
      <div>
        {name}
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}
