import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cartItems: courseItems,
  quantity: 5,
  total: 0,
};
const cartReducer = createSlice({
  name: "cart",
  initialState,
});

export default cartReducer.reducer;
