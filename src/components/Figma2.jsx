import React from 'react';
import { Link, useLocation } from "react-router-dom";

import homescreen from '../assets/hoMEPAGEBEATFLOW.png';
import statements from '../assets/research.png';
import prototype from '../assets/Beatflowvedios.mp4'; 
import typo from '../assets/Typography.png';  
import flowchart from '../assets/Beatflowchart.png';
import artist from '../assets/artist page.png';
import mood from '../assets/poppage.png';
import otherscreen from '../assets/otherscreens.png';
import back from '../assets/back.png';
import backside from '../assets/backside.png';
import front from '../assets/Front.png';
import random from '../assets/falshpage.png';
import wireframe from '../assets/Wireframe.png';
import playlist from '../assets/Playlistbeat.png';

function Figma2() {
  const { pathname } = useLocation();

  return (
    <div className="bg-black text-white">

      {/* Top navigation bar */}
      <div className="w-full fixed top-0 left-0 bg-black z-50">
        <div className="max-w-7xl mx-auto flex justify-end items-center px-5 py-3 gap-10 text-md">
          <Link
            to="/"
            className={`pb-1 tracking-tight text-md md:text-lg border-b-2 transition-all duration-300 ${
              pathname === "/"
                ? " text-[#DD3A3A] tracking-tight text-md md:text-lg"
                : "border-transparent text-[#DD3A3A] hover:text-gray-400"
            }`}
          >
            Projects
          </Link>

          <Link
            to="/about"
            className={`pb-1 tracking-tight text-md md:text-lg border-b-2 transition-all duration-300 ${
              pathname === "/about"
                ? " text-[#DD3A3A] tracking-tight text-md md:text-lg"
                : "border-transparent text-[#DD3A3A] hover:text-gray-400"
            }`}
          >
            About Me
          </Link>
        </div>
      </div>

      {/* Top padding so content doesn't overlap navbar */}
      <div className="pt-20">

        {/* Main content */}
        <div className="relative">
          <img className="w-full" src={backside} alt="back" />
          <img className="w-full absolute top-0 left-0" src={front} alt="front" />
        </div>

        <img className="w-full mt-10" src={statements} alt="Figma Design Start" />

        {/* Typography & Colors */}
        <div className='mt-10'>
          <h1 className="p-5 text-5xl font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent">
            Typography and Color
          </h1>
          <img className="p-5 mt-0" src={typo} alt="Typography & Color" />
        </div>

        {/* Home Screen */}
        <div className='mt-10'>
          <h1 className="p-5 text-5xl font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent">Home screen</h1>
          <p className='p-5 text-lg text-gray-400'>
            The Home Screen is where the music journey begins. It shows big, colorful buttons for each mood Happy, Sad, Chill, and Romantic so users can tap and start listening right away. No need to search or scroll for hours. The design is clean and easy to use, helping users quickly find songs that match how they feel. It’s all about making music discovery fast, fun, and based on emotion.
          </p>
          <img className='mt-12' src={homescreen} alt="Home Screen" />
        </div>

        {/* Artist Page */}
        <div className='mt-10'>
          <h1 className="p-5 text-5xl font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent">Discover Your Favorite Artists</h1>
          <p className='p-5 text-lg text-gray-400'>
            The Artist Page lets users browse or search for any artist they like. After selecting an artist, users can view their popular songs, albums, and latest releases all in one place. This makes it fun and simple to explore everything from hit tracks to new drops by your favorite singers and bands.
          </p>
          <img className='mt-12' src={artist} alt="Artist Page" />
        </div>

        {/* Mood Page */}
        <div className='mt-10'>
          <h1 className="p-5 text-5xl font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent">Match Your Mood</h1>
          <p className='p-5 text-lg text-gray-400'>
            Feeling happy, chill, sad, or romantic? BeatFlow lets you discover and enjoy songs that match how you feel. Just pick your mood, and it will instantly play music that fits your vibe. No more scrolling or searching. It is the easiest way to connect with the right music, right when you need it.
          </p>
          <img src={mood} alt="Mood Page" />
        </div>

        {/* Flash Play / Random */}
        <div className='mt-10'>
          <h1 className="p-5 text-5xl font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent">One Tap. One Track. Pure Vibe.</h1>
          <p className='p-5 text-lg text-gray-400'>
            Don’t know what to play? Just tap Flash Play and let BeatFlow surprise you with a random song that matches the mood. It is quick, fun, and perfect when you want to discover something new without thinking too much. One tap, one vibe.
          </p>
          <img className='mt-12' src={random} alt="Flash Play" />
        </div>

        {/* Playlist Hub */}
        <div className='mt-10'>
          <h1 className="p-5 text-5xl font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent">Your Personalized Playlist Hub</h1>
          <p className='pt-5 pl-5 pr-5 text-lg text-gray-400'>
            All your favorite music in one place! The Playlist screen lets you save songs you love, access your liked tracks, and even listen to downloaded music offline. Whether it is a mood-based mix or your own custom list, BeatFlow makes it easy to organize and vibe to your favorite tunes anytime, anywhere.
          </p>
          <img className='mt-[-30px]' src={playlist} alt="Playlist Hub" />
        </div>

        {/* Other Screens */}
        <div className='mt-10'>
          <h1 className="p-5 text-5xl font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent">Other screens</h1>
          <img className='mt-0' src={otherscreen} alt="Other Screens" />
        </div>

        {/* Flowchart */}
        <div className='mt-10'>
          <h1 className="p-5 text-5xl font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent">Flow chart</h1>
          <img className='mx-auto' src={flowchart} alt="Flowchart" />
        </div>

        {/* Prototyping */}
        <div className='mt-10'>
          <h1 className="p-5 text-5xl font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent">Prototyping</h1>
          <video src={prototype} autoPlay loop muted playsInline className="w-full" />
        </div>

        {/* Wireframes */}
        <div className='mt-10'>
          <h1 className="p-5 text-5xl font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent">Wireframes</h1>
          <img className='mt-0' src={wireframe} alt="Wireframes" />
        </div>

        {/* Thank You */}
        <h1 className='text-5xl text-center pt-10 pb-16 font-bold bg-[linear-gradient(90deg,#E84E4E_48%,#D86E6E_94%)] bg-clip-text text-transparent'>Thank you</h1>

        {/* Figma File Button */}
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
