'use server';
import { axiosInstance } from '@/utils/axiosInstanceServer';
import { headers } from 'next/headers';

export const getGoogleAuth = async () => {
  try {
    // get hostname: se-api.sssboom.xyz
    const hostname = headers().get('host');
    const http = hostname?.includes('localhost') ? 'http' : 'https';
    const redirectUrl = `${http}://${hostname}`;
    const response = await axiosInstance.get('/auth/google', {
      params: {
        redirectUrl: redirectUrl,
      },
    });
    if (response.status !== 200) {
      return null;
    }
    return response.data.data as string;
  } catch {
    return null;
  }
};
