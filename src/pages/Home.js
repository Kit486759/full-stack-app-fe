import React from "react";
import Posts from "../component/posts/Posts";
import { useSelector } from "react-redux";

export default function Home() {
const isLogin = useSelector((state)=>state)
console.log(isLogin)

  return (
    <div>
      <Posts />

    </div>
  );
}
