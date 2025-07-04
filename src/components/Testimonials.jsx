import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import { FaStar } from 'react-icons/fa';

const ClientCard = ({ name, title, content, img, project, work }) => {
  return (
    <div className="flex flex-col md:w-[45%] w-full bg-black-gradient-2 rounded-xl p-6 m-3 shadow-lg hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center mb-4">
        <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white" />
        <div>
          <h4 className="text-white font-semibold text-lg">{name}</h4>
          <p className="text-dimWhite text-sm">{title}</p>
        </div>
      </div>
      <h3 className="text-white font-bold text-xl mb-2">{project}</h3>
      <p className="text-dimWhite text-sm mb-3">{work}</p>
      <p className="text-white text-[15px] leading-6 mb-4 italic">"{content}"</p>
      <div className="flex space-x-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={18} />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} flex flex-col items-center relative`}>
      <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-10 relative z-10">
        <h2 className={`${styles.heading2} text-center md:text-left`}>Client Feedback & Project Overview</h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-6 md:mt-0 text-center md:text-left`}>
          Here's what our clients have to say about the projects we've delivered and how we collaborate to bring their ideas to life.
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start w-full relative z-10">
        {feedback.map((client) => (
          <ClientCard key={client.id} {...client} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
