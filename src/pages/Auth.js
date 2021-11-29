import React, { useState, useEffect } from "react";
import Login from "../component/login/Login";
import SignUp from "../component/signUp/SignUp";
import { useLocation } from "react-router";

export default function Auth() {
  // get path
  console.log(useLocation().pathname.split("/")[1]);
  const path = useLocation().pathname.split("/")[1];
  const [content, setContent] = useState();

  useEffect(() => {
    switch (path) {
      case "login":
        return setContent(<Login />);
      case "signup":
        return setContent(<SignUp />);
      default:
        return setContent("Page Not Found.");
    }
  }, [path]);

  return <div>{content}</div>;
}
