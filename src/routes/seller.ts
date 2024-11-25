'use server';

import { ISeller, ISellerOrder } from '@/interfaces/seller';
import { axiosInstance } from '@/utils/axiosInstanceServer';

export const isSeller = async (sellerId: string): Promise<ISeller | boolean> => {
  try {
    const response = await axiosInstance.get(`/seller/permission/${sellerId}`);
    if (response.status !== 200) {
      throw new Error('Error');
    }
    return response.data.data as ISeller;
  } catch {
    return false;
  }
};

export const getOrderHistory = async (seller_id: string) => {
  try {
    const res = await axiosInstance.get(`/order/seller/${seller_id}`);
    if (res.status !== 200) {
      return null;
    }
    console.log(res.data.data);
    return res.data.data as ISellerOrder[];
  } catch {
    return null;
  }
};
