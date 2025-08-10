import React from "react";
import T_navbar from "./T_navbar";
import T_form from "./T_form";

export default function TextUtils(props) {
  return (
    <div>
      <T_navbar />
      <div className="container my-3">

        <T_form  heading="Enter The Text To Analyze below "/>
      </div>
    </div>
  );
}
