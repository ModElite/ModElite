import { axiosInstance } from '@/utils/axiosInstanceServer';

interface IProfileData {
  id: string;
  email: string;
  google_id: string;
  firstName: string;
  lastName: string;
  phone: string;
  profileUrl: string;
  role: string;
  updateAt: string;
  createdAt: string;
}

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
