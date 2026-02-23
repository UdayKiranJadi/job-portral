import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'



const Login = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white" >
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto '>
        <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Login</h1>
         
          <div className='my-2'>
            <Label className="block" >Email</Label>
            <input type="email"
              placeholder='Uday@gmail.com'

            />
          </div>
          
          <div className='my-2 '>
            <Label className="block" >Password</Label>
            <input type="password"
              placeholder='Uday'
            />
          </div>
          <div className='flex items-center justify-between gap-10'>
            <RadioGroup
              className="flex items-center gap-8 my-5"
              defaultValue="student"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student">Student</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="recruiter" id="recruiter" />
                <Label htmlFor="recruiter">Recruiter</Label>
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