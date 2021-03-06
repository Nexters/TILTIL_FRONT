import { tilKeys } from 'queryKeys/tilKeys';
import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { useDialogStore } from 'states/dialogStore';

import { TilRequest } from './api';
import api from './interceptor';

export const useMyTils = (size: number, isCheckedScreenSize: boolean) => {
  return useInfiniteQuery(tilKeys.lists(), ({ pageParam = 0 }) => getTilsPerPage(pageParam, size), {
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextPage : undefined),
    enabled: isCheckedScreenSize,
  });
};

const getTilsPerPage = async (page: number, size: number) => {
  const { data } = await api.tils.readMyTilsUsingGet({
    page,
    size,
  });

  return { tils: data.tils, nextPage: page + 1, hasNext: data.hasNext };
};

export const readTil = (recordId: number) => {
  return useQuery(tilKeys.detail(recordId), () => api.tils.readTilUsingGet(recordId), {
    enabled: !!recordId,
    staleTime: Infinity,
  });
};

export const useTilCreateMutation = () => {
  const { toast } = useDialogStore();
  // eslint-disable-next-line consistent-return
  const create = async (tilRequest: TilRequest) => {
    try {
      const { data } = await api.tils.writeTilUsingPost(tilRequest);
      return data;
    } catch (error: any) {
      toast('암묵지 생성 중 에러가 발생했습니다.');
      throw new Error(error);
    }
  };
  return useMutation(create);
};

export const useTilDeleteMutation = () => {
  const { toast } = useDialogStore();
  // eslint-disable-next-line consistent-return
  const deleteApi = async (id: number) => {
    try {
      const { data } = await api.tils.deleteTilUsingDelete(id);
      toast('암묵지를 삭제했어요.');
      return data;
    } catch (error: any) {
      toast('암묵지 삭제 중 에러가 발생했습니다.');
      throw new Error(error);
    }
  };
  return useMutation(deleteApi);
};

export const useTilEditMutation = () => {
  const { toast } = useDialogStore();
  // eslint-disable-next-line consistent-return
  const editApi = async ({ id, tilRequest }: { id: number; tilRequest: TilRequest }) => {
    try {
      const { data } = await api.tils.updateTilUsingPut(id, tilRequest);
      toast('암묵지를 수정했어요.');
      return data;
    } catch (error: any) {
      toast('암묵지 수정 중 에러가 발생했습니다.');
      throw new Error(error);
    }
  };
  return useMutation(editApi);
};

export const useCanWriteTilUsingGet = () => {
  return useQuery(tilKeys.check, () => api.tils.canWriteTilUsingGet());
};
