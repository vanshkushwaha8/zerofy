import React from 'react'
import { internships } from '../constants/index'
import styles from '../style'
import InternshipCard from './InternshipCard'

const Internship = () => {
  return (
    <section id='internship' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full pink__gradient top-40' />
      
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>Internship Experience</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Here's a glimpse into my professional internship journey—hands-on experiences that shaped my skills and mindset.
          </p>  
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {internships.map((item) => (
          <InternshipCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Internship
