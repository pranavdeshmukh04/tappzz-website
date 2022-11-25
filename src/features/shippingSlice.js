import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shipingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : [],
};

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    addShippingAddress(state, action) {
      console.log(action.payload);
      state.shipingInfo.push(action.payload);
      localStorage.setItem("shippingInfo", JSON.stringify(state.shipingInfo));
    },
  },
});

export const { addShippingAddress } = shippingSlice.actions;
export default shippingSlice.reducer;
