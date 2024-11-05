'use server';
import { axiosInstance } from '@/utils/axiosInstanceServer';

export const getGoogleAuth = async () => {
  try {
    const response = await axiosInstance.get('/auth/google');
    console.log(response);
    if (response.status !== 200) {
      return null;
    }
    return response.data.data as string;
  } catch {
    return null;
  }
};
