/* ══════════════════════════════════════════════════════════════
   STORIES BLOG - Interactive Blog System
   Thai Streetfood Softpower Theme
   ══════════════════════════════════════════════════════════════ */

// Blog Data - 5 Bangkok Street Food Blogs
const blogsData = [
  {
    id: 'yaowarat-10-must-try',
    title: '10 Street Food ที่ต้องลองก่อนตายที่เยาวราช 🍜',
    titleZh: '耀华力必尝的10种街头美食 🍜',
    area: 'เยาวราช',
    areaZh: '耀华力',
    author: 'wongnai',
    authorZh: '内部',
    date: '12 Jan 2026',
    dateZh: '2026年1月12日',
    readTime: '10 min read',
    readTimeZh: '10分钟阅读',
    image: 'https://img.wongnai.com/p/1920x0/2017/04/17/683fa846fc3c40ca89348cca7b4f5926.jpg',
    excerpt: 'ย่านไชน่าทาวน์ที่ใหญ่ที่สุดในโลก และนี่คือ 10 เมนูระดับตำนานที่ถ้าไม่กินถือว่ามาไม่ถึง',
    excerptZh: '世界上最大的唐人街，这里有10道传奇美食，不吃等于没来过',
    content: `
      <h3>ย่านไชน่าทาวน์ที่ใหญ่ที่สุดในโลก</h3>
      <p>เยาวราชไม่ใช่แค่ย่านการค้า แต่เป็นสวรรค์ของคนรักอาหาร ที่นี่มีอาหารระดับตำนานมากมายที่คุณต้องลองก่อนตาย</p>
      
      <h4>1. กวยจั๊บนายเอ็ก</h4>
      <p>ทีเด็ดคือน้ำซุปพริกไทยขาวที่เผ็ดร้อน สะใจ และหมูกรอบที่ผิวกรอบเนื้อนุ่ม ร้านนี้เปิดมานานกว่า 50 ปี ยังคงรสชาติเดิมที่ลูกค้าประจำติดใจ</p>
      
      <h4>2. ขนมปังเจ้าอร่อยเด็ดเยาวราช</h4>
      <p>ขนมปังปิ้งเตาถ่านที่คิวยาวตลอดกาล แนะนำไส้ "นมสด" และ "สังขยา" ที่ไส้ทะลักจนเลอะมือ ความหอมของเตาถ่านทำให้ขนมปังมีรสชาติพิเศษที่หาที่ไหนไม่ได้</p>
      
      <h4>3. ปาท่องโก๋เสวย</h4>
      <p>ได้รางวัล Michelin Guide แป้งกรอบนอกนุ่มใน ย่างบนเตาถ่านหอมๆ กินคู่กับสังขยาใบเตย ร้านนี้เป็นตำนานของเยาวราชที่ทุกคนต้องมาลอง</p>
      
      <h4>4. คั้นกี่น้ำเต้าทอง</h4>
      <p>ร้านเครื่องดื่มสมุนไพรเก่าแก่ (น้ำขม/น้ำหวาน) ช่วยแก้เลี่ยนและลดความร้อนในร่างกายได้ดี เหมาะสำหรับหลังจากกินอาหารมันๆ</p>
      
      <h4>5. บะหมี่มังกรขาว</h4>
      <p>บะหมี่เกี๊ยวกุ้งที่ใช้เนื้อปูสดๆ วางมาด้านบน เส้นบะหมี่ทำเองเหนียวนุ่ม น้ำซุปกลมกล่อม ราคาไม่แพงแต่คุณภาพระดับพรีเมียม</p>
      
      <h4>6. หอยจ๊อปูทอง</h4>
      <p>หอยจ๊อที่อัดเนื้อปูมาแน่นๆ ทอดมาร้อนๆ จิ้มน้ำจิ้มบ๊วยคือสวรรค์ เมนูนี้เป็นเอกลักษณ์ของเยาวราชที่ต้องลอง</p>
      
      <h4>7. เจ๊ดา ปูทะเลดอง</h4>
      <p>สำหรับสายแซ่บ ปูไข่ดองและกั้งดองน้ำปลาที่สดและสะอาดมาก ร้านนี้คัดสรรวัตถุดิบคุณภาพดีที่สุด</p>
      
      <h4>8. กระเพาะปลาคุณรวย</h4>
      <p>กระเพาะปลาแท้ชิ้นใหญ่ น้ำซุปกลมกล่อม ใส่ไข่นกกระทาและเนื้อปู เมนูหรูหราที่ราคาไม่แพงเกินไป</p>
      
      <h4>9. หมูสะเต๊ะเฮียเม้ง</h4>
      <p>หมูหมักจนเข้าเนื้อ ย่างด้วยไฟกำลังดี น้ำจิ้มถั่วเข้มข้น กินคู่กับข้าวเหนียวร้อนๆ คือความสุข</p>
      
      <h4>10. บัวลอยนิ้วทอง</h4>
      <p>ขนมหวานปิดท้าย บัวลอยงาดำน้ำขิงที่เผ็ดร้อนกำลังดี หรือจะกินแบบนมสดก็ละมุน เหมาะสำหรับปิดท้ายมื้ออาหารที่เยาวราช</p>
      
      <div class="blog-tips">
        <h4>💡 เคล็ดลับการเที่ยวเยาวราช</h4>
        <ul>
          <li>มาช่วงเย็นหลัง 17:00 น. จะได้บรรยากาศที่ดีที่สุด</li>
          <li>เตรียมท้องว่างๆ เพราะมีของกินเยอะมาก</li>
          <li>ใส่รองเท้าสบายๆ เพราะต้องเดินเยอะ</li>
          <li>เตรียมเงินสดไว้ บางร้านไม่รับบัตร</li>
        </ul>
      </div>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://www.wongnai.com/listings/wellknown-streetfood-lineman" target="_blank">10 ร้านสตรีทฟู้ดที่คนสั่งมากที่สุดใน LINE MAN หิวเมื่อไหร่ก็สั่งเลย!</a> </li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>世界上最大的唐人街</h3>
      <p>耀华力不仅是商业区，更是美食爱好者的天堂。这里有许多传奇美食，你一生必须尝试。</p>
      
      <h4>1. 乃艾卷粉</h4>
      <p>特色是辣味白胡椒汤，爽口过瘾，还有外脆内嫩的脆皮猪肉。这家店已经开了50多年，仍保持着让老顾客着迷的原味。</p>
      
      <h4>2. 耀华力美味面包店</h4>
      <p>炭火烤面包，队伍永远很长。推荐"鲜奶"和"椰奶蛋"馅，馅料溢出弄脏手。炭火的香气让面包有独特的味道。</p>
      
      <h4>3. 瑟威油条</h4>
      <p>获得米其林指南奖，外脆内软，在炭火上烤得香喷喷，配上班兰椰奶蛋。这家店是耀华力的传奇，每个人都必须来尝试。</p>
      
      <h4>4. 坎吉金瓜水</h4>
      <p>古老的草药饮料店（苦水/甜水），有助于解腻和降低体内热量，适合吃完油腻食物后饮用。</p>
      
      <h4>5. 白龙面</h4>
      <p>虾馄饨面，上面放着新鲜蟹肉。面条自制，有嚼劲，汤汁圆润。价格不贵但质量一流。</p>
      
      <h4>6. 蟹肉蚵仔煎</h4>
      <p>蚵仔煎里塞满了蟹肉，炸得热腾腾，蘸梅子酱简直是天堂。这道菜是耀华力的特色，必须尝试。</p>
      
      <h4>7. 姐达腌蟹</h4>
      <p>对于喜欢辣的人，腌蟹卵和腌虾非常新鲜干净。这家店精选最优质的食材。</p>
      
      <h4>8. 坤瑞鱼肚</h4>
      <p>真正的大块鱼肚，汤汁圆润，加入鹌鹑蛋和蟹肉。豪华菜肴但价格不太贵。</p>
      
      <h4>9. 阿明猪肉沙爹</h4>
      <p>猪肉腌制入味，用适当的火烤制，浓郁的花生酱，配上热糯米饭就是幸福。</p>
      
      <h4>10. 金手指汤圆</h4>
      <p>甜点收尾，黑芝麻汤圆配姜汤，辣度刚好，或者配鲜奶也很顺滑。适合在耀华力用餐后收尾。</p>
      
      <div class="blog-tips">
        <h4>💡 游览耀华力小贴士</h4>
        <ul>
          <li>晚上17:00后来会有最好的氛围</li>
          <li>准备空肚子，因为有很多好吃的</li>
          <li>穿舒适的鞋子，因为要走很多路</li>
          <li>准备现金，有些店不接受卡</li>
        </ul>
      </div>
    `,
    location: 'ถนนเยาวราช แขวงสัมพันธวงศ์ เขตสัมพันธวงศ์',
    locationZh: '耀华力路 三攀他旺区 三攀他旺县',
    mapLink: 'https://maps.google.com/?q=Yaowarat+Road+Bangkok'
  },
  {
    id: 'ari-urban-street-food',
    title: 'อารีย์: สตรีทฟู้ดฉบับคนเมือง (Urban Street Food) 🥗',
    titleZh: '阿里：都市街头美食 🥗',
    area: 'อารีย์',
    areaZh: '阿里',
    author: 'trueid',
    authorZh: 'trudid',
    date: '27 Mar 2023',
    dateZh: '2023年6月27日',
    readTime: '10 min read',
    readTimeZh: '10分钟阅读',
    image: 'https://api.tourismthailand.org/upload/live/content_article/29080-26597.png',
    excerpt: 'ย่านที่ขึ้นชื่อเรื่องความชิค แต่ซ่อนร้านเด็ดราคาเป็นกันเองไว้เพียบ',
    excerptZh: '以时尚著称的街区，却隐藏着许多价格亲民的美味餐厅',
    content: `
      <h3>ย่านชิคที่มีร้านเด็ดราคาดี</h3>
      <p>อารีย์เป็นย่านที่ผสมผสานระหว่างความทันสมัยและความเป็นกันเอง มีทั้งร้านอาหารหรูและร้านสตรีทฟู้ดราคาประหยัด</p>
      
      <h4>ก๋วยเตี๋ยวเรือเนื้อตุ๋น (รสเด็ด)</h4>
      <p>ร้านที่เปิดมานานกว่า 40 ปี เนื้อตุ๋นนุ่มละมุน น้ำซุปเข้มข้น รสชาติกลมกล่อม เป็นร้านที่คนในย่านนี้ต้องมากินเป็นประจำ</p>
      
      <h4>ร้านมะยอดการ อาหารเหนือรสแท้</h4>
      <p>อาหารเหนือต้นตำรับที่ทำจากสูตรดั้งเดิม แนะนำแกงฮังเล น้ำพริกหนุ่ม และแคบหมู รสชาติจัดจ้านแบบเหนือแท้ๆ</p>
      
      <h4>รถเข็นผลไม้และขนมไทย</h4>
      <p>หน้าปากซอยอารีย์ 1 มีรถเข็นขายผลไม้สดและขนมไทยมากมาย ราคาถูก คุณภาพดี เหมาะสำหรับซื้อเป็นของว่าง</p>
      
      <div class="blog-highlight">
        <h4>☕ The Vibe</h4>
        <p>เป็นการผสมผสานระหว่าง Grab & Go ของคนทำงาน และ Cafe Hopping บรรยากาศสบายๆ เหมาะสำหรับทุกวัยทุกไลฟ์สไตล์</p>
      </div>
      
      <h4>การเดินทาง</h4>
      <p>ใกล้ BTS อารีย์ เดินเพียง 5 นาที มีร้านอาหารและคาเฟ่มากมายให้เลือก เหมาะสำหรับมาเดินเล่นทั้งวัน</p>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://food.trueid.net/detail/0BbNwmvk1l0" target="_blank">ร้านอร่อย ซอยอารีย์ 2023 แลนด์มาร์คของกิน เจ้าดัง ย่านนี้ไม่ได้มีดีแค่คาเฟ่</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>时尚街区的平价美食</h3>
      <p>阿里是一个融合现代与亲民的街区，既有高档餐厅，也有价格实惠的街头美食。</p>
      
      <h4>炖牛肉船面（美味）</h4>
      <p>开业超过40年的老店，炖牛肉软嫩，汤汁浓郁，味道圆润，是当地居民必吃的餐厅。</p>
      
      <h4>马约卡正宗北方菜</h4>
      <p>传统北方菜，推荐咖喱猪肉、辣椒酱和炸猪皮，味道浓郁，地道的北方风味。</p>
      
      <h4>水果和泰式甜点推车</h4>
      <p>阿里巷1号入口有许多卖新鲜水果和泰式甜点的推车，价格便宜，质量好，适合买来当零食。</p>
      
      <div class="blog-highlight">
        <h4>☕ 氛围</h4>
        <p>融合了上班族的快餐文化和咖啡馆文化，氛围轻松，适合各个年龄段和生活方式。</p>
      </div>
      
      <h4>交通</h4>
      <p>靠近BTS阿里站，步行仅5分钟，有许多餐厅和咖啡馆可供选择，适合全天游览。</p>
      
      <div class="blog-references">
        <h4>📚 参考</h4>
        <ul>
          <li><a href="https://food.trueid.net/detail/0BbNwmvk1l0" target="_blank">BKKMENU - Ari Neighborhood Guide</a></li>
        </ul>
      </div>
    `,
    location: 'ย่านอารีย์ แขวงสามเสนใน เขตพญาไท',
    locationZh: '阿里区 三森内区 帕亚泰县',
    mapLink: 'https://maps.google.com/?q=Ari+Bangkok'
  }
];

