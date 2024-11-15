'use server';
import SettingAddress from '@/components/setting/SettingAddress';
import { IAdressData } from '@/interfaces/address';
import { getAddress } from '@/routes/address';

export default async function AddressSetting() {
  const datas = (await getAddress()) as IAdressData[];
  if (datas === null) {
    return;
  }
  return (
    <>
      <SettingAddress objects={datas} />
    </>
  );
}
