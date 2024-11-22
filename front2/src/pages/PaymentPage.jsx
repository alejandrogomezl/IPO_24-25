import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import BillingInfo from '../components/payments/BillingInfo';
import PaymentMethod from '../components/payments/PaymentMethod';
import Confirmation from '../components/payments/Confirmation';
import SuccessPage from '../components/payments/Success';

function PaymentPage() {
  const { id } = useParams();
  const [step, setStep] = useState(1);
  const [billingInfo, setBillingInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState({});
  const [confirmation, setConfirmation] = useState({});
  const [isComplete, setIsComplete] = useState(false); // Estado para mostrar la página final

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Función para manejar el envío final
  const handleSubmit = () => {
    const paymentData = {
      billingInfo,
      paymentMethod,
      confirmation,
      id,
    };
    console.log('Payment Process Data:', paymentData);

    // Marca el proceso como completo
    setIsComplete(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      {isComplete ? (
        <SuccessPage name={billingInfo.name} />
      ) : (
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Car Payment</h1>
            <p className="text-gray-500">Step {step} of 3</p>
          </div>

          {/* Steps */}
          {step === 1 && (
            <BillingInfo nextStep={nextStep} setBillingInfo={setBillingInfo} />
          )}
          {step === 2 && (
            <PaymentMethod
              nextStep={nextStep}
              prevStep={prevStep}
              setPaymentMethod={setPaymentMethod}
            />
          )}
          {step === 3 && (
            <Confirmation
              prevStep={prevStep}
              setConfirmation={setConfirmation}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
