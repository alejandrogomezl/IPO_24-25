import React, { useState } from 'react';
import BillingInfo from '../components/payments/BillingInfo';
import PaymentMethod from '../components/payments/PaymentMethod';
import Confirmation from '../components/payments/Confirmation';

function PaymentPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Car Payment</h1>
          <p className="text-gray-500">Step {step} of 3</p>
        </div>

        {/* Steps */}
        {step === 1 && <BillingInfo nextStep={nextStep} />}
        {step === 2 && <PaymentMethod nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Confirmation prevStep={prevStep} />}
      </div>
    </div>
  );
}

export default PaymentPage;
