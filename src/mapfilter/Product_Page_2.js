import React from "react";
import "./Product_page.css";
import { useState } from "react";
import alldishes from "./Dishes";

export default function Product_Page_2() {
  const [dishes, setDishes] = useState(alldishes);
 


  let filterDishes =(x)=>{
    let fill = alldishes.filter((dish)=>{
      return dish.type === x;
    })
    setDishes(fill);
  }

  return (
    <div>
      <hr className="line" />
      <div className="top">
        <button onClick={()=>{filterDishes("sweets")}}>sweets</button>
        <button onClick={()=>{filterDishes("rice")}}> rice</button>
        <button onClick={()=>{filterDishes("starters")}}>starters</button>
        <button onClick={()=>{filterDishes("snacks")}}>snacks</button>
        <button onClick={()=>{filterDishes("breads")}}>breads</button>
        <button onClick={()=>{filterDishes("drinks")}}>drinks</button>
        <button onClick={()=>{setDishes(alldishes)}}>All</button>
      </div>
      <hr className="line" />


      

    

      <div className="dish_container">
        {dishes.map((dish ) => (
          <div className="dish_card"  >
            <img src={dish.image} alt="" />
            <h2>{dish.name}</h2>
            <h4>₹{dish.price}</h4>
            <p>{dish.desc}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}
