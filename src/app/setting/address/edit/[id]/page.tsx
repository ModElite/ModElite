'use server';

import SettingAddressEdit from '@/components/setting/SettingAddressEdit';
import { IAdressData } from '@/interfaces/address';
import { getAddress, getProvinces } from '@/routes/address';
import { redirect } from 'next/navigation';

export default async function EditAddress({ params }: { params: { id: string } }) {
  const datas = (await getAddress(params.id)) as IAdressData;
  const provinces = await getProvinces();
  if (provinces === null || datas === null) {
    redirect('/500');
  }

  return (
    <>
      <SettingAddressEdit object={datas} provinces={provinces} />
    </>
  );
}
