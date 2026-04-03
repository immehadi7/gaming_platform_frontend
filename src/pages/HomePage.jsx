import MainNavbar from '../components/layout/MainNavbar';
import MainFooter from '../components/layout/MainFooter';
import HeroSection from '../components/home/HeroSection';
import NoticeBar from '../components/home/NoticeBar';
import SearchSection from '../components/home/SearchSection';
import FeatureStrip from '../components/home/FeatureStrip';
import QuickEntrySection from '../components/home/QuickEntrySection';
import CategorySection from '../components/home/CategorySection';
import FeaturedCompanionSection from '../components/home/FeaturedCompanionSection';
import GameGrid from '../components/home/GameGrid';
import OrderFlowSection from '../components/home/OrderFlowSection';

function HomePage() {
  return (
    <div className="site-wrapper">
      <MainNavbar />
      <HeroSection />
      <NoticeBar />
      <SearchSection />
      <FeatureStrip />
      <QuickEntrySection />
      <CategorySection />
      <FeaturedCompanionSection />
      <GameGrid />
      <OrderFlowSection />
      <MainFooter />
    </div>
  );
}

export default HomePage;