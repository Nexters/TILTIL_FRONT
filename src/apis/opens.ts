import { userKeys } from 'queryKeys/userKeys';
import { useQuery } from 'react-query';

import api from './interceptor';

export const useFetchRecentTilLog = (id: string) => {
  const result = useQuery(userKeys.recentLogs(), () => api.open.getRecentTilLogsUsingGet(id));
  return result;
};

export const useFetchUserTilStatistics = (userId: string) => {
  return useQuery(userKeys.statistics(), () => api.open.getUserTilStatisticsUsingGet(userId));
};
