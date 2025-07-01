import React, { useState } from 'react';
import styles, { layout } from '../style';

const fields = [
  {
    title: 'Full Stack Development',
    color: 'from-[#1e3c72] to-[#2a5298]',
    subfields: [
      { name: 'ReactJS + NodeJS', link: 'https://forms.gle/react-node-form' },
      { name: 'Java + Spring Boot', link: 'https://forms.gle/java-springboot-form' },
      { name: 'Java', link: 'https://forms.gle/java-form' },
      { name: 'ReactJS', link: 'https://forms.gle/react-form' },
      { name: 'NodeJS', link: 'https://forms.gle/node-form' },
      { name: '.NET', link: 'https://forms.gle/dotnet-form' },
    ],
  },
  {
    title: 'UI/UX Design',
    color: 'from-[#ff416c] to-[#ff4b2b]',
    subfields: [
      { name: 'Website Figma Design', link: 'https://forms.gle/figma-design-form' },
      { name: 'Photoshop', link: 'https://forms.gle/photoshop-form' },
      { name: 'App Design', link: 'https://forms.gle/app-design-form' },
    ],
  },
  {
    title: 'AI / Machine Learning',
    color: 'from-[#56ab2f] to-[#a8e063]',
    subfields: [
      { name: 'Python', link: 'https://forms.gle/python-ai-form' },
    ],
  },
];

const CareerCard = ({ title, subfields, color, isOpen, onClick }) => (
  <div
    className={`bg-gradient-to-br ${color} text-white p-6 rounded-[24px] shadow-xl w-full max-w-[360px] hover:scale-105 transform transition-transform duration-300`}
  >
    <button
      onClick={onClick}
      className='text-xl sm:text-2xl font-semibold w-full text-left focus:outline-none tracking-wide'
    >
      {title}
    </button>
    {isOpen && (
      <ul className='space-y-3 mt-6'>
        {subfields.map((field, idx) => (
          <li key={idx}>
            <a
              href={field.link}
              target='_blank'
              rel='noopener noreferrer'
              className='block w-full text-center bg-white text-gray-900 font-medium px-4 py-3 rounded-[12px] hover:bg-gray-100 transition duration-200 shadow-md'
            >
              {field.name}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const CareerFields = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id='career' className={`${layout.section} flex-col px-4 sm:px-10 md:px-16 lg:px-24 bg-[#0d1117]`}>
      <div className='text-center mb-14'>
        <h2 className={`${styles.heading2} text-gradient bg-gradient-to-r from-teal-400 to-blue-500 inline-block text-transparent bg-clip-text`}>
          Explore Career Tracks
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[600px] mx-auto text-gray-300`}>
          Choose your specialization and launch your future with <span className='text-white font-semibold'>Zerofyme Technologies</span>. Whether you're a coder, designer, or AI enthusiast — we’ve got you covered.
        </p>
      </div>
      <div className='flex flex-wrap gap-8 justify-center items-start w-full'>
        {fields.map((field, index) => (
          <CareerCard
            key={index}
            {...field}
            isOpen={activeIndex === index}
            onClick={() => toggleIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default CareerFields;