import React, { useState } from 'react';
import styles from '../style';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const CTA = () => {
  const [showForm, setShowForm] = useState(false);
  const [alert, setAlert] = useState({ message: '', type: '' });

  const toggleForm = () => {
    setShowForm(!showForm);
    setAlert({ message: '', type: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const resume = formData.get('resume');

    const data = { name, email, resume };

    try {
      const response = await fetch('https://zerofy-backend.onrender.com/submit', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error('Submission failed');

      setAlert({
        message: 'Your Application submitted successfully!',
        type: 'success',
      });
      setTimeout(() => {
        setAlert({ message: '', type: '' });
        setShowForm(false);
      }, 2000);
    } catch (error) {
      console.error('Submission failed', error);
      setAlert({
        message: '❌ Submission failed. Please check your inputs and try again.',
        type: 'error',
      });
    }
  };

  return (
    <>
      {/* CTA Section */}
      <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] shadow-2xl`}>
        <div className='flex-1 flex flex-col'>
          <h2 className={`${styles.heading2} text-white`}>Launch Your Career with Us!</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}>
            Take the first step toward your dream job. Submit your details and we’ll get back to you soon!
          </p>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 mt-6 sm:mt-0`}>
          <button
            onClick={toggleForm}
            className='bg-[#ff6b00] hover:bg-[#e65a00] text-white px-6 py-3 rounded-lg font-medium shadow-md transition duration-300'
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Form Popup */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="bg-[#0b1f3a] p-8 rounded-xl w-[90%] max-w-md shadow-xl relative animate-fade-in">
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 text-white text-2xl hover:text-[#ff6b00]"
            >
              &times;
            </button>

            <h3 className="text-white text-2xl font-semibold mb-4 text-center">Join Zerofy Team</h3>

            {/* Alert Message */}
            {alert.message && (
              <div
                className={`text-sm font-medium px-4 py-3 mb-4 rounded-lg flex items-center gap-2 ${
                  alert.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {alert.type === 'success' ? (
                  <FaCheckCircle className="text-green-600" />
                ) : (
                  <FaExclamationCircle className="text-red-600" />
                )}
                {alert.message}
              </div>
            )}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
                className="px-4 py-3 rounded bg-[#132c4d] text-white placeholder:text-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
              />
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                className="px-4 py-3 rounded bg-[#132c4d] text-white placeholder:text-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
              />
              <input
                name="resume"
                type="url"
                placeholder="Paste your resume link (Google Drive)"
                required
                className="px-4 py-3 rounded bg-[#132c4d] text-white placeholder:text-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#ff6b00]"
              />
              <button
                type="submit"
                className="mt-2 bg-[#ff6b00] hover:bg-[#e65a00] text-white py-3 rounded font-semibold transition"
              >
                Submit Details
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CTA;
