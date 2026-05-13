/* ══════════════════════════════════════════════════════════════
   STREET FOOD PAGE - JavaScript
   Thai Streetfood Softpower Theme
   ══════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // Food Data - Starting with Main Dishes Category (9 items)
  const foodData = {
    main: [
      {
        id: 'khao-man-gai',
        name: 'โกโก้ข้าวมันไก่ประตูน้ำ',
        nameEn: 'Khao Man Gai (Chicken Rice)',
        nameZh: '海南鸡饭',
        category: 'main',
        location: 'ประตูน้ำ',
        locationZh: '水门',
        lat: 13.7501,
        lng: 100.5413,
        rating: 4.7,
        price: '50-80฿',
        image: 'อาหารจานหลัก-img/โกโก้ข้าวมันไก่ประตูน้ำ-iimg.jpg',
        description: 'ข้าวมันไก่สูตรดั้งเดิม เนื้อไก่นุ่ม น้ำจิ้มรสเด็ด',
        descriptionZh: '传统海南鸡饭，鸡肉嫩滑，酱汁美味',
        phone: '02-252-6325',
        hours: '06:00-14:00'
      },
      {
        id: 'charoen-saeng',
        name: 'ข้าวขาหมูสีมรกต',
        nameEn: 'Khao Kha Moo Seemorakat',
        nameZh: '翡翠猪腿饭',
        category: 'main',
        location: 'สีลม',
        locationZh: '石龙军',
        lat: 13.7237,
        lng: 100.5173,
        rating: 4.5,
        price: '60-120฿',
        image: 'อาหารจานหลัก-img/ข้าวขาหมูสีมรกต-img.jpg',
        description: 'อาหารไทยรสชาติต้นตำรับ บรรยากาศดี',
        descriptionZh: '正宗泰国菜，氛围优雅',
        phone: '02-234-5678',
        hours: '10:00-22:00'
      },
      {
        id: 'seemorakat',
        name: 'ข้าวหมูแดงสีมรกตเผ็ดมาก',
        nameEn: 'Khao Moo Daeng Seemorakat Spicy',
        nameZh: '翡翠红猪肉饭很辣',
        category: 'main',
        location: 'สีมรกต',
        locationZh: '翡翠区',
        lat: 13.7363,
        lng: 100.5152,
        rating: 4.6,
        price: '70-150฿',
        image: 'อาหารจานหลัก-img/ข้าวหมูแดงสีมรกตเผ็ดมาก-img.jpg',
        description: 'อาหารไทยสไตล์โฮมเมด รสชาติกลมกล่อม',
        descriptionZh: '家常泰国菜，味道圆润',
        phone: '02-245-7890',
        hours: '11:00-21:00'
      },
      {
        id: 'ped-mak',
        name: 'กะเพราเผ็ดมาก',
        nameEn: 'Krapow Ped Mak (Very Spicy Basil)',
        nameZh: '罗勒很辣',
        category: 'main',
        location: 'เผ็ดมาก',
        locationZh: '很辣区',
        lat: 13.7199,
        lng: 100.5849,
        rating: 4.8,
        price: '40-90฿',
        image: 'อาหารจานหลัก-img/กะเพราเผ็ดมาก-img.jpg',
        description: 'อาหารรสจัดจ้าน เผ็ดร้อนสะใจ สำหรับคนรักความเผ็ด',
        descriptionZh: '超辣美食，适合喜欢辣的人',
        phone: '02-256-1234',
        hours: '10:00-20:00'
      },
      {
        id: 'prajak-ped',
        name: 'ประจักษ์เป็ดย่าง',
        nameEn: 'Prajak Roasted Duck',
        nameZh: '烤鸭店',
        category: 'main',
        location: 'ประจักษ์เป็ดย่าง',
        locationZh: '烤鸭区',
        lat: 13.7202,
        lng: 100.5161,
        rating: 4.9,
        price: '80-180฿',
        image: 'อาหารจานหลัก-img/ประจักษ์เป็ดย่าง-img.jpg',
        description: 'เป็ดย่างหนังกรอบ เนื้อนุ่ม เปิดมากว่า 100 ปี',
        descriptionZh: '烤鸭皮脆肉嫩，开业超过100年',
        phone: '02-234-9876',
        hours: '08:00-18:00'
      },
      {
        id: 'aisa-rosdee',
        name: 'ข้าวหมกไก่',
        nameEn: 'Khao Mok Gai (Chicken Rice)',
        nameZh: '鸡肉焖饭',
        category: 'main',
        location: 'ไอซา รสดี',
        locationZh: '美味区',
        lat: 13.7593,
        lng: 100.4984,
        rating: 4.4,
        price: '50-100฿',
        image: 'อาหารจานหลัก-img/ข้าวหมกไก่-img.jpg',
        description: 'ข้าวหมกไก่สูตรดั้งเดิม หอมเครื่องเทศ เนื้อไก่นุ่ม',
        descriptionZh: '传统鸡肉焖饭，香料芬芳，鸡肉嫩滑',
        phone: '02-267-5432',
        hours: '09:00-21:00'
      },
      {
        id: 'khao-gaeng',
        name: 'ข้าวแกงเจ๊กปุ๋ย',
        nameEn: 'Khao Gaeng (Curry Rice)',
        nameZh: '咖喱饭',
        category: 'main',
        location: 'ข้าวแกงเจ๊กปุ๋ย',
        locationZh: '咖喱饭区',
        lat: 13.7466,
        lng: 100.5097,
        rating: 4.6,
        price: '40-80฿',
        image: 'อาหารจานหลัก-img/ข้าวแกงเจ๊กปุ๋ย-img.jpg',
        description: 'ข้าวราดแกงหลากหลายเมนู สดใหม่ทุกวัน',
        descriptionZh: '多种咖喱饭，每天新鲜',
        phone: '02-278-3456',
        hours: '07:00-15:00'
      },
      {
        id: 'joke-samyan',
        name: 'โจ๊กสามย่าน',
        nameEn: 'Joke Samyan (Rice Porridge)',
        nameZh: '三燕粥',
        category: 'main',
        location: 'โจ๊กสามย่าน',
        locationZh: '三燕',
        lat: 13.7344,
        lng: 100.5284,
        rating: 4.7,
        price: '30-70฿',
        image: 'อาหารจานหลัก-img/โจ๊กสามย่าน-img.jpg',
        description: 'โจ๊กหมูสูตรโบราณ เนื้อนุ่ม น้ำซุปเข้มข้น',
        descriptionZh: '传统猪肉粥，肉嫩汤浓',
        phone: '02-289-6789',
        hours: '06:00-14:00'
      },
      {
        id: 'gai-tod',
        name: 'ไก่ทอดเจ๊ฮี (ชอบโปโล)',
        nameEn: 'Fried Chicken',
        nameZh: '炸鸡',
        category: 'main',
        location: 'ไก่ทอดเจ๊ฮี',
        locationZh: '炸鸡区',
        lat: 13.7335,
        lng: 100.5458,
        rating: 4.8,
        price: '60-120฿',
        image: 'อาหารจานหลัก-img/ไก่ทอดเจ๊ฮี (ชอบโปโล)-img.jpg',
        description: 'ไก่ทอดกรอบนอกนุ่มใน เครื่องเทศหอมกรุ่น',
        descriptionZh: '炸鸡外酥内嫩，香料芬芳',
        phone: '02-290-1234',
        hours: '10:00-22:00'
      }
    ],
    dessert: [
      {
        id: 'ka-pai',
        name: 'ก พาย',
        nameEn: 'Ka Pai (Thai Pie)',
        nameZh: '泰式派',
        category: 'dessert',
        location: 'ก พาย',
        locationZh: 'K派区',
        lat: 13.7543,
        lng: 100.4986,
        rating: 4.6,
        price: '30-60฿',
        image: 'ของหวาน-img/ก พาย-img.jpg',
        description: 'พายไทยสูตรโบราณ หอมเนยละมุน',
        descriptionZh: '传统泰式派，黄油香浓',
        phone: '02-301-2345',
        hours: '08:00-18:00'
      },
      {
        id: 'bua-loy',
        name: 'บัวลอยเทคูเก้า',
        nameEn: 'Bua Loy (Sweet Dumplings)',
        nameZh: '汤圆',
        category: 'dessert',
        location: 'บัวลอยเทคูเก้า',
        locationZh: '汤圆区',
        lat: 13.7534,
        lng: 100.4991,
        rating: 4.7,
        price: '25-50฿',
        image: 'ของหวาน-img/บัวลอยเทคูเก้า-img.jpg',
        description: 'บัวลอยงาดำน้ำขิง หวานมัน อุ่นท้อง',
        descriptionZh: '黑芝麻汤圆配姜汤，香甜暖胃',
        phone: '02-302-3456',
        hours: '10:00-20:00'
      },
      {
        id: 'khanom-buang',
        name: 'ขนมเบื้องไทยขาวัง (แพร่งนรา)',
        nameEn: 'Thai Crepe',
        nameZh: '泰式薄饼',
        category: 'dessert',
        location: 'แพร่งนรา',
        locationZh: '帕能那拉',
        lat: 13.7531,
        lng: 100.4975,
        rating: 4.8,
        price: '20-40฿',
        image: 'ของหวาน-img/ขนมเบื้องไทยขาวัง (แพร่งนรา)-img.jpg',
        description: 'ขนมเบื้องกรอบ ไส้ฝอยทอง หวานมัน',
        descriptionZh: '脆皮薄饼，金丝馅料，香甜可口',
        phone: '02-303-4567',
        hours: '09:00-19:00'
      },
      {
        id: 'patongko',
        name: 'ปาท่องโก๋เสวย (เยาวราช)',
        nameEn: 'Chinese Donut',
        nameZh: '油条',
        category: 'dessert',
        location: 'เยาวราช',
        locationZh: '耀华力',
        lat: 13.7401,
        lng: 100.5108,
        rating: 4.9,
        price: '15-35฿',
        image: 'ของหวาน-img/ปาท่องโก๋เสวย (เยาวราช)-img.jpg',
        description: 'ปาท่องโก๋กรอบนอกนุ่มใน จิ้มสังขยา',
        descriptionZh: '油条外酥内软，蘸椰奶蛋',
        phone: '02-304-5678',
        hours: '06:00-12:00'
      },
      {
        id: 'nom-sod',
        name: 'มนต์ นมสด (เสาชิงช้า)',
        nameEn: 'Fresh Milk Dessert',
        nameZh: '鲜奶甜品',
        category: 'dessert',
        location: 'เสาชิงช้า',
        locationZh: '秋千柱',
        lat: 13.7533,
        lng: 100.5015,
        rating: 4.7,
        price: '30-70฿',
        image: 'ของหวาน-img/มนต์ นมสด (เสาชิงช้า)-img.jpg',
        description: 'นมสดเย็นๆ ขนมหวานนมสด หอมมัน',
        descriptionZh: '冰鲜奶，鲜奶甜品，香浓可口',
        phone: '02-305-6789',
        hours: '10:00-22:00'
      },
      {
        id: 'lod-chong',
        name: 'ลอดช่องสิงคโปร์',
        nameEn: 'Lod Chong (Pandan Jelly)',
        nameZh: '班兰果冻',
        category: 'dessert',
        location: 'ลอดช่องสิงคโปร์',
        locationZh: '新加坡区',
        lat: 13.7410,
        lng: 100.5126,
        rating: 4.5,
        price: '25-50฿',
        image: 'ของหวาน-img/ลอดช่องสิงคโปร์-img.jpg',
        description: 'ลอดช่องใบเตย กะทิหอมมัน น้ำแข็งใส',
        descriptionZh: '班兰果冻，椰奶香浓，冰凉爽口',
        phone: '02-306-7890',
        hours: '11:00-21:00'
      },
      {
        id: 'tub-tim-grob',
        name: 'ทับทิมกรอบวงเวียนใหญ่',
        nameEn: 'Water Chestnut Dessert',
        nameZh: '红宝石甜品',
        category: 'dessert',
        location: 'วงเวียนใหญ่',
        locationZh: '大圆环',
        lat: 13.7258,
        lng: 100.4925,
        rating: 4.8,
        price: '30-60฿',
        image: 'ของหวาน-img/ทับทิมกรอบวงเวียนใหญ่-img.jpg',
        description: 'ทับทิมกรอบเม็ดใหญ่ กะทิหอม น้ำแข็งเยอะ',
        descriptionZh: '大颗红宝石，椰奶香浓，冰块充足',
        phone: '02-307-8901',
        hours: '10:00-20:00'
      },
      {
        id: 'ice-cream',
        name: 'ณัฐพรไอศกรีม',
        nameEn: 'Nattaporn Ice Cream',
        nameZh: '冰淇淋',
        category: 'dessert',
        location: 'ณัฐพรไอศกรีม',
        locationZh: '冰淇淋区',
        lat: 13.7536,
        lng: 100.4981,
        rating: 4.6,
        price: '20-50฿',
        image: 'ของหวาน-img/ณัฐพรไอศกรีม-img.jpg',
        description: 'ไอศกรีมโฮมเมด รสชาติหลากหลาย',
        descriptionZh: '自制冰淇淋，口味多样',
        phone: '02-308-9012',
        hours: '12:00-22:00'
      },
      {
        id: 'pang-na',
        name: 'ปังนา (บรรทัดทอง)',
        nameEn: 'Pang Na Bread Dessert',
        nameZh: '面包甜品',
        category: 'dessert',
        location: 'บรรทัดทอง',
        locationZh: '金线路',
        lat: 13.7441,
        lng: 100.5226,
        rating: 4.7,
        price: '35-80฿',
        image: 'ของหวาน-img/ปังนา (บรรทัดทอง)-img.jpg',
        description: 'ขนมปังนมสด ไอศกรีม ท็อปปิ้งเพียบ',
        descriptionZh: '鲜奶面包，冰淇淋，配料丰富',
        phone: '02-309-0123',
        hours: '14:00-23:00'
      }
    ],
    snack: [
      {
        id: 'moo-ping',
        name: 'หมูปิ้งเจี๊ยบวัน (สีลม)',
        nameEn: 'Grilled Pork Skewers',
        nameZh: '烤猪肉串',
        category: 'snack',
        location: 'สีลม',
        locationZh: '石龙军',
        lat: 13.7275,
        lng: 100.5361,
        rating: 4.8,
        price: '10-30฿',
        image: 'ของกินเล่น-img/หมูปิ้งเจี๊ยบวัน (สีลม-img.jpg',
        description: 'หมูปิ้งหมักเครื่องเทศ ย่างไฟถ่าน หอมกรุ่น',
        descriptionZh: '香料腌制烤猪肉，炭火烤制，香气扑鼻',
        phone: '02-310-1234',
        hours: '16:00-23:00'
      },
      {
        id: 'look-chin',
        name: 'ลูกชิ้นแพร่งนรา',
        nameEn: 'Meatballs',
        nameZh: '肉丸',
        category: 'snack',
        location: 'แพร่งนรา',
        locationZh: '帕能那拉',
        lat: 13.7535,
        lng: 100.4981,
        rating: 4.6,
        price: '15-40฿',
        image: 'ของกินเล่น-img/ลูกชิ้นแพร่งนรา-img.jpg',
        description: 'ลูกชิ้นเด้งๆ ทำสดใหม่ทุกวัน',
        descriptionZh: '弹牙肉丸，每天新鲜制作',
        phone: '02-311-2345',
        hours: '10:00-20:00'
      },
      {
        id: 'guay-jub-stereo',
        name: 'ขนมเบื้องไทยโบราณ',
        nameEn: 'Traditional Thai Crepe',
        nameZh: '传统泰式薄饼',
        category: 'snack',
        location: 'ขนมเบื้องแม่ประภา (บางลำพู)',
        locationZh: '妈妈普拉传统薄饼店（邦兰普）',
        lat: 13.7625491,
        lng: 100.4975194,
        rating: 4.4,
        price: '15-20฿',
        image: 'ของกินเล่น-img/ขนมเบื้องไทยโบราณ-img.jpg',
        description: 'ขนมเบื้องไทยโบราณ ร้านอาหาร: ห้างต.เง๊กชวน ขนมเบื้องแม่ประภา (บางลำพู)',
        descriptionZh: '传统泰式薄饼，妈妈普拉传统薄饼店（邦兰普）',
        phone: '02-282-9522 / 090-998-3296',
        hours: '09:00-18:00'
      },
      {
        id: 'thuy-khai',
        name: 'ถุยข่ายตลาดพลู',
        nameEn: 'Thuy Khai Snack',
        nameZh: '泰式小吃',
        category: 'snack',
        location: 'ตลาดพลู',
        locationZh: '槟榔市场',
        lat: 13.7214,
        lng: 100.4851,
        rating: 4.5,
        price: '20-45฿',
        image: 'ของกินเล่น-img/ถุยข่ายตลาดพลู-img.jpg',
        description: 'ขนมจีบ ขนมจีน ของกินเล่นหลากหลาย',
        descriptionZh: '烧卖，米粉，各种小吃',
        phone: '02-313-4567',
        hours: '07:00-15:00'
      },
      {
        id: 'nong-tam',
        name: 'น้องตาม & น้องเก๋า (เยาวราช)',
        nameEn: 'Yaowarat Snacks',
        nameZh: '耀华力小吃',
        category: 'snack',
        location: 'เยาวราช',
        locationZh: '耀华力',
        lat: 13.7408,
        lng: 100.5110,
        rating: 4.8,
        price: '25-55฿',
        image: 'ของกินเล่น-img/น้องตาม & น้องเก๋า (เยาวราช)-img.jpg',
        description: 'ของกินเล่นสไตล์จีน หลากหลายเมนู',
        descriptionZh: '中式小吃，菜单丰富',
        phone: '02-314-5678',
        hours: '11:00-22:00'
      },
      {
        id: 'curry-puff',
        name: 'คุณนุ้ย กะหรี่ปั๊บ',
        nameEn: 'Curry Puff',
        nameZh: '咖喱角',
        category: 'snack',
        location: 'คุณนุ้ย กะหรี่ปั๊บ',
        locationZh: '咖喱角区',
        lat: 13.7342,
        lng: 100.5133,
        rating: 4.9,
        price: '15-35฿',
        image: 'ของกินเล่น-img/คุณนุ้ย กะหรี่ปั๊บ-img.jpg',
        description: 'กะหรี่ปั๊บแป้งกรอบ ไส้แน่น รสชาติเด็ด',
        descriptionZh: '咖喱角皮脆，馅料饱满，味道绝佳',
        phone: '02-315-6789',
        hours: '09:00-18:00'
      },
      {
        id: 'khanom-jeeb',
        name: 'ขนมจีบเป๊ะเจี๊ยะ',
        nameEn: 'Dim Sum',
        nameZh: '烧卖',
        category: 'snack',
        location: 'ขนมจีบเป๊ะเจี๊ยะ',
        locationZh: '烧卖区',
        lat: 13.7457,
        lng: 100.5092,
        rating: 4.7,
        price: '20-50฿',
        image: 'ของกินเล่น-img/ขนมจีบเป๊ะเจี๊ยะ-img.jpg',
        description: 'ขนมจีบหมูกุ้ง ไส้แน่น รสชาติกลมกล่อม',
        descriptionZh: '猪肉虾烧卖，馅料饱满，味道圆润',
        phone: '02-316-7890',
        hours: '07:00-14:00'
      },
      {
        id: 'kluay-tod',
        name: 'กล้วยทอดนางเล็ง',
        nameEn: 'Fried Banana',
        nameZh: '炸香蕉',
        category: 'snack',
        location: 'กล้วยทอดนางเล็ง',
        locationZh: '炸香蕉区',
        lat: 13.7594,
        lng: 100.5126,
        rating: 4.6,
        price: '10-25฿',
        image: 'ของกินเล่น-img/กล้วยทอดนางเล็ง-img.jpg',
        description: 'กล้วยทอดกรอบนอกนุ่มใน หอมหวาน',
        descriptionZh: '炸香蕉外酥内软，香甜可口',
        phone: '02-317-8901',
        hours: '14:00-21:00'
      },
      {
        id: 'angku',
        name: 'อังกู่ (ตลาดน้อย)',
        nameEn: 'Angku (Red Turtle Cake)',
        nameZh: '红龟粿',
        category: 'snack',
        location: 'ตลาดน้อย',
        locationZh: '小市场',
        lat: 13.7344,
        lng: 100.5123,
        rating: 4.8,
        price: '15-30฿',
        image: 'ของกินเล่น-img/อังกู่ (ตลาดน้อย)-img.jpg',
        description: 'อังกู่ไส้ถั่วเขียว หอมหวาน นุ่มนิ่ม',
        descriptionZh: '绿豆馅红龟粿，香甜软糯',
        phone: '02-318-9012',
        hours: '08:00-17:00'
      }
    ],
    noodle: [
      {
        id: 'thip-samai',
        name: 'ทิพย์สมัย ผัดไทยประตูผี',
        nameEn: 'Thip Samai Pad Thai',
        nameZh: '泰式炒河粉',
        category: 'noodle',
        location: 'ประตูผี',
        locationZh: '鬼门',
        lat: 13.7527,
        lng: 100.5048,
        rating: 4.9,
        price: '60-120฿',
        image: 'อาหารเส้น-img/ทิพย์สมัย ผัดไทยประตูผี-img.jpg',
        description: 'ผัดไทยห่อไข่ ตำนานความอร่อย มิชลินไกด์',
        descriptionZh: '蛋包泰式炒河粉，传奇美味，米其林推荐',
        phone: '02-319-0123',
        hours: '17:00-02:00'
      },
      {
        id: 'toy-tuay',
        name: 'ต้อยถ้วยเคี้ยมเอื้อ',
        nameEn: 'Toy Tuay Noodle Soup',
        nameZh: '碗面汤',
        category: 'noodle',
        location: 'ต้อยถ้วยเคี้ยมเอื้อ',
        locationZh: '碗面区',
        lat: 13.7634,
        lng: 100.5398,
        rating: 4.7,
        price: '40-80฿',
        image: 'อาหารเส้น-img/ก๋วยเตี๋ยวน้ำใส เนื้อนุ่ม น้ำซุปหอม-img.jpg',
        description: 'ก๋วยเตี๋ยวน้ำใส เนื้อนุ่ม น้ำซุปหอม',
        descriptionZh: '清汤面，肉嫩，汤香',
        phone: '02-320-1234',
        hours: '08:00-16:00'
      },
      {
        id: 'yen-ta-fo',
        name: 'นายอ้วนเย็นตาโฟนะเค็ง',
        nameEn: 'Yen Ta Fo (Pink Noodle Soup)',
        nameZh: '粉红汤面',
        category: 'noodle',
        location: 'นะเค็ง',
        locationZh: '那坑',
        lat: 13.7535,
        lng: 100.5003,
        rating: 4.8,
        price: '45-90฿',
        image: 'อาหารเส้น-img/นายอ้วนเย็นตาโฟนะเค็ง-img.jpg',
        description: 'เย็นตาโฟน้ำแดง เต้าหู้ทอด ปลาลูกชิ้น',
        descriptionZh: '粉红汤面，炸豆腐，鱼丸',
        phone: '02-321-2345',
        hours: '09:00-18:00'
      },
      {
        id: 'guay-jub-nai-ek',
        name: 'ก๋วยจั๊บนายเอ็ก',
        nameEn: 'Nai Ek Rolled Noodles',
        nameZh: '乃艾卷粉',
        category: 'noodle',
        location: 'เยาวราช',
        locationZh: '耀华力',
        lat: 13.7410,
        lng: 100.5094,
        rating: 4.8,
        price: '50-100฿',
        image: 'อาหารเส้น-img/ก๋วยจั๊บนายเอ็ก-img.jpg',
        description: 'ก๋วยจั๊บน้ำซุปพริกไทยขาว หมูกรอบ',
        descriptionZh: '白胡椒汤卷粉，脆皮猪肉',
        phone: '02-322-3456',
        hours: '10:00-22:00'
      },
      {
        id: 'chalem-tuay',
        name: 'แฉลมถ้วยเคี้ยมคั่วไก่',
        nameEn: 'Chicken Noodles',
        nameZh: '鸡肉面',
        category: 'noodle',
        location: 'แฉลมถ้วยเคี้ยม',
        locationZh: '碗面区',
        lat: 13.7473,
        lng: 100.5106,
        rating: 4.6,
        price: '40-75฿',
        image: 'อาหารเส้น-img/แฉลมถ้วยเคี้ยมคั่วไก่-img.jpg',
        description: 'ก๋วยเตี๋ยวไก่ เนื้อไก่นุ่ม น้ำซุปกลมกล่อม',
        descriptionZh: '鸡肉面，鸡肉嫩滑，汤汁圆润',
        phone: '02-323-4567',
        hours: '07:00-15:00'
      },
      {
        id: 'rad-na',
        name: 'ราดหน้าฮอฮกสูร 40 ปี',
        nameEn: 'Rad Na (Gravy Noodles)',
        nameZh: '浇汁面',
        category: 'noodle',
        location: 'ฮอฮกสูร',
        locationZh: '福寿区',
        lat: 13.7536,
        lng: 100.4993,
        rating: 4.7,
        price: '45-85฿',
        image: 'อาหารเส้น-img/ราดหน้าฮอฮกสูร 40 ปี-img.jpg',
        description: 'ราดหน้าเส้นใหญ่ น้ำราดข้น ผักกาดหอม',
        descriptionZh: '宽面浇汁，酱汁浓郁，芥菜香',
        phone: '02-324-5678',
        hours: '10:00-20:00'
      },
      {
        id: 'namee-kew-sae',
        name: 'นะหมี่คิ้วแซ่ (ทองหล่อ)',
        nameEn: 'Chinese Noodles',
        nameZh: '中式面',
        category: 'noodle',
        location: 'ทองหล่อ',
        locationZh: '通罗',
        lat: 13.7246,
        lng: 100.5779,
        rating: 4.8,
        price: '50-95฿',
        image: 'อาหารเส้น-img/นะหมี่คิ้วแซ่ (ทองหล่อ)-img.jpg',
        description: 'บะหมี่จีนแท้ เส้นเหนียว น้ำซุปเข้มข้น',
        descriptionZh: '正宗中式面，面条有嚼劲，汤浓郁',
        phone: '02-325-6789',
        hours: '11:00-21:00'
      },
      {
        id: 'see-laeng-yai',
        name: 'สี่แหล่งใหญ่ (ทรงวาด)',
        nameEn: 'Big Noodles',
        nameZh: '大面',
        category: 'noodle',
        location: 'ทรงวาด',
        locationZh: '颂瓦',
        lat: 13.7397,
        lng: 100.5085,
        rating: 4.7,
        price: '45-90฿',
        image: 'อาหารเส้น-img/สี่แหล่งใหญ่ (ทรงวาด)-img.jpg',
        description: 'ก๋วยเตี๋ยวเส้นใหญ่ เนื้อเยอะ คุ้มค่า',
        descriptionZh: '大碗面，肉多，物超所值',
        phone: '02-326-7890',
        hours: '08:00-17:00'
      },
      {
        id: 'elvis-suki',
        name: 'เฮลวีส สุกี้ (ยศเส)',
        nameEn: 'Elvis Sukiyaki',
        nameZh: '火锅',
        category: 'noodle',
        location: 'ยศเส',
        locationZh: '耀瑟',
        lat: 13.7490,
        lng: 100.5159,
        rating: 4.9,
        price: '60-120฿',
        image: 'อาหารเส้น-img/เฮลวีส สุกี้ (ยศเส)-img.jpg',
        description: 'สุกี้แห้งคั่วกระทะ หอมกลิ่นไหม้ อร่อยเด็ด',
        descriptionZh: '干锅火锅，焦香味美，超级好吃',
        phone: '02-327-8901',
        hours: '16:00-23:00'
      }
    ]
  };

  // Current active category
  let currentCategory = 'main';

  // Initialize when DOM is ready and config is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for config to load, or check if it's already loaded
    const checkConfigAndInit = () => {
      if (window.streetFoodConfig) {
        console.log('✅ Config loaded, initializing with', window.streetFoodConfig.itemsPerCategory, 'items per category');
        initStreetFood();
      } else {
        console.log('⏳ Waiting for config...');
        setTimeout(checkConfigAndInit, 100);
      }
    };
    checkConfigAndInit();
  });

  function initStreetFood() {
    setupCategoryTabs();
    renderFoodGrid(currentCategory);
    setupModalHandlers();
  }

  // Setup category tab switching
  function setupCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Switch category
        switchCategory(category);
      });
    });
  }

  // Switch to different category
  function switchCategory(category) {
    const foodGrid = document.getElementById('foodGrid');
    
    // Fade out
    foodGrid.classList.add('changing');
    
    setTimeout(() => {
      currentCategory = category;
      renderFoodGrid(category);
      
      // Fade in
      setTimeout(() => {
        foodGrid.classList.remove('changing');
      }, 50);
    }, 300);
  }

  // Render food grid for category
  function renderFoodGrid(category) {
    const foodGrid = document.getElementById('foodGrid');
    let foods = foodData[category];
    
    console.log(`🍽️ Rendering category: ${category}, Total items available: ${foods ? foods.length : 0}`);
    
    // Apply configuration to limit items per category
    if (window.streetFoodConfig && window.streetFoodConfig.categories[category]) {
      const allowedIds = window.streetFoodConfig.categories[category];
      console.log(`🔧 Filtering to allowed IDs:`, allowedIds);
      foods = foods.filter(food => allowedIds.includes(food.id));
      console.log(`✅ After filtering: ${foods.length} items`);
    } else {
      console.warn(`⚠️ No config found for category: ${category}`);
      console.log('window.streetFoodConfig:', window.streetFoodConfig);
    }
    
    if (!foods || foods.length === 0) {
      foodGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem;">
          <h3 style="font-family: 'Noto Serif Thai', serif; font-size: 1.5rem; color: var(--color-header); margin-bottom: 1rem;">
            🚧 กำลังเตรียมข้อมูล
          </h3>
          <p style="font-family: 'Lato', sans-serif; color: var(--color-header); opacity: 0.6;">
            เมนูในหมวดนี้กำลังอยู่ระหว่างการเพิ่มข้อมูล
          </p>
        </div>
      `;
      return;
    }

    // Get current language
    const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
    
    foodGrid.innerHTML = foods.map(food => {
      const name = currentLang === 'zh' && food.nameZh ? food.nameZh : food.name;
      const location = currentLang === 'zh' && food.locationZh ? food.locationZh : food.location;
      const description = currentLang === 'zh' && food.descriptionZh ? food.descriptionZh : food.description;
      
      return `
        <article class="food-card" data-food-id="${food.id}">
          <div class="food-card-image">
            <img src="${food.image}" alt="${name}" loading="lazy" />
            <span class="food-card-badge">${food.price}</span>
          </div>
          <div class="food-card-content">
            <h3 class="food-card-title">${name}</h3>
            <p class="food-card-subtitle">${food.nameEn}</p>
            <div class="food-card-location">
              <span>📍</span>
              <span>${location}</span>
            </div>
            <div class="food-card-rating">
              <span>⭐</span>
              <span>${food.rating}</span>
            </div>
            <button class="food-card-cta">
              ${currentLang === 'zh' ? '查看位置 →' : 'ดูตำแหน่ง →'}
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Attach click handlers
    attachFoodCardHandlers();
  }

  // Attach click handlers to food cards
  function attachFoodCardHandlers() {
    const foodCards = document.querySelectorAll('.food-card');
    
    foodCards.forEach(card => {
      card.addEventListener('click', function() {
        const foodId = this.getAttribute('data-food-id');
        const food = findFoodById(foodId);
        
        if (food) {
          showLocationModal(food);
        }
      });
    });
  }

  // Find food by ID
  function findFoodById(id) {
    for (let category in foodData) {
      const food = foodData[category].find(f => f.id === id);
      if (food) return food;
    }
    return null;
  }

  // Show location modal
  function showLocationModal(food) {
    const modal = document.getElementById('locationModal');
    const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
    
    const name = currentLang === 'zh' && food.nameZh ? food.nameZh : food.name;
    const location = currentLang === 'zh' && food.locationZh ? food.locationZh : food.location;
    const description = currentLang === 'zh' && food.descriptionZh ? food.descriptionZh : food.description;
    
    modal.innerHTML = `
      <div class="location-modal">
        <button class="location-modal-close" onclick="closeLocationModal()">✕</button>
        
        <div class="location-modal-header">
          <h2 class="location-modal-title">${name}</h2>
          <p class="location-modal-subtitle">${food.nameEn}</p>
        </div>
        
        <div class="location-modal-body">
          <div class="location-info-item">
            <div class="location-info-icon">📍</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '位置' : 'ที่ตั้ง'}</div>
              <div class="location-info-value">${location}</div>
            </div>
          </div>
          
          <div class="location-info-item">
            <div class="location-info-icon">📝</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '描述' : 'รายละเอียด'}</div>
              <div class="location-info-value">${description}</div>
            </div>
          </div>
          
          <div class="location-info-item">
            <div class="location-info-icon">⭐</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '评分' : 'คะแนน'}</div>
              <div class="location-info-value">${food.rating} / 5.0</div>
            </div>
          </div>
          
          <div class="location-info-item">
            <div class="location-info-icon">💰</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '价格' : 'ราคา'}</div>
              <div class="location-info-value">${food.price}</div>
            </div>
          </div>
          
          ${food.hours ? `
          <div class="location-info-item">
            <div class="location-info-icon">🕐</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '营业时间' : 'เวลาเปิด-ปิด'}</div>
              <div class="location-info-value">${food.hours}</div>
            </div>
          </div>
          ` : ''}
          
          ${food.phone ? `
          <div class="location-info-item">
            <div class="location-info-icon">📞</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '电话' : 'เบอร์โทร'}</div>
              <div class="location-info-value">${food.phone}</div>
            </div>
          </div>
          ` : ''}
          
          <div class="location-info-item">
            <div class="location-info-icon">🗺️</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '坐标' : 'พิกัด'}</div>
              <div class="location-info-value">${food.lat}, ${food.lng}</div>
            </div>
          </div>
        </div>
        
        <div class="location-modal-actions">
          <button class="location-modal-btn location-modal-btn-primary" onclick="goToExplore(${food.lat}, ${food.lng})">
            ${currentLang === 'zh' ? '在探索页面查看 →' : 'ดูในหน้า Explore →'}
          </button>
          <button class="location-modal-btn location-modal-btn-secondary" onclick="closeLocationModal()">
            ${currentLang === 'zh' ? '关闭' : 'ปิด'}
          </button>
        </div>
      </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close location modal
  window.closeLocationModal = function() {
    const modal = document.getElementById('locationModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Go to Explore page with location
  window.goToExplore = function(lat, lng) {
    // Find the matching location in explore page by coordinates
    // Store the coordinates in sessionStorage to pre-select on explore page
    sessionStorage.setItem('exploreLocationLat', lat);
    sessionStorage.setItem('exploreLocationLng', lng);
    
    // Redirect to explore page
    window.location.href = 'explore.html';
  };

  // Setup modal handlers
  function setupModalHandlers() {
    const modal = document.getElementById('locationModal');
    
    // Click outside to close
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeLocationModal();
      }
    });
    
    // ESC key to close
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeLocationModal();
      }
    });
  }

  // Re-render when language changes
  window.addEventListener('languageChanged', (e) => {
    renderFoodGrid(currentCategory);
  });

})();
