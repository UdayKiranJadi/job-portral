import React, { useEffect, useState } from 'react'
import Navbar from '../ui/shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/ui/button'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'
import AdminJobsTable from './AdminJobsTable'
import fetchAllAdminJobs from '@/hooks/useGetAllAdminJobs'

const AdminJobs = () => {
  fetchAllAdminJobs();
  
  const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setSearchCompanyByText(input));
    },[input]);

  return (
    <div>
        <Navbar/>
        <div className='max-w-6xl mx-auto my-10 mt-20'>
            <div className='flex items-center justify-between my-5'>
                <Input className="w-fit" placeholder="Filter by Name" onChange={(e) => setInput(e.target.value)}/>
            <Button onClick={() =>navigate("/admin/companies/create") }>Post New Job</Button>
            </div>
            <AdminJobsTable/>

            
        </div>

    </div>
  )
}

export default AdminJobs