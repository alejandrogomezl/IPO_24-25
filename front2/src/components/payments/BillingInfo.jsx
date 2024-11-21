import React from 'react';

function BillingInfo({ nextStep }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        nextStep();
      }}
      className="space-y-6 animate-fadeIn"
    >
      <h2 className="text-xl font-semibold">Billing Info</h2>
      <p className="text-gray-500 text-sm">Please enter your billing info</p>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Name" className="border rounded-lg px-4 py-2 w-full" />
        <input type="text" placeholder="Phone Number" className="border rounded-lg px-4 py-2 w-full" />
        <input type="text" placeholder="Address" className="border rounded-lg px-4 py-2 col-span-2" />
        <input type="text" placeholder="Town / City" className="border rounded-lg px-4 py-2 col-span-2" />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Next
      </button>
    </form>
  );
}

export default BillingInfo;
