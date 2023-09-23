import React from 'react';
import { Users } from '../dummyData';
// import { Link } from 'react-router-dom';

export default function RightBar() {
  
  return (
    <div className='flex flex-col gap-2 w-1/4'>
      <div className='flex items-center gap-3'>
        <img src="/Assest/gift.png" alt="" className='w-10 h-10' />
        <div>
          <b> Name </b>and <b> 3 other friends</b> have birthday today
        </div>
      </div>
      <div className='space-y-4'>
        <div className='text-xl font-semibold'>Online Friends</div>
        {Users.map(u => (
          <div className='flex gap-2 items-center relative' key={u.id}>
            <img src={u.profilePicture} alt="" className='h-10 w-10 rounded-full object-cover'/>
            <div className='text-xl'>{u.username}</div>
            <div className='h-2 w-2 rounded-full border-5 border-white bg-green-500 absolute top-0 left-0' />
          </div>
        ))}
      </div>
    </div>
    )
}