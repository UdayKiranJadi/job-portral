import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './table'
import { Badge } from './badge'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
    const {allAppliedJobs} = useSelector(store => store.job);
  return (
    <div>
        <Table>
            <TableCaption>Your Applied Jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right ">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    allAppliedJobs.length <= 0 ? <span>Apply a Job</span> : allAppliedJobs.map((appliedJob) => (
                        <TableRow key={appliedJob._id}>
                          <TableCell></TableCell>
                          <TableCell>Frontend-Developer</TableCell>
                          <TableCell>Google</TableCell>
                          <TableCell className="text-right"><Badge>Selected</Badge></TableCell>  
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable