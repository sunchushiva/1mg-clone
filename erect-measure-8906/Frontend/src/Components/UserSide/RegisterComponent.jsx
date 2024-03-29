import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import  "../Styles/UserSide/Register.scss";
import { registerUser } from '../../Redux/UserSide/Auth Redux/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialState={
    username:"",
    email:"",
    password:"",
    confirmpassword:"",
}
const Register = () => {
   const[registeredData,setRegisteredData]=useState(initialState);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {currentUser}=useSelector((store)=> store.AuthReducer)
  
   const{email,password,username,confirmpassword}=registeredData;
    const handleChange=(e)=>{
     const{name,value}=e.target;
     setRegisteredData((prev)=> {
      return {...prev,[name]:value}
     })
     
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(password!==confirmpassword){
      toast("Wrong Password",{
        position:"top-center",
        autoClose:3000,
        theme:"dark"
    });
      return;
    }
    dispatch(registerUser(email,password,username))
  }


  useEffect(()=>{
      if(currentUser){
        navigate("/register");
      }
  },[currentUser,navigate])
  return (
   
    <div  id="register_page" className='register_page'>
         <form onSubmit={handleSubmit}>
        
            <h1 >Sign Up</h1>
              <div >
                <label>Username</label><br/>
                <input type="text" placeholder="username" name="username" onChange={handleChange} value={registeredData.username} required/>
              </div>
              <div >
                <label >Email</label><br/>
                <input type="email" placeholder="email" name="email" onChange={handleChange} value={registeredData.email} required/>
              </div>
              <div >
                <label>Password</label><br/>
                <input type="password" placeholder="at least 6 charactor" name="password" onChange={handleChange} value={registeredData.password} required/>
              </div>
              <div >
                <label>Confirm Password</label><br/>
                <input type="password" placeholder="confirm password" name="confirmpassword" onChange={handleChange} value={registeredData.confirmpassword} required/>
              </div>
              <button type="submit">Register</button>
              <div >
                 <p>Already have an account?<Link to="/login">login</Link></p>
              </div>
         </form>
       <ToastContainer/>
    </div>
  )
}

export default Register;