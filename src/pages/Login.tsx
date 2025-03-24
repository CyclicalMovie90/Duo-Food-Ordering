import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { loginWithEmail, loginWithGoogle, signupWithEmail } from '../services/auth';

export const Login: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useStore();

  const redirectPath = location.state?.redirectAfterLogin || '/';

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const authFunction = isSignup ? signupWithEmail : loginWithEmail;
    const { user, error } = await authFunction(email, password);

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    if (user) {
      setUser({ email: user.email!, isAuthenticated: true });
      navigate(redirectPath);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);

    const { user, error } = await loginWithGoogle();

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    if (user) {
      setUser({ email: user.email!, isAuthenticated: true });
      navigate(redirectPath);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[calc(100vh-88px)] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {isSignup ? 'Create Account' : 'Login to Continue'}
        </h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleEmailAuth} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-primary-400 focus:border-primary-400"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-primary-400 focus:border-primary-400"
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-400 text-white py-2 rounded-lg font-medium hover:bg-primary-500 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Processing...' : (isSignup ? 'Sign Up' : 'Login')}
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            disabled={loading}
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
            Continue with Google
          </button>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-primary-500 hover:text-primary-600"
          >
            {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
};