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

const jsxHeading = <h1 id="heading">Hello World using React</h1>; // creates a js object

const jsxParent = (
  <div id="parent">
    <div id="child1">
      <h1>I am the first h1 tag</h1>
    </div>
    <div id="child2">
      <h1>I am the second h1 tag</h1>
    </div>
  </div>
);

const TitleComponent = () => {
  return <h1 id="title">Hello World using React Title</h1>;
};

const HeadingComponent = () => {
  return (
    <div id="parent">
      <TitleComponent />
      <TitleComponent></TitleComponent>
      {TitleComponent()}
      <h2 id="heading">Hello World using React Component</h2>
      {jsxParent}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
