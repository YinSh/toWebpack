// import "./index.scss";

// const root = document.getElementById("root");

// const btn = document.createElement("button");
// btn.innerHTML = "新增";
// root.appendChild(btn);
// btn.onclick = function () {
//   const item = document.createElement("p");
//   item.innerHTML = "items";
//   root.appendChild(item);
// };

// import counter from "./counter";
// import number from "./number";

// counter();
// number();

// if (module.hot) {
//   module.hot.accept("./number.js", function () {
//     document.body.removeChild(document.getElementById("number"));
//     number();
//   });
// }

//这种方法会污染全局变量
import "@babel/polyfill";

import React from "react";
import ReactDom from "react-dom";

const Hello = () => {
  return <div>HelloWord</div>;
};

ReactDom.render(<Hello></Hello>, document.getElementById("root"));

// const arr = [new Promise(() => {}), new Promise(() => {})];

// arr.map((item) => {
//   console.log(item);
// });
