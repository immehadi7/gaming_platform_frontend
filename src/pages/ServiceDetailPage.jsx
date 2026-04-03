import { useParams } from 'react-router-dom';
import { mockGames } from '../data/mockGames';
import MainNavbar from '../components/layout/MainNavbar';
import MainFooter from '../components/layout/MainFooter';
import ServiceInfo from '../components/service/ServiceInfo';
import QuantitySelector from '../components/service/QuantitySelector';
import RelatedServices from '../components/service/RelatedServices';

function ServiceDetailPage() {
  const { id } = useParams();

  const game = mockGames.find((g) => g.id === parseInt(id));

  if (!game) {
    return <div className="container py-5">服务不存在</div>;
  }

  return (
    <div>
      <MainNavbar />

      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <img
                src={game.image}
                alt={game.name}
                className="img-fluid rounded-4 shadow-sm"
              />
            </div>

            <div className="col-lg-6">
              <ServiceInfo game={game} />

              <div className="mt-4">
                <QuantitySelector />
              </div>

              <div className="mt-4 d-flex gap-3">
                <button className="btn btn-outline-danger flex-fill">
                  加入购物车
                </button>
                <button className="btn btn-danger flex-fill">
                  立即下单
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices />

      <MainFooter />
    </div>
  );
}

export default ServiceDetailPage;