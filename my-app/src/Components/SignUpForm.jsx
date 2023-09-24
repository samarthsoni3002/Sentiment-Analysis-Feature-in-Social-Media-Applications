import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Styles/AuthStyle.css';
import { useDispatch } from 'react-redux';
import { signUp } from '../Services/Operations/AuthAPI';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {firstName,lastName,email,password,confirmPassword} = formData;
  const userName = "";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUp(firstName,lastName,userName,email,password,confirmPassword,navigate));    // Add your form submission logic here
  };

  return (
    <div className='flex justify-center items-center' style={{ minHeight: '80vh' }}>
      <div className="flex flex-col gap-3 w-1/2">
        <h1 className='text-3xl bg-gray-400 text-center rounded-full p-2'>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="exampleInputName" className="form-label">
              First Name<span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              name="firstName"
              onChange={handleChange}
              className="bg-gray-200 rounded-lg p-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="exampleInputName" className="form-label">
               Last Name<span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              name="lastName"
              onChange={handleChange}
              className="bg-gray-200 rounded-lg p-1"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="exampleInputName" className="form-label">
              E-mail<span className='text-red-500'>*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              className="bg-gray-200 rounded-lg p-1"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password<span className='text-red-500'>*</span>
            </label>
            <input
              type="password"
              value={formData.password}
              className="bg-gray-200 rounded-lg p-1"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password<span className='text-red-500'>*</span>
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              className="bg-gray-200 rounded-lg p-1"
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="bg-gray-400 transition-all duration-100 hover:bg-gray-200 hover:rounded-lg w-full p-2 mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
