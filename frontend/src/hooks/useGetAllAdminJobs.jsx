import { setAllAdminJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('ADMIN JOBS TOKEN:', token);

        const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('ADMIN JOBS RESPONSE:', res.data);

        if (res.data.success) {
          dispatch(setAllAdminJobs(res.data.jobs));
        }
      } catch (error) {
        console.log('GET ADMIN JOBS ERROR:', error);
        console.log('GET ADMIN JOBS ERROR RESPONSE:', error?.response);
      }
    };

    fetchAllAdminJobs();
  }, [dispatch]);
};

export default useGetAllAdminJobs;