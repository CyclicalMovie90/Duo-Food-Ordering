import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { useStore } from '../../store/useStore';

export const UserIcon: React.FC = () => {
  const { user } = useStore();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(user ? '/profile' : '/login')}
      className="relative p-2 rounded-full hover:bg-primary-500 transition-colors"
      aria-label={user ? 'Profile' : 'Login'}
    >
      <UserCircleIcon className="h-6 w-6 text-white" />
    </button>
  );
};