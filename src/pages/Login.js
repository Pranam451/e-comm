import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { PhClipboardTextLight } from "../icons/Icons";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const validateLogin = () => {
    if (!loginEmail || !loginPassword) {
      setErrorMessage("Please fill all the fields");
    }
    if (loginEmail && loginPassword) {
      login();
    } else {
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      if (user) {
        setSuccessMessage("Logged In Successfully");
      }
    } catch (error) {
      setErrorMessage("Invalid Email or Password");
      console.log(error.message);
    }
  };
  const reset = () => {
    setLoginEmail("");
    setLoginPassword("");
    setErrorMessage("");
  };
  const copy = () => {
    setLoginEmail("demo@gmail.com");
    setLoginPassword("123456789");
  };
  return (
    <section
      className="  w-full flex justify-center items-center"
      style={{ height: "80vh" }}
    >
      <div className="w-3/12 border border-gray-500 rounded shadow-lg p-5">
        {successMessage && (
          <h1 className="text-center py-2 bg-green-500 rounded">
            Logged in Successfully{" "}
            <Link className="text-blue-700 underline mx-2 " to="/">
              Continue
            </Link>
          </h1>
        )}

        {errorMessage ? (
          <h1 className="text-center py-2 bg-red-300 rounded">
            {errorMessage}
            <button
              className="text-blue-700 underline mx-2 "
              onClick={() => reset()}
            >
              {" "}
              Retry
            </button>
          </h1>
        ) : (
          ""
        )}
        <div className="flex w-full justify-between items-center">
          <h1 className="text-2xl text-center font-semibold my-3">
            Login To Your Account
          </h1>
          <button onClick={() => copy()}>
            <PhClipboardTextLight className="text-2xl" />
          </button>
        </div>

        <input
          type="email"
          value={loginEmail}
          placeholder="Email"
          className="border border-gray-600 w-full rounded p-2 text-1xl"
          name=""
          onChange={(event) => {
            setLoginEmail(event.target.value);
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
        <h1 className="text-sm ">
          Don't have an account?
          <Link to="/register">
            <span className="text-blue-500">Create New</span>
          </Link>
        </h1>
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

export default Login;
