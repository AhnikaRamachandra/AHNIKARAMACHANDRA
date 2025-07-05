import React from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="grid mt-20 grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
      {PROJECTS.map((project, index) => (
        <div key={index} className="max-w-sm rounded-lg shadow-lg p-4 bg-white">
          {/* Render video or image */}
          {project.video ? (
            <video className="rounded-lg w-full h-auto" autoPlay loop muted>
              <source src={project.video} type="video/mp4" />
             video tag.
            </video>
          ) : (
            <Link to={project.link}>
              <img className="rounded-lg" src={project.image} alt={project.title} />
            </Link>
          )}

          {/* Render title and description */}
          <div className="mt-4">
            <Link to={project.link}>
              <h5 className="mb-2 text-sm flex items-center gap-1 hover:text-gray-500">
                {project.title} <MdArrowOutward />
              </h5>
            </Link>
            <p className="text-gray-500 text-sm">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
