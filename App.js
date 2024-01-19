// const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World! From React");

import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement("h1", { id: "heading" }, "Namste React!");
//JSX is not HTML in js
//JSX transppiles before itreaches js engine=>(transpiling is done by babel using parcel)
const jsxheading = <h1 id="heading">Namaste React Using JSX</h1>;
const Title=()=><h1 id="title">Namaste React Title</h1>;
console.log(jsxheading);
//Component Composition-calling one component inside one another component
const HeadingCompponent = () => (
  <div id="container">
    <Title/>
    <h1 id="heading">Namaste React Using JSX</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCompponent />);

