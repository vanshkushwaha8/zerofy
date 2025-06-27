import React, { useState } from 'react';
import styles from '../style';

const CTA = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const resume = formData.get('resume');

  const data = { name, email, resume };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbw0uGCNMqVrx2ApotnOzZVZSmDAE6YjU5ZhKKd2P_ox-vz_9SGxp-AIwMjrZ6XDlMKEhA/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    alert('Form submitted successfully!');
    setShowForm(false);
  } catch (error) {
    console.error('Submission failed', error);
    alert('Error submitting form');
  }
};


  return (
    <>
      <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className='flex-1 flex flex-col'>
          <h2 className={styles.heading2}>Let's try our service now!</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
          <button
            onClick={toggleForm}
            className='bg-[#ff6b00] hover:bg-[#e65a00] text-white px-6 py-3 rounded-lg font-medium transition'
          >
            Get Started
          </button>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-[#0b1f3a] p-8 rounded-xl w-[90%] max-w-md shadow-lg relative">
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 text-white text-xl hover:text-[#ff6b00]"
            >
              &times;
            </button>
            <h3 className="text-white text-2xl font-semibold mb-4">Apply Now</h3>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
  <input
    name="name"
    type="text"
    placeholder="Your Name"
    required
    className="px-4 py-2 rounded bg-[#132c4d] text-white placeholder:text-[#b0b0b0]"
  />
  <input
    name="email"
    type="email"
    placeholder="Your Email"
    required
    className="px-4 py-2 rounded bg-[#132c4d] text-white placeholder:text-[#b0b0b0]"
  />
  <input
    name="resume"
    type="url"
    placeholder="Paste your Google Drive resume link"
    required
    className="px-4 py-2 rounded bg-[#132c4d] text-white placeholder:text-[#b0b0b0]"
  />
  <button
    type="submit"
    className="mt-2 bg-[#ff6b00] hover:bg-[#e65a00] text-white py-2 rounded font-medium transition"
  >
    Submit Application
  </button>
</form>

          </div>
        </div>
      )}
    </>
  );
};

export default CTA;
