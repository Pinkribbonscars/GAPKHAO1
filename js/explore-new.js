/* this one is explore tab */

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
    rating: 3.8,
    category: 'food',
    lat: 13.740208,
    lng: 100.509970,
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
      'https://img.wongnai.com/p/1920x0/2020/10/20/3a5beab253934cd58300f75fdd06f95a.jpg',
      'https://img.wongnai.com/p/1920x0/2020/02/11/3ef7819cbcb34c6380316a86da6c37cd.jpg',
      'https://img.wongnai.com/p/1920x0/2026/03/19/1ec5d7cd29204b3d9a26a3aa833f4381.jpg',
      'https://img.wongnai.com/p/1920x0/2025/12/18/74cfcd3ccfd74244917e738f695783e9.jpg'
    ]
  },
  {
    id: 2,
    title: 'ก๋วยเตี๋ยวเรืออยุธยารสดั้งเดิมสูตรโบราณ',
    titleZh: '正宗大城船面，传统配方。',
    subtitle: '(Kuaitiao Ruea Ayutthaya)',
    subtitleZh: '(Kuaitiao Ruea Ayutthaya)',
    icon: '🍝',
    area: 'โรคัลโรด ดอนเมือง',
    areaZh: '廊曼',
    rating: 4.1,
    category: 'food',
    lat: 13.897445,
    lng: 100.587634,
    hours: 'เปิดอยู่จนถึง 18:00',
    hoursZh: '营业至 18:00',
    address: 'กำแพงเพชร 6 ซอย 7 กรุงเทพมหานคร (เรียบถนนโรคัลโรด ซอยก่อนถึงเคหะดอนเมือง)',
    addressZh: 'Kamphaeng Phet 6 Soi 7, 曼谷（位于 Local Road 沿线，即 Keha Don Mueang 之前的巷子）',
    transport: [
      { icon: '🚇', text: '-', textZh: '-' },
      { icon: '🚢', text: '-', textZh: '-' }
    ],
    phone: '0835927997',
    images: [
      'https://img.wongnai.com/p/1920x0/2019/10/07/491aa67ec9d04aaab06d91de269e23a0.jpg',
      'https://img.wongnai.com/p/1920x0/2024/08/03/9c555639cf6f4c2bbec06e6861f5c0a7.jpg',
      'https://img.wongnai.com/p/1920x0/2023/04/02/24b2fe23092c4e72be97bd52282bb985.jpg',
      'https://img.wongnai.com/p/1920x0/2023/01/11/25ccf8d6d2904c48b8a8bf44aca79f98.jpg'
    ]
  },
  {
    id: 3,
    title: 'ทิพย์สมัย ผัดไทยประตูผี (ทิพย์สมัย)',
    titleZh: 'Thipsamai Pad Thai Pratu Phi (蒂普萨迈)',
    subtitle: '( Thipsamai Pad Thai Pratu Phi)',
    subtitleZh: '(Thipsamai Pad Thai Pratu Phi)',
    icon: '🥘',
    area: 'พระนคร ท่าพระจันทร์ - วังบูรพา',
    areaZh: '帕那空、塔帕陈 - Wang Burapha',
    rating: 3.7,
    category: 'food',
    lat: 13.7308,
    lng: 100.5214,
    hours: 'เปิดอยู่จนถึง 23:30',
    hoursZh: '营业至 23:30',
    address: '315 ถนนมหาไชย กรุงเทพมหานคร (ตรงข้ามวัดเทพธิดา)',
    addressZh: '曼谷玛哈猜路 315 号（Wat Thep Thida 对面）',
    transport: [
       { icon: '🚇', text: '-', textZh: '-' },
       { icon: '🚢', text: '-', textZh: '-' }
    ],
    phone: '022266666',
    images: [
      'https://img.wongnai.com/p/1920x0/2018/01/08/a2a0fca003fb4b70b47748ae8341b65c.jpg',
      'https://img.wongnai.com/p/1920x0/2021/03/23/a7fce754b5b446fe927ca78f8f66176e.jpg',
      'https://img.wongnai.com/p/1920x0/2020/12/14/b7fd5d6c6c4246d495a299b81e7f2459.jpg',
      'https://img.wongnai.com/p/1920x0/2025/05/30/c8920f5447da432eafa5cca8d9369d87.jpg'
    ]
  },
  {
    id: 4,
    title: 'เสียวหลัง',
    titleZh: '背痛',
    subtitle: '(sĭieow lăng)',
    subtitleZh: '(背痛)',
    icon: '🍚',
    area: 'ปากคลองตลาด',
    areaZh: '帕克隆塔拉特',
    rating: 3.8,
    category: 'food',
    lat: 13.752770,
    lng: 100.494746,
    hours: 'เปิดอยู่จนถึง 20:00',
    hoursZh: '营业至 20:00',
    address: '227 ถนนอัษฎางค์ แขวงวังบูรพาฯ กรุงเทพมหานคร (ใช้ถนนอัษฎางค์ จากปากคลองตลาด มุ่งหน้าโรงเรียนราชินี ให้เลี้ยวซ้ายเข้าซอยเซเว่นอีเลฟเว่นตรงหัวมุมที่อยู่ติดสะพานคลองคูเมืองเดิม ตรงเข้าไปประมาณ 200 เมตรจะเห็นร้านเสียวหลัง ตั้งอยู่ในซอยเล็กๆ ด้านซ้ายมือ)',
    addressZh: '地址：曼谷旺布拉帕区阿萨当路227号（从帕空塔拉特出发，沿阿萨当路朝拉吉尼学校方向行驶。在靠近旧孔库芒桥的拐角处，7-Eleven便利店旁边的小巷左转。直行约200米，您会在左侧的小巷里看到Siew Lang商店。）',
    transport: [
       { icon: '🚇', text: '-', textZh: '-' },
       { icon: '🚢', text: '-', textZh: '-' }
    ],
    phone: '022227212',
    images: [
      'https://img.wongnai.com/p/1920x0/2021/02/20/83b3936bc46947cd8d0135416458f55b.jpg',
      'https://img.wongnai.com/p/1920x0/2024/03/05/06cd6361659e44619eff2dd05842b62e.jpg',
      'https://img.wongnai.com/p/1920x0/2023/12/11/d27bdd395e314de4a8ee232409fcc88d.jpg',
      'https://img.wongnai.com/p/1920x0/2023/08/13/61af630b4d514386a90eed5bdac48503.jpg'
    ]
  },
  {
    id: 5,
    title: 'โกอ่างข้าวมันไก่ประตูน้ำ',
    titleZh: '水门海南鸡饭',
    subtitle: '(GoAng Kaomunkai Pratunam)',
    subtitleZh: '(水门海南鸡饭)',
    icon: '🍗',
    area: 'ประตูน้ำ',
    areaZh: '水门',
    rating: 4.5,
    category: 'food',
    lat: 13.749643,
    lng: 100.542096,
    hours: 'เปิดอยู่จนถึง 23:59',
    hoursZh: '营业至 23:59',
    address: '960-962 ซอยเพชรบุรี 30 ถนนเพชรบุรีตัดใหม่\nปากซ.เพชรบุรี 30 ใกล้แยก',
    addressZh: '960-962 碧武里巷30号 碧武里新路\n碧武里巷30号入口附近',
    transport: [
      { icon: '🚇', text: '600 ม. จาก BTS ชิดลม', textZh: '距离 BTS 奇隆站 600 米' },
      { icon: '🚇', text: '900 ม. จาก BTS สยาม', textZh: '距离 BTS 暹罗站 900 米' }
    ],
    phone: '02-252-6325',
    images: [
      'https://img.wongnai.com/p/1920x0/2023/06/15/d6347878d3dc4d4aa8c84d75de95186e.jpg',
      'https://img.wongnai.com/p/1920x0/2024/07/08/ff027e2605384669b8b56a811a5e18c6.jpg',
      'https://img.wongnai.com/p/1920x0/2024/12/05/92bff4ece9e94a8e837d34f74b059d47.jpg',
      'https://img.wongnai.com/p/1920x0/2024/12/05/a65d3733fbc0428f9dc5577920d35ce4.jpg'
    ]
  },
  {
    id: 6,
    title: 'ลาบเป็ดนายหนอม',
    titleZh: '乃诺鸭肉沙拉',
    subtitle: '(Lap Pet Nai Nom)',
    subtitleZh: '(乃诺鸭肉沙拉)',
    icon: '🦆',
    area: 'ดินแดง',
    areaZh: '丁当',
    rating: 4.0,
    category: 'food',
    lat: 13.778884,
    lng: 100.56332,
    hours: 'เปิดอยู่จนถึง 10:30',
    hoursZh: '营业至 10:30',
    address: '270/48, ซอยประชาสงเคราะห์ 27, ดินแดง, กรุงเทพมหานคร, 10400\nใกล้ม.หอการค้า ประมาณ 300 เมตร',
    addressZh: '270/48, 巷 Pracha Songkhro 27, 丁当, 曼谷, 10400\n距离华侨崇圣大学约 300 米',
    transport: [
      { icon: '🚇', text: 'ใกล้ม.หอการค้า 300 ม.', textZh: '距离华侨崇圣大学 300 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ดินแดง', textZh: '丁当公交站' }
    ],
    phone: '026928489',
    images: [
      'https://img.wongnai.com/p/1920x0/2020/10/20/3a5beab253934cd58300f75fdd06f95a.jpg',
      'https://img.wongnai.com/p/1920x0/2020/02/11/3ef7819cbcb34c6380316a86da6c37cd.jpg',
      'https://img.wongnai.com/p/1920x0/2021/05/11/a77d74fde1b84325bc9e2ce2d460cd79.jpg',
      'https://img.wongnai.com/p/1920x0/2022/04/28/f2a68985c901427dba7b6190063def45.jpg'
    ]
  },
  {
    id: 7,
    title: 'ข้าวเหนียวมะม่วงป้าณี (วัดราชโอรส)',
    titleZh: '阿妮芒果糯米饭（拉差欧罗寺）',
    subtitle: '(Sweet sticky rice aunt nee)',
    subtitleZh: '(阿妮芒果糯米饭)',
    icon: '🥭',
    area: 'จอมทอง',
    areaZh: '宗通',
    rating: 4.4,
    category: 'food',
    lat: 13.702087,
    lng: 100.465379,
    hours: 'เปิดอยู่จนถึง 09:00',
    hoursZh: '营业至 09:00',
    address: '159 วุฒกาศ แขวงจอมทอง เขต จอมทอง กรุงเทพมหานคร 10150\nเข้าซอยเอกชัย4 ตามทางมาเจอ รร. แล้วเลี้ยวขวา',
    addressZh: '159 Wutthakat, 宗通区, 曼谷 10150\n进入 Ekamai 4 巷，看到学校后右转',
    transport: [
      { icon: '🚇', text: 'ใกล้สถานีรถไฟจอมทอง', textZh: '靠近宗通火车站' },
      { icon: '🚌', text: 'ป้ายรถเมล์จอมทอง', textZh: '宗通公交站' }
    ],
    phone: '0909910651',
    images: [
      'https://img.wongnai.com/p/1920x0/2024/03/22/ecbfaa047411426c8c546a40486b73e0.jpg',
      'https://img.wongnai.com/p/1920x0/2025/06/08/706393052d1f4ab898efc904b0b88baf.jpg',
      'https://img.wongnai.com/p/1920x0/2022/04/07/80a8633d417946cdab8713dd831cba27.jpg',
      'https://img.wongnai.com/p/1920x0/2026/05/04/a9a6a07e5f4141a085a35ffdbb94ffed.jpg'
    ]
  },
  {
    id: 8,
    title: 'เจ้วรรณสวนหลวงจุฬา',
    titleZh: '朱拉隆功皇家公园甜品',
    subtitle: '(Chao Wan Suan Luang Chula)',
    subtitleZh: '(朱拉隆功皇家公园甜品)',
    icon: '🍨',
    area: 'ปทุมวัน',
    areaZh: '巴吞旺',
    rating: 3.7,
    category: 'food',
    lat: 13.739625,
    lng: 100.522226,
    hours: 'เปิดอยู่จนถึง 13:30',
    hoursZh: '营业至 13:30',
    address: '1700, ถนนบรรทัดทอง รองเมือง ปทุมวัน กรุงเทพมหานคร\nตรงข้ามอุทยาน 100ปี จุฬา',
    addressZh: '1700, 班塔通路, 荣木昂, 巴吞旺, 曼谷\n朱拉隆功大学100周年公园对面',
    transport: [
      { icon: '🚇', text: '600 ม. จาก MRT สามย่าน', textZh: '距离 MRT 三燕站 600 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์บรรทัดทอง', textZh: '班塔通公交站' }
    ],
    phone: '081-421-3761',
    images: [
      'https://img.wongnai.com/p/1920x0/2025/07/27/9f048ba00f084702b244feff98e965b3.jpg',
      'https://img.wongnai.com/p/1920x0/2025/07/31/37736599f0de4809bfcdcb79415d0c33.jpg',
      'https://img.wongnai.com/p/1920x0/2025/07/30/089cf1470a2a4eac8cff27575bdfc581.jpg',
      'https://img.wongnai.com/p/1920x0/2025/07/17/23eea13f0ce046f6a86671bbe7df3263.jpg'
    ]
  },
  {
    id: 9,
    title: 'ปาท่องโก๋เสวย',
    titleZh: '油条咖啡馆',
    subtitle: '(Pa Tong Go Cafe)',
    subtitleZh: '(油条咖啡馆)',
    icon: '🥖',
    area: 'บางลำพู',
    areaZh: '邦兰普',
    rating: 3.7,
    category: 'food',
    lat: 13.761204,
    lng: 100.499545,
    hours: 'เปิดอยู่จนถึง 08:00',
    hoursZh: '营业至 08:00',
    address: '246, ถนน พระสุเมรุ ตลาดยอด พระนคร กรุงเทพมหานคร\nตรงข้ามวัดบวรนิเวศวิหาร',
    addressZh: '246, 帕素梅路, 塔拉约, 帕那空, 曼谷\n博沃尼威寺对面',
    transport: [
      { icon: '🚇', text: 'ใกล้วัดบวรนิเวศวิหาร', textZh: '靠近博沃尼威寺' },
      { icon: '🚌', text: 'ป้ายรถเมล์บางลำพู', textZh: '邦兰普公交站' }
    ],
    phone: '022819754',
    images: [
      'https://img.wongnai.com/p/1920x0/2024/10/22/c27fa48383ec4f818522da1c7d89d251.jpg',
      'https://img.wongnai.com/p/1920x0/2023/08/13/a06e76ff6a6f4c65807230f8187012cb.jpg',
      'https://img.wongnai.com/p/1920x0/2025/06/25/aded881665134c02ad74792f50e3cbd1.jpg',
      'https://img.wongnai.com/p/1920x0/2024/10/22/290b220f31054f648c02f82a7118e265.jpg'
    ]
  },
  {
    id: 10,
    title: 'หมูสะเต๊ะแปลงนาม',
    titleZh: '帕朗南猪肉沙爹',
    subtitle: '(Moo Satae Plang Nam)',
    subtitleZh: '(帕朗南猪肉沙爹)',
    icon: '🍖',
    area: 'เยาวราช',
    areaZh: '耀华力',
    rating: 4.2,
    category: 'food',
    lat: 13.740678,
    lng: 100.509616,
    hours: 'เปิดอยู่จนถึง 17:00',
    hoursZh: '营业至 17:00',
    address: 'ถนนแปลงนาม, สัมพันธวงศ์, กรุงเทพมหานคร, 10100\nเข้าซอยแปลงนาม ร้านอยู่ซ้ายมือ',
    addressZh: '帕朗南路, 三攀他旺, 曼谷, 10100\n进入帕朗南巷，店在左手边',
    transport: [
      { icon: '🚇', text: '800 ม. จาก MRT หัวลำโพง', textZh: '距离 MRT 华南蓬站 800 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์เยาวราช', textZh: '耀华力公交站' }
    ],
    phone: '086-548-4628',
    images: [
      'https://img.wongnai.com/p/1920x0/2024/06/15/5d85584acc014e0b8351773287f008d7.jpg',
      'https://img.wongnai.com/p/1920x0/2025/03/20/fc48d5be71ec4ae7b88141f45b390227.jpg',
      'https://img.wongnai.com/p/1920x0/2025/08/24/2d0c2f3d30194410954a731399143b8a.jpg',
      'https://img.wongnai.com/p/1920x0/2025/12/31/47cdd495a55f45628b459eef8aa23c48.jpg'
    ]
  },
  {
    id: 11,
    title: 'นายย้ง เจ้าเก่าสำเหร่',
    titleZh: '乃勇老店三赖',
    subtitle: '(Naiyong Samrae)',
    subtitleZh: '(乃勇老店三赖)',
    icon: '🍨',
    area: 'สำเหร่',
    areaZh: '三赖',
    rating: 4.2,
    category: 'food',
    lat: 13.713342,
    lng: 100.488770,
    hours: 'เปิดอยู่จนถึง 17:00',
    hoursZh: '营业至 17:00',
    address: '359, ตากสิน สำเหร่ ธนบุรี กรุงเทพมหานคร\nเลยซ.ตากสิน17 หรือระหว่าง รพ.นิติเวช กับ ธ.กสิกร',
    addressZh: '359, 达信路, 三赖, 吞武里, 曼谷\n达信巷17号后，在法医医院和开泰银行之间',
    transport: [
      { icon: '🚇', text: 'ใกล้ BTS วุฒากาศ', textZh: '靠近 BTS 武塔卡站' },
      { icon: '🚌', text: 'ป้ายรถเมล์สำเหร่', textZh: '三赖公交站' }
    ],
    phone: '094-894-2429',
    images: [
      'https://img.wongnai.com/p/1920x0/2023/03/22/4304aa857c5842639b34b23792a932e1.jpg',
      'https://img.wongnai.com/p/1920x0/2024/05/03/23fc38dbf9ab4420b738bcdd6c8ba0ee.jpg',
      'https://img.wongnai.com/p/1920x0/2022/04/22/6bb802e9c3404b9cb2a7bc0b8f0121ca.jpg',
      'https://img.wongnai.com/p/1920x0/2022/03/18/e45bc501e6f04017b71ceae5b8aa60fb.jpg'
    ]
  },
  {
    id: 12,
    title: 'ยุ้ยเผือกทอด เสาชิงช้า',
    titleZh: '油炸芋头摇摆柱',
    subtitle: '(Yui Phueak Tod Sao Ching Cha)',
    subtitleZh: '(油炸芋头摇摆柱)',
    icon: '🍠',
    area: 'เสาชิงช้า',
    areaZh: '摇摆柱',
    rating: 4.0,
    category: 'food',
    lat: 13.753431,
    lng: 100.500519,
    hours: 'เปิดอยู่จนถึง 08:30',
    hoursZh: '营业至 08:30',
    address: '130, มหรรณพ เสาชิงช้า พระนคร กรุงเทพมหานคร\nติดโรงเรียนสอนภาษาอาจารย์สงวน ติดริมถนนมหรรณพ',
    addressZh: '130, 玛哈纳路, 摇摆柱, 帕那空, 曼谷\n靠近宋文语言学校，玛哈纳路旁',
    transport: [
      { icon: '🚇', text: 'ใกล้เสาชิงช้า', textZh: '靠近摇摆柱' },
      { icon: '🚌', text: 'ป้ายรถเมล์เสาชิงช้า', textZh: '摇摆柱公交站' }
    ],
    phone: '0841417032',
    images: [
      'https://img.wongnai.com/p/1920x0/2025/08/22/32a25d27c7ef40099e65f4b5212d0669.jpg',
      'https://img.wongnai.com/p/1920x0/2024/02/09/82d41c17164a48f59b0585f4711244f9.jpg',
      'https://img.wongnai.com/p/1920x0/2025/08/22/02bec6f39fcc47d1be13f24e4fa1e095.jpg',
      'https://img.wongnai.com/p/1920x0/2025/03/08/6a012121c2c04b59b1d044176e0a5bcc.jpg'
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
        <p class="location-card-distance">กรุงเทพฯ</p>
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
    // Create standard marker (Leaflet default - blue)
    const marker = L.marker([location.lat, location.lng]).addTo(map);
    
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
  
  // Reset all markers to default blue color
  markers.forEach(marker => {
    marker.setIcon(new L.Icon.Default());
  });
  
  // Change selected marker to red
  if (markers[index]) {
    const redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    markers[index].setIcon(redIcon);
  }
  
  // Get current zoom level (don't change it)
  const currentZoom = map.getZoom();
  
  // Calculate offset to account for sidebar (320px)
  // We need to shift the center point to the LEFT so the pin appears in the middle of visible area
  const mapContainer = document.getElementById('map');
  const sidebarWidth = 320;
  
  // Calculate how much to offset in pixels (shift left by half sidebar width)
  const offsetPixels = -sidebarWidth / 2;
  
  // Convert the location to pixel coordinates at current zoom
  const targetPoint = map.project([location.lat, location.lng], currentZoom);
  
  // Apply the offset (negative to shift left)
  targetPoint.x += offsetPixels;
  
  // Convert back to lat/lng
  const targetLatLng = map.unproject(targetPoint, currentZoom);
  
  // Pan to the adjusted center
  map.panTo(targetLatLng, {
    animate: true,
    duration: 1,
    easeLinearity: 0.5
  });
  
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
      // Use restaurant name for search
      const locationName = encodeURIComponent(currentLocation.title);
      
      // Try to get user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // User location available - show directions from current location to restaurant name
            const origin = `${position.coords.latitude},${position.coords.longitude}`;
            const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${locationName}&travelmode=walking`;
            window.open(mapsUrl, '_blank');
          },
          () => {
            // User location not available - just search for restaurant name
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${locationName}`;
            window.open(mapsUrl, '_blank');
          }
        );
      } else {
        // Geolocation not supported - just search for restaurant name
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${locationName}`;
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
  const locationId = sessionStorage.getItem('exploreLocationId');
  const lat = sessionStorage.getItem('exploreLocationLat');
  const lng = sessionStorage.getItem('exploreLocationLng');
  
  if (locationId) {
    // Find matching location by ID (most reliable)
    const matchingIndex = locationsData.findIndex(loc => loc.id === parseInt(locationId));
    
    if (matchingIndex !== -1) {
      setTimeout(() => {
        selectLocation(matchingIndex);
      }, 500);
    } else {
      // Fallback to coordinate matching
      if (lat && lng) {
        const coordMatchingIndex = locationsData.findIndex(loc => 
          Math.abs(loc.lat - parseFloat(lat)) < 0.001 && 
          Math.abs(loc.lng - parseFloat(lng)) < 0.001
        );
        
        if (coordMatchingIndex !== -1) {
          setTimeout(() => {
            selectLocation(coordMatchingIndex);
          }, 500);
        } else {
          setTimeout(() => {
            selectLocation(0);
          }, 500);
        }
      } else {
        setTimeout(() => {
          selectLocation(0);
        }, 500);
      }
    }
    
    // Clear sessionStorage
    sessionStorage.removeItem('exploreLocationId');
    sessionStorage.removeItem('exploreLocationLat');
    sessionStorage.removeItem('exploreLocationLng');
  } else if (lat && lng) {
    // Find matching location by coordinates (increased tolerance)
    const matchingIndex = locationsData.findIndex(loc => 
      Math.abs(loc.lat - parseFloat(lat)) < 0.001 && 
      Math.abs(loc.lng - parseFloat(lng)) < 0.001
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
