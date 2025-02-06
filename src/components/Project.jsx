import React from 'react';
import { PROJECTS } from '../constants';
import { MdArrowOutward } from "react-icons/md";
function Project() {
  return (
    <>
      <div>
        <h1 className='mt-16 mb-5'>Project</h1>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {PROJECTS.map((project, index) => (
          <div key={index} className="max-w-sm rounded-lg ">
            {project.video ? (
              <video className="rounded-lg w-full h-auto" autoPlay loop muted>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img className="rounded-lg" src={project.image} alt={project.title} />
              </a>
            )}
            <div className="mt-4 ml-1">
              <a href={project.link} target='_blank' rel='noopener noreferrer'>
                <h5 className="mb-2 text-sm tracking-tight flex items-center justify-start gap-1 text-gray-900">
                  {project.title}<MdArrowOutward />
                </h5>
                <h6 className='text-gray-500 text-sm font-light'>{project.description}</h6>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
