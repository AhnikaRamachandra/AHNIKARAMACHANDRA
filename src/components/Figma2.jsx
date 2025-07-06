import React from 'react';
import img1 from '../assets/Headerbeat.png';
import img2 from '../assets/Bodybeat.png';
import img3 from '../assets/Endbeatflow.png';
import prototype from '../assets/Beatflowvedio.mp4'; 

function Figma2() {
  return (
    <div className="ml-24 mr-24 bg-white space-y-8">

     
      <img className="rounded-lg w-full" src={img1} alt="Figma Design Header" />

    
      <img className="rounded-lg w-full" src={img2} alt="Figma Design Body" />

    
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <video 
          src={prototype} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
      </div>

     
      <img className="rounded-lg w-full" src={img3} alt="Figma Design End" />
      
    </div>
  );
}

export default Figma2;
