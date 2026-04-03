import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      id: 1,
      badge: '新品上架',
      title: '高端游戏陪玩服务',
      subtitle: '热门专区 · 快速接单 · 语音互动 · 品质认证',
      price: '¥15/小时',
      buttonText: '立即下单',
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 2,
      badge: '热门推荐',
      title: '王者荣耀 / 和平精英 专区',
      subtitle: '娱乐开黑 · 上分代练 · 支持语音试听',
      price: '¥22/小时',
      buttonText: '查看服务',
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 3,
      badge: '限时活动',
      title: '精选高人气服务项目',
      subtitle: '多游戏覆盖 · 订单清晰 · 快速匹配',
      price: '¥18/小时',
      buttonText: '马上体验',
      image:
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1400&q=80',
    },
  ];

  return (
    <section className="hero-carousel-section">
      <div className="container">
        <div className="hero-carousel-wrapper">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={4000}
            controls={true}
            indicators={true}
            fade={true}
            pause="hover"
          >
            {slides.map((slide) => (
              <Carousel.Item key={slide.id}>
                <div
                  className="hero-carousel-slide"
                  style={{
                    backgroundImage: `linear-gradient(90deg, rgba(113, 40, 0, 0.88) 0%, rgba(113, 40, 0, 0.70) 40%, rgba(113, 40, 0, 0.18) 100%), url(${slide.image})`,
                  }}
                >
                  <div className="hero-carousel-content">
                    <span className="hero-badge">{slide.badge}</span>

                    <h1 className="hero-carousel-title">{slide.title}</h1>

                    <p className="hero-carousel-subtitle">{slide.subtitle}</p>

                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      <div className="hero-carousel-price">{slide.price}</div>
                      <button type="button" className="btn hero-carousel-btn">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;