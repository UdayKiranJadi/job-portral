import React from 'react'
import Navbar from '../ui/shared/Navbar'
import { Label } from '../ui/ui/label'
import { Input } from '../ui/input'

const CompanyCreate = () => {
  return (
    <div className='mt-25'>
        <Navbar/>
        <div className='max-w-4xl mx-auto'>
            <h1 className='font-bold text-2xl'>Your Company Name</h1>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, vitae.</p>
            <Label>Company Name</Label>
            <Input
            type='text'
            className="my-2"
            placeholder="jobhunt"/>
        </div>
    </div>
  )
}

export default CompanyCreate