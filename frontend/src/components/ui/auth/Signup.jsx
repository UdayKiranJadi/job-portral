import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../input";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant"; // adjust if needed
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";





const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",      // 👈 use fullName consistently
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  });

  const { loading } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();    //formdata object
        formData.append("fullName", input.fullName);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

    try {
      dispatch(setLoading(true));


      const res = await axios.post(
        `${USER_API_END_POINT}/register`, formData,
        {
          headers: {"Content-Type":"multipart/form-data"},withCredentials: true,
        }
      );

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
        
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <form
            onSubmit={submitHandler}
            className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
          >
            <h1 className="font-bold text-xl mb-5">Sign Up</h1>

            <div className="my-2">
              <Label className="block">Full Name</Label>
              <input
                type="text"
                value={input.fullName}
                name="fullName"
                onChange={changeEventHandler}
                placeholder="Uday"
              />
            </div>

            <div className="my-2">
              <Label className="block">Email</Label>
              <input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="uday@gmail.com"
              />
            </div>

            <div className="my-2">
              <Label className="block">Phone Number</Label>
              <input
                type="number"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
                placeholder="805..."
              />
            </div>

            <div className="my-2">
              <Label className="block">Password</Label>
              <input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="password"
              />
            </div>

            <div className="flex items-center justify-between">
              <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label>Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label>Recruiter</Label>
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

            {loading ? (
              <Button className="w-full my-4">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
              </Button>
            ) : (
              <Button type="submit" className="w-full my-4">
                SignUp
              </Button>
            )}

            <span className="text-sm">
              Already have an account?
              <Link to="/login" className="text-blue-600">
                {" "}
                Login
              </Link>
            </span>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;