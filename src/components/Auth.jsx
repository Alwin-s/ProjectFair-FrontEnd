import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, json, useNavigate } from 'react-router-dom';
import { loginApi, registerAPI } from '../services/allAPI';

function Auth({ register }) {

  const navigate=useNavigate()
  const[userData,setUserData]=useState({
    username:"",email:"",password:""
  })

  //register
const handleRegister =async (e)=>{
  e.preventDefault()
  const{username,email,password}=userData
  if(!username || !email || !password){
    alert("Please Fill The Missing Fields")
  }else{
    const result= await registerAPI(userData)
    console.log(result);
    if(result.status === 200){
      console.log(result);
      alert(`${result.data.username} has reg successfully`)
      setUserData({
        username:"",email:"",password:""
      })
      navigate('/login')
    }else{
      alert(result.response.data)
      console.log(result);
    }
  }
}

//login
const handleLogin=async (e)=>{
  e.preventDefault()
  const{email,password}=userData
  if(!email || !password){
    alert("Please Fill The Missing Fields")
  }else{
    const result= await loginApi(userData)
    console.log(result);
    if(result.status === 200){
    
      sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
      sessionStorage.setItem("token",result.data.token)
      setUserData({
      email:"",password:""
      })
      navigate('/')
    }else{
      alert(result.response.data)
      console.log(result);
    }
  }

}









  const isRegisterForm = register ? true : false;

  return (
    <div style={{ width: "100", height: "100vh" }} className='d-flex align-items-center justify-content-center bg-dark'>
      <div className="container w-75">
        <Link to={"/"} style={{ textDecoration: "none", color: "blue" }}><i class="fa-solid fa-chevron-left"></i> Back To Home</Link>

        <div className='card shadow p-5  bg-primary'>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='' src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png?f=webp" alt="" width={350} style={{borderRight:"2px solid white",paddingRight:"34px" }}/>
            </div>
            <div className="col-lg-6 text-white">
              <div className="d-flex align-items-center flex-column">
                <h3 className='fw-bolder text-light'><i class="fa-brands fa-stack-overflow"></i> Project-Fair</h3>
                <h5 className='fw-bolder mt-4 pb-3 text-light'>
                  {
                    isRegisterForm ?  'Sign Up To Your Account' : 'Sign Up To Your Account'
                  }
                </h5>
                <Form className='text-light w-100'>
                  {
                    isRegisterForm &&
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter name"  value={userData.username} 
                      onChange={e=>setUserData({...userData,username:e.target.value})}/>
                    </Form.Group>
                  }
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email"  onChange={e=>setUserData({...userData,email:e.target.value})}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="password" placeholder="Enter Password"  onChange={e=>setUserData({...userData,password:e.target.value})}/>
                  </Form.Group>
                  {
                    isRegisterForm ?
                      <div>
                        <button className='btn btn-dark mb-2' onClick={handleRegister}>Register</button>
                        <p className='mt-3'>Already Have an account? Click here to <Link to={'/login'} style={{ textDecoration: "none" }}>Login</Link></p>
                      </div>
                      :
                      <div>
                        <button className='btn btn-success mb-2' onClick={handleLogin}>Login</button>
                        <p className='mt-4'>New User ? Click here to <Link to={'/register'} style={{ textDecoration: "none" }}>Register</Link></p>
                      </div>
                  }
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;
