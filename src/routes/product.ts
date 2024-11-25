'use server';
import { axiosInstance } from '@/utils/axiosInstanceServer';
import { Filters, ICreateProduct, IProduct, ISort, Paging } from '@/interfaces/product';

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

export const getProductBySeller = async (sellerId: string) => {
  try {
    const response = await axiosInstance.get(`/product/seller/${sellerId}`);
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

export async function CreateProductAPI(body: ICreateProduct) {
  try {
    const response = await axiosInstance.post(`/product`, body);
    if (response.status !== 201) {
      throw new Error('Error creating product');
    }

    return true;
  } catch {
    return false;
  }
}
