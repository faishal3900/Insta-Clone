import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import { assets } from '../../assets/assets';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PostDisplay from './PostDisplay';

const Post = () => {
    const [data, setData] = useState([]);

    function submitFormData(e) {

        fetch("http://localhost:3000/allpost", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then((res) => res.json())
            .then((data) => setData(data.posts))

    }
    useEffect(() => {
        // console.log("hello");

        submitFormData();
    }, [data.posts]);
    // console.log(data);

    return (
        <div className='sm:ml-80 ml-35'>
            {data.map((post, idx) => <PostDisplay posts={post} key={idx} />)}
        </div>

    );
}

export default Post;
