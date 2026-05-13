/* ══════════════════════════════════════════════════════════════
   EXPLORE PAGE - New Design JavaScript
   Thai Streetfood Softpower Theme
   ══════════════════════════════════════════════════════════════ */

// Initialize map
let map;
let markers = [];
let activeMarker = null;

// Bangkok center coordinates
const bangkokCenter = [13.7563, 100.5018];

// Location data with full details
let locationsData = [
  {
    id: 1,
    title: 'ก๋วยจั๊บนายเอ็ก',
    titleZh: '乃艾卷粉',
    subtitle: '(Nai Ek Roll Noodle)',
    subtitleZh: '(Nai Ek 卷粉)',
    icon: '🍜',
    area: 'เยาวราช',
    areaZh: '耀华力',
    rating: 3.9,
    distance: '3.9 km',
    category: 'food',
    lat: 13.7563,
    lng: 100.5018,
    hours: 'เปิดอยู่จนถึง 23:59',
    hoursZh: '营业至 23:59',
    address: 'ถนนเยาวราช (ปากซอยเยาวราช 9)\nอยู่ด้านซ้ายมือของถนนเยาวราช\nเยื้องๆกับโรงแรม Royal Hotel Bangkok',
    addressZh: '耀华力路（耀华力巷9号入口）\n位于耀华力路左侧\n靠近曼谷皇家酒店',
    transport: [
      { icon: '🚇', text: '200 ม. จาก MRT วัดมังกร', textZh: '距离 MRT 龙莲寺站 200 米' },
      { icon: '🚇', text: '800 ม. จาก MRT หัวลำโพง', textZh: '距离 MRT 华南蓬站 800 米' }
    ],
    phone: '022264651',
    images: [
      'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80'
    ]
  },
  {
    id: 2,
    title: 'เปิดป่าพริกไทย',
    titleZh: '泰式胡椒餐厅',
    subtitle: '(Perd Pa Prik Thai)',
    subtitleZh: '(Perd Pa Prik Thai)',
    icon: '🍝',
    area: 'ท่าเตียน',
    areaZh: '塔田',
    rating: 4.2,
    distance: '4.2 km',
    category: 'food',
    lat: 13.7440,
    lng: 100.5255,
    hours: 'เปิดอยู่จนถึง 22:00',
    hoursZh: '营业至 22:00',
    address: 'ถนนมหาราช แขวงพระบรมมหาราชวัง\nใกล้วัดพระเชตุพนวิมลมังคลาราม\nเยื้องตลาดท่าเตียน',
    addressZh: '玛哈拉路 帕博隆玛哈拉旺区\n靠近卧佛寺\n塔田市场对面',
    transport: [
      { icon: '🚇', text: '500 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 500 米' },
      { icon: '🚢', text: '300 ม. จากท่าเรือท่าเตียน', textZh: '距离塔田码头 300 米' }
    ],
    phone: '022234567',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80'
    ]
  },
  {
    id: 3,
    title: 'ย่านสตรีทฟู้ด ตลาดน้อย',
    titleZh: '塔拉诺街头美食区',
    subtitle: '(Talad Noi Street Food)',
    subtitleZh: '(Talad Noi 街头美食)',
    icon: '🥘',
    area: 'สตรีทฟู้ด',
    areaZh: '街头美食',
    rating: 4.5,
    distance: '4.5 km',
    category: 'food',
    lat: 13.7308,
    lng: 100.5214,
    hours: 'เปิดอยู่จนถึง 21:00',
    hoursZh: '营业至 21:00',
    address: 'ซอยวานิช 2 แขวงตลาดน้อย\nเขตสัมพันธวงศ์\nใกล้วัดปทุมคงคา',
    addressZh: '瓦尼巷2号 塔拉诺区\n三攀他旺县\n靠近帕吞空卡寺',
    transport: [
      { icon: '🚇', text: '600 ม. จาก MRT หัวลำโพง', textZh: '距离 MRT 华南蓬站 600 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ตลาดน้อย', textZh: '塔拉诺公交站' }
    ],
    phone: '022345678',
    images: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 4,
    title: 'ติ่มซำจีนแท้',
    titleZh: '正宗中式点心',
    subtitle: '(Authentic Dim Sum)',
    subtitleZh: '(正宗点心)',
    icon: '🥟',
    area: 'เยาวราช',
    areaZh: '耀华力',
    rating: 4.1,
    distance: '4.1 km',
    category: 'food',
    lat: 13.7650,
    lng: 100.5380,
    hours: 'เปิดอยู่จนถึง 20:00',
    hoursZh: '营业至 20:00',
    address: 'ถนนเยาวราช ซอย 11\nแขวงสัมพันธวงศ์\nใกล้ตลาดสำเพ็ง',
    addressZh: '耀华力路 巷11号\n三攀他旺区\n靠近三攀市场',
    transport: [
      { icon: '🚇', text: '400 ม. จาก MRT วัดมังกร', textZh: '距离 MRT 龙莲寺站 400 米' },
      { icon: '🚇', text: '700 ม. จาก MRT สามยอด', textZh: '距离 MRT 三约站 700 米' }
    ],
    phone: '022267890',
    images: [
      'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80'
    ]
  },
  // === NEW LOCATIONS FROM STREET FOOD PAGE (36 RESTAURANTS) ===
  {
    id: 5,
    title: 'โกโก้ข้าวมันไก่ประตูน้ำ',
    titleZh: '海南鸡饭',
    subtitle: '(Khao Man Gai)',
    subtitleZh: '(海南鸡饭)',
    icon: '🍗',
    area: 'ประตูน้ำ',
    areaZh: '水门',
    rating: 4.7,
    distance: '5.2 km',
    category: 'food',
    lat: 13.7501,
    lng: 100.5413,
    hours: 'เปิดอยู่จนถึง 14:00',
    hoursZh: '营业至 14:00',
    address: 'ประตูน้ำ กรุงเทพฯ\nข้าวมันไก่สูตรดั้งเดิม',
    addressZh: '水门 曼谷\n传统海南鸡饭',
    transport: [
      { icon: '🚇', text: '300 ม. จาก BTS ราชเทวี', textZh: '距离 BTS 拉差贴威站 300 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ประตูน้ำ', textZh: '水门公交站' }
    ],
    phone: '02-252-6325',
    images: [
      'https://images.unsplash.com/photo-1562159278-1253a58da141?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 6,
    title: 'เจริญแสงสีลม',
    titleZh: '昌盛石龙军',
    subtitle: '(Charoen Saeng Silom)',
    subtitleZh: '(昌盛石龙军)',
    icon: '🍛',
    area: 'สีลม',
    areaZh: '石龙军',
    rating: 4.5,
    distance: '3.8 km',
    category: 'food',
    lat: 13.7237,
    lng: 100.5173,
    hours: 'เปิดอยู่จนถึง 22:00',
    hoursZh: '营业至 22:00',
    address: 'สีลม กรุงเทพฯ\nอาหารไทยรสชาติต้นตำรับ',
    addressZh: '石龙军 曼谷\n正宗泰国菜',
    transport: [
      { icon: '🚇', text: '200 ม. จาก BTS ศาลาแดง', textZh: '距离 BTS 沙拉当站 200 米' },
      { icon: '🚇', text: '400 ม. จาก MRT สีลม', textZh: '距离 MRT 石龙军站 400 米' }
    ],
    phone: '02-234-5678',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80'
    ]
  },
  {
    id: 7,
    title: 'สีมรกต',
    titleZh: '翡翠餐厅',
    subtitle: '(Seemorakat Restaurant)',
    subtitleZh: '(翡翠餐厅)',
    icon: '🥘',
    area: 'สีมรกต',
    areaZh: '翡翠区',
    rating: 4.6,
    distance: '4.3 km',
    category: 'food',
    lat: 13.7363,
    lng: 100.5152,
    hours: 'เปิดอยู่จนถึง 21:00',
    hoursZh: '营业至 21:00',
    address: 'สีมรกต กรุงเทพฯ\nอาหารไทยสไตล์โฮมเมด',
    addressZh: '翡翠区 曼谷\n家常泰国菜',
    transport: [
      { icon: '🚇', text: '500 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 500 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์สีมรกต', textZh: '翡翠公交站' }
    ],
    phone: '02-245-7890',
    images: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 8,
    title: 'เผ็ดมาก',
    titleZh: '很辣餐厅',
    subtitle: '(Ped Mak - Very Spicy)',
    subtitleZh: '(很辣餐厅)',
    icon: '🌶️',
    area: 'เผ็ดมาก',
    areaZh: '很辣区',
    rating: 4.8,
    distance: '6.5 km',
    category: 'food',
    lat: 13.7199,
    lng: 100.5849,
    hours: 'เปิดอยู่จนถึง 20:00',
    hoursZh: '营业至 20:00',
    address: 'เผ็ดมาก กรุงเทพฯ\nอาหารรสจัดจ้าน เผ็ดร้อนสะใจ',
    addressZh: '很辣区 曼谷\n超辣美食',
    transport: [
      { icon: '🚇', text: '600 ม. จาก BTS อ่อนนุช', textZh: '距离 BTS 翁努站 600 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์เผ็ดมาก', textZh: '很辣公交站' }
    ],
    phone: '02-256-1234',
    images: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 9,
    title: 'ประจักษ์เป็ดย่าง',
    titleZh: '烤鸭店',
    subtitle: '(Prajak Roasted Duck)',
    subtitleZh: '(烤鸭店)',
    icon: '🦆',
    area: 'ประจักษ์เป็ดย่าง',
    areaZh: '烤鸭区',
    rating: 4.9,
    distance: '3.7 km',
    category: 'food',
    lat: 13.7202,
    lng: 100.5161,
    hours: 'เปิดอยู่จนถึง 18:00',
    hoursZh: '营业至 18:00',
    address: 'ประจักษ์เป็ดย่าง กรุงเทพฯ\nเป็ดย่างหนังกรอบ เปิดมากว่า 100 ปี',
    addressZh: '烤鸭区 曼谷\n烤鸭皮脆，开业超过100年',
    transport: [
      { icon: '🚇', text: '400 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 400 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ประจักษ์', textZh: '烤鸭公交站' }
    ],
    phone: '02-234-9876',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 10,
    title: 'ไอซา รสดี',
    titleZh: '美味餐厅',
    subtitle: '(Aisa Rosdee)',
    subtitleZh: '(美味餐厅)',
    icon: '🍲',
    area: 'ไอซา รสดี',
    areaZh: '美味区',
    rating: 4.4,
    distance: '4.9 km',
    category: 'food',
    lat: 13.7593,
    lng: 100.4984,
    hours: 'เปิดอยู่จนถึง 21:00',
    hoursZh: '营业至 21:00',
    address: 'ไอซา รสดี กรุงเทพฯ\nอาหารไทยรสชาติดี ราคาประหยัด',
    addressZh: '美味区 曼谷\n泰国菜味道好，价格实惠',
    transport: [
      { icon: '🚇', text: '300 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 300 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ไอซา', textZh: '美味公交站' }
    ],
    phone: '02-267-5432',
    images: [
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 11,
    title: 'ข้าวแกงเจ๊กปุ๋ย',
    titleZh: '咖喱饭',
    subtitle: '(Khao Gaeng - Curry Rice)',
    subtitleZh: '(咖喱饭)',
    icon: '🍛',
    area: 'ข้าวแกงเจ๊กปุ๋ย',
    areaZh: '咖喱饭区',
    rating: 4.6,
    distance: '4.4 km',
    category: 'food',
    lat: 13.7466,
    lng: 100.5097,
    hours: 'เปิดอยู่จนถึง 15:00',
    hoursZh: '营业至 15:00',
    address: 'ข้าวแกงเจ๊กปุ๋ย กรุงเทพฯ\nข้าวราดแกงหลากหลายเมนู สดใหม่ทุกวัน',
    addressZh: '咖喱饭区 曼谷\n多种咖喱饭，每天新鲜',
    transport: [
      { icon: '🚇', text: '350 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 350 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ข้าวแกง', textZh: '咖喱饭公交站' }
    ],
    phone: '02-278-3456',
    images: [
      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 12,
    title: 'โจ๊กสามย่าน',
    titleZh: '三燕粥',
    subtitle: '(Joke Samyan - Rice Porridge)',
    subtitleZh: '(三燕粥)',
    icon: '🥣',
    area: 'โจ๊กสามย่าน',
    areaZh: '三燕',
    rating: 4.7,
    distance: '4.1 km',
    category: 'food',
    lat: 13.7344,
    lng: 100.5284,
    hours: 'เปิดอยู่จนถึง 14:00',
    hoursZh: '营业至 14:00',
    address: 'โจ๊กสามย่าน กรุงเทพฯ\nโจ๊กหมูสูตรโบราณ เนื้อนุ่ม น้ำซุปเข้มข้น',
    addressZh: '三燕 曼谷\n传统猪肉粥，肉嫩汤浓',
    transport: [
      { icon: '🚇', text: '200 ม. จาก MRT สามย่าน', textZh: '距离 MRT 三燕站 200 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์สามย่าน', textZh: '三燕公交站' }
    ],
    phone: '02-289-6789',
    images: [
      'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 13,
    title: 'ไก่ทอดเจ๊ฮี',
    titleZh: '炸鸡',
    subtitle: '(Fried Chicken)',
    subtitleZh: '(炸鸡)',
    icon: '🍗',
    area: 'ไก่ทอดเจ๊ฮี',
    areaZh: '炸鸡区',
    rating: 4.8,
    distance: '4.6 km',
    category: 'food',
    lat: 13.7335,
    lng: 100.5458,
    hours: 'เปิดอยู่จนถึง 22:00',
    hoursZh: '营业至 22:00',
    address: 'ไก่ทอดเจ๊ฮี กรุงเทพฯ\nไก่ทอดกรอบนอกนุ่มใน เครื่องเทศหอมกรุ่น',
    addressZh: '炸鸡区 曼谷\n炸鸡外酥内嫩，香料芬芳',
    transport: [
      { icon: '🚇', text: '400 ม. จาก MRT ศูนย์วัฒนธรรม', textZh: '距离 MRT 文化中心站 400 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ไก่ทอด', textZh: '炸鸡公交站' }
    ],
    phone: '02-290-1234',
    images: [
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 14,
    title: 'ก พาย',
    titleZh: '泰式派',
    subtitle: '(Ka Pai - Thai Pie)',
    subtitleZh: '(泰式派)',
    icon: '🥧',
    area: 'ก พาย',
    areaZh: 'K派区',
    rating: 4.6,
    distance: '4.8 km',
    category: 'food',
    lat: 13.7543,
    lng: 100.4986,
    hours: 'เปิดอยู่จนถึง 18:00',
    hoursZh: '营业至 18:00',
    address: 'ก พาย กรุงเทพฯ\nพายไทยสูตรโบราณ หอมเนยละมุน',
    addressZh: 'K派区 曼谷\n传统泰式派，黄油香浓',
    transport: [
      { icon: '🚇', text: '300 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 300 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ก พาย', textZh: 'K派公交站' }
    ],
    phone: '02-301-2345',
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 15,
    title: 'บัวลอยเทคูเก้า',
    titleZh: '汤圆',
    subtitle: '(Bua Loy - Sweet Dumplings)',
    subtitleZh: '(汤圆)',
    icon: '🍡',
    area: 'บัวลอยเทคูเก้า',
    areaZh: '汤圆区',
    rating: 4.7,
    distance: '4.9 km',
    category: 'food',
    lat: 13.7534,
    lng: 100.4991,
    hours: 'เปิดอยู่จนถึง 20:00',
    hoursZh: '营业至 20:00',
    address: 'บัวลอยเทคูเก้า กรุงเทพฯ\nบัวลอยงาดำน้ำขิง หวานมัน อุ่นท้อง',
    addressZh: '汤圆区 曼谷\n黑芝麻汤圆配姜汤，香甜暖胃',
    transport: [
      { icon: '🚇', text: '350 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 350 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์บัวลอย', textZh: '汤圆公交站' }
    ],
    phone: '02-302-3456',
    images: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 16,
    title: 'ขนมเบื้องไทยขาวัง',
    titleZh: '泰式薄饼',
    subtitle: '(Thai Crepe)',
    subtitleZh: '(泰式薄饼)',
    icon: '🥞',
    area: 'แพร่งนรา',
    areaZh: '帕能那拉',
    rating: 4.8,
    distance: '4.7 km',
    category: 'food',
    lat: 13.7531,
    lng: 100.4975,
    hours: 'เปิดอยู่จนถึง 19:00',
    hoursZh: '营业至 19:00',
    address: 'แพร่งนรา กรุงเทพฯ\nขนมเบื้องกรอบ ไส้ฝอยทอง หวานมัน',
    addressZh: '帕能那拉 曼谷\n脆皮薄饼，金丝馅料，香甜可口',
    transport: [
      { icon: '🚇', text: '300 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 300 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์แพร่งนรา', textZh: '帕能那拉公交站' }
    ],
    phone: '02-303-4567',
    images: [
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 17,
    title: 'ปาท่องโก๋เสวย',
    titleZh: '油条',
    subtitle: '(Chinese Donut)',
    subtitleZh: '(油条)',
    icon: '🥖',
    area: 'เยาวราช',
    areaZh: '耀华力',
    rating: 4.9,
    distance: '4.2 km',
    category: 'food',
    lat: 13.7401,
    lng: 100.5108,
    hours: 'เปิดอยู่จนถึง 12:00',
    hoursZh: '营业至 12:00',
    address: 'เยาวราช กรุงเทพฯ\nปาท่องโก๋กรอบนอกนุ่มใน จิ้มสังขยา',
    addressZh: '耀华力 曼谷\n油条外酥内软，蘸椰奶蛋',
    transport: [
      { icon: '🚇', text: '250 ม. จาก MRT วัดมังกร', textZh: '距离 MRT 龙莲寺站 250 米' },
      { icon: '🚇', text: '600 ม. จาก MRT หัวลำโพง', textZh: '距离 MRT 华南蓬站 600 米' }
    ],
    phone: '02-304-5678',
    images: [
      'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 18,
    title: 'มนต์ นมสด',
    titleZh: '鲜奶甜品',
    subtitle: '(Fresh Milk Dessert)',
    subtitleZh: '(鲜奶甜品)',
    icon: '🥛',
    area: 'เสาชิงช้า',
    areaZh: '秋千柱',
    rating: 4.7,
    distance: '4.9 km',
    category: 'food',
    lat: 13.7533,
    lng: 100.5015,
    hours: 'เปิดอยู่จนถึง 22:00',
    hoursZh: '营业至 22:00',
    address: 'เสาชิงช้า กรุงเทพฯ\nนมสดเย็นๆ ขนมหวานนมสด หอมมัน',
    addressZh: '秋千柱 曼谷\n冰鲜奶，鲜奶甜品，香浓可口',
    transport: [
      { icon: '🚇', text: '400 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 400 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์เสาชิงช้า', textZh: '秋千柱公交站' }
    ],
    phone: '02-305-6789',
    images: [
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 19,
    title: 'ลอดช่องสิงคโปร์',
    titleZh: '班兰果冻',
    subtitle: '(Lod Chong - Pandan Jelly)',
    subtitleZh: '(班兰果冻)',
    icon: '🍧',
    area: 'ลอดช่องสิงคโปร์',
    areaZh: '新加坡区',
    rating: 4.5,
    distance: '4.3 km',
    category: 'food',
    lat: 13.7410,
    lng: 100.5126,
    hours: 'เปิดอยู่จนถึง 21:00',
    hoursZh: '营业至 21:00',
    address: 'ลอดช่องสิงคโปร์ กรุงเทพฯ\nลอดช่องใบเตย กะทิหอมมัน น้ำแข็งใส',
    addressZh: '新加坡区 曼谷\n班兰果冻，椰奶香浓，冰凉爽口',
    transport: [
      { icon: '🚇', text: '300 ม. จาก MRT วัดมังกร', textZh: '距离 MRT 龙莲寺站 300 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ลอดช่อง', textZh: '班兰公交站' }
    ],
    phone: '02-306-7890',
    images: [
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 20,
    title: 'ทับทิมกรอบวงเวียนใหญ่',
    titleZh: '红宝石甜品',
    subtitle: '(Water Chestnut Dessert)',
    subtitleZh: '(红宝石甜品)',
    icon: '🍨',
    area: 'วงเวียนใหญ่',
    areaZh: '大圆环',
    rating: 4.8,
    distance: '3.5 km',
    category: 'food',
    lat: 13.7258,
    lng: 100.4925,
    hours: 'เปิดอยู่จนถึง 20:00',
    hoursZh: '营业至 20:00',
    address: 'วงเวียนใหญ่ กรุงเทพฯ\nทับทิมกรอบเม็ดใหญ่ กะทิหอม น้ำแข็งเยอะ',
    addressZh: '大圆环 曼谷\n大颗红宝石，椰奶香浓，冰块充足',
    transport: [
      { icon: '🚇', text: '500 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 500 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์วงเวียนใหญ่', textZh: '大圆环公交站' }
    ],
    phone: '02-307-8901',
    images: [
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 21,
    title: 'ณัฐพรไอศกรีม',
    titleZh: '冰淇淋',
    subtitle: '(Nattaporn Ice Cream)',
    subtitleZh: '(冰淇淋)',
    icon: '🍦',
    area: 'ณัฐพรไอศกรีม',
    areaZh: '冰淇淋区',
    rating: 4.6,
    distance: '4.9 km',
    category: 'food',
    lat: 13.7536,
    lng: 100.4981,
    hours: 'เปิดอยู่จนถึง 22:00',
    hoursZh: '营业至 22:00',
    address: 'ณัฐพรไอศกรีม กรุงเทพฯ\nไอศกรีมโฮมเมด รสชาติหลากหลาย',
    addressZh: '冰淇淋区 曼谷\n自制冰淇淋，口味多样',
    transport: [
      { icon: '🚇', text: '350 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 350 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ไอศกรีม', textZh: '冰淇淋公交站' }
    ],
    phone: '02-308-9012',
    images: [
      'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 22,
    title: 'ปังนา',
    titleZh: '面包甜品',
    subtitle: '(Pang Na Bread Dessert)',
    subtitleZh: '(面包甜品)',
    icon: '🍞',
    area: 'บรรทัดทอง',
    areaZh: '金线路',
    rating: 4.7,
    distance: '4.0 km',
    category: 'food',
    lat: 13.7441,
    lng: 100.5226,
    hours: 'เปิดอยู่จนถึง 23:00',
    hoursZh: '营业至 23:00',
    address: 'บรรทัดทอง กรุงเทพฯ\nขนมปังนมสด ไอศกรีม ท็อปปิ้งเพียบ',
    addressZh: '金线路 曼谷\n鲜奶面包，冰淇淋，配料丰富',
    transport: [
      { icon: '🚇', text: '400 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 400 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์บรรทัดทอง', textZh: '金线路公交站' }
    ],
    phone: '02-309-0123',
    images: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 23,
    title: 'หมูปิ้งเจี๊ยบวัน',
    titleZh: '烤猪肉串',
    subtitle: '(Grilled Pork Skewers)',
    subtitleZh: '(烤猪肉串)',
    icon: '🍢',
    area: 'สีลม',
    areaZh: '石龙军',
    rating: 4.8,
    distance: '3.9 km',
    category: 'food',
    lat: 13.7275,
    lng: 100.5361,
    hours: 'เปิดอยู่จนถึง 23:00',
    hoursZh: '营业至 23:00',
    address: 'สีลม กรุงเทพฯ\nหมูปิ้งหมักเครื่องเทศ ย่างไฟถ่าน หอมกรุ่น',
    addressZh: '石龙军 曼谷\n香料腌制烤猪肉，炭火烤制，香气扑鼻',
    transport: [
      { icon: '🚇', text: '250 ม. จาก BTS ศาลาแดง', textZh: '距离 BTS 沙拉当站 250 米' },
      { icon: '🚇', text: '450 ม. จาก MRT สีลม', textZh: '距离 MRT 石龙军站 450 米' }
    ],
    phone: '02-310-1234',
    images: [
      'https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 24,
    title: 'ลูกชิ้นแพร่งนรา',
    titleZh: '肉丸',
    subtitle: '(Meatballs)',
    subtitleZh: '(肉丸)',
    icon: '🍡',
    area: 'แพร่งนรา',
    areaZh: '帕能那拉',
    rating: 4.6,
    distance: '4.9 km',
    category: 'food',
    lat: 13.7535,
    lng: 100.4981,
    hours: 'เปิดอยู่จนถึง 20:00',
    hoursZh: '营业至 20:00',
    address: 'แพร่งนรา กรุงเทพฯ\nลูกชิ้นเด้งๆ ทำสดใหม่ทุกวัน',
    addressZh: '帕能那拉 曼谷\n弹牙肉丸，每天新鲜制作',
    transport: [
      { icon: '🚇', text: '300 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 300 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์แพร่งนรา', textZh: '帕能那拉公交站' }
    ],
    phone: '02-311-2345',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80'
    ]
  },
  {
    id: 25,
    title: 'ก้วยจั๊บมีสเตอร์โอ',
    titleZh: '卷粉立体声',
    subtitle: '(Rolled Noodles Stereo)',
    subtitleZh: '(卷粉立体声)',
    icon: '🍜',
    area: 'ก้วยจั๊บมีสเตอร์โอ',
    areaZh: '卷粉区',
    rating: 4.7,
    distance: '3.6 km',
    category: 'food',
    lat: 13.7107,
    lng: 100.5175,
    hours: 'เปิดอยู่จนถึง 16:00',
    hoursZh: '营业至 16:00',
    address: 'ก้วยจั๊บมีสเตอร์โอ กรุงเทพฯ\nก้วยจั๊บน้ำซุปเข้มข้น เครื่องในสด',
    addressZh: '卷粉区 曼谷\n卷粉汤浓郁，内脏新鲜',
    transport: [
      { icon: '🚇', text: '600 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 600 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ก้วยจั๊บ', textZh: '卷粉公交站' }
    ],
    phone: '02-312-3456',
    images: [
      'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 26,
    title: 'ถุยข่ายตลาดพลู',
    titleZh: '泰式小吃',
    subtitle: '(Thuy Khai Snack)',
    subtitleZh: '(泰式小吃)',
    icon: '🥟',
    area: 'ตลาดพลู',
    areaZh: '槟榔市场',
    rating: 4.5,
    distance: '3.2 km',
    category: 'food',
    lat: 13.7214,
    lng: 100.4851,
    hours: 'เปิดอยู่จนถึง 15:00',
    hoursZh: '营业至 15:00',
    address: 'ตลาดพลู กรุงเทพฯ\nขนมจีบ ขนมจีน ของกินเล่นหลากหลาย',
    addressZh: '槟榔市场 曼谷\n烧卖，米粉，各种小吃',
    transport: [
      { icon: '🚇', text: '700 ม. จาก BTS กรุงธนบุรี', textZh: '距离 BTS 吞武里站 700 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ตลาดพลู', textZh: '槟榔市场公交站' }
    ],
    phone: '02-313-4567',
    images: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 27,
    title: 'น้องตาม & น้องเก๋า',
    titleZh: '耀华力小吃',
    subtitle: '(Yaowarat Snacks)',
    subtitleZh: '(耀华力小吃)',
    icon: '🥠',
    area: 'เยาวราช',
    areaZh: '耀华力',
    rating: 4.8,
    distance: '4.2 km',
    category: 'food',
    lat: 13.7408,
    lng: 100.5110,
    hours: 'เปิดอยู่จนถึง 22:00',
    hoursZh: '营业至 22:00',
    address: 'เยาวราช กรุงเทพฯ\nของกินเล่นสไตล์จีน หลากหลายเมนู',
    addressZh: '耀华力 曼谷\n中式小吃，菜单丰富',
    transport: [
      { icon: '🚇', text: '250 ม. จาก MRT วัดมังกร', textZh: '距离 MRT 龙莲寺站 250 米' },
      { icon: '🚇', text: '650 ม. จาก MRT หัวลำโพง', textZh: '距离 MRT 华南蓬站 650 米' }
    ],
    phone: '02-314-5678',
    images: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 28,
    title: 'คุณนุ้ย กะหรี่ปั๊บ',
    titleZh: '咖喱角',
    subtitle: '(Curry Puff)',
    subtitleZh: '(咖喱角)',
    icon: '🥟',
    area: 'คุณนุ้ย กะหรี่ปั๊บ',
    areaZh: '咖喱角区',
    rating: 4.9,
    distance: '4.1 km',
    category: 'food',
    lat: 13.7342,
    lng: 100.5133,
    hours: 'เปิดอยู่จนถึง 18:00',
    hoursZh: '营业至 18:00',
    address: 'คุณนุ้ย กะหรี่ปั๊บ กรุงเทพฯ\nกะหรี่ปั๊บแป้งกรอบ ไส้แน่น รสชาติเด็ด',
    addressZh: '咖喱角区 曼谷\n咖喱角皮脆，馅料饱满，味道绝佳',
    transport: [
      { icon: '🚇', text: '400 ม. จาก MRT สามย่าน', textZh: '距离 MRT 三燕站 400 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์กะหรี่ปั๊บ', textZh: '咖喱角公交站' }
    ],
    phone: '02-315-6789',
    images: [
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 29,
    title: 'ขนมจีบเป๊ะเจี๊ยะ',
    titleZh: '烧卖',
    subtitle: '(Dim Sum)',
    subtitleZh: '(烧卖)',
    icon: '🥟',
    area: 'ขนมจีบเป๊ะเจี๊ยะ',
    areaZh: '烧卖区',
    rating: 4.7,
    distance: '4.5 km',
    category: 'food',
    lat: 13.7457,
    lng: 100.5092,
    hours: 'เปิดอยู่จนถึง 14:00',
    hoursZh: '营业至 14:00',
    address: 'ขนมจีบเป๊ะเจี๊ยะ กรุงเทพฯ\nขนมจีบหมูกุ้ง ไส้แน่น รสชาติกลมกล่อม',
    addressZh: '烧卖区 曼谷\n猪肉虾烧卖，馅料饱满，味道圆润',
    transport: [
      { icon: '🚇', text: '350 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 350 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ขนมจีบ', textZh: '烧卖公交站' }
    ],
    phone: '02-316-7890',
    images: [
      'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 30,
    title: 'กล้วยทอดนางเล็ง',
    titleZh: '炸香蕉',
    subtitle: '(Fried Banana)',
    subtitleZh: '(炸香蕉)',
    icon: '🍌',
    area: 'กล้วยทอดนางเล็ง',
    areaZh: '炸香蕉区',
    rating: 4.6,
    distance: '5.1 km',
    category: 'food',
    lat: 13.7594,
    lng: 100.5126,
    hours: 'เปิดอยู่จนถึง 21:00',
    hoursZh: '营业至 21:00',
    address: 'กล้วยทอดนางเล็ง กรุงเทพฯ\nกล้วยทอดกรอบนอกนุ่มใน หอมหวาน',
    addressZh: '炸香蕉区 曼谷\n炸香蕉外酥内软，香甜可口',
    transport: [
      { icon: '🚇', text: '450 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 450 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์กล้วยทอด', textZh: '炸香蕉公交站' }
    ],
    phone: '02-317-8901',
    images: [
      'https://images.unsplash.com/photo-1587334207976-c7d5f6d10b06?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 31,
    title: 'อังกู่',
    titleZh: '红龟粿',
    subtitle: '(Angku - Red Turtle Cake)',
    subtitleZh: '(红龟粿)',
    icon: '🥮',
    area: 'ตลาดน้อย',
    areaZh: '小市场',
    rating: 4.8,
    distance: '4.1 km',
    category: 'food',
    lat: 13.7344,
    lng: 100.5123,
    hours: 'เปิดอยู่จนถึง 17:00',
    hoursZh: '营业至 17:00',
    address: 'ตลาดน้อย กรุงเทพฯ\nอังกู่ไส้ถั่วเขียว หอมหวาน นุ่มนิ่ม',
    addressZh: '小市场 曼谷\n绿豆馅红龟粿，香甜软糯',
    transport: [
      { icon: '🚇', text: '500 ม. จาก MRT หัวลำโพง', textZh: '距离 MRT 华南蓬站 500 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ตลาดน้อย', textZh: '小市场公交站' }
    ],
    phone: '02-318-9012',
    images: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 32,
    title: 'ทิพย์สมัย ผัดไทยประตูผี',
    titleZh: '泰式炒河粉',
    subtitle: '(Thip Samai Pad Thai)',
    subtitleZh: '(泰式炒河粉)',
    icon: '🍝',
    area: 'ประตูผี',
    areaZh: '鬼门',
    rating: 4.9,
    distance: '4.8 km',
    category: 'food',
    lat: 13.7527,
    lng: 100.5048,
    hours: 'เปิดอยู่จนถึง 02:00',
    hoursZh: '营业至 02:00',
    address: 'ประตูผี กรุงเทพฯ\nผัดไทยห่อไข่ ตำนานความอร่อย มิชลินไกด์',
    addressZh: '鬼门 曼谷\n蛋包泰式炒河粉，传奇美味，米其林推荐',
    transport: [
      { icon: '🚇', text: '400 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 400 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ประตูผี', textZh: '鬼门公交站' }
    ],
    phone: '02-319-0123',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80'
    ]
  },
  {
    id: 33,
    title: 'ต้อยถ้วยเคี้ยมเอื้อ',
    titleZh: '碗面汤',
    subtitle: '(Toy Tuay Noodle Soup)',
    subtitleZh: '(碗面汤)',
    icon: '🍜',
    area: 'ต้อยถ้วยเคี้ยมเอื้อ',
    areaZh: '碗面区',
    rating: 4.7,
    distance: '5.3 km',
    category: 'food',
    lat: 13.7634,
    lng: 100.5398,
    hours: 'เปิดอยู่จนถึง 16:00',
    hoursZh: '营业至 16:00',
    address: 'ต้อยถ้วยเคี้ยมเอื้อ กรุงเทพฯ\nก๋วยเตี๋ยวน้ำใส เนื้อนุ่ม น้ำซุปหอม',
    addressZh: '碗面区 曼谷\n清汤面，肉嫩，汤香',
    transport: [
      { icon: '🚇', text: '550 ม. จาก MRT ศูนย์วัฒนธรรม', textZh: '距离 MRT 文化中心站 550 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ต้อยถ้วย', textZh: '碗面公交站' }
    ],
    phone: '02-320-1234',
    images: [
      'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 34,
    title: 'นายอ้วนเย็นตาโฟนะเค็ง',
    titleZh: '粉红汤面',
    subtitle: '(Yen Ta Fo - Pink Noodle Soup)',
    subtitleZh: '(粉红汤面)',
    icon: '🍜',
    area: 'นะเค็ง',
    areaZh: '那坑',
    rating: 4.8,
    distance: '4.9 km',
    category: 'food',
    lat: 13.7535,
    lng: 100.5003,
    hours: 'เปิดอยู่จนถึง 18:00',
    hoursZh: '营业至 18:00',
    address: 'นะเค็ง กรุงเทพฯ\nเย็นตาโฟน้ำแดง เต้าหู้ทอด ปลาลูกชิ้น',
    addressZh: '那坑 曼谷\n粉红汤面，炸豆腐，鱼丸',
    transport: [
      { icon: '🚇', text: '350 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 350 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์เย็นตาโฟ', textZh: '粉红汤面公交站' }
    ],
    phone: '02-321-2345',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80'
    ]
  },
  {
    id: 35,
    title: 'แฉลมถ้วยเคี้ยมคั่วไก่',
    titleZh: '鸡肉面',
    subtitle: '(Chicken Noodles)',
    subtitleZh: '(鸡肉面)',
    icon: '🍜',
    area: 'แฉลมถ้วยเคี้ยม',
    areaZh: '碗面区',
    rating: 4.6,
    distance: '4.4 km',
    category: 'food',
    lat: 13.7473,
    lng: 100.5106,
    hours: 'เปิดอยู่จนถึง 15:00',
    hoursZh: '营业至 15:00',
    address: 'แฉลมถ้วยเคี้ยม กรุงเทพฯ\nก๋วยเตี๋ยวไก่ เนื้อไก่นุ่ม น้ำซุปกลมกล่อม',
    addressZh: '碗面区 曼谷\n鸡肉面，鸡肉嫩滑，汤汁圆润',
    transport: [
      { icon: '🚇', text: '400 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 400 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์แฉลม', textZh: '碗面公交站' }
    ],
    phone: '02-323-4567',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80'
    ]
  },
  {
    id: 36,
    title: 'ราดหน้าฮอฮกสูร 40 ปี',
    titleZh: '浇汁面',
    subtitle: '(Rad Na - Gravy Noodles)',
    subtitleZh: '(浇汁面)',
    icon: '🍝',
    area: 'ฮอฮกสูร',
    areaZh: '福寿区',
    rating: 4.7,
    distance: '4.9 km',
    category: 'food',
    lat: 13.7536,
    lng: 100.4993,
    hours: 'เปิดอยู่จนถึง 20:00',
    hoursZh: '营业至 20:00',
    address: 'ฮอฮกสูร กรุงเทพฯ\nราดหน้าเส้นใหญ่ น้ำราดข้น ผักกาดหอม',
    addressZh: '福寿区 曼谷\n宽面浇汁，酱汁浓郁，芥菜香',
    transport: [
      { icon: '🚇', text: '350 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 350 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ราดหน้า', textZh: '浇汁面公交站' }
    ],
    phone: '02-324-5678',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80'
    ]
  },
  {
    id: 37,
    title: 'นะหมี่คิ้วแซ่',
    titleZh: '中式面',
    subtitle: '(Chinese Noodles)',
    subtitleZh: '(中式面)',
    icon: '🍜',
    area: 'ทองหล่อ',
    areaZh: '通罗',
    rating: 4.8,
    distance: '6.2 km',
    category: 'food',
    lat: 13.7246,
    lng: 100.5779,
    hours: 'เปิดอยู่จนถึง 21:00',
    hoursZh: '营业至 21:00',
    address: 'ทองหล่อ กรุงเทพฯ\nบะหมี่จีนแท้ เส้นเหนียว น้ำซุปเข้มข้น',
    addressZh: '通罗 曼谷\n正宗中式面，面条有嚼劲，汤浓郁',
    transport: [
      { icon: '🚇', text: '300 ม. จาก BTS ทองหล่อ', textZh: '距离 BTS 通罗站 300 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ทองหล่อ', textZh: '通罗公交站' }
    ],
    phone: '02-325-6789',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80'
    ]
  },
  {
    id: 38,
    title: 'สี่แหล่งใหญ่',
    titleZh: '大面',
    subtitle: '(Big Noodles)',
    subtitleZh: '(大面)',
    icon: '🍜',
    area: 'ทรงวาด',
    areaZh: '颂瓦',
    rating: 4.7,
    distance: '4.2 km',
    category: 'food',
    lat: 13.7397,
    lng: 100.5085,
    hours: 'เปิดอยู่จนถึง 17:00',
    hoursZh: '营业至 17:00',
    address: 'ทรงวาด กรุงเทพฯ\nก๋วยเตี๋ยวเส้นใหญ่ เนื้อเยอะ คุ้มค่า',
    addressZh: '颂瓦 曼谷\n大碗面，肉多，物超所值',
    transport: [
      { icon: '🚇', text: '300 ม. จาก MRT วัดมังกร', textZh: '距离 MRT 龙莲寺站 300 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ทรงวาด', textZh: '颂瓦公交站' }
    ],
    phone: '02-326-7890',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80'
    ]
  },
  {
    id: 39,
    title: 'เฮลวีส สุกี้',
    titleZh: '火锅',
    subtitle: '(Elvis Sukiyaki)',
    subtitleZh: '(火锅)',
    icon: '🍲',
    area: 'ยศเส',
    areaZh: '耀瑟',
    rating: 4.9,
    distance: '4.6 km',
    category: 'food',
    lat: 13.7490,
    lng: 100.5159,
    hours: 'เปิดอยู่จนถึง 23:00',
    hoursZh: '营业至 23:00',
    address: 'ยศเส กรุงเทพฯ\nสุกี้แห้งคั่วกระทะ หอมกลิ่นไหม้ อร่อยเด็ด',
    addressZh: '耀瑟 曼谷\n干锅火锅，焦香味美，超级好吃',
    transport: [
      { icon: '🚇', text: '450 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 450 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ยศเส', textZh: '耀瑟公交站' }
    ],
    phone: '02-327-8901',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80'
    ]
  },
  {
    id: 40,
    title: 'ก๋วยจั๊บนายเอ็ก (เยาวราช)',
    titleZh: '乃艾卷粉 (耀华力)',
    subtitle: '(Nai Ek Rolled Noodles)',
    subtitleZh: '(乃艾卷粉)',
    icon: '🍜',
    area: 'เยาวราช',
    areaZh: '耀华力',
    rating: 4.8,
    distance: '4.2 km',
    category: 'food',
    lat: 13.7410,
    lng: 100.5094,
    hours: 'เปิดอยู่จนถึง 22:00',
    hoursZh: '营业至 22:00',
    address: 'เยาวราช กรุงเทพฯ\nก๋วยจั๊บน้ำซุปพริกไทยขาว หมูกรอบ',
    addressZh: '耀华力 曼谷\n白胡椒汤卷粉，脆皮猪肉',
    transport: [
      { icon: '🚇', text: '250 ม. จาก MRT วัดมังกร', textZh: '距离 MRT 龙莲寺站 250 米' },
      { icon: '🚇', text: '700 ม. จาก MRT หัวลำโพง', textZh: '距离 MRT 华南蓬站 700 米' }
    ],
    phone: '02-322-3456',
    images: [
      'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  }
];

// Initialize Leaflet map
function initMap() {
  map = L.map('map').setView(bangkokCenter, 13);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  // Add markers for each location
  addMarkers();
  
  // Create location cards
  createLocationCards();
}

// Create location cards in sidebar
function createLocationCards() {
  const locationCards = document.getElementById('locationCards');
  if (!locationCards) return;
  
  // Clear existing content
  locationCards.innerHTML = '';
  
  // Get current language
  const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
  
  // Create cards from locationsData
  locationsData.forEach((location, index) => {
    const card = document.createElement('div');
    card.className = 'location-card';
    card.setAttribute('data-filter', 'food');
    card.setAttribute('data-lat', location.lat);
    card.setAttribute('data-lng', location.lng);
    
    card.innerHTML = `
      <div class="location-card-icon">${location.icon}</div>
      <div class="location-card-content">
        <h3 class="location-card-title">${currentLang === 'zh' ? location.titleZh : location.title}</h3>
        <p class="location-card-area">${currentLang === 'zh' ? location.areaZh : location.area} 📍 ${location.rating}</p>
        <p class="location-card-distance">กรุงเทพฯ · ${location.distance}</p>
      </div>
      <div class="location-card-rating">⭐ ${location.rating}</div>
    `;
    
    locationCards.appendChild(card);
  });
  
  console.log(`✅ Created ${locationsData.length} location cards`);
}

// Add markers to map
function addMarkers() {
  locationsData.forEach((location, index) => {
    // Create custom icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `<span class="custom-marker-icon">${location.icon}</span>`,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });
    
    // Create marker
    const marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map);
    
    // Add popup
    marker.bindPopup(`<strong>${location.title}</strong>`);
    
    // Click event
    marker.on('click', () => {
      selectLocation(index);
    });
    
    markers.push(marker);
  });
}

// Select location and show detail panel
function selectLocation(index) {
  const locationCards = document.querySelectorAll('.location-card');
  const location = locationsData[index];
  
  // Remove active class from all cards
  locationCards.forEach(card => card.classList.remove('active'));
  
  // Add active class to selected card
  if (locationCards[index]) {
    locationCards[index].classList.add('active');
    locationCards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  
  // Pan map to marker
  map.setView([location.lat, location.lng], 15, { animate: true });
  
  // Open popup
  markers[index].openPopup();
  
  // Show detail panel
  showDetailPanel(location);
}

// Show detail panel with location info
function showDetailPanel(location) {
  const panel = document.getElementById('locationDetailPanel');
  
  // Store current location for navigation
  window.setCurrentLocation(location);
  
  // Get current language
  const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
  
  // Update content based on language
  document.getElementById('detailIcon').textContent = location.icon;
  document.getElementById('detailTitle').textContent = currentLang === 'zh' ? location.titleZh : location.title;
  document.getElementById('detailSubtitle').textContent = currentLang === 'zh' ? location.subtitleZh : location.subtitle;
  document.getElementById('detailArea').textContent = currentLang === 'zh' ? location.areaZh : location.area;
  document.getElementById('detailRating').textContent = `⭐ ${location.rating}`;
  document.getElementById('detailHours').textContent = currentLang === 'zh' ? location.hoursZh : location.hours;
  document.getElementById('detailAddress').innerHTML = (currentLang === 'zh' ? location.addressZh : location.address).replace(/\n/g, '<br>');
  document.getElementById('detailPhone').textContent = location.phone;
  
  // Update transport
  const transportHTML = location.transport.map(t => 
    `<div class="transport-item">
      <span class="transport-icon">${t.icon}</span>
      <span>${currentLang === 'zh' ? t.textZh : t.text}</span>
    </div>`
  ).join('');
  document.querySelector('.detail-transport').innerHTML = transportHTML;
  
  // Update images
  const imagesHTML = location.images.map(img => 
    `<img src="${img}" alt="${currentLang === 'zh' ? location.titleZh : location.title}" />`
  ).join('');
  document.getElementById('detailImages').innerHTML = imagesHTML;
  
  // Show panel
  panel.classList.add('active');
}

// Function to update location cards based on language
function updateLocationCards() {
  const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
  const locationCards = document.querySelectorAll('.location-card');
  
  locationCards.forEach((card, index) => {
    if (locationsData[index]) {
      const location = locationsData[index];
      const titleEl = card.querySelector('.location-card-title');
      const areaEl = card.querySelector('.location-card-area');
      
      if (titleEl) {
        titleEl.textContent = currentLang === 'zh' ? location.titleZh : location.title;
      }
      if (areaEl) {
        areaEl.textContent = `${currentLang === 'zh' ? location.areaZh : location.area} 📍 ${location.rating}`;
      }
    }
  });
  
  // Update detail panel if it's open
  const panel = document.getElementById('locationDetailPanel');
  if (panel && panel.classList.contains('active')) {
    const activeCardIndex = Array.from(locationCards).findIndex(card => card.classList.contains('active'));
    if (activeCardIndex !== -1 && locationsData[activeCardIndex]) {
      showDetailPanel(locationsData[activeCardIndex]);
    }
  }
}

// Listen for language changes
document.addEventListener('DOMContentLoaded', () => {
  // Override the switchLanguage function to update location cards
  if (window.switchLanguage) {
    const originalSwitchLanguage = window.switchLanguage;
    window.switchLanguage = function(lang) {
      originalSwitchLanguage(lang);
      updateLocationCards();
    };
  }
});

// Close detail panel
function closeDetailPanel() {
  const panel = document.getElementById('locationDetailPanel');
  panel.classList.remove('active');
}

// Filter functionality - REMOVED (no longer needed)
// Search functionality remains active

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const locationCards = document.querySelectorAll('.location-card');
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    locationsData.forEach((location, index) => {
      const card = locationCards[index];
      const matchesSearch = 
        location.title.toLowerCase().includes(searchTerm) ||
        location.titleZh.toLowerCase().includes(searchTerm) ||
        location.area.toLowerCase().includes(searchTerm) ||
        location.areaZh.toLowerCase().includes(searchTerm) ||
        location.subtitle.toLowerCase().includes(searchTerm);
      
      if (matchesSearch || searchTerm === '') {
        if (card) card.style.display = 'flex';
        if (markers[index]) markers[index].addTo(map);
      } else {
        if (card) card.style.display = 'none';
        if (markers[index]) markers[index].remove();
      }
    });
  });
}

// Location card click events
function setupCardClicks() {
  const locationCards = document.querySelectorAll('.location-card');
  
  locationCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      selectLocation(index);
    });
  });
}

// Start walking button
function setupStartWalking() {
  const startBtn = document.getElementById('startWalkingBtn');
  let currentLocation = null;
  
  // Store current location when panel is shown
  window.setCurrentLocation = function(location) {
    currentLocation = location;
  };
  
  startBtn.addEventListener('click', () => {
    if (currentLocation) {
      // Open Google Maps with directions
      const destination = `${currentLocation.lat},${currentLocation.lng}`;
      const locationName = encodeURIComponent(currentLocation.title);
      
      // Try to get user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // User location available - show directions from current location
            const origin = `${position.coords.latitude},${position.coords.longitude}`;
            const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=walking`;
            window.open(mapsUrl, '_blank');
          },
          (error) => {
            // User location not available - just show destination
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${destination}&query_place_id=${locationName}`;
            window.open(mapsUrl, '_blank');
          }
        );
      } else {
        // Geolocation not supported - just show destination
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${destination}&query_place_id=${locationName}`;
        window.open(mapsUrl, '_blank');
      }
    }
  });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Use config data if available (loaded by config-loader.js)
  if (window.exploreConfigLocations && window.exploreConfigLocations.length > 0) {
    // Expand config data with default values for missing fields
    locationsData = window.exploreConfigLocations.map(loc => ({
      id: loc.id,
      title: loc.title,
      titleZh: loc.titleZh || loc.title,
      subtitle: loc.subtitle || '',
      subtitleZh: loc.subtitleZh || loc.subtitle || '',
      icon: loc.icon,
      area: loc.area,
      areaZh: loc.areaZh || loc.area,
      rating: loc.rating,
      distance: loc.distance,
      category: loc.category || 'food',
      lat: loc.lat,
      lng: loc.lng,
      hours: loc.hours || 'เปิดอยู่จนถึง 22:00',
      hoursZh: loc.hoursZh || '营业至 22:00',
      address: loc.address || `${loc.area} กรุงเทพฯ`,
      addressZh: loc.addressZh || `${loc.areaZh || loc.area} 曼谷`,
      transport: loc.transport || [
        { icon: '🚇', text: 'ใกล้ MRT', textZh: '靠近 MRT' }
      ],
      phone: loc.phone || '02-XXX-XXXX',
      images: loc.images || [
        'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
        'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80'
      ]
    }));
    console.log(`✅ Using ${locationsData.length} locations from config`);
  } else {
    console.log(`⚠️ Using ${locationsData.length} hardcoded locations (config not loaded)`);
  }
  
  initMap();
  setupSearch();
  setupCardClicks();
  setupStartWalking();
  
  // Close panel button
  document.getElementById('closeDetailPanel').addEventListener('click', closeDetailPanel);
  
  // Check if coming from Street Food page
  const lat = sessionStorage.getItem('exploreLocationLat');
  const lng = sessionStorage.getItem('exploreLocationLng');
  
  if (lat && lng) {
    // Find matching location by coordinates
    const matchingIndex = locationsData.findIndex(loc => 
      Math.abs(loc.lat - parseFloat(lat)) < 0.0001 && 
      Math.abs(loc.lng - parseFloat(lng)) < 0.0001
    );
    
    if (matchingIndex !== -1) {
      setTimeout(() => {
        selectLocation(matchingIndex);
      }, 500);
    } else {
      // If no exact match, select first location
      setTimeout(() => {
        selectLocation(0);
      }, 500);
    }
    
    // Clear sessionStorage
    sessionStorage.removeItem('exploreLocationLat');
    sessionStorage.removeItem('exploreLocationLng');
  } else {
    // Select first location by default
    setTimeout(() => {
      selectLocation(0);
    }, 500);
  }
});
