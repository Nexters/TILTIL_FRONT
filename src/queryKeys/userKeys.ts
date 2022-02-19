const userKeys = {
  all: ['users'] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: number) => [...userKeys.details(), id] as const,
  me: () => [...userKeys.all, 'me'] as const,
};

export { userKeys };
