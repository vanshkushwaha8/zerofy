import styles from '../style'
import { robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} mt-[90px]`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        <div className='flex flex-row justify-between items-center w-full'>
          {/* Hide this title on small screens */}
          <h1 className='flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] text-white leading-[75px] ss:leading-[100.8px] hidden sm:block'>
            Zerofy Limits <br className='sm:block hidden' />
            <span className='text-gradient'>Amplify</span>
          </h1>

          {/* CTA Button for large screens */}
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        {/* This heading shows on all screens */}
        <h1 className='font-poppins font-semibold text-[42px] ss:text-[68px] text-white leading-[60px] ss:leading-[100px] w-full mt-4'>
          Your Future.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At Zerofyme Technologies, we craft cutting-edge digital experiences to help your business thrive in the modern tech era.
        </p>
      </div>

      {/* Image & Gradients */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='hero'
          className='w-full h-full relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* CTA Button for mobile */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
