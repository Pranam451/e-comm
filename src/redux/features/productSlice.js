import { createSlice, current } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
    decrement: (state, action) => {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrement } = productSlice.actions;
export default productSlice.reducer;
