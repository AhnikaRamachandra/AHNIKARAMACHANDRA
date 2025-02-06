import React from 'react';
import { MdArrowOutward } from "react-icons/md";

function Contact() {
  return (
    <div>
      <h1 className='mt-12'>Connect</h1>
      <div className='mt-5'>
        <p className='text-sm text-gray-700 tracking-tight'>
          Feel free to contact at <span className='underline'>ahnikaramachandra@gmail.com</span>
        </p>
        <div className='flex flex-wrap justify-items-start mt-5 gap-3'>
          <div className='rounded-2xl px-2 py-1 flex items-center bg-gray-200'>
            <h6 className='text-xs'>
              <a href="https://github.com/AhnikaRamachandra" target="_blank" rel="noopener noreferrer">GitHub</a>
            </h6>
            <span className='text-black text-sm'><MdArrowOutward /></span>
          </div>
          <div className='rounded-2xl px-2 py-1 flex items-center bg-gray-200'>
            <h6 className='text-xs'>
              <a href="https://www.linkedin.com/in/ahnika9" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </h6>
            <span className='text-black text-xs'><MdArrowOutward /></span>
          </div>
          <div className='rounded-2xl px-2 py-1 flex items-center bg-gray-200'>
            <h6 className='text-xs'>
              <a href="https://www.instagram.com/ahnikaramachandra/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </h6>
            <span className='text-black text-xs'><MdArrowOutward /></span>
          </div>
          <div className='rounded-2xl px-2 py-1 flex items-center bg-gray-200'>
            <a href="Ahnika__.pdf" download className='text-xs'>Resume </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
