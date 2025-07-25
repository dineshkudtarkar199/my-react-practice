import React from "react";
import Props_b from "./Props_b";

export default function Propsa() {
  return (
    <div>
      <h1>Props Example</h1>
      <Props_b title="Book 1" pages={100} />
      <Props_b title="Book 2" pages={200} />
      <Props_b title="Book 3" pages={300} />
    </div>
  );
}
