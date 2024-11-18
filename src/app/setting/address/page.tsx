'use server';
import SettingAddress from '@/components/setting/SettingAddress';
import { getAddress } from '@/routes/address';

export default async function AddressSetting() {
  const datas = await getAddress();
  if (datas === null) {
    return;
  }
  return (
    <>
      <SettingAddress objects={datas} />
    </>
  );
}
