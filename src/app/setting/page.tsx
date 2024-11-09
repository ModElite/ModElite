import SettingProfileCard from '@/components/setting/SettingProfileCard';
import React from 'react';
import { getProfile } from '@/routes/profile';
import { redirect } from 'next/navigation';

export default async function ProfileSetting() {
  const data = await getProfile();

  if (data == null) {
    redirect('/logout');
  }
  return (
    <>
      <SettingProfileCard
        first_name={data.firstName}
        last_name={data.lastName}
        email={data.email}
        phone_num={data.phone}
        image={data.profileUrl != '' ? data.profileUrl : '/shoe1.jpg'}
      />
    </>
  );
}
