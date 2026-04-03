import { mockGames } from '../../data/mockGames';
import GameCard from './GameCard';

function GameGrid() {
  return (
    <section id="games" className="py-5">
      <div className="container">
        <div className="section-heading d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">推荐服务</h2>
            <p className="text-muted mb-0">精选高热度项目，适合首页展示与快速下单</p>
          </div>
          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-danger btn-sm">热门</button>
            <button className="btn btn-outline-secondary btn-sm">最新</button>
            <button className="btn btn-outline-secondary btn-sm">高评分</button>
          </div>
        </div>

        <div className="row g-4">
          {mockGames.map((game) => (
            <div key={game.id} className="col-md-6 col-xl-4">
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GameGrid;