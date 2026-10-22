import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { MdArrowOutward, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function Project() {
  const [activeNdaProject, setActiveNdaProject] = useState(null);
  const [ndaPopupDismissed, setNdaPopupDismissed] = useState(false);

  return (
    <div>
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="tracking-tight text-2xl text-gray-900">
          Ahnika Ramachandra
        </h1>
        <p className="text-sm text-gray-500 font-light mt-1">
          Designing intuitive and engaging digital experiences.
        </p>

        <motion.p
          className="text-sm text-gray-800 font-light mt-8 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I blend creativity and functionality to craft seamless user interfaces.
        </motion.p>
      </motion.div>

      <div className="grid mt-20 grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {PROJECTS.map((project, index) => {
          const isNdaProject = project.nda === true;
          const showNdaPopup =
            isNdaProject &&
            activeNdaProject === project.title &&
            !ndaPopupDismissed;

          const projectImage = project.video ? (
            <video className="rounded-lg w-full h-auto" autoPlay loop muted>
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              className="rounded-lg w-full h-auto"
              src={project.image}
              alt={project.title}
            />
          );

          return (
            <div
              key={project.title || index}
              className="relative max-w-sm rounded-lg shadow-lg p-2 bg-white"
              onMouseEnter={
                isNdaProject
                  ? () => {
                      setActiveNdaProject(project.title);
                      setNdaPopupDismissed(false);
                    }
                  : undefined
              }
              onMouseLeave={
                isNdaProject
                  ? () => {
                      setActiveNdaProject(null);
                      setNdaPopupDismissed(false);
                    }
                  : undefined
              }
            >
              {/* NDA project is intentionally not linked to its case study. */}
              {isNdaProject ? (
                <div className="cursor-default">{projectImage}</div>
              ) : (
                <Link to={project.link} className="block">
                  {projectImage}
                </Link>
              )}

              <div className="mt-4">
                {isNdaProject ? (
                  <h5 className="mb-2 text-sm flex items-center gap-1 cursor-default">
                    {project.title}
                  </h5>
                ) : (
                  <Link to={project.link}>
                    <h5 className="mb-2 text-sm flex items-center gap-1 hover:text-gray-500">
                      {project.title} <MdArrowOutward />
                    </h5>
                  </Link>
                )}
                <p className="text-gray-500 text-sm">{project.description}</p>
              </div>

              {showNdaPopup && (
                <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center">
                  <div className="pointer-events-auto w-[min(92vw,464px)] border border-[#EDFBC1] bg-[#F7F4F3] p-3 text-black shadow-xl sm:p-4">
                    <div className="mb-3 flex items-start justify-between gap-3 text-xs leading-5 text-neutral-800">
                      <span>Product Design&nbsp; · &nbsp;UX Design&nbsp; · &nbsp;Cloud FinOps</span>
                      <button
                        type="button"
                        aria-label="Close NDA notice"
                        title="Close"
                        className="shrink-0 rounded p-0.5 text-neutral-700 hover:bg-black/10"
                        onClick={() => setNdaPopupDismissed(true)}
                      >
                        <MdClose size={16} />
                      </button>
                    </div>
                    <p className="font-serif text-[19px] leading-[1.22] sm:text-[21px]">
                      Sorry, this project is under NDA. At Opsolute, I worked
                      on cost optimization, alerting dashboards, cost overview,
                      and design systems to make complex cloud cost data easier
                      to understand and act on.
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
