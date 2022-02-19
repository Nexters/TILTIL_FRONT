const userKeys = {
  all: ['user'] as const,
  recentLogs: () => [...userKeys.all, 'recentLog'] as const,
  recentLog: (id: string) => [...userKeys.recentLogs(), id] as const,
};

export { userKeys };
