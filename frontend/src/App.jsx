
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './components/ui/shared/Navbar';
import Login from './components/ui/auth/Login';
import Signup from './components/ui/auth/Signup';
import Home from './components/ui/Home';
import { RouterProvider } from "react-router-dom";
import Jobs from './components/ui/Jobs';
import Browse from './components/ui/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';
import AdminJobs from "./components/admin/AdminJobs"
import PostJob from './components/admin/PostJob';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },{
    path:'/signup', 
    element:<Signup/>
  },
  {
    path:'/jobs', 
    element:<Jobs/>
  },
  {
    path:'/description/:id', 
    element:<JobDescription/>
  },

  {
    path:'/browse', 
    element:<Browse/>
  },
  {
    path:'/profile', 
    element:<Profile/>
  },
  {
    path:'/admin/companies', 
    element:<Companies/>
  },
  {
    path:'/admin/companies/create', 
    element:<CompanyCreate/>
  },
  {
    path:'/admin/companies/:id', 
    element:<CompanySetup/>
  },
   {
    path:'/admin/jobs', 
    element:<AdminJobs/>
  },
  {
    path:'/admin/jobs/create', 
    element:<PostJob/>
  },


])

function App() {


  return (
     <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
