import React from 'react'
import { FaDiscord, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 px-6 py-8 border-t border-gray-800">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left - Brand */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold text-white tracking-wide">
            YourBrand
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Simple. Clean. Reliable.
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>


      </div>

     

    </footer>
  )
}

export default Footer