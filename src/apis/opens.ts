import { useQuery } from 'react-query';

import api from './interceptor';

const useFetchRecentTilLog = (id: string) => {
  const result = useQuery('key', () => api.open.getRecentTilLogsUsingGet(id));

  return result;
};

export { useFetchRecentTilLog };
