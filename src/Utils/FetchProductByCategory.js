import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase";

const fetchProductByCatergory = async (catergory) => {
  // const q = collection(db, "users");
  const q = query(collection(db, "users"), where("category", "==", catergory));

  const querySnapshot = await getDocs(q);
  let items = [];
  querySnapshot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });

  return items;
};
export default fetchProductByCatergory;
