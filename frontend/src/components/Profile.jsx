import React, { useState } from 'react'
import Navbar from './ui/shared/Navbar'
import { Avatar, AvatarImage } from './ui/ui/avatar'
import { Button } from './ui/ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/ui/label'
import AppliedJobTable from './ui/AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'

 const isResume = true;

const Profile = () => {
   
    const [open, setOpen] = useState(false);
    const {user} = useSelector(store =>store.auth);



    
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 mt-20'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL01KJFSBxnWJFJW_tQtpv7DEdQNhDEqb-xw&s" />

                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullName}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>



                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>

                </div>
                <div className='my-5'>
                     <div className='flex items-center gap-3 my-2'>
                    <Mail />
                    <span>{user?.email}</span>


                </div>
                <div className='flex items-center gap-3 my-2'>
                    <Contact />
                <span>{user?.phoneNumber}</span>  
                </div>
                </div>
                <div className='my-5'>   
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        {
                        user?.profile?.skills.length != 0 ? user?.profile?.skills.map((item,index) => <Badge key={index}>{item}</Badge>) : <span>Add Your Skills</span>
                    }
                    </div>
                    
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>Download Resume</a> : <span>Please Upload Your Resume</span>
                    }


                </div> 
                
               
                
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                    <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                    <AppliedJobTable/> 

                </div> 
                <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Profile