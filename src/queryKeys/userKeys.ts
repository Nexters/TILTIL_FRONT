const userKeys = {
  all: ['user'] as const,
  recentLogs: () => [...userKeys.all, 'recentLog'] as const,
  recentLog: (id: number) => [...userKeys.recentLogs(), id] as const,
  statistics: (id: number) => [...userKeys.all, 'statistics', id] as const,
  me: () => [...userKeys.all, 'me'] as const,
  greeting: (id: number) => [...userKeys.all, 'greeting', id] as const,
};

export { userKeys };
