import { mockGames } from '../../data/mockGames';
import GameCard from '../home/GameCard';

function RelatedServices() {
  return (
    <section className="py-5">
      <div className="container">
        <h3 className="fw-bold mb-4">相关推荐</h3>

        <div className="row g-4">
          {mockGames.slice(0, 3).map((game) => (
            <div key={game.id} className="col-md-6 col-xl-4">
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedServices;