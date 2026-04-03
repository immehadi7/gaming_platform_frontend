import card01 from '../assets/cards/card-01.jpg';
import card02 from '../assets/cards/card-02.jpg';
import card03 from '../assets/cards/card-03.jpg';
import card04 from '../assets/cards/card-04.jpg';
import card05 from '../assets/cards/card-05.jpg';
import card06 from '../assets/cards/card-06.jpg';
import card07 from '../assets/cards/card-07.jpg';
import card08 from '../assets/cards/card-08.jpg';
import card09 from '../assets/cards/card-09.jpg';
import card10 from '../assets/cards/card-10.jpg';
import card11 from '../assets/cards/card-11.jpg';
import card12 from '../assets/cards/card-12.jpg';
import card13 from '../assets/cards/card-13.jpg';
import card14 from '../assets/cards/card-14.jpg';
import card15 from '../assets/cards/card-15.jpg';
import card16 from '../assets/cards/card-16.jpg';
import card17 from '../assets/cards/card-17.jpg';
import card18 from '../assets/cards/card-18.jpg';
import card19 from '../assets/cards/card-19.jpg';
import card20 from '../assets/cards/card-20.jpg';
import card21 from '../assets/cards/card-21.jpg';
import card22 from '../assets/cards/card-22.jpg';
import card23 from '../assets/cards/card-23.jpg';
import card24 from '../assets/cards/card-24.jpg';
import card25 from '../assets/cards/card-25.jpg';
import card26 from '../assets/cards/card-26.jpg';
import card27 from '../assets/cards/card-27.jpg';
import card28 from '../assets/cards/card-28.jpg';
import card29 from '../assets/cards/card-29.jpg';
import card30 from '../assets/cards/card-30.jpg';
import card31 from '../assets/cards/card-31.jpg';
import card32 from '../assets/cards/card-32.jpg';
import card33 from '../assets/cards/card-33.jpg';
import card34 from '../assets/cards/card-34.jpg';
import card35 from '../assets/cards/card-35.jpg';
import card36 from '../assets/cards/card-36.jpg';

const imagePool = [
  card01, card02, card03, card04, card05, card06,
  card07, card08, card09, card10, card11, card12,
  card13, card14, card15, card16, card17, card18,
  card19, card20, card21, card22, card23, card24,
  card25, card26, card27, card28, card29, card30,
  card31, card32, card33, card34, card35, card36,
];

const nicknamePool = [
  '英雄联盟', '无畏契约', '绝地求生', '原神',
  'CS2', '王者荣耀', '地下城与勇士', '永劫无间',
  'Apex英雄', '崩坏：星穹铁道', 'FIFA Online', '三角洲行动',
];

const rankPool = [
  '大师段', '钻石段', '黄金段', '王者段', '精英段', '挑战者段',
];

const descPool = [
  '高胜率，全英雄，无封禁记录',
  '多把稀有武器，满级通行证，无封禁记录',
  '满命角色，全探索，无封禁记录',
  '高信誉，无封禁，无挂历史记录',
  '一级版时装，极品装备，无封禁记录',
  '高化学反应，无封号历史，适合长期使用',
];

const featurePool = [
  ['高胜率', '全英雄', '豪华皮肤'],
  ['多把稀有武器', '满级通行证', '稳定'],
  ['满命角色', '全探索', '极速号'],
  ['高信誉', '无封禁', '精选皮肤'],
  ['顶级称号', '高化学反应', '竞技号'],
  ['稀有装备', '干净记录', '全天在线'],
];

const themePool = ['pink', 'purple', 'gold', 'gray'];

export const mockGames = Array.from({ length: 120 }, (_, index) => {
  return {
    id: index + 1,
    name: `${nicknamePool[index % nicknamePool.length]} · ${rankPool[index % rankPool.length]}`,
    price: 18 + (index % 5) * 2,
    description: descPool[index % descPool.length],
    image: imagePool[index % imagePool.length],
    tag: '热门',
    game: nicknamePool[index % nicknamePool.length],
    rank: rankPool[index % rankPool.length],
    status: index % 7 === 0 ? '忙碌' : '在线',
    stockLabel: '出租中',
    topTheme: themePool[index % themePool.length],
    deliveryText: `${8 + (index % 15)}分钟内交付`,
    soldCount: 1000 + index * 13,
    features: featurePool[index % featurePool.length],
  };
});