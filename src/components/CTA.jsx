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
      const response = await fetch('https://zerofy-backend.onrender.com/submit', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error('Network error');
      alert('Application submitted successfully!');
      setShowForm(false);
    } catch (err) {
      alert('Submission failed. Try again.');
    }
  };

  return (
    <>
      {/* CTA Box */}
      <section className="w-full bg-black-gradient-2 rounded-2xl p-8 sm:p-12 mt-10 mb-20 shadow-xl flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
        <div className="flex-1 text-center md:text-left z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Ready to <span className="text-[#ff6b00]">build</span> <br /> something incredible?
          </h2>
          <p className="mt-4 text-dimWhite max-w-[480px] text-[16px] leading-6">
            We're hiring talented minds. Submit your resume and let’s create meaningful experiences together.
          </p>
        </div>

        <div className="z-10">
          <button
            onClick={toggleForm}
            className="px-7 py-3 bg-[#ff6b00] hover:bg-[#e05c00] text-white rounded-xl font-medium text-[16px] transition duration-300 shadow-lg"
          >
            Apply Now
          </button>
        </div>

        {/* Decorative blur circle */}
        <div className="absolute w-[300px] h-[300px] bg-[#ff6b00] rounded-full opacity-10 blur-3xl top-0 -left-10 z-0" />
      </section>

      {/* Modal Form */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm px-4"
          onClick={toggleForm}
        >
          <div
            className="bg-[#0b1f3a] rounded-2xl p-8 w-full max-w-md shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 text-white text-2xl hover:text-[#ff6b00]"
            >
              &times;
            </button>
            <h3 className="text-white text-2xl font-semibold text-center mb-4">Submit Your Application</h3>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="px-4 py-3 rounded-lg bg-[#132c4d] text-white placeholder:text-[#b0b0b0] outline-none"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="px-4 py-3 rounded-lg bg-[#132c4d] text-white placeholder:text-[#b0b0b0] outline-none"
              />
              <input
                name="resume"
                type="url"
                placeholder="Google Drive Resume Link"
                required
                className="px-4 py-3 rounded-lg bg-[#132c4d] text-white placeholder:text-[#b0b0b0] outline-none"
              />
              <button
                type="submit"
                className="bg-[#ff6b00] hover:bg-[#e65a00] text-white py-3 rounded-xl font-semibold mt-2 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CTA;
