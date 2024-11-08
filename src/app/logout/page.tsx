import { Logout } from '@/routes/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const LogoutPage: React.FC = async () => {
  const logout_success = await Logout();
  if (logout_success) redirect('/');
  console.log('Logout failed');
  redirect('/login');
  return <></>;
};

export default LogoutPage;
