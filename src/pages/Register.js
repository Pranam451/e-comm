import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [message, setMessage] = useState();

  const validateRegister = () => {
    if (registerEmail && registerPassword) {
      register();
    } else {
      setMessage(2);
    }
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
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
        <h1 className="text-2xl"></h1>
        {message == 1 && (
          <h1 className="text-center py-2 bg-green-500 rounded">
            Account Created Successfully{" "}
            <Link className="text-blue-700 underline mx-2 " to="/">
              Continue
            </Link>
          </h1>
        )}
        {message == 0 && (
          <h1 className="text-center py-2 bg-red-300 rounded">
            Email is already in use
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
          Create New Account
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-600 w-full rounded p-2 text-1xl"
          name=""
          required
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
          name=""
          className="border border-gray-600 w-full rounded my-3 p-2 text-1xl"
        />
        <h1 className="text-sm ">
          Already have account?
          <Link to="/login">
            <span className="text-blue-500">Login</span>
          </Link>
        </h1>
        <div className="flex justify-end mt-5">
          <Link to="/">
            <button className="w-25 rounded outline outline-blue-500 text-blue-500 px-2 text-1xl py-1 mx-2">
              Cancel
            </button>
          </Link>
          <button
            onClick={() => validateRegister()}
            className="w-25 rounded outline outline-blue-500 bg-blue-500 text-white px-2 text-1xl py-1"
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
