import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { formatPrice } from '../utils/currency';

type PaymentMethod = 'upi' | 'cod';

export const Checkout: React.FC = () => {
  const { cart, clearCart } = useStore();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [upiId, setUpiId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart, navigate]);

  const handlePlaceOrder = async () => {
    setLoading(true);
    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (paymentMethod === 'upi' && !upiId) {
        alert('Please enter UPI ID');
        return;
      }

      clearCart();
      navigate('/');
      alert('Order placed successfully!');
    } catch (error) {
      alert('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
        <div className="space-y-2 mb-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b">
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-500 ml-2">x{item.quantity}</span>
              </div>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>
        <div className="text-right">
          <span className="font-bold">Total: </span>
          <span className="font-bold text-primary-500">
            {formatPrice(total)}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h2>
        <div className="space-y-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
              className="mr-2"
            />
            <span>UPI Payment</span>
          </label>
          
          {paymentMethod === 'upi' && (
            <div className="ml-6">
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="Enter UPI ID (e.g., name@upi)"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          )}

          <label className="flex items-center">
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
              className="mr-2"
            />
            <span>Cash on Delivery</span>
          </label>
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={loading}
        className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Place Order'}
      </button>
    </div>
  );
};