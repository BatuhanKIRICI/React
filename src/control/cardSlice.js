import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: ["akj"],
  quantity: 0,
  total: 0,
};
const cardReducer = createSlice({
  name: "card",
  initialState,
});

export default cardReducer.reducer;
