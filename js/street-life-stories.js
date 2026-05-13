/* ══════════════════════════════════════════════════════════════
   STREET LIFE STORIES - Modal System JavaScript
   Thai Streetfood Softpower Theme
   ══════════════════════════════════════════════════════════════ */

// Story Data - 6 Voices of Street Food
const storiesData = {
  'voice-resilience': {
    category: 'Resilience',
    categoryZh: '韧性',
    title: 'Voice of Resilience: เสียงแห่งการปรับตัวและการต่อสู้',
    titleZh: 'Voice of Resilience: 适应与奋斗之声',
    subtitle: 'The Voice of Adaptation and Struggle',
    subtitleZh: '适应与奋斗之声',
    intro: 'Street Food คืออาชีพที่หล่อเลี้ยงคนตัวเล็กตัวน้อยในสังคมไทย ไม่ว่าเศรษฐกิจจะเป็นอย่างไร รถเข็นอาหารข้างทางยังคงเป็นสัญลักษณ์ของการไม่ยอมแพ้และพร้อมจะปรับตัว',
    introZh: '街头美食是养活泰国社会小人物的职业。无论经济如何，路边餐车仍然是不屈不挠和随时适应的象征',
    heroImage: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=1200&q=80',
    sections: [
      {
        title: 'การปรับตัวในยุคดิจิทัล',
        titleZh: '数字时代的适应',
        content: 'Street Food คืออาชีพที่หล่อเลี้ยงคนตัวเล็กตัวน้อยในสังคมไทย ไม่ว่าเศรษฐกิจจะเป็นอย่างไร รถเข็นอาหารข้างทางยังคงเป็นสัญลักษณ์ของการไม่ยอมแพ้และพร้อมจะปรับตัว เช่น การเข้าสู่แพลตฟอร์ม Delivery ในช่วงวิกฤต\n\nแม้จะเผชิญกับความท้าทายมากมาย แต่ผู้ประกอบการ Street Food ก็ยังคงหาทางอยู่รอดและพัฒนาธุรกิจของตนเองอย่างต่อเนื่อง',
        contentZh: '街头美食是养活泰国社会小人物的职业。无论经济如何，路边餐车仍然是不屈不挠和随时适应的象征，例如在危机期间进入外卖平台。\n\n尽管面临许多挑战，街头美食经营者仍然不断寻找生存和发展业务的方法。'
      },
      {
        title: 'แหล่งจ้างงานสำคัญ',
        titleZh: '重要的就业来源',
        content: 'รายงานจาก WIEGO (Women in Informal Employment: Globalizing and Organizing) ระบุว่า Street Food ในกรุงเทพฯ คือแหล่งจ้างงานสำคัญที่สร้างรายได้ให้กับผู้หญิงและแรงงานนอกระบบ ซึ่งเป็นกลไกสำคัญในการพยุงเศรษฐกิจระดับฐานราก\n\nStreet Food ไม่เพียงแต่เป็นอาชีพที่สร้างรายได้ แต่ยังเป็นเครือข่ายสังคมที่ช่วยเหลือซึ่งกันและกัน',
        contentZh: 'WIEGO（非正规就业妇女：全球化与组织）的报告指出，曼谷的街头美食是为妇女和非正规劳动力创造收入的重要就业来源，是支撑基层经济的重要机制。\n\n街头美食不仅是创收职业，还是相互帮助的社会网络。'
      }
    ],
    quote: {
      text: 'ไม่ว่าเศรษฐกิจจะเป็นอย่างไร เราก็ยังต้องกินข้าว และรถเข็นข้างทางก็ยังคงอยู่ที่นี่เพื่อให้บริการทุกคน',
      textZh: '无论经济如何，我们仍然需要吃饭，路边餐车仍然在这里为每个人服务',
      author: 'แม่ค้า Street Food มากกว่า 20 ปี',
      authorZh: '街头美食摊主超过20年'
    },
    highlights: [
      { icon: '👥', label: 'แรงงานนอกระบบ', labelZh: '非正规劳动力', value: 'หลายแสนคน', valueZh: '数十万人' },
      { icon: '💰', label: 'มูลค่าทางเศรษฐกิจ', labelZh: '经济价值', value: '2.7 แสนล้านบาท/ปี', valueZh: '2700亿泰铢/年' },
      { icon: '🚀', label: 'การปรับตัว', labelZh: '适应能力', value: 'เข้าสู่ยุคดิจิทัล', valueZh: '进入数字时代' },
      { icon: '🌍', label: 'ผลกระทบ', labelZh: '影响', value: 'เศรษฐกิจฐานราก', valueZh: '基层经济' }
    ],
    mapText: 'Street Food มีอยู่ทุกมุมเมือง เป็นส่วนสำคัญของเศรษฐกิจไทย',
    mapTextZh: '街头美食遍布城市各个角落，是泰国经济的重要组成部分',
    source: 'WIEGO (Women in Informal Employment: Globalizing and Organizing)'
  },

  'voice-accessibility': {
    category: 'Accessibility',
    categoryZh: '可及性',
    title: 'Voice of Accessibility: เสียงแห่งความเท่าเทียม (ครัวของเมือง)',
    titleZh: 'Voice of Accessibility: 平等之声（城市厨房）',
    subtitle: 'The Voice of Equality - Kitchen of the City',
    subtitleZh: '平等之声 - 城市厨房',
    intro: 'Street Food ทำหน้าที่เป็น "สวัสดิการทางอาหาร" ที่ทุกคนเข้าถึงได้ ตั้งแต่พนักงานออฟฟิศระดับสูงไปจนถึงแรงงานรายวัน ทุกคนสามารถนั่งกินข้าวโต๊ะเดียวกันได้ที่ข้างถนน',
    introZh: '街头美食充当"食品福利"，每个人都可以享用。从高级办公室职员到日薪工人，每个人都可以在路边同桌吃饭',
    heroImage: 'https://www.prachachat.net/wp-content/uploads/2020/09/IMG_2852.jpg',
    sections: [
      {
        title: 'ความมั่นคงทางอาหารในเขตเมือง',
        titleZh: '城市粮食安全',
        content: 'องค์การอาหารและเกษตรแห่งสหประชาชาติ (FAO) ยกย่องให้ Street Food ของไทยเป็นแบบอย่างของความมั่นคงทางอาหารในเขตเมือง (Urban Food Security) โดยช่วยให้คนเมืองเข้าถึงอาหารที่มีคุณค่าทางโภชนาการในราคาที่เหมาะสม\n\nStreet Food เป็นมากกว่าแค่อาหาร แต่เป็นพื้นที่สาธารณะที่ทุกคนมีสิทธิ์เท่าเทียมกัน',
        contentZh: '联合国粮食及农业组织（FAO）赞扬泰国街头美食是城市粮食安全的典范，帮助城市居民以合理的价格获得营养食品。\n\n街头美食不仅仅是食物，而是每个人都有平等权利的公共空间。'
      },
      {
        title: 'ครัวของเมือง',
        titleZh: '城市厨房',
        content: 'ไม่ว่าคุณจะเป็นใคร มาจากไหน มีเงินเท่าไหร่ ที่โต๊ะข้างถนนทุกคนเท่าเทียมกัน นี่คือเสน่ห์ของ Street Food ที่ทำให้สังคมไทยมีความอบอุ่นและเป็นกันเอง\n\nStreet Food เป็นพื้นที่ที่ทำลายกำแพงทางสังคม ทำให้ทุกคนได้พบปะและแบ่งปันประสบการณ์ร่วมกัน',
        contentZh: '无论你是谁，来自哪里，有多少钱，在路边桌子上每个人都是平等的。这就是街头美食的魅力，使泰国社会温暖友好。\n\n街头美食是打破社会壁垒的空间，让每个人都能见面并分享经验。'
      }
    ],
    quote: {
      text: 'ที่นี่ไม่มีชนชั้น ไม่มีกำแพง มีแค่คนที่หิวข้าวและอาหารอร่อยๆ ที่รอให้ทุกคนได้ลิ้มลอง',
      textZh: '这里没有阶级，没有墙壁，只有饥饿的人和等待每个人品尝的美味食物',
      author: 'นักสังคมวิทยา',
      authorZh: '社会学家'
    },
    highlights: [
      { icon: '🍜', label: 'ราคาเฉลี่ย', labelZh: '平均价格', value: '40-100 บาท', valueZh: '40-100泰铢' },
      { icon: '👥', label: 'ผู้บริโภคต่อวัน', labelZh: '每日消费者', value: 'หลายล้านคน', valueZh: '数百万人' },
      { icon: '⏰', label: 'เวลาให้บริการ', labelZh: '服务时间', value: '24 ชั่วโมง', valueZh: '24小时' },
      { icon: '🌍', label: 'การยอมรับ', labelZh: '认可', value: 'FAO ยกย่อง', valueZh: 'FAO赞扬' }
    ],
    mapText: 'Street Food เป็นสวัสดิการทางอาหารที่ทุกคนเข้าถึงได้ทั่วกรุงเทพฯ',
    mapTextZh: '街头美食是曼谷各地每个人都可以享用的食品福利',
    source: 'FAO (Food and Agriculture Organization of the United Nations)'
  },

  'voice-heritage': {
    category: 'Heritage',
    categoryZh: '传承',
    title: 'Voice of Heritage: เสียงจากอดีตที่ยังมีลมหายใจ',
    titleZh: 'Voice of Heritage: 仍在呼吸的过去之声',
    subtitle: 'The Voice from the Past That Still Breathes',
    subtitleZh: '仍在呼吸的过去之声',
    intro: 'หลายร้านไม่ใช่แค่คนขายอาหาร แต่เป็นผู้รักษา "สูตรลับ" ที่ส่งต่อกันมา 2-3 รุ่น เสียงตะหลิวกระทบกระทะคือเสียงของประวัติศาสตร์ครอบครัวที่ยังไม่สูญหาย',
    introZh: '许多餐厅不仅仅是卖食物的人，而是保存代代相传2-3代的"秘方"的守护者。锅铲碰撞锅的声音是尚未消失的家族历史之声',
    heroImage: 'https://www.salika.co/wp-content/uploads/2018/11/shutterstock_1130007947.jpg',
    sections: [
      {
        title: 'การรักษาสูตรดั้งเดิม',
        titleZh: '保存传统配方',
        content: 'หลายร้านไม่ใช่แค่คนขายอาหาร แต่เป็นผู้รักษา "สูตรลับ" ที่ส่งต่อกันมา 2-3 รุ่น เสียงตะหลิวกระทบกระทะคือเสียงของประวัติศาสตร์ครอบครัวที่ยังไม่สูญหาย\n\nการถ่ายทอดสูตรอาหารไม่ใช่แค่การสอนวิธีทำ แต่เป็นการส่งต่อความทรงจำ ค่านิยม และเอกลักษณ์ของครอบครัว',
        contentZh: '许多餐厅不仅仅是卖食物的人，而是保存代代相传2-3代的"秘方"的守护者。锅铲碰撞锅的声音是尚未消失的家族历史之声。\n\n传授食谱不仅仅是教授如何制作，而是传递记忆、价值观和家族身份。'
      },
      {
        title: 'การยอมรับจาก Michelin Guide',
        titleZh: '米其林指南的认可',
        content: 'Michelin Guide Thailand เริ่มมอบรางวัล "Bib Gourmand" และ "Michelin Star" ให้กับร้าน Street Food (เช่น เจ๊ไฝ หรือ ก๋วยเตี๋ยวคั่วไก่สวนมะลิ) เพื่อยกย่องการรักษาคุณภาพและฝีมือแบบดั้งเดิมที่สืบทอดกันมา\n\nการได้รับรางวัลจาก Michelin ไม่ได้ทำให้ร้านเหล่านี้เปลี่ยนแปลง แต่กลับยิ่งทำให้พวกเขายึดมั่นในสูตรดั้งเดิมมากขึ้น',
        contentZh: '泰国米其林指南开始向街头美食餐厅（如姐痣或茉莉园炒鸡面）颁发"必比登推介"和"米其林星"奖项，以表彰保持代代相传的质量和传统技艺。\n\n获得米其林奖项并没有改变这些餐厅，反而让他们更加坚持传统配方。'
      }
    ],
    quote: {
      text: 'สูตรนี้คุณยายสอนแม่ แม่สอนฉัน และฉันจะสอนลูก นี่ไม่ใช่แค่อาหาร แต่เป็นมรดกของครอบครัว',
      textZh: '这个配方是祖母教母亲，母亲教我，我将教孩子。这不仅仅是食物，而是家族遗产',
      author: 'เจ้าของร้าน Street Food รุ่นที่ 3',
      authorZh: '第三代街头美食店主'
    },
    highlights: [
      { icon: '⭐', label: 'Michelin Star', labelZh: '米其林星', value: 'หลายร้าน', valueZh: '多家餐厅' },
      { icon: '👨‍👩‍👧', label: 'การสืบทอด', labelZh: '传承', value: '2-3 รุ่น', valueZh: '2-3代' },
      { icon: '📜', label: 'สูตรโบราณ', labelZh: '古老配方', value: '50-100 ปี', valueZh: '50-100年' },
      { icon: '🏆', label: 'รางวัล', labelZh: '奖项', value: 'Bib Gourmand', valueZh: '必比登推介' }
    ],
    mapText: 'ร้าน Street Food ที่ได้รับรางวัล Michelin กระจายอยู่ทั่วกรุงเทพฯ',
    mapTextZh: '获得米其林奖项的街头美食餐厅遍布曼谷',
    source: 'Michelin Guide Thailand'
  },

  'voice-fusion': {
    category: 'Fusion',
    categoryZh: '融合',
    title: 'Voice of Fusion: เสียงแห่งการหลอมรวมวัฒนธรรม',
    titleZh: 'Voice of Fusion: 文化融合之声',
    subtitle: 'The Voice of Cultural Fusion',
    subtitleZh: '文化融合之声',
    intro: 'Street Food ไทยคือหลักฐานการเดินทางของวัฒนธรรมที่ยังมีชีวิต (Living History) เช่น การใช้กระทะเหล็กจากจีน เครื่องเทศจากอินเดีย หรือพริกจากโปรตุเกส ที่ถูกปรุงใหม่จนกลายเป็น "รสชาติไทย"',
    introZh: '泰国街头美食是仍在生活的文化旅程的证据（活历史），例如使用来自中国的铁锅、来自印度的香料或来自葡萄牙的辣椒，经过重新调制成为"泰国味道"',
    heroImage: 'https://www.amazingadventurebangkok.com/wp-content/uploads/2021/08/1.jpg',
    sections: [
      {
        title: 'การหลอมรวมทางวัฒนธรรม',
        titleZh: '文化融合',
        content: 'Street Food ไทยคือหลักฐานการเดินทางของวัฒนธรรมที่ยังมีชีวิต (Living History) เช่น การใช้กระทะเหล็กจากจีน เครื่องเทศจากอินเดีย หรือพริกจากโปรตุเกส ที่ถูกปรุงใหม่จนกลายเป็น "รสชาติไทย"\n\nการผสมผสานนี้ไม่ใช่การลอกเลียนแบบ แต่เป็นการสร้างสรรค์สิ่งใหม่ที่มีเอกลักษณ์เฉพาะตัว',
        contentZh: '泰国街头美食是仍在生活的文化旅程的证据（活历史），例如使用来自中国的铁锅、来自印度的香料或来自葡萄牙的辣椒，经过重新调制成为"泰国味道"。\n\n这种融合不是模仿，而是创造具有独特身份的新事物。'
      },
      {
        title: 'ย่านเยาวราชและตลาดพลู',
        titleZh: '耀华力和塔拉普鲁市场',
        content: 'งานวิจัยด้านมานุษยวิทยาอาหารจาก สถาบันไทยคดีศึกษา ระบุถึงการผสมผสานของวัฒนธรรมอาหารไทย-จีน ในย่านเยาวราชและตลาดพลู ว่าเป็นการหลอมรวมที่สร้างเอกลักษณ์ใหม่ให้กับสังคมไทย\n\nที่นี่คุณจะเห็นการผสมผสานของวัฒนธรรมที่ลงตัว ทั้งภาษา อาหาร และวิถีชีวิต',
        contentZh: '泰国研究所的食品人类学研究指出，耀华力和塔拉普鲁市场的泰中饮食文化融合为泰国社会创造了新的身份。\n\n在这里，您将看到文化的完美融合，包括语言、食物和生活方式。'
      }
    ],
    quote: {
      text: 'อาหารไทยไม่ได้เกิดขึ้นเองในวันเดียว แต่เป็นผลจากการแลกเปลี่ยนวัฒนธรรมที่สะสมมาหลายร้อยปี',
      textZh: '泰国菜不是一天形成的，而是数百年文化交流积累的结果',
      author: 'นักมานุษยวิทยาอาหาร',
      authorZh: '食品人类学家'
    },
    highlights: [
      { icon: '🌏', label: 'วัฒนธรรมที่ผสมผสาน', labelZh: '融合文化', value: '5+ ประเทศ', valueZh: '5+国家' },
      { icon: '🍜', label: 'เมนูผสมผสาน', labelZh: '融合菜单', value: 'หลายร้อยเมนู', valueZh: '数百道菜' },
      { icon: '📚', label: 'งานวิจัย', labelZh: '研究', value: 'สถาบันไทยคดีศึกษา', valueZh: '泰国研究所' },
      { icon: '🏛️', label: 'ย่านสำคัญ', labelZh: '重要地区', value: 'เยาวราช ตลาดพลู', valueZh: '耀华力 塔拉普鲁' }
    ],
    mapText: 'ย่านเยาวราชและตลาดพลูเป็นศูนย์กลางของการหลอมรวมวัฒนธรรมอาหาร',
    mapTextZh: '耀华力和塔拉普鲁市场是饮食文化融合的中心',
    source: 'สถาบันไทยคดีศึกษา (Thai Studies Institute)'
  },

  'voice-innovation': {
    category: 'Innovation',
    categoryZh: '创新',
    title: 'Voice of Innovation: เสียงของการสร้างสรรค์ที่ไม่มีหยุด',
    titleZh: 'Voice of Innovation: 永不停息的创造之声',
    subtitle: 'The Voice of Endless Creativity',
    subtitleZh: '永不停息的创造之声',
    intro: 'ข้างถนนคือ "ห้องแล็บ" ทดลองอาหารที่ใหญ่ที่สุด เมนูแปลกๆ หรือเทรนด์อาหารใหม่ๆ มักจะเริ่มจากรถเข็นข้างทางก่อนจะขึ้นห้างสรรพสินค้าเสมอ',
    introZh: '路边是最大的食品"实验室"。奇怪的菜单或新的食品趋势通常从路边餐车开始，然后才进入购物中心',
    heroImage: 'https://www.salika.co/wp-content/uploads/2023/11/thai-streetfood-local-travel-life.webp',
    sections: [
      {
        title: 'ห้องแล็บทดลองอาหาร',
        titleZh: '食品实验室',
        content: 'ข้างถนนคือ "ห้องแล็บ" ทดลองอาหารที่ใหญ่ที่สุด เมนูแปลกๆ หรือเทรนด์อาหารใหม่ๆ มักจะเริ่มจากรถเข็นข้างทางก่อนจะขึ้นห้างสรรพสินค้าเสมอ\n\nความคิดสร้างสรรค์ไม่มีขีดจำกัดเมื่อคุณอยู่บนถนน ทุกวันคือโอกาสในการทดลองสิ่งใหม่ๆ',
        contentZh: '路边是最大的食品"实验室"。奇怪的菜单或新的食品趋势通常从路边餐车开始，然后才进入购物中心。\n\n当你在街上时，创造力是无限的。每一天都是尝试新事物的机会。'
      },
      {
        title: 'มูลค่าทางเศรษฐกิจ',
        titleZh: '经济价值',
        content: 'ศูนย์วิจัยกสิกรไทย ระบุว่าเสน่ห์ของ Street Food ไทยที่ดึงดูดนักท่องเที่ยวได้มากที่สุดคือ "ความหลากหลายและเมนูที่แปลกใหม่" ซึ่งสร้างมูลค่าทางเศรษฐกิจกว่า 2.7 แสนล้านบาทต่อปี\n\nการสร้างสรรค์เมนูใหม่ๆ ไม่เพียงแต่ดึงดูดลูกค้า แต่ยังช่วยสร้างมูลค่าทางเศรษฐกิจให้กับประเทศ',
        contentZh: '泰国开泰银行研究中心指出，泰国街头美食最吸引游客的魅力是"多样性和新奇菜单"，每年创造超过2700亿泰铢的经济价值。\n\n创造新菜单不仅吸引顾客，还为国家创造经济价值。'
      }
    ],
    quote: {
      text: 'ถ้าคุณอยากรู้ว่าอาหารไทยจะไปทางไหนในอนาคต ให้มาดูที่รถเข็นข้างทาง',
      textZh: '如果你想知道泰国菜的未来方向，请看路边餐车',
      author: 'นักวิจารณ์อาหาร',
      authorZh: '美食评论家'
    },
    highlights: [
      { icon: '💡', label: 'เมนูใหม่ต่อปี', labelZh: '每年新菜单', value: 'หลายพันเมนู', valueZh: '数千道菜' },
      { icon: '💰', label: 'มูลค่าทางเศรษฐกิจ', labelZh: '经济价值', value: '2.7 แสนล้านบาท', valueZh: '2700亿泰铢' },
      { icon: '🌟', label: 'เสน่ห์หลัก', labelZh: '主要魅力', value: 'ความหลากหลาย', valueZh: '多样性' },
      { icon: '🚀', label: 'นวัตกรรม', labelZh: '创新', value: 'ไม่มีหยุด', valueZh: '永不停息' }
    ],
    mapText: 'Street Food เป็นแหล่งนวัตกรรมอาหารที่ใหญ่ที่สุดของไทย',
    mapTextZh: '街头美食是泰国最大的食品创新来源',
    source: 'ศูนย์วิจัยกสิกรไทย (Kasikorn Research Center)'
  },

  'voice-global': {
    category: 'Global',
    categoryZh: '全球',
    title: 'Voice of Global Citizen: เสียงจากไทยสู่สายตาโลก (Soft Power)',
    titleZh: 'Voice of Global Citizen: 从泰国到世界的声音（软实力）',
    subtitle: 'The Voice from Thailand to the World - Soft Power',
    subtitleZh: '从泰国到世界的声音 - 软实力',
    intro: 'เมื่อพูดถึง Street Food โลกจะนึกถึงไทยเป็นอันดับแรกๆ นี่คือ "เสียง" ที่ทรงพลังที่สุดในการสร้างภาพลักษณ์ประเทศโดยไม่ต้องใช้คำพูด',
    introZh: '当谈到街头美食时，世界会首先想到泰国。这是在不使用言语的情况下塑造国家形象的最强大"声音"',
    heroImage: 'https://i.ytimg.com/vi/oKCuIeHDw-o/hq720.jpg',
    sections: [
      {
        title: 'Soft Power ของไทย',
        titleZh: '泰国的软实力',
        content: 'เมื่อพูดถึง Street Food โลกจะนึกถึงไทยเป็นอันดับแรกๆ นี่คือ "เสียง" ที่ทรงพลังที่สุดในการสร้างภาพลักษณ์ประเทศโดยไม่ต้องใช้คำพูด\n\nStreet Food ไทยเป็นเครื่องมือทางการทูตที่ทรงพลัง ที่ทำให้คนทั่วโลกรู้จักและรักประเทศไทย',
        contentZh: '当谈到街头美食时，世界会首先想到泰国。这是在不使用言语的情况下塑造国家形象的最强大"声音"。\n\n泰国街头美食是强大的外交工具，让世界各地的人们了解和热爱泰国。'
      },
      {
        title: 'การยอมรับระดับโลก',
        titleZh: '全球认可',
        content: 'CNN Travel จัดอันดับให้กรุงเทพฯ เป็นเมืองที่มี Street Food ดีที่สุดในโลก (World\'s Best Street Food City) ต่อเนื่องหลายสมัย ซึ่งเป็นปัจจัยหลักที่นักท่องเที่ยวทั่วโลกเลือกมาเยือนประเทศไทย\n\nการได้รับการยอมรับนี้ไม่ใช่เรื่องบังเอิญ แต่เป็นผลจากคุณภาพ ความหลากหลาย และความจริงใจของผู้ประกอบการ Street Food ไทย',
        contentZh: 'CNN Travel连续多年将曼谷评为世界上最好的街头美食城市，这是世界各地游客选择访问泰国的主要因素。\n\n这种认可不是偶然的，而是泰国街头美食经营者的质量、多样性和真诚的结果。'
      }
    ],
    quote: {
      text: 'Street Food ไทยคือทูตที่ดีที่สุดของประเทศ ทำให้คนทั่วโลกรู้จักและรักเรา',
      textZh: '泰国街头美食是国家最好的大使，让世界各地的人们了解和热爱我们',
      author: 'นักการทูตวัฒนธรรม',
      authorZh: '文化外交官'
    },
    highlights: [
      { icon: '🏆', label: 'อันดับโลก', labelZh: '世界排名', value: '#1 Street Food City', valueZh: '#1街头美食城市' },
      { icon: '🌍', label: 'นักท่องเที่ยว', labelZh: '游客', value: 'หลายล้านคน/ปี', valueZh: '数百万人/年' },
      { icon: '💰', label: 'รายได้จากท่องเที่ยว', labelZh: '旅游收入', value: '2.7 แสนล้านบาท', valueZh: '2700亿泰铢' },
      { icon: '📰', label: 'สื่อระดับโลก', labelZh: '全球媒体', value: 'CNN Travel', valueZh: 'CNN Travel' }
    ],
    mapText: 'กรุงเทพฯ ได้รับการยกย่องเป็นเมืองที่มี Street Food ดีที่สุดในโลก',
    mapTextZh: '曼谷被誉为世界上最好的街头美食城市',
    source: 'CNN Travel'
  }
};


