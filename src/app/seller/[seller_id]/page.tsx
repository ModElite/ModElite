'use server';

import DashBoardComponent from '@/components/seller/dashboard/DashBoardComponent';
import { getDashBoard, isSeller } from '@/routes/seller';

export default async function Dashboard({ params }: { params: { seller_id: string } }) {
  const seller = await isSeller(params.seller_id);
  if (typeof seller === 'boolean') {
    return;
  }

  const dashboard = await getDashBoard(params.seller_id);
  if (dashboard === null) {
    return;
  }

  return (
    <>
      <DashBoardComponent seller={seller} dashboard={dashboard} />
    </>
  );
}
