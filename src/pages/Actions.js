import React from 'react';
import AddPost from "../component/addPost/AddPost";
import Posts from "../component/posts/Posts";
import { useSelector } from "react-redux";


export default function Actions() {
    // const isLogin = useSelector((state)=>state)
    // console.log(isLogin)




    return (
        <div>
            <AddPost/>
            <Posts/>
        </div>
    )
}
