// const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World! From React");

import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement("h1", { id: "heading" }, "Namste React!");
 //JSX is not HTML in js
 const jsxheading=<h1>Namaste React Using JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
