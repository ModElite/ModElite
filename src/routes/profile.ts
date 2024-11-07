import { axiosInstance } from '@/utils/axiosInstanceServer';
import { IProfileData } from '@/interfaces/profile';

export const getProfile = async () => {
  try {
    const response = await axiosInstance.get('/auth/me');
    if (response.status !== 200) {
      return null;
    }
    return response.data as IProfileData;
  } catch {
    return null;
  }
};
