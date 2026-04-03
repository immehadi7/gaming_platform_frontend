import { mockGames } from '../data/mockGames';

export async function fetchGames({ page = 1, limit = 12 } = {}) {
  const start = (page - 1) * limit;
  const end = start + limit;

  const items = mockGames.slice(start, end);

  return Promise.resolve({
    items,
    pagination: {
      page,
      limit,
      total: mockGames.length,
      totalPages: Math.ceil(mockGames.length / limit),
    },
  });
}