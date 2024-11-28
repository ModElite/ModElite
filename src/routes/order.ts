'use server';
import { axiosInstance } from '@/utils/axiosInstanceServer';

export const getOrderInfo = async () => {
  try {
    const response = await axiosInstance.get('/order/self');
    if (response.status !== 200) {
      return false;
    }
    // console.log('test',response.data);
    return response.data.data;
  } catch (error) {
    console.log('ERROR', error);
    return false;
  }
};

export const getOrderInfoById = async (orderid: string) => {
  try {
    const response = await axiosInstance.get(`/order/self/${orderid}`);
    if (response.status !== 200) {
      return false;
    }
    console.log('test', response.data);
    return response.data.data;
  } catch (error) {
    console.log('ERROR', error);
    return false;
  }
};
