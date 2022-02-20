import { userKeys } from 'queryKeys/userKeys';
import { useQuery } from 'react-query';

import api from './interceptor';

export const useFetchRecentTilLog = (userId: number) => {
  const result = useQuery(userKeys.recentLogs(), () => api.open.getRecentTilLogsUsingGet(userId));
  return result;
};

export const useFetchUserTilStatistics = (userId: number) => {
  return useQuery(userKeys.statistics(), () => api.open.getUserTilStatisticsUsingGet(userId));
};
