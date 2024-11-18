'use server';
import { IExtendedProduct } from '@/interfaces/cart';
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

export const getCartSelf = async () => {
  try {
    const response = await axiosInstance.get('/cart/self');
    if (response.status !== 200) {
      return null;
    }
    return response.data.data as IExtendedProduct[];
  } catch {
    return null;
  }
};

export const postAddCartItem = async (id: string, quantity: number) => {
  try {
    const body = { productSizeId: id, quantity: quantity };
    const response = await axiosInstance.post('/cart', body);
    if (response.status !== 200) {
      return null;
    }
    return response.data.data as IExtendedProduct[];
  } catch {
    return null;
  }
};
