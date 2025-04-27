import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World using React"
// ); // creates a js object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/* <div id="parent">
    <div id="child">
        <h2>Nested element</h2>
    </div>
</div> */

// how to create nested elements like above?

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am h1 tag")
//   )
// );

// multiple childs inside parent
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "I am the first h1 tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "I am the second h1 tag")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
