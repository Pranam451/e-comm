import { collection, getDocs, orderBy, query, Query } from "firebase/firestore";
import { db } from "../Firebase";

const allProducts = async (filter) => {
  if (filter === "priceAsc") {
    const q = query(collection(db, "users"), orderBy("price", "asc"));

    const querySnapshot = await getDocs(q);
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });

    return items;
  }
  if (filter === "priceDsc") {
    const q = query(collection(db, "users"), orderBy("price", "desc"));

    const querySnapshot = await getDocs(q);
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });

    return items;
  }
  if (filter === "ratingAsc") {
    const q = query(collection(db, "users"), orderBy("rating", "asc"));

    const querySnapshot = await getDocs(q);
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });

    return items;
  }
  if (filter === "ratingDsc") {
    const q = query(collection(db, "users"), orderBy("rating", "desc"));

    const querySnapshot = await getDocs(q);
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });

    return items;
  }
  if (filter === "featured") {
    const q = query(collection(db, "users"));

    const querySnapshot = await getDocs(q);
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });

    return items;
  } else {
    const q = query(collection(db, "users"));

    const querySnapshot = await getDocs(q);
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });

    return items;
  }
};
export default allProducts;
