import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {

  const dispatch = useDispatch();
  const [alert, setAlert] = useState("");

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // console.log(token);

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:5000/auth/login",
        headers: {
          "Content-type": "application/json",
        },

        // json string the body before POST
        data: JSON.stringify({
          email: input.email,
          password: input.password,
        }),
      });

      const data = await res.data;
      // console.log(data);
      // if json respone have token , store the token
      if (data.token) {
        const token = data.token;
        localStorage.setItem("access-token", token);
        dispatch({ type: "login", payload: token });
      }
    } catch (err) {
      const errMsg = err.response.data.message;
      if (errMsg === "User not found" || errMsg === "Wrong password") {
        setAlert(errMsg);
      }
    }
  };

  return (
    <div>
      This is login
      <form onSubmit={submitLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            placeholder="email"
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            placeholder="password"
          ></input>
        </div>
        <button type="submit">Login</button>
      </form>
      <p style={{ color: "red" }}>{alert !== "" && alert}</p>
      Don't have account? <Link to="/signup">signup</Link>
    </div>
  );
}
