//   const heading = document.createElement("h1");
//   heading.innerHTML = "hello word from js";
//   const root = document.getElementById("root");
//   root.appendChild(heading);
//   const heading = React.createElement("h1", {id:"heading"}, "hello world form react");
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "hello world form react"),
    React.createElement("h2", {}, "hello world form react h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello world form react"),
    React.createElement("h2", {}, "hello world form react h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading);
root.render(parent);
