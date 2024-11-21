import React, { useState } from 'react';

function PaymentMethod({ nextStep, prevStep }) {
  const [paymentType, setPaymentType] = useState(null); // Estado para la opción seleccionada

  const handlePaymentChange = (type) => {
    setPaymentType(type);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        nextStep();
      }}
      className="space-y-6 animate-fadeIn"
    >
      <h2 className="text-xl font-semibold">Payment Method</h2>
      <p className="text-gray-500 text-sm">Please select your payment method</p>
      
      {/* Opciones de pago */}
      <div className="space-y-4">
        <div className="flex items-center">
          <input
            type="radio"
            name="payment"
            id="creditCard"
            className="mr-2"
            onChange={() => handlePaymentChange('creditCard')}
          />
          <label htmlFor="creditCard" className="text-gray-700">Credit Card</label>
        </div>
        {paymentType === 'creditCard' && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="Card Number"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Expiration Date (MM/YY)"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Card Holder"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="CVC"
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>
        )}
        <div className="flex items-center">
          <input
            type="radio"
            name="payment"
            id="paypal"
            className="mr-2"
            onChange={() => handlePaymentChange('paypal')}
          />
          <label htmlFor="paypal" className="text-gray-700">PayPal</label>
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition-transform transform hover:scale-105"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default PaymentMethod;
