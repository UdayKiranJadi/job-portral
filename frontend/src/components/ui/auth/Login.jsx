import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../input'
import axios from 'axios'
import { USER_API_END_POINT } from 'utils/constant'




const Login = () => {
  const [input, setInput] = useState({
    
    email:"",
   
    password:"",
    role:"",
    
  });

  const  changeEventHandler = (e) => {
    setInput({...input, [e.target.name]:e.target.value});

  }
  const submitHandler = async (e) => {
    e.preventDefault();
    
const navigate = useNavigate();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });
      if(res.data.success){
        navigate("/login");
        toast.success(res.data.message);
      }

    } catch (error) {
      console.log(error);
    }
  } 
 
  
  

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white" >
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto '>
        <form onSubmit={submitHandler} action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Login</h1>
         
          <div className='my-2'>
            <Label className="block" >Email</Label>
            <input type="email"
            value={input.email}
            name='email'
            onChange={changeEventHandler}
              placeholder='Uday@gmail.com'

            />
          </div>
          
          <div className='my-2 '>
            <Label className="block" >Password</Label>
            <input type="password"
            value={input.password}
            name='password'
            onChange={changeEventHandler}
              placeholder='Uday'
            />
          </div>
          <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
          <Button type="submit" className="full-my-4">Login </Button>
          <span className='text-sm'>Don't have an account?<Link to="/signup" className="text-blue-600">Sign Up </Link></span>
        </form>
      </div>

    </div>
  ) 
}

export default Login