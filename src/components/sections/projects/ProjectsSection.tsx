'use client';
import { useState } from 'react';
import ProjectCard from './components/project-card/ProjectCard';

function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = ['fws', 'sacbe', 'couponGenerator'];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div id="projects" className="relative flex w-full flex-col items-center">
      {/* Title */}
      <div>
        <h2 className="mb-2 text-center text-4xl font-bold text-[#c2c6da]">Projects</h2>
        <div className="mx-auto mb-10 h-1 w-24 rounded-full bg-linear-to-r from-orange-400 to-yellow-400"></div>
      </div>

      {/* Slider */}
      <div className="relative mb-6 hidden w-full justify-center md:flex xl:hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${cards.length * 100}%`,
          }}
        >
          {cards.map((key) => (
            <div key={key} className="flex w-full shrink-0 justify-center">
              <ProjectCard projectKey={key} />
            </div>
          ))}
        </div>

        {/* Chevron en md */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-2 shadow-md transition hover:bg-orange-400 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Regular */}
      <div className="mb-6 flex flex-col gap-10 md:hidden lg:hidden lg:flex-row xl:flex">
        <ProjectCard projectKey="threadhive" />
        <ProjectCard projectKey="beehealth" />
        <ProjectCard projectKey="fws" />
      </div>

      {/* <button className="hover:flash hidden w-fit cursor-pointer self-center rounded-[9999px] bg-white px-2 py-1.5 font-medium text-black transition-all duration-300 ease-in-out hover:bg-orange-400/80 hover:text-white lg:block">
        View More
      </button> */}
    </div>
  );
}

export default ProjectsSection;