// Continue with remaining blogs...
blogsData.push(
  {
    id: 'chok-chai-4-night-empire',
    title: 'โชคชัย 4: อาณาจักรของกินโต้รุ่ง 🌙',
    titleZh: '乔差4：深夜美食帝国 🌙',
    area: 'โชคชัย 4',
    areaZh: '乔差4',
    author: 'wongnai',
    authorZh: '内部',
    date: '8 Jan 2026',
    dateZh: '2026年1月8日',
    readTime: '15 min read',
    readTimeZh: '15分钟阅读',
    image: 'https://s.isanook.com/tr/0/ud/195/978241/13-7-2555_15-40-48.jpg',
    excerpt: 'ย่านที่คนลาดพร้าวรู้ดีว่า "ไม่มีวันอดตาย" เพราะของกินเยอะตลอด 24 ชั่วโมง',
    excerptZh: '拉差帕劳人都知道这里"永远不会饿死"，因为24小时都有美食',
    content: `
      <h3>ตลาดโต้รุ่งแท้ๆ</h3>
      <p>โชคชัย 4 เป็นย่านที่มีชีวิตชีวาตลอด 24 ชั่วโมง มีร้านอาหารเปิดทั้งกลางวันและกลางคืน เหมาะสำหรับคนที่ชอบกินมื้อดึก</p>
      
      <h4>เครปป้าเฉื่อย (ในตำนาน)</h4>
      <p>เครปที่มีชื่อเสียงมากว่า 30 ปี ไส้เยอะจนล้น แป้งบางกรอบ มีหลายรสชาติให้เลือก ราคาไม่แพงแต่อร่อยมาก ต้องมาลองสักครั้ง</p>
      
      <h4>โจ๊กกองปราบ</h4>
      <p>โจ๊กหมูที่ต้มจนข้าวละลาย เนื้อหมูนุ่ม ใส่ไข่ไก่และปลาหมึก รสชาติกลมกล่อม เปิดตลอด 24 ชั่วโมง</p>
      
      <h4>ร้านสว่างอรุณ เนื้อตุ๋นเจ้าดัง</h4>
      <p>เนื้อตุ๋นที่เปื่อยนุ่ม น้ำซุปเข้มข้น หอมเครื่องเทศ เป็นร้านที่มีชื่อเสียงในย่านนี้มานาน</p>
      
      <div class="blog-highlight">
        <h4>🌙 The Vibe</h4>
        <p>ตลาดโต้รุ่งแท้ๆ คึกคักช่วง 2 ทุ่มเป็นต้นไป บรรยากาศสนุกสนาน มีทั้งของกินและของใช้ให้เลือกซื้อมากมาย</p>
      </div>
      
      <h4>การเดินทาง</h4>
      <p>ใกล้ MRT ลาดพร้าว เดินประมาณ 10 นาที หรือนั่งรถเมล์สาย 136, 137, 514 ลงหน้าโชคชัย 4</p>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://www.wongnai.com/listings/restaurants-chokchai4" target="_blank">Wongnai - รวมร้านเด็ดโชคชัย 4</a></li>
          <li><a href="https://www.youtube.com/watch?v=mqwnp8a1dpA" target="_blank">YouTube - ตลาดโชคชัย 4</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>真正的深夜市场</h3>
      <p>乔差4是一个24小时充满活力的街区，有白天和晚上营业的餐厅，适合喜欢吃夜宵的人。</p>
      
      <h4>阿姨可丽饼（传奇）</h4>
      <p>超过30年历史的著名可丽饼，馅料多到溢出，皮薄脆，有多种口味可选，价格不贵但很好吃，一定要尝试一次。</p>
      
      <h4>警察局粥</h4>
      <p>猪肉粥煮到米饭融化，猪肉软嫩，加鸡蛋和鱿鱼，味道圆润，24小时营业。</p>
      
      <h4>黎明餐厅 著名炖牛肉</h4>
      <p>炖牛肉软烂，汤汁浓郁，香料芬芳，是这个街区长期以来的著名餐厅。</p>
      
      <div class="blog-highlight">
        <h4>🌙 氛围</h4>
        <p>真正的深夜市场，晚上8点后最热闹，氛围有趣，有很多食物和用品可供选择。</p>
      </div>
      
      <h4>交通</h4>
      <p>靠近MRT拉差帕劳站，步行约10分钟，或乘坐136、137、514路公交车在乔差4下车。</p>
      
      <div class="blog-references">
        <h4>📚 参考</h4>
        <ul>
          <li><a href="https://www.wongnai.com/listings/restaurants-chokchai4" target="_blank">Wongnai - รวมร้านเด็ดโชคชัย 4</a></li>
        </ul>
      </div>
    `,
    location: 'ถนนโชคชัย 4 แขวงลาดพร้าว เขตลาดพร้าว',
    locationZh: '乔差4路 拉差帕劳区 拉差帕劳县',
    mapLink: 'https://maps.google.com/?q=Chok+Chai+4+Bangkok'
  },
  {
    id: 'st-louis-treasure',
    title: 'เซนต์หลุยส์ (ซอยจันทน์ 18/7): ขุมทรัพย์ของอร่อย 🥟',
    titleZh: '圣路易斯（占巷18/7）：美食宝藏 🥟',
    area: 'เซนต์หลุยส์',
    areaZh: '圣路易斯',
    author: 'ryoii',
    authorZh: '茵提拉',
    date: '',
    dateZh: '2026年1月6日',
    readTime: '10 min read',
    readTimeZh: '10分钟阅读',
    image: 'https://www.ryoiireview.com/upload/article/201901/1547616454_18ff17b753e9b09156542772283ea3fa.jpg',
    excerpt: 'ย่านเก่าแก่ที่เต็มไปด้วยคนไทยเชื้อสายจีน ขนมและอาหารที่นี่จึงมีเอกลักษณ์',
    excerptZh: '充满泰籍华人的古老街区，这里的糕点和食物都有独特的特色',
    content: `
      <h3>ชุมชนเก่าแก่ที่มีเสน่ห์</h3>
      <p>เซนต์หลุยส์เป็นย่านเก่าแก่ที่มีประวัติศาสตร์ยาวนาน มีอาหารและขนมที่มีเอกลักษณ์เฉพาะตัว ราคาถูกอย่างไม่น่าเชื่อ</p>
      
      <h4>หยูง้วน ลูกชิ้นปลาในตำนาน</h4>
      <p>ลูกชิ้นปลาที่ทำสดใหม่ทุกวัน เด้งมาก ไม่ใส่แป้ง น้ำซุปกลมกล่อม เป็นร้านที่มีชื่อเสียงมากว่า 50 ปี</p>
      
      <h4>ขาหมูเซนต์หลุยส์</h4>
      <p>ขาหมูตุ๋นจนเนื้อนุ่มหลุดจากกระดูก น้ำพะโล้หอมเครื่องเทศ กินคู่กับข้าวสวยร้อนๆ คือความสุข</p>
      
      <h4>ก๋วยเตี๋ยวหลอด สูตรโบราณ</h4>
      <p>ก๋วยเตี๋ยวหลอดที่ทำตามสูตรโบราณ แป้งบางนุ่ม ไส้หมูสับหอม กินคู่กับน้ำจิ้มรสเด็ด</p>
      
      <div class="blog-highlight">
        <h4>🏘️ The Vibe</h4>
        <p>บรรยากาศชุมชนเก่า อบอุ่น และราคาถูกอย่างไม่น่าเชื่อ เหมาะสำหรับคนที่ชอบบรรยากาศแบบดั้งเดิม</p>
      </div>
      
      <h4>ประวัติของชุมชน</h4>
      <p>เซนต์หลุยส์เป็นชุมชนที่มีประวัติยาวนานกว่า 100 ปี มีวัฒนธรรมไทย-จีนผสมผสานกันอย่างลงตัว</p>
      
      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://www.ryoiireview.com/article/soi-saint-louis-restaurants/" target="_blank">รวมร้านเจ้าดัง 13 ร้าน ซอยเซนต์หลุยส์ หลายร้านเปิดมานานเกิน 10 ปี</a></li>
          <li><a href="https://www.youtube.com/watch?v=o5LT62MkYDg" target="_blank">YouTube - เซนต์หลุยส์</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>迷人的古老社区</h3>
      <p>圣路易斯是一个历史悠久的古老街区，有独特的食物和糕点，价格便宜得令人难以置信。</p>
      
      <h4>裕源 传奇鱼丸</h4>
      <p>每天新鲜制作的鱼丸，非常有弹性，不含面粉，汤汁圆润，是一家超过50年历史的著名餐厅。</p>
      
      <h4>圣路易斯猪脚</h4>
      <p>炖猪脚直到肉从骨头上脱落，五香卤汁香料芬芳，配上热米饭就是幸福。</p>
      
      <h4>传统卷粉</h4>
      <p>按照传统配方制作的卷粉，皮薄软，猪肉馅香，配上美味的蘸酱。</p>
      
      <div class="blog-highlight">
        <h4>🏘️ 氛围</h4>
        <p>古老社区氛围，温馨，价格便宜得令人难以置信，适合喜欢传统氛围的人。</p>
      </div>
      
      <h4>社区历史</h4>
      <p>圣路易斯是一个拥有100多年历史的社区，泰国和中国文化完美融合。</p>
      
      <div class="blog-references">
        <h4>📚 参考</h4>
        <ul>
          <li><a href="https://www.ryoiireview.com/article/soi-saint-louis-restaurants/" target="_blank">รวมร้านเจ้าดัง 13 ร้าน ซอยเซนต์หลุยส์ หลายร้านเปิดมานานเกิน 10 ปี</a></li>
        </ul>
      </div>
    `,
    location: 'ซอยจันทน์ 18/7 (เซนต์หลุยส์) แขวงทุ่งมหาเมฆ เขตสาทร',
    locationZh: '占巷18/7（圣路易斯）通玛哈梅区 沙吞县',
    mapLink: 'https://maps.google.com/?q=Soi+St+Louis+Bangkok'
  },
  {
    id: 'tha-phra-chan-tha-chang',
    title: '7 ร้านริมน้ำย่านท่ามหาราช ท่าช้าง วิวดี อาหารเลิศ! 🌊',
    titleZh: '7家塔玛哈拉-塔昌河畔餐厅 美景美食！🌊',
    area: 'ท่ามหาราช-ท่าช้าง',
    areaZh: '塔玛哈拉-塔昌',
    author: 'อินทิรา',
    authorZh: '茵提拉',
    date: '11 Mar 2024',
    dateZh: '2024年3月11日',
    readTime: '10 min read',
    readTimeZh: '8分钟阅读',
    image: 'https://img.wongnai.com/p/1920x0/2018/04/17/c8aa7bfc690c448b83c86dd6de03e351.jpg',
    excerpt: '7 ร้านริมน้ำย่านท่ามหาราช-ท่าช้าง วิวแม่น้ำเจ้าพระยาสวยงาม อาหารอร่อย บรรยากาศดีเยี่ยม',
    excerptZh: '7家塔玛哈拉-塔昌河畔餐厅，湄南河美景，美食，绝佳氛围',
    content: `
      <h3>ร้านริมน้ำย่านท่ามหาราช-ท่าช้าง</h3>
      <p>ย่านท่ามหาราชและท่าช้างเป็นหนึ่งในย่านริมน้ำที่สวยงามที่สุดของกรุงเทพฯ มีร้านอาหารหลากหลายสไตล์ ทั้งอาหารไทย อาหารทะเล และร้านกาแฟ ล้วนมีวิวแม่น้ำเจ้าพระยาที่งดงาม</p>

      <h4>🍽️ เสวยท่ามหาราช ⭐ 3.9 (105 รีวิว)</h4>
      <p><em>อาหารไทย, อาหารตามสั่ง</em></p>
      <p>ร้านเสวยสาขานี้อยู่ที่ชั้นสองท่ามหาราช ขึ้นไปชั้นสองมีทั้งโซนห้องแอร์และด้านนอกเป็นร้านอาหารริมน้ำ เห็นวิวสวย ๆ มากันหลายคน สั่งอาหารดังนี้ครับ ทอดมันกุ้ง ชิ้นเหลืองทอง น่ากิน รสชาติดี กุ้งเป็นกุ้ง กินน้ำจิ้มบ๊วย กินกับข้าวสวย ลงตัวดี ปลากะพงทอดน้ำปลา ปลาตัวขนาดกลาง ๆ ทอดมากรอบนอกนุ่มใน ปลาสด น้ำราดเด็ดมาก รสชาติดีครับ</p>
      <p class="blog-review-author">— รีวิวโดยคุณ Xx_YoS_xX</p>

      <h4>🦐 ครัวคุณกุ้งท่าช้าง ⭐ 4.0 (74 รีวิว)</h4>
      <p><em>อาหารทะเล, อาหารไทย, ร้านริมน้ำ</em></p>
      <p>ร้านอาหารริมน้ำนี้อยู่ท่าช้าง นั่งเรือข้ามจากวังหลัง-ศิราชมาก็ถึงเลย เป็นร้านริมน้ำที่ดูเรียบง่าย แต่คุณภาพระดับภัตตาคาร อาหารทะเลที่นี่สดมาก อาหารรสชาติกลมกล่อม ถูกปาก ข้าวสวยก็คุณภาพดี หอม นุ่ม น่ากินค่ะ ราคาถือว่าเล็กไปเลยถ้าเทียบคุณภาพ บรรยากาศร้านดีเหมือนร้านอาหารในโรงแรมหรู ๆ มีดนตรีเล่นสดคลอไป อาหารที่แนะนำคือ ปลากะพงนึ่งมะนาว อันนี้ให้ 10 ดาว ชอบมากค่ะ เสิร์ฟร้อนแบบหม้อไฟ ปลาสดมากรสชาติกลมกล่อม หอมมะนาวชัด รสชาติน้ำยำซึมไปถึงข้างในเนื้อปลาเลยค่ะ</p>
      <p class="blog-review-author">— รีวิวโดยคุณ น้องถั่วพากิน</p>

      <h4>🧋 เฉาก๊วยตาตั้มท่ามหาราช ⭐ 3.8 (18 รีวิว)</h4>
      <p><em>ของหวาน</em></p>
      <p>ร้านอยู่ริมแม่น้ำ ตรงท่ามหาราชใกล้กับร้านอาหารริมน้ำอย่างร้านรสนิยม เนื้อเฉาก๊วยเด้งแบบเยลลีและนุ่มเคี้ยวเพลินดี ได้รสชาติเฉาก๊วยแบบเข้ม ๆ หน่อย มีรสหวานในตัว ซึ่งก็ไม่หวานมากจนกินเปล่า ๆ ไม่ได้ ใครที่ไม่ชอบกินเฉาก๊วยน้ำเชื่อมปกติก็มีเป็นแบบเฉาก๊วยชานม เฉาก๊วยนมสดด้วย ใส่มาในถ้วยและแก้วที่ถือสะดวกมีช้อนมาให้เปิดกินเดินกินได้เลย</p>
      <p class="blog-review-author">— รีวิวโดยคุณ Yee_Sunee</p>

      <h4>🦞 Lobster Bucket (BBQ Grilled Cheese) ท่ามหาราช ⭐ 2.2 (4 รีวิว)</h4>
      <p><em>ฟาสต์ฟู้ด/จานด่วน, หมูกระทะ</em></p>
      <p>เป็นร้านปิ้งย่าง จุ่มชีสที่เสิร์ฟมาแบบชีสรอบกระทะ มาเลยครับใครชอบกินปิ้งย่างร้านสวย ๆ บรรยากาศดี ๆ ริมแม่น้ำ ชิลล์มาก แถมใครเป็นสาวกชีสเยิ้ม ๆ ต้องไม่พลาดร้านนี้ที่อยู่ชั้นล่างของท่ามหาราช โดยรวมแล้วกินได้ 2 ชั่วโมง รสชาติดีถูกปากเลยครับ เตาของที่นี่เราเร่งไฟได้เองเลย กระทะร้อนเร็ว อาหารสุกไวมาก ชีสเยอะสะใจ เป็นร้านอาหารริมน้ำที่เลิศเวอร์</p>
      <p class="blog-review-author">— รีวิวโดยคุณ niki。。。にき</p>

      <h4>🥩 On The Grill (2 รีวิว)</h4>
      <p><em>ปิ้งย่าง</em></p>
      <p>ร้านอยู่ชั้น 3 ท่ามหาราช ถ้าไม่สังเกตดี ๆ ก็ไม่รู้ว่ามีชั้น 3 ด้วย ร้านเป็นร้านอาหารริมน้ำเลย มีวิวแม่น้ำให้นั่งดูเพลิน ๆ ลมพัดเย็น ๆ ที่นี่มีพวกเมนูสเต๊กให้สั่งมานั่งกินกัน มีเครื่องดื่มหลากหลายให้เลือกด้วยค่ะ สั่งสเต๊กมาก็รสชาติดีเลยค่ะ นั่งกินไปเพลิน ๆ คุยกับเพื่อนด้วย ชมวิวด้วย ยิ่งช่วงเย็น ๆ นี่เรียกได้ว่าบรรยากาศดีสุดยอด ใครที่หาร้านนั่งชิลล์ ๆ ที่ท่ามหาราชก็ลองมานั่งร้านนี้ดูได้ค่ะ</p>
      <p class="blog-review-author">— รีวิวโดยคุณ Timmiie Kukiatpaisal</p>

      <h4>☕ Navy Club Coffee ⭐ 3.0 (1 รีวิว)</h4>
      <p><em>ร้านกาแฟ/ชา</em></p>
      <p>ถัดมาจากท่าช้าง ภายในราชนาวีสโมสรมีร้านนี้เป็นซุ้มหลังเล็ก ๆ ขายเครื่องดื่มอยู่ อยู่ริมแม่น้ำเจ้าพระยา หากเดินเข้ามาภายในก็เห็นได้ไม่ยาก ที่ร้านริมน้ำขายเครื่องดื่มต่าง ๆ เช่น กาแฟ ชา และอิตาเลียนโซดา วันนี้ผมลองสั่ง Navy Blue Soda มันคือบลูฮาวายผสมโซดา หวานอมเปรี้ยว ไม่เข้มเกินไป โดยรวมเป็นอิตาเลียนโซดาที่รสชาติดีครับ วิวร้านนี้สวยมาก ยิ่งตอนเย็น ๆ แล้วยิ่งสวยเลย</p>
      <p class="blog-review-author">— รีวิวโดยคุณ Best SiLenZ</p>

      <div class="blog-highlight">
        <h4>🌊 The Vibe</h4>
        <p>วิวแม่น้ำเจ้าพระยาสวยงาม บรรยากาศริมน้ำที่ผ่อนคลาย เหมาะสำหรับมื้อเย็นพิเศษหรือนั่งชิลล์ยามเย็น ลมพัดเย็นสบาย ดนตรีสดคลอเบา ๆ</p>
      </div>

      <div class="blog-references">
        <h4>📚 อ้างอิง</h4>
        <ul>
          <li><a href="https://www.wongnai.com/listings/riverside-resturaunts-at-tha-maharaj-and-tha-chang" target="_blank">Riverside Restaurants at Tha Maharaj and Tha Chang - Wongnai</a></li>
          <li><a href="https://www.wongnai.com/listings/riverside-resturaunts-at-tha-maharaj-and-tha-chang" target="_blank">Wongnai - 7 ร้านริมน้ำท่ามหาราช ท่าช้าง</a></li>
        </ul>
      </div>
    `,
    contentZh: `
      <h3>塔玛哈拉-塔昌河畔餐厅</h3>
      <p>塔玛哈拉和塔昌地区是曼谷最美丽的河畔区域之一，拥有各种风格的餐厅，包括泰国菜、海鲜和咖啡馆，都能欣赏到美丽的湄南河景色。</p>

      <h4>🍽️ 塔玛哈拉沙威餐厅 ⭐ 3.9 (105条评论)</h4>
      <p><em>泰国菜，快餐</em></p>
      <p>这家沙威分店位于塔玛哈拉二楼，二楼有空调区和户外河畔餐厅，景色优美。推荐菜品：炸虾饼，金黄色，好看又好吃，虾肉饱满，配梅子酱和白饭，搭配完美。炸鱼露鲈鱼，中等大小，外酥内嫩，鱼肉新鲜，浇汁非常棒，味道很好。</p>
      <p class="blog-review-author">— 评论来自 Xx_YoS_xX</p>

      <h4>🦐 塔昌虾厨房 ⭐ 4.0 (74条评论)</h4>
      <p><em>海鲜，泰国菜，河畔餐厅</em></p>
      <p>这家河畔餐厅位于塔昌，从王朗-西拉乘船过来即可到达。餐厅看起来简单，但质量达到餐厅级别。这里的海鲜非常新鲜，食物味道圆润，合口味。白饭质量好，香软可口。价格与质量相比非常实惠。餐厅氛围如豪华酒店餐厅，有现场音乐伴奏。推荐菜品：柠檬蒸鲈鱼，给10颗星，非常喜欢，用火锅方式上桌，鱼肉新鲜，味道圆润，柠檬香浓，酸辣汁渗入鱼肉内部。</p>
      <p class="blog-review-author">— 评论来自 น้องถั่วพากิน</p>

      <h4>🧋 塔玛哈拉老爹仙草 ⭐ 3.8 (18条评论)</h4>
      <p><em>甜品</em></p>
      <p>店铺位于河边，在塔玛哈拉附近，靠近河畔餐厅。仙草口感弹牙如果冻，嚼劲十足，仙草味道浓郁，带有甜味，但不会太甜。不喜欢普通糖水仙草的顾客也可以选择仙草奶茶或鲜奶仙草。装在方便携带的杯子里，附带勺子，可以边走边吃。</p>
      <p class="blog-review-author">— 评论来自 Yee_Sunee</p>

      <h4>🦞 Lobster Bucket (BBQ Grilled Cheese) 塔玛哈拉 ⭐ 2.2 (4条评论)</h4>
      <p><em>快餐，烤肉</em></p>
      <p>这是一家烤肉蘸芝士餐厅，芝士围绕烤盘上桌。喜欢在美丽环境、良好氛围的河边烤肉的朋友一定不能错过这家位于塔玛哈拉一楼的餐厅。总体来说可以吃2小时，味道好，合口味。这里的炉子可以自己调火，锅热得快，食物熟得快，芝士量足，是一家超棒的河畔餐厅。</p>
      <p class="blog-review-author">— 评论来自 niki。。。にき</p>

      <h4>🥩 On The Grill (2条评论)</h4>
      <p><em>烧烤</em></p>
      <p>餐厅位于塔玛哈拉三楼，不仔细看还不知道有三楼。餐厅是河畔餐厅，可以欣赏河景，微风习习。这里有各种牛排菜单，还有多种饮料可选。牛排味道很好，边吃边聊天边欣赏风景，尤其是傍晚时分，氛围极佳。想在塔玛哈拉找个休闲地方的朋友可以来这里试试。</p>
      <p class="blog-review-author">— 评论来自 Timmiie Kukiatpaisal</p>

      <h4>☕ Navy Club Coffee ⭐ 3.0 (1条评论)</h4>
      <p><em>咖啡/茶</em></p>
      <p>紧邻塔昌，在皇家海军俱乐部内有这家小亭子卖饮料，位于湄南河畔，走进去很容易找到。河边小店出售各种饮料，如咖啡、茶和意大利苏打水。今天我尝试了Navy Blue Soda，是蓝色夏威夷混合苏打水，甜中带酸，不太浓。总体来说是一款味道不错的意大利苏打水。这家店的景色非常美，尤其是傍晚时分更加美丽。</p>
      <p class="blog-review-author">— 评论来自 Best SiLenZ</p>

      <div class="blog-highlight">
        <h4>🌊 氛围</h4>
        <p>美丽的湄南河景色，轻松的河畔氛围，适合特别晚餐或傍晚休闲，微风习习，轻柔的现场音乐伴奏。</p>
      </div>

      <div class="blog-references">
        <h4>📚 参考</h4>
        <ul>
          <li>塔玛哈拉-塔昌地区真实用户评论</li>
        </ul>
      </div>
    `,
    location: 'ท่ามหาราช-ท่าช้าง แขวงพระบรมมหาราชวัง เขตพระนคร',
    locationZh: '塔玛哈拉-塔昌 帕博罗玛哈拉差旺区 帕那空县',
    mapLink: 'https://maps.google.com/?q=Tha+Maharaj+Bangkok'
  }
);


