// Home.jsx
import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "../CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies")
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* 👇 push all content below the fixed navbar */}
      <main className="pt-20">
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
        <Footer />
      </main>
    </div>
  );
};

export default Home;