'use client';

import ListItemCart from '@/components/cart/ListItemCart';
import Summary from '@/components/cart/Summary';
import { IExtendedProduct } from '@/interfaces/cart';
import { useState } from 'react';
interface MyComponentProps {
  data: IExtendedProduct[];
}
const CartComponents: React.FC<MyComponentProps> = ({ data }) => {
  const [CartItems, setCartItems] = useState<IExtendedProduct[]>(data);
  return (
    <>
      <div className='col-span-1 md:col-span-2'>
        <ListItemCart cartItems={CartItems} setCartItems={setCartItems} />
      </div>
      <Summary my_item={CartItems} />
    </>
  );
};
export default CartComponents;
