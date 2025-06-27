import React from 'react'

const InternshipCard = ({ name, company, role, duration, description }) => {
  return (
    <div className='flex flex-col justify-between p-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 
                    bg-black-gradient-2 transition-all duration-300 ease-in-out 
                    hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#2c3e50] hover:to-[#4ca1af]'>
      <h3 className='font-poppins font-semibold text-white text-[20px]'>{name}</h3>
      <p className='text-dimWhite text-[16px] mt-1 italic'>{role} @ {company}</p>
      <p className='text-dimWhite text-[14px] mt-1'>{duration}</p>
      <p className='text-dimWhite text-[14px] mt-4'>{description}</p>
    </div>
  )
}

export default InternshipCard
// import React from 'react'

// const InternshipCard = ({ name, company, role, duration, description }) => {
//   return (
//     <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 
//                     feedback-card transition-all duration-300 ease-in-out 
//                     hover:scale-105 hover:shadow-2xl hover:brightness-110'>
//       <h3 className='font-poppins font-semibold text-white text-[20px]'>{name}</h3>
//       <p className='text-dimWhite text-[16px] mt-1 italic'>{role} @ {company}</p>
//       <p className='text-dimWhite text-[14px] mt-1'>{duration}</p>
//       <p className='text-dimWhite text-[14px] mt-4'>{description}</p>
//     </div>
//   )
// }

// export default InternshipCard
