import React,{useState}from 'react'
import { toast } from 'react-toastify';
import "./Styles/AuthStyle.css";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Services/Operations/AuthAPI';

export default function LoginForm() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    // const navigate = useNavigate();
    const {email , password} = formData;

    const sumbitHandler = async (e) => {
      e.preventDefault();
      dispatch(login(email,password,navigate));
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  return (
    <div className='flex justify-center items-center ' style={{ minHeight: "80vh" }}>
        <div className="flex flex-col items-center gap-4 w-1/2">
            <h1 className='text-3xl bg-gray-200 rounded-full p-4 text-center w-full'>Login Now</h1>
            <form onSubmit={sumbitHandler} className='flex flex-col gap-3 w-full'>
            
            <div className="flex gap-1 flex-col">
                <label htmlFor="exampleInputName" className="text-xl">E-mail<span className='text-red-500'>*</span></label>
                <input type="email" value={email} className="bg-gray-100 p-2 rounded-lg"  name='email'
                onChange={handleChange}/>
            </div>

            <div className="flex gap-1 flex-col">
                <label htmlFor="exampleInputPassword1" className="text-xl">Password<span className='text-red-500'>*</span></label>
                <input type="password" value={password} className="bg-gray-100 p-2 rounded-lg" 
                 onChange={handleChange} name='password'/>
            </div>

            
            <button type="submit" className="bg-gray-300 p-2 w-full transition-all duration-100 transition-duration hover:bg-gray-200 hover:rounded-lg">Login Now</button>
            </form>

        </div>
    </div>
  )
}