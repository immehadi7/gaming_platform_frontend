import { useEffect, useState } from 'react';
import { fetchGames } from '../services/gameService';

function useGames(page = 1, limit = 12) {
  const [games, setGames] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit,
    total: 0,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadGames() {
      setLoading(true);

      try {
        const response = await fetchGames({ page, limit });

        if (!ignore) {
          setGames(response.items);
          setPagination(response.pagination);
        }
      } catch (error) {
        console.error('Failed to fetch games:', error);
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadGames();

    return () => {
      ignore = true;
    };
  }, [page, limit]);

  return { games, pagination, loading };
}

export default useGames;