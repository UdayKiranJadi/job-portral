
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './components/ui/shared/Navbar';
import Login from './components/ui/auth/login';
import Signup from './components/ui/auth/signup';
import Home from './components/ui/Home';
import { RouterProvider } from "react-router-dom";
import Jobs from './components/ui/Jobs';
import Browse from './components/ui/Browse';
import Profile from './components/Profile';

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
    path:'/browse', 
    element:<Browse/>
  },
  {
    path:'/profile', 
    element:<Profile/>
  }

])

function App() {


  return (
     <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