// ══════════════════════════════════════════════════════════════
// Modal Management
// ══════════════════════════════════════════════════════════════
let storyModalInstance = null;

class StoryModal {
  constructor() {
    this.overlay = null;
    this.currentStory = null;
    this.init();
  }

  init() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'story-modal-overlay';
    document.body.appendChild(this.overlay);

    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay.classList.contains('active')) this.close();
    });
  }

  open(storyId) {
    const story = storiesData[storyId];
    if (!story) { console.error('Story not found:', storyId); return; }

    this.currentStory = story;
    this.render(story);
    document.body.style.overflow = 'hidden';
    setTimeout(() => this.overlay.classList.add('active'), 10);
  }

  close() {
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => { this.overlay.innerHTML = ''; }, 400);
  }

  render(story) {
    const themeClass = story.theme === 'dark' ? 'theme-dark' : '';
    const currentLang = (window.currentLanguage && typeof window.currentLanguage === 'function') ? window.currentLanguage() : 'th';

    const t = (th, zh) => (currentLang === 'zh' && zh) ? zh : th;

    const sectionsHTML = story.sections.map(s => `
      <div class="story-section">
        <h2 class="story-section-title">${t(s.title, s.titleZh)}</h2>
        <div class="story-section-content"><p>${t(s.content, s.contentZh).replace(/\n\n/g, '</p><p>')}</p></div>
      </div>`).join('');

    const highlightsHTML = story.highlights.map(h => `
      <div class="story-highlight-item">
        <div class="story-highlight-icon">${h.icon}</div>
        <div class="story-highlight-label">${t(h.label, h.labelZh)}</div>
        <div class="story-highlight-value">${t(h.value, h.valueZh)}</div>
      </div>`).join('');

    this.overlay.innerHTML = `
      <div class="story-modal ${themeClass}">
        <button class="story-close-btn" onclick="storyModalInstance.close()">✕</button>
        <div class="story-hero">
          <img src="${story.heroImage}" alt="${t(story.title, story.titleZh)}" class="story-hero-image" />
          <div class="story-hero-overlay">
            <span class="story-category-badge">${t(story.category, story.categoryZh)}</span>
            <h1 class="story-title">${t(story.title, story.titleZh)}</h1>
            <p class="story-subtitle">${t(story.subtitle, story.subtitleZh)}</p>
            <p class="story-intro">${t(story.intro, story.introZh)}</p>
          </div>
        </div>
        <div class="story-content">
          ${sectionsHTML}
          <div class="story-quote">
            <p class="story-quote-text">${t(story.quote.text, story.quote.textZh)}</p>
            <p class="story-quote-author">— ${t(story.quote.author, story.quote.authorZh)}</p>
          </div>
          <div class="story-highlights">
            <h3 class="story-highlights-title">${currentLang === 'zh' ? '重要信息' : 'ข้อมูลสำคัญ'}</h3>
            <div class="story-highlights-grid">${highlightsHTML}</div>
          </div>
          <div class="story-map-section">
            <h3 class="story-map-title">📍 ${currentLang === 'zh' ? '位置' : 'ที่ตั้ง'}</h3>
            <div class="story-map-placeholder">
              <div class="story-map-icon">🗺️</div>
              <p class="story-map-text">${t(story.mapText, story.mapTextZh)}</p>
            </div>
          </div>
        </div>
      </div>`;
  }
}

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { 
    storyModalInstance = new StoryModal();
    attachCardListeners();
  });
} else {
  storyModalInstance = new StoryModal();
  attachCardListeners();
}

// Attach click listeners to story cards
function attachCardListeners() {
  const cards = document.querySelectorAll('.street-story-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const storyId = card.getAttribute('data-story-id');
      if (storyId) {
        window.openStory(storyId);
      }
    });
  });
}

// Global function called by onclick on cards
window.openStory = function(storyId) {
  if (!storyModalInstance) storyModalInstance = new StoryModal();
  storyModalInstance.open(storyId);
};
