import React, { useState } from 'react';
import { cleaner, restaurant, kirana, gym } from '../assets';
import styles, { layout } from '../style';

const projects = [
  {
    title: 'Cleaner Service',
    description: 'An intuitive platform offering on-demand cleaning services with real-time scheduling, background-verified professionals, and eco-friendly supplies.',
    image: cleaner,
  },
  {
    title: 'Restaurant Review',
    description: 'Discover and review top-rated restaurants with visual menus, location-based recommendations, and user-submitted ratings and photos.',
    image: restaurant,
  },
  {
    title: 'Online Kirana Store',
    description: 'Your personal online grocery assistant offering seamless ordering, local product availability tracking, and instant delivery services.',
    image: kirana,
  },
  {
    title: 'Smart Gym Tracker',
    description: 'A modern fitness platform that tracks workouts, monitors progress with real-time analytics, and offers AI-based personal training plans for every fitness level.',
    image: gym,
  }
];

const CardDeal = () => {
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden'; // prevent background scroll
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={`${layout.section} flex-col items-center relative`}>
      <div className='text-center mb-12'>
        <h2 className={styles.heading2}>Our Completed Projects</h2>
        <p className={`${styles.paragraph} max-w-[700px] mx-auto mt-4`}>
          We build intelligent and elegant solutions for real-world needs — from home services to community-driven applications. Explore our featured projects.
        </p>
      </div>

      <div className={`${layout.projectGrid} sm:grid-cols-2 lg:grid-cols-2 gap-14 z-[1]`}>
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => openModal(project)}
            className="cursor-pointer relative bg-black-gradient-2 p-6 rounded-[50%] w-[300px] h-[300px] mx-auto flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="w-[130px] h-[130px] border-4 border-white rounded-full overflow-hidden mb-4">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-white text-[20px] font-semibold mt-2">{project.title}</h3>
            <p className="text-dimWhite text-[14px] mt-2 px-4 leading-5">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
     {activeProject && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm px-4"
    onClick={closeModal} // Close modal on any outer click (mobile or desktop)
  >
    <div
      className="bg-black-gradient-2 rounded-xl p-6 w-full max-w-[500px] text-white relative shadow-2xl"
      onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
    >
      <button
        className="absolute top-4 right-4 text-white text-2xl hover:text-red-400 transition"
        onClick={closeModal}
      >
        &times;
      </button>
      <div className="w-full h-[200px] rounded-xl overflow-hidden mb-4">
        <img
          src={activeProject.image}
          alt={activeProject.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-[20px] md:text-[24px] font-semibold mb-2 text-center md:text-left">{activeProject.title}</h3>
      <p className="text-dimWhite text-[14px] md:text-[15px] leading-6 text-center md:text-left">
        {activeProject.description}
      </p>
    </div>
  </div>
)}

    </section>
  );
};

export default CardDeal;
