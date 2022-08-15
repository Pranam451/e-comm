import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [message, setMessage] = useState();
  const [loginPassword, setLoginPassword] = useState("");

  const validateLogin = () => {
    if (loginEmail && loginPassword) {
      login();
    } else {
      setMessage(2);
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
        setMessage(1);
      }
    } catch (error) {
      setMessage(0);
      console.log(error.message);
    }
  };
  const reload = () => {
    window.location.reload();
  };
  return (
    <section
      className="  w-full flex justify-center items-center"
      style={{ height: "80vh" }}
    >
      <div className="w-3/12 border border-gray-500 rounded shadow-lg p-5">
        {message == 1 && (
          <h1 className="text-center py-2 bg-green-500 rounded">
            Logged in Successfully{" "}
            <Link className="text-blue-700 underline mx-2 " to="/">
              Continue
            </Link>
          </h1>
        )}
        {message == 0 && (
          <h1 className="text-center py-2 bg-red-300 rounded">
            Invalid Email or Password
            <button
              className="text-blue-700 underline mx-2 "
              onClick={() => reload()}
            >
              {" "}
              Retry
            </button>
          </h1>
        )}
        {message == 2 && (
          <h1 className="text-center py-2 bg-red-300 rounded">
            Please fill all the fields
            <button
              className="text-blue-700 underline mx-2 "
              onClick={() => reload()}
            >
              {" "}
              Retry
            </button>
          </h1>
        )}
        <h1 className="text-2xl text-center font-semibold my-3">
          Login To Your Account
        </h1>
        <input
          type="email"
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
