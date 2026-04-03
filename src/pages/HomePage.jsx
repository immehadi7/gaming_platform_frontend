import { useState } from 'react';
import MainNavbar from '../components/layout/MainNavbar';
import MainFooter from '../components/layout/MainFooter';
import HeroCarousel from '../components/home/HeroCarousel';
import NoticeBar from '../components/home/NoticeBar';
import SearchSection from '../components/home/SearchSection';
import FeatureStrip from '../components/home/FeatureStrip';
import QuickEntrySection from '../components/home/QuickEntrySection';
import CategorySection from '../components/home/CategorySection';
import GameGrid from '../components/home/GameGrid';
import OrderFlowSection from '../components/home/OrderFlowSection';
import AuthModal from '../components/auth/AuthModal';

function HomePage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login-phone');

  const handleOpenLogin = () => {
    setAuthMode('login-phone');
    setIsAuthOpen(true);
  };

  const handleOpenRegister = () => {
    setAuthMode('register');
    setIsAuthOpen(true);
  };

  const handleCloseAuth = () => {
    setIsAuthOpen(false);
  };

  return (
    <div className="site-wrapper">
      <MainNavbar
        onOpenLogin={handleOpenLogin}
        onOpenRegister={handleOpenRegister}
      />

      <HeroCarousel />
      <NoticeBar />
      <SearchSection />
      <FeatureStrip />
      <QuickEntrySection />
      <CategorySection />
      <GameGrid />
      <OrderFlowSection />
      <MainFooter />

      <AuthModal
        isOpen={isAuthOpen}
        mode={authMode}
        setMode={setAuthMode}
        onClose={handleCloseAuth}
      />
    </div>
  );
}

export default HomePage;