'use server';

import SettingAddressEdit from '@/components/setting/SettingAddressEdit';
import { getProvinces } from '@/routes/address';
import { redirect } from 'next/navigation';

export default async function NewAddress() {
  const provinces = await getProvinces();
  if (provinces === null) {
    redirect('/500');
  }

  return (
    <>
      <SettingAddressEdit object={undefined} provinces={provinces} />
    </>
  );
}
