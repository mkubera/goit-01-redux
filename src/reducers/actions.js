import { createAction } from "@reduxjs/toolkit";

// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");

export { increment, decrement };
