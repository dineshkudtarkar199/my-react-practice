import React from "react";
import "./Product_page.css";
import { useState } from "react";
import dishes from "./Dishes";

export default function Product_page() {
  const [dishes, setDishes] = useState(dishes);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const applyFilters = () => {
    let filtered = dishes;

    if (selectedType) {
      filtered = filtered.filter(dish => dish.type === selectedType);
    }

    if (selectedCategory) {
      filtered = filtered.filter(dish => dish.category === selectedCategory);
    }

    setDishes(filtered);
  };

  const resetFilters = () => {
    setSelectedType("");
    setSelectedCategory("");
    setDishes(dishes);
  };

  return (
    <div>
      <div className="top">
        <h2>Filter by Type</h2>
        <button onClick={() => { setSelectedType("starter"); applyFilters(); }}>Starters</button>
        <button onClick={() => { setSelectedType("maincourse"); applyFilters(); }}>Main Course</button>
        <button onClick={() => { setSelectedType("rice"); applyFilters(); }}>Rice</button>
        <button onClick={() => { setSelectedType("breads"); applyFilters(); }}>Breads</button>
        <button onClick={() => { setSelectedType("drinks"); applyFilters(); }}>Drinks</button>
        <button onClick={() => { setSelectedType("desserts"); applyFilters(); }}>Desserts</button>
      </div>

      <div className="top">
        <h2>Filter by Category</h2>
        <button onClick={() => { setSelectedCategory("veg"); applyFilters(); }}>Veg</button>
        <button onClick={() => { setSelectedCategory("nonveg"); applyFilters(); }}>Non-Veg</button>
        <button onClick={() => { setSelectedCategory("egg"); applyFilters(); }}>Egg</button>
      </div>

      <div className="top">
        <button onClick={resetFilters}>Show All</button>
      </div>

      <div className="dish_container">
        {dishes.map((dish, index) => (
          <div className="dish" key={index}>
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <p>₹{dish.price}</p>
            <p>Type: {dish.type}</p>
            <p>Category: {dish.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
