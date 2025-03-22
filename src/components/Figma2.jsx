import React from 'react'
import img2 from '../assets/desk1.png';
function Figma2() {
  return (

      <div className=" mt-10  shadow-lg rounded-lg bg-white">
            <h1 className="text-3xl font-bold text-gray-900">Figma Design Details</h1>
            <img className="rounded-lg mt-4 w-full" src={img2} alt="Figma Design" />
            <p className="mt-4 text-gray-700">
              This design was created using Figma, focusing on user experience, accessibility, and a modern interface.
            </p>
           
          </div>
 
  )
}

export default Figma2
