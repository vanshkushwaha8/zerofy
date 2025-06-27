// import React from 'react'
// import { apple, bill, google } from '../assets'
// import styles, { layout } from '../style'

// const Billing = () => {
//   return (
//     <section id='projects' className={layout.sectionReverse}>
//     <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6'>
// //         <h2 className={`${styles.heading2} text-[#ff6b00]`}>
// //           Our Latest <br className='sm:block hidden' /> Projects
// //         </h2>
// //         <p className={`${styles.paragraph} max-w-[470px] mt-5 md:mt-0 text-[#b0b0b0]`}>
// //           Discover how we bring ideas to life — from user-centric mobile apps to intelligent backend systems.
// //         </p>
// //       </div>

//       <div className={layout.sectionInfo}>
//         <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           Elit enim sed massa etiam.
//           Mauris eu adipiscing ultrices ametodio aenean neque.
//           Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
//         </p>
//         <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
//           <img
//             src={apple}
//             alt='app-store'
//             className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
//           />
//           <img
//             src={google}
//             alt='google-play'
//             className='w-[128px] h-[42px] object-contain cursor-pointer'
//           />
//         </div>
//       </div>  
//     </section>
//   )
// }

// export default Billing
import React from 'react';
import styles, { layout } from '../style';
import { project1, project2 } from '../assets';

const Billing = () => {
  return (
    <section id='projects' className={`${layout.section} flex-col`}>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6'>
        <h2 className={`${styles.heading2} text-[#ff6b00]`}>
          Our Latest <br className='sm:block hidden' /> Projects
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 md:mt-0 text-[#b0b0b0]`}>
          Discover how we bring ideas to life — from user-centric mobile apps to intelligent backend systems.
        </p>
      </div>

      <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-10'>
        <div className='bg-gradient-to-br from-[#0b1f3a] via-[#132c4d] to-[#1c3c5f] rounded-[20px] p-6 hover:scale-105 transition-transform duration-300 shadow-lg'>
          <img src={project1} alt='Project 1' className='w-full h-[200px] object-cover rounded-[10px]' />
          <h3 className='text-white text-[20px] font-semibold mt-4'>Inventory Management System</h3>
          <p className='text-[#eaeaea] text-[14px] mt-2'>
            A full-stack system built using React, Node.js, and MongoDB to streamline product, order, and stock control.
          </p>
        </div>

        <div className='bg-gradient-to-br from-[#0b1f3a] via-[#132c4d] to-[#1c3c5f] rounded-[20px] p-6 hover:scale-105 transition-transform duration-300 shadow-lg'>
          <img src={project2} alt='Project 2' className='w-full h-[200px] object-cover rounded-[10px]' />
          <h3 className='text-white text-[20px] font-semibold mt-4'>AI Chat Support Bot</h3>
          <p className='text-[#eaeaea] text-[14px] mt-2'>
            A smart chatbot integrated with GPT APIs for automating customer support, reducing human effort by 60%.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Billing;
