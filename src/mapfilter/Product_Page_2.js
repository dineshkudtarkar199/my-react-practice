import React, { useState } from "react";
import "./Product_page.css";
import dishes from "./Dishes";

export default function Product_Page_2() {
  const [dsh, setDsh] = useState(dishes);
  const [selected, setSelected] = useState("");

  // Filter by type or category
  const Filter_Item = (filter) => {
    setSelected(filter);
    const filtered = dishes.filter(
      (item) => item.type === filter || item.category === filter
    );
    setDsh(filtered);
  };

  const handleAll = () => {
    setDsh(dishes);
    setSelected("all");
  };

  const categoryTypes = ["sweets", "rice", "starters", "snacks", "breads", "curries", "drinks"];
  const dietTypes = ["veg", "non-veg", "egg"];

  return (
    <div>
      <h1>Product Page 2</h1>
      <hr className="line" />

      {/* Type-based filter */}
      <div className="top">
        {categoryTypes.map((type) => (
          <button
            key={type}
            className={selected === type ? "active" : ""}
            onClick={() => Filter_Item(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
        <button className={selected === "all" ? "active" : ""} onClick={handleAll}>
          All
        </button>
      </div>

      <hr className="line" />

      {/* Category-based filter */}
      <div className="top">
        {dietTypes.map((cat) => (
          <button
            key={cat}
            id={cat}
            className={selected === cat ? "active" : ""}
            onClick={() => Filter_Item(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <hr className="line" />

      {/* Dish Cards */}
      <div className="dish_container">
        {dsh.length === 0 ? (
          <p>No items found for "{selected}"</p>
        ) : (
          dsh.map((dish, index) => (
            <div className="dish_card" key={index}>
              <img src={dish.image} alt={dish.name} />
              <h2>{dish.name}</h2>
              <h4>₹ {dish.price}</h4>
              <p>{dish.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
