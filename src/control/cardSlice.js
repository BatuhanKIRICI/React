import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cartItems: courseItems,
  quantity: 0,
  total: 0,
};
const cardReducer = createSlice({
  name: "card",
  initialState,
});

export default cardReducer.reducer;
