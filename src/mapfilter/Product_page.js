import React from "react";
import "./Product_page.css";
import { useState } from "react";
import dishes from "./Dishes";

export default function Product_page() {
  let [dsh, setdsh] = useState(dishes);

  let [selected, setSelected] = useState("");

  let Fileter_Item = (y) => {
    setSelected(y);
    let fill = dishes.filter((x) => {
      return x.type === y;
    });
    setdsh(fill);
  };

  return (
    <div>
      <hr className="line" />
      <div className="top">
        <button
          className={selected === "sweets" ? "active" : ""}
          onClick={() => {
            Fileter_Item("sweets");
          }}
        >
          Sweet
        </button>
        <button
          className={selected === "rice" ? "active" : ""}
          onClick={() => {
            Fileter_Item("rice");
          }}
        >
          Rice
        </button>
        <button
         className={selected === "starters"? "active": ""}
          onClick={() => {
            Fileter_Item("starters");
          }}
        >
          Starters
        </button>
        <button
          className={selected === "snacks" ? "active" : ""} 
          onClick={() => {
            Fileter_Item("snacks");
          }}
        >
          Snacks
        </button>
        <button
          className={selected === "breads" ? "active" : ""}
          onClick={() => {
            Fileter_Item("breads");
          }}
        >
          Breads
        </button>
        <button

          onClick={() => {
            Fileter_Item("curries");
          }}
        >
          Curries
        </button>
        <button
          className={selected === "drinks" ? "active" : ""}
          onClick={() => {
            Fileter_Item("drinks");
          }}
        >
          Drinks
        </button>

        <button
          className={selected === "" ? "active" : ""}
          onClick={() => {
            setdsh(dishes);
          }}
        >
          All
        </button>
      </div>
      <hr className="line" />

      <div className="dish_container">
        {dsh.map((x) => {
          return (
            <>
              <div className="dish_card">
                <img src={x.image} alt="" />
                <h2>{x.name}</h2>
                <h4> ₹ {x.price}</h4>
                <p>{x.desc}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
