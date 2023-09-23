import React from 'react'
import { FaBell, FaCog, FaCommentAlt, FaVideo, FaBookmark, FaQuestion, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Users } from '../dummyData';

export default function LeftBar() {
  return (
    <div className='flex flex-col space-y-4 ml-4 overflow-y-scroll mt-4 w-1/4' style={{ height: 'calc(100vh - 89px)' }}>
        <div className="flex-col items-center space-y-8 ml-2">
          <div className="flex items-center gap-2">
            <FaBell className="text-2xl" />
            <span>Notifications</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCog className="text-2xl" />
            <span>Settings</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCommentAlt className="text-2xl" />
            <span>Chats</span>
          </div>
          <div className="flex items-center gap-2">
            <FaVideo className="text-2xl" />
            <span>Video</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBookmark className="text-2xl" />
            <span>Bookmark</span>
          </div>
          <div className="flex items-center gap-2">
            <FaQuestion className="text-2xl" />
            <span>Questions</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-2xl" />
            <span>Jobs</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-2xl" />
            <span>Events</span>
          </div>
        </div>

        <button className="px-4 py-2 rounded-md border-2 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-opacity-50 focus:ring-0 mr-3">
            Show More
        </button>
        
        <div className='h-1 rounded-md bg-gray-200'/>

        <div className='flex-col space-y-4'>
          {
            Users.map(u => (
              <div className='flex gap-2 items-center' key={u.id}>
                <img src={u.profilePicture} alt="userFriends pic" className='rounded-full w-20 h-20 object-cover'/>
                <div>
                  {u.username}
                </div>
              </div>
            ))
          } 
        </div>
    </div>
  )
}
