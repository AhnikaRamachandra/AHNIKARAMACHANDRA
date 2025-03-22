import React from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="grid mt-20 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
      {PROJECTS.map((project, index) => (
        <div key={index} className="max-w-sm rounded-lg shadow-lg p-4 bg-white">
          {project.video ? (
            <video className="rounded-lg w-full h-auto" autoPlay loop muted>
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Link to={project.link}>
              <img className="rounded-lg" src={project.image} alt={project.title} />
            </Link>
          )}

          <div className="mt-4">
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <h5 className="mb-2 text-sm flex items-center gap-1 hover:text-gray-500">
                {project.title} <MdArrowOutward />
              </h5>
              <h6 className="text-gray-500 text-sm">{project.description}</h6>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
