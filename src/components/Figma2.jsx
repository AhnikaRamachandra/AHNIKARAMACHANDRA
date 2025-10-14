import { Link, useLocation } from "react-router-dom";
import React from 'react';

import homescreen from '../assets/hoMEPAGEBEATFLOW.png'
import statements from '../assets/research.png'
import prototype from '../assets/Beatflowvedios.mp4'; 
import typo from '../assets/Typography.png';  
import flowchart from '../assets/Beatflowchart.png';
import artist from '../assets/artist page.png'
import mood from '../assets/poppage.png'
import otherscreen from '../assets/otherscreens.png'
import back from '../assets/back.png'
import backside from '../assets/backside.png'
import front from '../assets/Front.png'
import random from '../assets/falshpage.png'
import wireframe from '../assets/Wireframe.png'
import playlist from '../assets/Playlistbeat.png'

function Figma2() {
  const { pathname } = useLocation();

  return (
    <div className="bg-black">

      {/* Top navigation bar */}
      <div className="w-full fixed top-0 left-0 bg-black z-50">
        <div className="max-w-7xl mx-auto flex justify-end items-center px-5 py-3 gap-10 text-md">
          <Link
            to="/"
            className={`pb-1 font-semibold border-b-2 transition-all duration-300 ${
              pathname === "/"
                ? "border-[#DD3A3A] text-[#DD3A3A] font-medium"
                : "border-transparent  text-[#DD3A3A] hover:border-[#DD3A3A]"
            }`}
          >
            Projects
          </Link>

          <Link
            to="/about"
            className={`pb-1 border-w-1 font-semibold border-b-1 transition-all duration-300 ${
              pathname === "/about"
                ? "border-[#DD3A3A] text-[#DD3A3A] font-medium"
                : "border-transparent  text-[#DD3A3A] hover:border-[#DD3A3A]"
            }`}
          >
            About Me
          </Link>
        </div>
      </div>

      {/* Add top padding so content doesn't overlap navbar */}
      <div className="pt-20">

        {/* Main content */}
        <div className="relative">
          <img className="w-full" src={backside} alt="back" />
          <img className="w-full absolute top-0 left-0" src={front} alt="front" />
        </div>

        <img className="w-full mt-10" src={statements} alt="Figma Design Start" />

        <div className='mt-10'>
          <h1 className="p-5 text-5xl font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent">
            Typography and Color
          </h1>
          <img className="p-5 mt-0" src={typo} alt="Figma Design Start" />
        </div>

        <div className='mt-10'>
          <h1 className="p-5 text-5xl font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent">Home screen</h1>
          <p className='p-5 text-lg text-gray-400'>The Home Screen is where the music journey begins. It shows big, colorful buttons for each mood Happy, Sad, Chill, and Romantic so users can tap and start listening right away. No need to search or scroll for hours. The design is clean and easy to use, helping users quickly find songs that match how they feel. It’s all about making music discovery fast, fun, and based on emotion</p>
          <img className='mt-12' src={homescreen} alt="" />
        </div>

        {/* Continue all other sections (Artist, Mood, Random, Playlist, Other screens, Flowchart, Prototyping, Wireframes) exactly as before */}

        <h1 className='text-5xl text-center pt-10 pb-16 font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent'>
          Thank you
        </h1>

        <div className="text-center p-10">
          <a 
            href="https://www.figma.com/design/WeJieQojvfbz03HazjfWRX/Beatflow?node-id=0-1&t=acfzqZNhOv4dQaGo-1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#DD3A3A] text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-[#9e1212] transition"
          >
            View Figma File
          </a>
        </div>

      </div>
    </div>
  );
}

export default Figma2;
