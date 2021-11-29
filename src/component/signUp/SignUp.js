import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {

  const [alert, setAlert] = useState();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const submitSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:5000/auth/signup",
         headers:{
           "Content-type" : "application/json"
         },
        data: JSON.stringify({
          email: input.email,
          password: input.password,
        }),
      });
      // console.log(res.message)
    } catch (err) {
      const message = err.response.message;
      setAlert(message);
    }
  };

  return (
    <div>
      This is Signup
      <form onSubmit={submitSignUp}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            placeholder="email"
          ></input>
        </div>
        <div>
          <label htmlFor="password">Email</label>
          <input
            id="password"
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            placeholder="password"
          ></input>
        </div>
        <button type="submit">Sign Up</button>
        <p>{alert && alert}</p>
      </form>
      Already have account? <Link to="/login">login</Link>
    </div>
  );
}
