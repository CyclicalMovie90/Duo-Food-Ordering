import React, { useState } from 'react';
import { auth } from '../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const { setUser } = useStore();
  const navigate = useNavigate();

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
      });
    }
  };

  const sendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setupRecaptcha();
      const formattedPhone = `+${phone}`;
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        formattedPhone,
        window.recaptchaVerifier
      );
      window.confirmationResult = confirmationResult;
      setShowOTP(true);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await window.confirmationResult.confirm(otp);
      setUser({ phone: result.user.phoneNumber!, isAuthenticated: true });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            {showOTP ? 'Enter OTP' : 'Login'}
          </h2>
        </div>
        {!showOTP ? (
          <form onSubmit={sendOTP} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary-400 text-white py-2 px-4 rounded-md hover:bg-primary-500"
              >
                Send OTP
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={verifyOTP} className="space-y-6">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                OTP
              </label>
              <input
                id="otp"
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter OTP"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary-400 text-white py-2 px-4 rounded-md hover:bg-primary-500"
              >
                Verify OTP
              </button>
            </div>
          </form>
        )}
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};