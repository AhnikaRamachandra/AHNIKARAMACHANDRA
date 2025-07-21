import React from 'react';

import img4 from '../assets/flowchart.png'

import statements from '../assets/Statement.png'
import prototype from '../assets/Beatflowvedios.mp4'; 
import body from '../assets/Body.png'
import image2 from '../assets/beat.png';
import typo from '../assets/typo.png';  
import flow from '../assets/Flow.png';
import pro from '../assets/Pro.png'
import footer from '../assets/Footer.png'
function Figma2() {
  return (
    <div className="  bg-black ">

   

   
    <img className=" w-full" src={image2} alt="Figma Design Start" />
    
    
 <img className=" w-full mt-0" src={statements} alt="Figma Design Start" />
 <img className=" w-full mt-0" src={typo} alt="Figma Design Start" />

    <img className=" w-full mt-0" src={body} alt="Figma Design Start" />

      <img className=" w-full mt-10" src={flow} alt="Figma Design Start" />  
    
<img className=" w-full pr-14 pl-14 pt-10 " src={img4} alt="Figma Design End" />
     
  <img className=" w-full mt-10" src={pro} alt="Figma Design Start" />  

      <div className="">
        <video 
          src={prototype} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full"
        />
      </div>

      <img className=" w-full mt-0" src={footer} alt="Figma Design Start" />
      
      
    </div>
  );
}

export default Figma2;
