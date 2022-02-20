const userKeys = {
  all: ['user'] as const,
  recentLogs: () => [...userKeys.all, 'recentLog'] as const,
  recentLog: (id: string) => [...userKeys.recentLogs(), id] as const,
  statistics: () => [...userKeys.all, 'statistics'] as const,
  me: () => [...userKeys.all, 'me'] as const,
};

export { userKeys };
