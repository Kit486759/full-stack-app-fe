import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: "http://localhost:5000/user/all-posts",
          headers: {
            // "Content-type":"application/json",
            "x-access-token": localStorage.getItem("access-token"),
          },
        });
        dispatch({ type: "allposts", payload: res.data.data });
      } catch (err) {
        console.log(err);
      }
    };
    loadPosts();
  });

  return (
    <div >
      <h5>Posts</h5>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',flexFlow:'wrap',}}>
        {posts.map((post, index) => {
          return (
           <div style={{margin:"10px",border:"1px solid black", width:"20%"}} key={index}>
              <p>Title: {post.title}</p>
              <p>Description: {post.description}</p>
              <p>Type: {post.type}</p>
          </div>
          );
        })}
      </div>
    </div>
  );
}
