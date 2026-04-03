import { useMemo, useState } from 'react';
import { mockGames } from '../../data/mockGames';
import GameCard from './GameCard';
import PaginationBar from './PaginationBar';

function GameGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const totalPages = Math.ceil(mockGames.length / pageSize);

  const currentGames = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return mockGames.slice(start, start + pageSize);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: document.getElementById('games')?.offsetTop - 90 || 0,
      behavior: 'smooth',
    });
  };

  return (
    <section id="games" className="py-5">
      <div className="container">
        <div className="section-heading d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">推荐服务</h2>
            <p className="text-muted mb-0">
              共 {mockGames.length} 个服务，当前第 {currentPage} / {totalPages} 页
            </p>
          </div>

          <div className="d-flex gap-2 flex-wrap">
            <button type="button" className="btn btn-danger btn-sm">热门</button>
            <button type="button" className="btn btn-outline-secondary btn-sm">最新</button>
            <button type="button" className="btn btn-outline-secondary btn-sm">高评分</button>
          </div>
        </div>

        <div className="row g-4">
          {currentGames.map((game) => (
            <div key={game.id} className="col-sm-6 col-lg-3">
              <GameCard game={game} />
            </div>
          ))}
        </div>

        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}

export default GameGrid;