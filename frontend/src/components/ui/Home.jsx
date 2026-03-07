// Home.jsx
import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "../CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* 👇 push all content below the fixed navbar */}
      <main className="pt-16">
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
        <Footer />
      </main>
    </div>
  );
};

export default Home;