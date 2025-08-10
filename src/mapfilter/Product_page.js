import React from "react";
import "./Product_page.css";
import { useState } from "react";
import alldishes from "./Dishes";

export default function Product_page() {
 let [dishes, setDishes] = useState(alldishes);

 let [sel, setSel]= useState("")
 


  let filterDishes =(x)=>{
      setSel(x)
    let fill = alldishes.filter((dish)=>{
      return dish.type === x;
    })
    setDishes(fill);
  }

  return (
    <div>
      <h1>Product Page 1</h1>

      <hr className="line" />
      <div className="top">
        <button   className={(sel === "sweets")?"active":""} onClick={()=>{filterDishes("sweets")}}>sweets</button>
        <button className={(sel === "rice")?"active":""} onClick={()=>{filterDishes("rice")}}> rice</button>
        <button className={(sel === "starters")?"active":""} onClick={()=>{filterDishes("starters")}}>starters</button>
        <button className={(sel === "snacks")?"active":""} onClick={()=>{filterDishes("snacks")}}>snacks</button>
        <button className={(sel === "breads")?"active":""} onClick={()=>{filterDishes("breads")}}>breads</button>
        <button className={(sel === "drinks")?"active":""}   onClick={()=>{filterDishes("drinks");   setSel("");}}>drinks</button>
        <button className={(sel === "")?"active":""} onClick={()=>{setDishes(alldishes)}}>All</button>
      </div>
      <hr className="line" />


      

    

      <div className="dish_container">
        {dishes.map((dish ) => (
          <div className="dish_card"  >
            <img src={dish.image} alt="" />
            <h2>{dish.name}</h2>
            <h4>{dish.price}</h4>
            <p>{dish.desc}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}
