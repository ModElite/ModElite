'use server';
import { ITag } from '@/interfaces/tag';
import { axiosInstanceClient } from '@/utils/axiosInstanceClient';

export const getTags = async (tagGroupId?: string) => {
  try {
    const response = await axiosInstanceClient.get(`/tag`, {
      ...(tagGroupId ? { params: { tagGroupId: tagGroupId } } : {}),
    });
    if (response.status !== 200) {
      throw new Error('Failed to fetch tags');
    }
    return response.data.data as ITag[];
  } catch {
    return [];
  }
};
