import React, { useState } from "react";
import "./Product_page.css";
import alldishes from "./Dishes";

export default function Product_Page_2() {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  // Filter dishes by type and category
  const filteredDishes = alldishes.filter((dish) => {
    const matchesType = type ? dish.type === type : true;
    const matchesCategory = category ? dish.category === category : true;
    return matchesType && matchesCategory;
  });

  return (
    <div>
      <h1>Product Page 2</h1>
      <hr className="line" />

      {/* Type Buttons */}
      <div className="top">
        <button className={type === "sweets" ? "active" : ""} onClick={() => setType("sweets")}>sweets</button>
        <button className={type === "rice" ? "active" : ""} onClick={() => setType("rice")}>rice</button>
        <button className={type === "starters" ? "active" : ""} onClick={() => setType("starters")}>starters</button>
        <button className={type === "snacks" ? "active" : ""} onClick={() => setType("snacks")}>snacks</button>
        <button className={type === "breads" ? "active" : ""} onClick={() => setType("breads")}>breads</button>
        <button className={type === "drinks" ? "active" : ""} onClick={() => setType("drinks")}>drinks</button>
        <button className={type === "" ? "active" : ""} onClick={() => setType("")}>All Types</button>
      </div>

      <hr className="line" />

      {/* Category Buttons */}
      <div className="top">
        <button className={category === "veg" ? "active" : ""} onClick={() => setCategory("veg")}>veg</button>
        <button className={category === "chicken" ? "active" : ""} onClick={() => setCategory("chicken")}>chicken</button>
        <button className={category === "mutton" ? "active" : ""} onClick={() => setCategory("mutton")}>mutton</button>
        <button className={category === "egg" ? "active" : ""} onClick={() => setCategory("egg")}>egg</button>
        <button className={category === "fish" ? "active" : ""} onClick={() => setCategory("fish")}>fish</button>
        <button className={category === "prawn" ? "active" : ""} onClick={() => setCategory("prawn")}>prawn</button>
        <button className={category === "" ? "active" : ""} onClick={() => setCategory("")}>All Categories</button>
      </div>

      <hr className="line" />

      {/* Dish Cards */}
      <div className="dish_container">
        {filteredDishes.map((dish, index) => (
          <div className="dish_card" key={index}>
            <img src={dish.image} alt={dish.name} />
            <h2>{dish.name}</h2>
            <h4>{dish.price}</h4>
            <p>{dish.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
