import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const allProducts = async () => {
  const q = collection(db, "users");
  const querySnapshot = await getDocs(q);
  let items = [];
  querySnapshot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });

  return items;
};
export default allProducts;
