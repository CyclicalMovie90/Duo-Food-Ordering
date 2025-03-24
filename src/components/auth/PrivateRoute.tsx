import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useStore } from '../../store/useStore';

interface Props {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { user } = useStore();
  const location = useLocation();

  if (!user?.isAuthenticated) {
    return <Navigate to="/login" state={{ redirectAfterLogin: location.pathname }} />;
  }

  return <>{children}</>;
};