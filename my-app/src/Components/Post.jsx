import React from "react";
import { Users } from "../dummyData";
import {BiDotsVerticalRounded} from "react-icons/bi"
import {AiOutlineLike} from "react-icons/ai"
import {RiShareForwardLine} from "react-icons/ri"
import {FaRegComment} from "react-icons/fa"


const Post = ({ post }) => {
  const { desc, photo, date, userId, like, comment } = post;

  // Filter the Users array to find the user associated with the post's id
  const user = Users.find((item) => userId === item.id);

  // Check if a user was found
  if (!user) {
    return null; 
  }
  
  // Destructure user data
  const { username, profilePicture } = user;

  return (
    <div className="border-2 rounded-lg p-2 flex flex-col gap-2">
      <div className="w-full rounded-lg flex justify-between items-center px-3 bg-gray-200">
        <div>
            <div className="flex items-center gap-2 p-2">
                <div className="h-15 w-15">
                <img src={profilePicture} alt="user pic" className="rounded-full w-14 h-14 object-cover border-2 border-white" />
                </div>
                <span>{username}</span>
            </div>
        </div>
        <BiDotsVerticalRounded size={20}/>
      </div>
      <img src={photo} alt=""  className="rounded-lg"/>
        <div className="space-y-1"> 
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                  <AiOutlineLike size={25}/>
                  <FaRegComment size={25}/>
                  <RiShareForwardLine size={25}/>
              </div>
              <div>
                Likes {like}
              </div>
            </div>
            <div>
              {desc}
            </div>
            <div>
              Veiw all {comment} comments
            </div>
            <div>
              {date}
            </div>
        </div>
    </div>
  );
};

export default Post;
