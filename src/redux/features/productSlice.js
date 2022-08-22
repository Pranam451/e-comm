import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../Firebase";

export const getAllProducts = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });

    return items;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { products: null },
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default productSlice.reducer;
