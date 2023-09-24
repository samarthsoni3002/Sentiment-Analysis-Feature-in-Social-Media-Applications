import React, { useEffect, useState } from 'react'
// import Share from './Share'
import Post from './Post.jsx';
import { Posts as posts } from '../dummyData';
import PostForm from './PostForm.jsx';
import { useDispatch } from 'react-redux';
import { showPost } from '../Services/Operations/PostAPI.jsx';


export default function Feed() {
  // const dispatch = useDispatch();
  // const [newPost,setNewPost] = useState([]);
  
  // useEffect(()=>{
  //   setNewPost(showPost());
  // },[])
  // console.log(newPost)
  return (
    <div className='w-1/2 flex flex-col gap-5 p-2'>
      <div className=''>
        <PostForm/>
      </div>
      <div className='flex flex-col gap-3'>
        {
          posts.map((p)=>(
            <Post key={p.id} post={p}/>
            ))
        }
      </div>
      {/* <div>
        {newPost.map((item, index) => (
          <div key={index}>{item.caption}</div>
        ))}
      </div> */}
    </div>
  )
}
