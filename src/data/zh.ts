import type { PortfolioContent } from './portfolio';

export const zh: PortfolioContent = {
  meta: { title: 'Kai｜音樂交流嚮導 — Music Community OS', description: '協助上班族建立音樂習慣、找到一起玩音樂的夥伴，並透過樂團活動與台日交流，讓音樂持續存在於生活之中。' },
  navigation: [{ label: '關於 Kai', href: '#about' }, { label: '作品集', href: '#portfolio' }, { label: '服務項目', href: '#services' }, { label: '夥伴回饋', href: '#testimonials' }, { label: '合作流程', href: '#process' }],
  hero: { eyebrow: 'Kai · 音樂交流嚮導 · Music Community OS', title: '讓音樂不只是興趣，而是一段持續成長的人生旅程。', description: '協助忙碌的上班族建立音樂習慣、找到一起玩音樂的夥伴，讓音樂持續存在於生活之中。', primaryAction: { label: '加入這段旅程', href: '#contact' }, secondaryAction: { label: '認識 Kai', href: '#about' }, image: { src: '/images/hero.webp', alt: '朋友們在溫暖燈光下一起演奏音樂' }, note: '音樂學習 · 樂團交流 · 台灣 × 日本' },
  about: { label: '01 / 關於 Kai', title: '十多年來，因音樂而相遇。', paragraphs: ['Kai 是一位樂團吉他手，也是一位音樂交流嚮導。十多年來持續參與樂團演出、原創音樂、音樂祭與交流活動，從北中部 Live House 到公開演出，在音樂裡認識了不同文化背景的朋友。', '這些經驗讓 Kai 相信：學會一首歌很重要，但找到一群能一起享受音樂的人，往往更能讓音樂長久留在生活裡。現在，他希望陪更多成人學習者找到適合自己的練習方式、樂團夥伴與音樂社群。'], image: { src: '/images/about.webp', alt: '在生活空間裡自在彈奏吉他的日常' }, facts: [{ value: '10+ 年', label: '樂團演出與音樂創作' }, { value: '2+ 年', label: '成人吉他教學經驗' }, { value: '日 × 台', label: '音樂文化交流網絡' }] },
  services: { label: '02 / 一起參與', title: '從適合你的起點，開始音樂生活', intro: '從吉他與基礎樂理，到樂團媒合、Jam Session 與日本音樂文化體驗，依照你的背景、興趣與目標，找到能長期持續的方式。', items: [{ number: '01', title: '音樂學習與樂團養成', description: '提供吉他入門、基礎樂理、器材選擇、歌曲分析與個人化練習建議，陪成人學習者建立長期音樂習慣。' }, { number: '02', title: '樂團媒合與音樂交流', description: '分享樂團經營經驗，串接團員媒合、音樂社群與交流活動，幫助你找到志同道合的夥伴。' }, { number: '03', title: '台日音樂文化與音樂旅行', description: '分享日本音樂祭、Live House、Music Bar 與 Jam Session 經驗，協助台灣樂手走進日本音樂文化。' }] },
  projects: { label: '02 / 代表作品', title: '因音樂而發生的計畫與相遇', intro: '從樂團創作、社群活動到台日文化交流，每一項作品都累積了下一段合作的經驗。', items: [
    { title: 'MI Tokyo Open Campus', description: '參與日本音樂學校 Open Campus，與當地樂手共同排練與演出，體驗日本音樂教育與跨國合作。', tags: ['日本音樂交流', 'MI Tokyo', '跨國合作'] },
    { title: '台日樂手 Jam Session', description: '與在日台灣樂手及不同背景的音樂人即興合作，拓展跨文化交流與人際連結。', tags: ['Jam Session', '音樂社群', '台日交流'] },
    { title: '科技人音樂社群與科蚪音樂節', description: '參與音樂節籌辦，串連科技業音樂愛好者與樂團，打造屬於上班族的音樂社群。', tags: ['活動企劃', '社群經營', '音樂節'] },
    { title: 'Co-Writing 音樂創作營獲獎作品', description: '與不同領域的音樂人共同創作，在交流與共創中完成原創作品並獲得評審肯定。', tags: ['原創音樂', '共創合作', '獲獎作品'], link: 'https://www.youtube.com/watch?v=a688LNEiHsM' },
    { title: '初耳 Hatsumimi 台日文化交流', description: '參與 TAIWAN PLUS 與初耳活動，擔任中日溝通與活動引導的橋樑。', tags: ['志工服務', '文化交流', '台灣祭'] },
    { title: '原創樂團錄音作品', description: '從樂團創作到錄音製作，將音樂靈感轉化為可以被保存與分享的完整作品。', tags: ['樂團創作', '獨立樂團', '錄音製作'], link: 'https://linktr.ee/mr_recycle' }
  ] },
  testimonials: { label: '04 / 夥伴回饋', title: '一起玩音樂的人這樣說', items: [
    { role: '成人吉他學習者', quote: 'Kai 不只教我彈奏技巧，更幫助我找到適合自己的練習方式，讓音樂慢慢成為生活的一部分。' },
    { role: '樂團朋友', quote: '比起學會一首歌，更重要的是找到一群能一起享受音樂的人。' },
    { role: '音樂社群成員', quote: '他總是樂於分享自己的經驗，也願意協助更多人走進音樂社群。' }
  ] },
  process: { label: '05 / 合作流程', title: '從理解你開始，走向自己的音樂生活', items: [
    { title: '初步交流', description: '了解音樂背景、興趣與目標，找到適合的起點。' },
    { title: '需求規劃', description: '依照個人需求提供適合的學習與交流建議。' },
    { title: '音樂實踐', description: '透過練習、樂團活動或交流活動累積經驗。' },
    { title: '持續陪伴', description: '根據回饋調整方向與下一階段目標。' },
    { title: '建立音樂生活', description: '讓音樂真正持續融入日常。' }
  ] },
  journey: { label: '03 / 活動足跡', title: '從舞台出發，把經驗帶回社群', intro: '演出、創作、教學與跨國交流，慢慢累積成 Music Community OS 的養分。', items: [{ period: '樂團', title: '十多年演出創作', description: 'Live House、音樂祭與公開活動演出。' }, { period: '教學', title: '陪成人持續學習', description: '以樂理、耳訓與歌曲分析建立練習方法。' }, { period: '社群', title: '科技人音樂社群', description: '曾任新竹科技產業音樂發展協會理事。' }, { period: '共創', title: '講座、錄音與音樂祭', description: '參與音樂講座、錄音企劃與年度音樂節籌辦。' }, { period: '日本', title: '東京、大阪音樂交流', description: '走訪 Live House、Jam Session 與音樂文化現場。' }, { period: '連結', title: '建立台日交流網絡', description: '參與 MI Tokyo 與初耳等文化交流活動。' }] },
  community: { label: '04 / 音樂社群', title: '比學會一首歌更重要的，是找到一起玩音樂的人。', description: '從科技人音樂社群、講座與錄音企劃，到科蚪音樂節與社區音樂活動，Kai 長期投入上班族音樂文化與跨領域交流，讓分享知識、第一次合奏與共同籌辦活動，都成為連結的開始。', images: [{ src: '/images/community-1.webp', alt: '夥伴們在暖色燈光下一起演奏' }, { src: '/images/community-2.webp', alt: '音樂社群成員聚在一起交流' }, { src: '/images/community-3.webp', alt: '台上台下共同享受現場音樂' }] },
  vision: { label: '05 / Music Community OS', quote: '音樂可以成為生活的一部分，也能成為人與人相遇的理由。', title: '讓音樂習慣、夥伴與文化交流持續發生', description: 'Music Community OS 想整合音樂學習、樂團媒合、活動參與與台日文化交流。從了解每個人的音樂背景與目標開始，提供適合的學習與交流建議，陪人們建立屬於自己的音樂生活，也讓更多音樂人跨越城市與文化彼此認識。' },
  contact: { label: '06 / 聯絡交流', title: '找到適合你的音樂起點。', description: '無論是想學吉他、建立練習習慣、找樂團夥伴，或體驗日本 Live House 與 Jam Session，都歡迎來聊聊你的音樂背景、興趣與目標。', email: 'narumi1001@gmail.com', emailLabel: 'narumi1001@gmail.com', socialLinks: [{ label: 'Instagram', href: 'https://www.instagram.com/balance_liao' }, { label: 'Linktree', href: 'https://linktr.ee/balanceliao' }, { label: 'YouTube', href: 'https://www.youtube.com/watch?v=a688LNEiHsM' }] },
  footer: { name: 'Music Community OS', tagline: '重新連結音樂 · 連結彼此 · 連結世界' },
  ui: { menu: '選單', navigationLabel: '主要導覽', backToTop: '回到頁首', contact: '聯絡交流', learnStory: '了解 Kai 的故事', learnMore: '了解更多', viewActivities: '看看社群足跡', letsConnect: '從交流開始', message: '初步交流', messageDescription: '聊聊你的音樂背景、興趣與目標', follow: '追蹤音樂日常', followDescription: '認識更多活動、分享與交流紀錄', collaborate: '合作邀約', collaborateDescription: '講座、活動、演出與台日交流合作', skipToContent: '跳至主要內容', language: '語言' }
};
