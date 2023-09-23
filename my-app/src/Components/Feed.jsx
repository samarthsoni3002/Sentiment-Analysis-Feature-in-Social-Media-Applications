import React from 'react'
// import Share from './Share'
import Post from './Post.jsx';
import { Posts as posts } from '../dummyData';

export default function Feed() {
  return (
    <div className='w-1/2 flex flex-col gap-5 p-2'>
      {
        posts.map((p)=>(
          <Post key={p.id} post={p}/>
        ))
      }
      
    </div>
  )
}
