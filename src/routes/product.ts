'use server';
import { axiosInstance } from '@/utils/axiosInstanceServer';
import { Filters, IProduct, ISort, Paging } from '@/interfaces/product';

export const getProduct = async (filter?: Filters, Paging?: Paging, Order?: ISort) => {
  try {
    const response = await axiosInstance.get('/product', {
      params: {
        filter,
        Paging,
        Order,
      },
    });
    if (response.status !== 200) {
      return null;
    }
    return response.data.data as IProduct[];
  } catch {
    return null;
  }
};

export async function GetProductById(pid: string) {
  try {
    const res = await axiosInstance.get(`/product/${pid}`);
    return res.data.data as IProduct;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return null;
  }
}
