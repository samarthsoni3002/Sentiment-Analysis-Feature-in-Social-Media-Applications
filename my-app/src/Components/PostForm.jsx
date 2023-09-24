import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../Services/Operations/PostAPI';
import { useSelector } from 'react-redux';

function PostForm() {
  const [caption, setCaption] = useState('');
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.Auth);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Caption:', caption);
    dispatch(createPost(caption, userId));
    setCaption('');
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 bg-gray-400 rounded-full p-3 text-white">
        Upload a Tweet
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="caption"
            className="block text-gray-700 font-semibold mb-2 text-xl mr-5"
          >
            Tweet:
          </label>
          <textarea
            id="caption"
            name="caption"
            value={caption}
            onChange={handleCaptionChange}
            rows="4"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button className="bg-gray-400 p-2 rounded-lg" type='submit'>Upload</button>
      </form>
    </div>
  );
}

export default PostForm;
