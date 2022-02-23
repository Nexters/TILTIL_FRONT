import { userKeys } from 'queryKeys/userKeys';
import { useQuery } from 'react-query';

import api from './interceptor';

export const useFetchRecentTilLog = (userId: number) => {
  const { data, isLoading } = useQuery(userKeys.recentLogs(), () => api.open.getRecentTilLogsUsingGet(userId));
  return { data, isLoading };
};

export const useFetchUserTilStatistics = (userId: number) => {
  const { data } = useQuery(userKeys.statistics(userId), () => api.open.getUserTilStatisticsUsingGet(userId));
  return data;
};

export const useFetchGreetingMessage = (userId: number, isShare?: boolean) => {
  const { data } = useQuery(
    userKeys.greeting(userId),
    () =>
      api.open.getUserGreetingMessageUsingGet(userId, {
        isShare,
      }),
    {
      enabled: Boolean(userId),
    }
  );
  return data;
};
