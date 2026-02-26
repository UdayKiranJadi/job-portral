import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Input } from '../input'
import axios from 'axios'
import { USER_API_END_POINT } from 'utils/constant'
import { toast } from 'sonner'



const Signup = () => {
    const [input, setInput] = useState({
    fullname:"",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
    file:""
  });
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({...input, [e.target.name]:e.target.value});

  }
  const changeFileHandler = (e) => {
    setInput({...input, file:e.target.files?.[0]});

  }
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if(input.file){
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers:{
          "Content-Type":"multipart/form-data"
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
          <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
          <div className='my-2'>
            <Label className="block" >Full Name</Label>
            <input type="text"
            value={input.fullname}
            name='fullname'
            onChange={changeEventHandler}
              placeholder='Uday'
            />
          </div>
          <div className='my-2'>
            <Label className="block" >Email</Label>
            <input type="email"
            value={input.email}
            name='email'
            onChange={changeEventHandler}
              placeholder='Uday@gmail.com'

            />
          </div>
          <div className='my-2'>
            <Label className="block" >Phone Number</Label>
            <input type="number"
            value={input.phoneNumber}
            name='phoneNumber'
            onChange={changeEventHandler}
              placeholder='805'
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
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
          <Button type="submit" className="full-my-4">Signup</Button>
          <span className='text-sm'>Already have an account?<Link to="/login" className="text-blue-600">Login</Link></span>
        </form>
      </div>

    </div>
  ) 
}

export default Signup