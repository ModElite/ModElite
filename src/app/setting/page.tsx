import SettingProfileCard from '@/components/setting/SettingProfileCard';
import React from 'react';

export default async function ProfileSetting() {
  return (
    <>
      <SettingProfileCard first_name='John' last_name='Doe' email='test@gmail.com' phone_num='08123456789' image='/shoe1.jpg' />
    </>
  );
}
