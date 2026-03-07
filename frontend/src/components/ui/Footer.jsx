import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side - branding & copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">
            Job <span className="text-cyan-400">Portal</span>
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} Uday Kiran Jadi. All rights reserved.
          </p>
        </div>

        {/* Middle - quick links (optional) */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="/" className="hover:text-cyan-500 transition">
            Home
          </a>
          <a href="/jobs" className="hover:text-cyan-500 transition">
            Jobs
          </a>
          <a href="/browse" className="hover:text-cyan-500 transition">
            Browse
          </a>
        </div>

        {/* Right side - social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/UdayKiranJadi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:border-cyan-400 hover:text-cyan-500 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/udaykiranjadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:border-cyan-400 hover:text-cyan-500 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:udayjadi4@gmail.com"
            className="p-2 rounded-full border hover:border-cyan-400 hover:text-cyan-500 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;