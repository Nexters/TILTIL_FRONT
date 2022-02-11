const tilKeys = {
  all: ['agencies'] as const,
  lists: () => [...tilKeys.all, 'list'] as const,
  list: (filters: { page?: number; size?: number }) => [...tilKeys.lists(), { filters }] as const,
  details: () => [...tilKeys.all, 'detail'] as const,
  detail: (id: number) => [...tilKeys.details(), id] as const,
};

export { tilKeys };
