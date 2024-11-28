import React from 'react';
import { getUserInfo } from '@/routes/auth';

export default async function OrderHistory() {
  const userInfo = await getUserInfo();
  console.log('userInfo', userInfo);
  return (
    <>
      {/* <h1 className='text-4xl font-bold'>{userInfo.id}</h1> */}
      <div>
        <div>View Detail</div>
        <div>Order id: {userInfo.id}</div>
        <div>Your Parcel is on the way</div>
        <div>Back</div>
      </div>
      <div>
        <div>
          <div>Shipping</div>
          <div>TH246085143954G</div>
        </div>
        <div>
          <div>Date</div>
          <div>4 April, 2021</div>
        </div>
        <div>
          <div>Contact</div>
          <div>Confirm Order</div>
        </div>
      </div>
      <div>
        <div>
          <div>Order received</div>
        </div>
        <div>
          <div>Processing</div>
        </div>
        <div>
          <div>On the way</div>
        </div>
        <div>
          <div>Delivered</div>
        </div>
      </div>
    </>
  );
}
