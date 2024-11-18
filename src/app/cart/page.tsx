'use server';
import CartComponents from '@/components/cart/CartComponents';
import { IExtendedProduct } from '@/interfaces/cart';
import { getCartSelf } from '@/routes/cart';
import { Breadcrumb } from 'antd';
import { redirect } from 'next/navigation';
import { GrHomeRounded } from 'react-icons/gr';

export default async function Cart() {
  let newdata: IExtendedProduct[] = [];

  try {
    const data = await getCartSelf();
    if (data == null) {
      return redirect('/500');
    } else {
      newdata = data.map((arr) => ({ ...arr, selected: false }));
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return (
    <div className='container mx-auto p-6 xl:p-0'>
      <div className='mt-12 hidden justify-center md:block'>
        <Breadcrumb
          className=''
          separator='>'
          items={[
            {
              title: <GrHomeRounded />,
              href: '/',
            },
            {
              title: <p className='text-purple1'>Shopping Cart</p>,
            },
          ]}
        />
      </div>
      <div className='mb-4 text-center md:my-8'>
        <span className='text-[23px] font-semibold md:text-3xl'>Shopping Cart</span>
      </div>
      <div>
        <div className='grid grid-cols-1 justify-center gap-6 md:grid-cols-3 md:gap-0 md:space-x-6 lg:space-x-12'>
          <CartComponents data={newdata} />
        </div>
      </div>
    </div>
  );
}
