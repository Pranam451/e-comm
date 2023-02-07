import React, { useState } from "react";
import { PhClipboardTextLight } from "../icons/Icons";
import { Link } from "react-router-dom";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../Firebase";

const AdminLogin = () => {
  const [loginUsername, setLoginUsername] = useState("admin");
  const [loginPassword, setLoginPassword] = useState("");
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [succesMessage, setSuccesMessage] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const validateLogin = async () => {
    const docRef = doc(db, "admin", "lcdRUNzDXftD14XZ5a1Z");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      setUsername(docSnap.data().name);
      setPassword(docSnap.data().password);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    if (loginPassword !== password) {
      console.log("login failed console");
    } else {
      setSuccesMessage("Logged In Succesfully");
    }
    // setUsername(docSnap.data().name);
    // setPassword(docSnap.data().password);
  };
  const reset = () => {
    setLoginPassword("");
  };
  //   console.log(username, password);
  return (
    <section
      className="  w-full flex justify-center items-center"
      style={{ height: "80vh" }}
    >
      <div className="w-3/12 border border-gray-500 rounded shadow-lg p-5">
        {succesMessage && (
          <h1 className="text-center py-2 bg-green-500 rounded">
            Logged in Successfully{" "}
            <Link className="text-blue-700 underline mx-2 " to="/">
              Continue
            </Link>
          </h1>
        )}
        {errorMessage && (
          <h1 className="text-center py-2 bg-green-500 rounded">
            Logged in failed{" "}
            <button
              className="text-blue-700 underline mx-2 "
              onClick={() => reset()}
            >
              Continue
            </button>
          </h1>
        )}
        <div className="flex w-full justify-between items-center">
          <h1 className="text-2xl text-center font-semibold my-3">
            Login To Your Account
          </h1>
        </div>

        <input
          type="text"
          value={loginUsername}
          placeholder="username"
          className="border border-gray-600 w-full rounded p-2 text-1xl"
          name=""
          onChange={(event) => {
            setLoginUsername(event.target.value);
          }}
        />
        <br />
        <input
          type="password"
          value={loginPassword}
          placeholder="Password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
          name=""
          className="border border-gray-600 w-full rounded my-3 p-2 text-1xl"
        />

        <div className="flex justify-end mt-5">
          <Link to="/">
            <button className="w-25 rounded outline outline-blue-500 text-blue-500 px-2 text-1xl py-1 mx-2">
              Cancel
            </button>
          </Link>
          <button
            onClick={() => validateLogin()}
            className="w-25 rounded outline outline-blue-500 bg-blue-500 text-white px-2 text-1xl py-1"
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
