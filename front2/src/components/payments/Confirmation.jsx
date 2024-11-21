import React from 'react';

function Confirmation({ prevStep }) {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-xl font-semibold">Confirmation</h2>
      <p className="text-gray-500 text-sm">We are getting to the end. Just a few clicks and your rental is ready!</p>
      <div className="space-y-4">
        <div className="flex items-center">
          <input type="checkbox" id="marketing" className="mr-2" />
          <label htmlFor="marketing" className="text-gray-700">I agree with sending marketing and newsletter emails.</label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-gray-700">I agree with terms and conditions.</label>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition-transform transform hover:scale-105"
        >
          Back
        </button>
        <button
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
