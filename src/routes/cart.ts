'use server';
import { axiosInstance } from '@/utils/axiosInstanceServer';

export const addToCart = async (productSizeId: string, quantity: number) => {
  try {
    const response = await axiosInstance.post('/cart', {
      productSizeId,
      quantity,
    });
    if (response.status !== 200) {
      return null;
    }
    return response.data.success as boolean;
  } catch {
    return null;
  }
};
