import SettingProfileCard from '@/components/setting/SettingProfileCard';
import React from 'react';
import { getProfile } from '@/routes/profile';
import { redirect } from 'next/navigation';

export default async function ProfileSetting() {
  const data = await getProfile();

  if (data == null) {
    redirect('/logout');
  }
  console.log(data);
  return (
    <>
      <SettingProfileCard first_name='John' last_name='Doe' email='test@gmail.com' phone_num='08123456789' image='/shoe1.jpg' />
    </>
  );
}
