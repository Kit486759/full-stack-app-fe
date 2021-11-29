import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function AddPost() {
  const isLogin = useSelector((state) => state);

  const [input, setInput] = useState({
    title: "",
    description: "",
    type: "personal",
  });

  console.log(input);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
       const res = await axios({
         method:"POST",
         url: "http://localhost:5000/user/add-post",
         headers:{
           "Content-type":"application/json",
          //  load token from local storage and send in header
           'x-access-token': localStorage.getItem('access-token')
         },
         data: JSON.stringify(input)
       }) 
       console.log(res)
    } catch (err) {
      console.log(err);
    }
 
  };

  return (
    <div>
      This is add post.
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            placeholder="title"
            onChange={(e) => setInput({ ...input, title: e.target.value })}
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            placeholder="description"
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            onChange={(e) => setInput({ ...input, type: e.target.value })}
            value={input.type}
          >
            <option value="personal"> Personal</option>
            <option value="work">  Work</option>
            <option value="play"> Play</option>
          </select>
        </div>

        <button type="submit">Post</button>
      </form>
    </div>
  );
}