// Blog Modal System
class BlogModal {
  constructor() {
    this.overlay = null;
    this.currentBlog = null;
    this.init();
  }

  init() {
    // Create modal overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'blog-modal-overlay';
    document.body.appendChild(this.overlay);

    // Add event listeners
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(blogId) {
    const blog = blogsData.find(b => b.id === blogId);
    if (!blog) return;

    this.currentBlog = blog;
    this.render(blog);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Show modal
    setTimeout(() => {
      this.overlay.classList.add('active');
    }, 10);
  }

  close() {
    this.overlay.classList.remove('active');
    
    // Allow body scroll
    document.body.style.overflow = '';
    
    // Clear content after animation
    setTimeout(() => {
      this.overlay.innerHTML = '';
    }, 400);
  }

  render(blog) {
    // Get current language
    const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
    
    // Use Chinese translations if available
    const title = (currentLang === 'zh' && blog.titleZh) ? blog.titleZh : blog.title;
    const area = (currentLang === 'zh' && blog.areaZh) ? blog.areaZh : blog.area;
    const author = (currentLang === 'zh' && blog.authorZh) ? blog.authorZh : blog.author;
    const date = (currentLang === 'zh' && blog.dateZh) ? blog.dateZh : blog.date;
    const readTime = (currentLang === 'zh' && blog.readTimeZh) ? blog.readTimeZh : blog.readTime;
    const excerpt = (currentLang === 'zh' && blog.excerptZh) ? blog.excerptZh : blog.excerpt;
    const content = (currentLang === 'zh' && blog.contentZh) ? blog.contentZh : blog.content;
    const location = (currentLang === 'zh' && blog.locationZh) ? blog.locationZh : blog.location;
    
    const modalHTML = `
      <div class="blog-modal">
        <button class="blog-close-btn" aria-label="Close blog">✕</button>
        
        <!-- Hero Section -->
        <div class="blog-hero">
          <img src="${blog.image}" alt="${title}" class="blog-hero-image" />
          <div class="blog-hero-overlay">
            <span class="blog-area-badge">${area}</span>
            <h1 class="blog-modal-title">${title}</h1>
            <div class="blog-meta">
              <span>${currentLang === 'zh' ? '作者' : 'โดย'} ${author}</span>
              <span>•</span>
              <span>${date}</span>
              <span>•</span>
              <span>${readTime}</span>
            </div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="blog-modal-content">
          <div class="blog-excerpt">
            <p>${excerpt}</p>
          </div>
          
          <div class="blog-body">
            ${content}
          </div>

          <!-- Location Section -->
          <div class="blog-location-section">
            <h3 class="blog-location-title">📍 ${currentLang === 'zh' ? '位置' : 'ที่ตั้ง'}</h3>
            <p class="blog-location-text">${location}</p>
            <a href="${blog.mapLink}" target="_blank" class="blog-map-btn">
              ${currentLang === 'zh' ? '在 Google 地图中打开 →' : 'เปิดใน Google Maps →'}
            </a>
          </div>

          <!-- Share Section -->
          <div class="blog-share-section">
            <h4>${currentLang === 'zh' ? '分享这篇文章' : 'แชร์บทความนี้'}</h4>
            <div class="blog-share-buttons">
              <button class="share-btn" onclick="navigator.share ? navigator.share({title: '${title}', url: window.location.href}) : alert('${currentLang === 'zh' ? '不支持分享功能' : 'Share feature not supported'}')">
                📱 ${currentLang === 'zh' ? '分享' : 'แชร์'}
              </button>
              <button class="share-btn" onclick="navigator.clipboard.writeText(window.location.href).then(() => alert('${currentLang === 'zh' ? '已复制链接！' : 'คัดลอกลิงก์แล้ว!'}'))">
                🔗 ${currentLang === 'zh' ? '复制链接' : 'คัดลอกลิงก์'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.overlay.innerHTML = modalHTML;

    // Add close button handler
    const closeBtn = this.overlay.querySelector('.blog-close-btn');
    closeBtn.addEventListener('click', () => this.close());
  }
}

// Blog Grid Manager
class BlogGrid {
  constructor() {
    this.blogModal = new BlogModal();
    this.showingAll = false;
    this.init();
  }

  init() {
    this.renderBlogGrid();
    this.attachEventListeners();
  }

  renderBlogGrid() {
    const blogContainer = document.querySelector('.stories-blog');
    if (!blogContainer) return;

    // Clear existing content
    blogContainer.innerHTML = `
      <h3 class="stories-col-title">Street Stories Blog</h3>
      <div class="blog-grid" id="blogGrid"></div>
      <button class="btn btn--primary blog-show-all-btn" id="showAllBtn">
        อ่านทั้งหมด →
      </button>
    `;

    this.updateBlogDisplay();
  }

  updateBlogDisplay() {
    const blogGrid = document.getElementById('blogGrid');
    const blogsToShow = this.showingAll ? blogsData : blogsData.slice(0, 3);

    blogGrid.innerHTML = blogsToShow.map(blog => `
      <article class="blog-card-new" data-blog-id="${blog.id}">
        <div class="blog-card-image" style="background-image: url('${blog.image}')"></div>
        <div class="blog-card-content">
          <span class="blog-card-area">${blog.area}</span>
          <h4 class="blog-card-title">${blog.title}</h4>
          <p class="blog-card-excerpt">${blog.excerpt}</p>
          <div class="blog-card-meta">
            <span>${blog.author}</span>
            <span>•</span>
            <span>${blog.readTime}</span>
          </div>
        </div>
      </article>
    `).join('');

    // Update button text
    const showAllBtn = document.getElementById('showAllBtn');
    if (showAllBtn) {
      showAllBtn.textContent = this.showingAll ? '← แสดงน้อยลง' : 'อ่านทั้งหมด →';
    }

    // Attach click handlers to blog cards
    this.attachCardHandlers();
  }

  attachCardHandlers() {
    const blogCards = document.querySelectorAll('.blog-card-new');
    blogCards.forEach(card => {
      card.addEventListener('click', () => {
        const blogId = card.getAttribute('data-blog-id');
        this.blogModal.open(blogId);
      });
    });
  }

  attachEventListeners() {
    // Show all button
    document.addEventListener('click', (e) => {
      if (e.target && e.target.id === 'showAllBtn') {
        this.showingAll = !this.showingAll;
        this.updateBlogDisplay();
        
        // Scroll to grid if showing all
        if (this.showingAll) {
          document.getElementById('blogGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new BlogGrid();
  });
} else {
  new BlogGrid();
}


// Horizontal Blogs Page Manager
class HorizontalBlogsPage {
  constructor() {
    this.blogModal = new BlogModal();
    this.init();
  }

  init() {
    const blogsGrid = document.getElementById('blogsHorizontalGrid');
    if (!blogsGrid) return; // Not on blogs page

    this.renderHorizontalBlogs();
  }

  renderHorizontalBlogs() {
    const blogsGrid = document.getElementById('blogsHorizontalGrid');
    const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
    
    blogsGrid.innerHTML = blogsData.map((blog, index) => {
      const title = (currentLang === 'zh' && blog.titleZh) ? blog.titleZh : blog.title;
      const area = (currentLang === 'zh' && blog.areaZh) ? blog.areaZh : blog.area;
      const author = (currentLang === 'zh' && blog.authorZh) ? blog.authorZh : blog.author;
      const date = (currentLang === 'zh' && blog.dateZh) ? blog.dateZh : blog.date;
      const readTime = (currentLang === 'zh' && blog.readTimeZh) ? blog.readTimeZh : blog.readTime;
      const excerpt = (currentLang === 'zh' && blog.excerptZh) ? blog.excerptZh : blog.excerpt;
      
      return `
      <article class="blog-card-horizontal" data-blog-id="${blog.id}">
        <div class="blog-card-h-image">
          <div class="blog-card-h-number">${String(index + 1).padStart(2, '0')}</div>
          <img src="${blog.image}" alt="${title}" />
        </div>
        <div class="blog-card-h-content">
          <span class="blog-card-h-area">${area}</span>
          <h2 class="blog-card-h-title">${title}</h2>
          <p class="blog-card-h-excerpt">${excerpt}</p>
          <div class="blog-card-h-meta">
            <span>✍️ ${author}</span>
            <span>•</span>
            <span>📅 ${date}</span>
            <span>•</span>
            <span>⏱️ ${readTime}</span>
          </div>
          <div class="blog-card-h-read-more">
            ${currentLang === 'zh' ? '阅读全文 →' : 'อ่านเรื่องเต็ม →'}
          </div>
        </div>
      </article>
    `;
    }).join('');

    // Attach click handlers
    this.attachCardHandlers();
  }

  attachCardHandlers() {
    const blogCards = document.querySelectorAll('.blog-card-horizontal');
    blogCards.forEach(card => {
      card.addEventListener('click', () => {
        const blogId = card.getAttribute('data-blog-id');
        this.blogModal.open(blogId);
      });
    });
  }
}

// Initialize Horizontal Blogs Page when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const horizontalBlogsPage = new HorizontalBlogsPage();
    
    // Re-render when language changes
    if (window.switchLanguage) {
      const originalSwitchLanguage = window.switchLanguage;
      window.switchLanguage = function(lang) {
        originalSwitchLanguage(lang);
        // Re-render blogs with new language
        if (horizontalBlogsPage) {
          horizontalBlogsPage.renderHorizontalBlogs();
        }
      };
    }
  });
} else {
  const horizontalBlogsPage = new HorizontalBlogsPage();
  
  // Re-render when language changes
  if (window.switchLanguage) {
    const originalSwitchLanguage = window.switchLanguage;
    window.switchLanguage = function(lang) {
      originalSwitchLanguage(lang);
      // Re-render blogs with new language
      if (horizontalBlogsPage) {
        horizontalBlogsPage.renderHorizontalBlogs();
      }
    };
  }
}
