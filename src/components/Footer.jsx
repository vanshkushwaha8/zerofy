import React, { useState } from 'react';
import styles from '../style';
import { logofooter } from '../assets';

const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const [showHR, setShowHR] = useState(false);
  const [showManagement, setShowManagement] = useState(false);
  const [showBlogPopup, setShowBlogPopup] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false);

  return (
    <footer className={`w-full ${styles.paddingY} px-6 sm:px-16 bg-[#0a0f1c] text-white`}>
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10'>
        <div className='flex flex-col'>
          <img src={logofooter} alt='logo' className='w-[200px] h-auto mb-4' />
          <p className='text-dimWhite max-w-sm'>
            Empowering innovation with custom-built software and smart solutions.
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
          <div
            onMouseEnter={() => setShowContact(true)}
            onMouseLeave={() => setShowContact(false)}
            className='cursor-pointer hover:text-teal-400 relative'
          >
            <h4 className='text-lg font-semibold'>Contact</h4>
            {showContact && (
              <div className='absolute top-full mt-2 p-4 bg-gray-900 rounded-md shadow-lg text-sm z-10'>
                Phone: +91 98765 43210<br />
                Address: Bhopal, MP, India
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => setShowHR(true)}
            onMouseLeave={() => setShowHR(false)}
            className='cursor-pointer hover:text-pink-400 relative'
          >
            <h4 className='text-lg font-semibold'>HR Mail</h4>
            {showHR && (
              <div className='absolute top-full mt-2 p-4 bg-gray-900 rounded-md shadow-lg text-sm z-10'>
                zerofymetechnologies@gmail.com
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => setShowManagement(true)}
            onMouseLeave={() => setShowManagement(false)}
            className='cursor-pointer hover:text-yellow-400 relative'
          >
            <h4 className='text-lg font-semibold'>Management Mail</h4>
            {showManagement && (
              <div className='absolute top-full mt-2 p-4 bg-gray-900 rounded-md shadow-lg text-sm z-10'>
                zerofymetechnologies@gmail.com
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setShowBlogPopup(true)}
              className='text-lg font-semibold text-left hover:text-blue-400 transition'
            >
              Blog
            </button>
          </div>

          <div>
            <button
              onClick={() => setShowReviewPopup(true)}
              className='text-lg font-semibold text-left hover:text-green-400 transition'
            >
              Reviews
            </button>
          </div>
        </div>
      </div>

      {/* Blog Popup */}
      {showBlogPopup && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'>
          <div className='bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white p-6 rounded-lg max-w-lg w-full relative shadow-xl'>
            <button onClick={() => setShowBlogPopup(false)} className='absolute top-2 right-4 text-2xl font-bold text-white'>×</button>
            <h3 className='text-xl font-semibold mb-4'>Latest Blog Video</h3>
            <iframe
              className='w-full h-[300px] rounded-md'
              src='6'
              title='Blog Video'
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Review Popup */}
      {showReviewPopup && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'>
          <div className='bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white p-6 rounded-lg max-w-md w-full relative shadow-xl'>
            <button onClick={() => setShowReviewPopup(false)} className='absolute top-2 right-4 text-2xl font-bold text-white'>×</button>
            <h3 className='text-xl font-semibold mb-4'>Client Reviews</h3>
            <div className='space-y-4'>
              <div className='bg-white bg-opacity-10 p-4 rounded-md'>Amazing internship experience! — <span className='font-medium'>Ravi Sharma</span></div>
              <div className='bg-white bg-opacity-10 p-4 rounded-md'>Great learning, supportive mentors. — <span className='font-medium'>Sneha Patel</span></div>
              <div className='bg-white bg-opacity-10 p-4 rounded-md'>Real-time project exposure was superb! — <span className='font-medium'>Arjun Verma</span></div>
            </div>
          </div>
        </div>
      )}

      <div className='mt-12 border-t border-gray-700 pt-6 text-center text-dimWhite text-sm'>
        © 2025 Zerofyme Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;