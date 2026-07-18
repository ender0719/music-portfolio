import type { PortfolioContent } from './portfolio';

export const zh: PortfolioContent = {
  meta: { title: 'Kai｜音樂交流嚮導・樂團、Jam Session 與日本音樂文化', description: 'Kai 是一位音樂交流嚮導，分享樂團成長、Jam Session、日本 Live House 與音樂旅行經驗，陪伴想玩音樂的人跨出第一步。' },
  navigation: [{ label: '首頁', href: '#top' }, { label: '關於 Kai', href: '#about' }, { label: '服務', href: '#services' }, { label: '精選經歷', href: '#portfolio' }, { label: '聯絡', href: '#contact' }],
  hero: { eyebrow: 'Kai｜音樂交流嚮導', title: '讓音樂成為人與人相遇的起點。', description: '我是 Kai，一位音樂交流嚮導。分享樂團、Jam Session 與日本音樂文化，陪伴想玩音樂的人踏出第一步。', primaryAction: { label: '探索音樂交流', href: '#start-here' }, secondaryAction: { label: '查看精選經歷', href: '#portfolio' }, image: { src: '/images/hero.webp', alt: '朋友們在溫暖燈光下一起演奏音樂' }, note: 'Music Community Guide', highlights: [{ label: '即使還沒開始', value: '也能找到適合自己的音樂入口' }, { label: '不必等到很厲害', value: '第一次合奏與 Jam 都能準備' }, { label: '從台灣到日本', value: '讓陌生的音樂文化變得更靠近' }] },
  startHere: { label: 'Start Here', title: '你也想踏進音樂的世界嗎？', intro: '不必先成為厲害的樂手。從現在最感興趣的方向，找到一個容易開始的入口。', items: [
    { number: '01', title: '想開始學樂器或加入樂團', description: '從吉他入門、樂團準備到第一次與別人合奏，找到適合自己的起點。', action: { label: '了解音樂學習與樂團養成', href: '#service-01' } },
    { number: '02', title: '想找到一起玩音樂的人', description: '了解團員媒合、Jam Session 與交流活動，讓一個人的興趣變成共同體驗。', action: { label: '探索音樂交流', href: '#service-02' } },
    { number: '03', title: '想去日本看團或參加 Jam', description: '從 Live House、Open Campus 到音樂旅行，降低第一次參與的陌生感。', action: { label: '探索日本音樂文化', href: '#service-03' } }
  ] },
  about: { label: '01 / 關於 Kai', title: '從一個人的興趣，到與人相遇的方式。', paragraphs: ['十多年前，我因為加入樂團，認識了許多原本不會出現在生活中的朋友。音樂不只讓我站上舞台，也成為我與人建立連結的方式。', '但我也發現，很多人明明喜歡音樂，卻因為不知道如何開始、找不到團員，或擔心自己的程度不夠，而一直停留在門外。', '因此，我希望透過樂團經驗、活動參與與台日音樂交流，降低進入音樂世界的門檻，陪伴更多人踏出第一步。', '平日是軟體工程師，晚上與週末則持續參與樂團、演出與音樂交流。我相信，即使音樂不是全職工作，也能成為一段持續成長、認識夥伴的人生旅程。'], image: { src: '/images/kai-profile.webp', alt: 'Kai 戴著帽子與眼鏡在日本街頭的自然照片' }, facts: [{ value: '10+ 年', label: '樂團演出與音樂創作' }, { value: '2+ 年', label: '成人吉他教學經驗' }, { value: '日 × 台', label: '音樂活動與文化交流' }] },
  values: { label: 'Why Music Exchange', title: '為什麼是音樂交流？', intro: '音樂真正留下來的，往往不只是一首歌，而是一起練習、分享與走進新場景的人。', items: [
    { number: '01', title: '音樂不只關於技巧', description: '技巧很重要，但讓人願意持續下去的，通常是一起練習、演出與分享的夥伴。' },
    { number: '02', title: '每個人都需要容易開始的入口', description: '不必等到自己很厲害，才有資格加入樂團、參加 Jam 或走進 Live House。' },
    { number: '03', title: '交流可以跨越語言與地域', description: '從台灣到日本，音樂讓原本陌生的人擁有共同話題，並慢慢建立長期連結。' }
  ] },
  services: { label: '02 / 你可以獲得的協助', title: '從適合你的起點，開始音樂生活', intro: '這些不是制式方案，而是依照你的經驗、興趣與想踏出的下一步，整理可行的學習、交流與參與方式。', items: [
    { number: '01', title: '音樂學習與樂團養成', description: '從吉他入門、樂理與器材基礎、第一次合奏準備，到樂團建立與持續活動，協助忙碌的上班族把音樂放回生活。', audience: '想開始學音樂、重新拾起樂器，或第一次加入樂團的人。', action: { label: '查看相關經歷', href: '#portfolio' }, image: { src: '/images/service-learning.webp', alt: '不同程度的樂手在日本音樂教室一起合奏學習' } },
    { number: '02', title: '樂團媒合與音樂交流', description: '分享團員尋找、樂團經營與 Jam Session 準備經驗，串接音樂社群、舞台與小型交流活動。', audience: '已經會一點樂器，但缺少夥伴、舞台或交流機會的人。', action: { label: '探索精選經歷', href: '#portfolio' }, image: { src: '/images/service-community.webp', alt: '樂團在音樂祭舞台演出並與台下觀眾交流' } },
    { number: '03', title: '台日音樂文化與音樂旅行', description: '分享日本 Live House、Jam Session、音樂祭、音樂景點與 Open Campus 經驗，降低第一次參與的資訊與心理門檻。', audience: '喜歡日本音樂文化，想看團、參加 Jam 或安排音樂旅行的人。', action: { label: '與 Kai 聊聊', href: '#contact' }, image: { src: '/images/service-japan.webp', alt: '朋友們一起前往日本參加 Summer Sonic 音樂祭' } }
  ] },
  projects: { label: '03 / 精選經歷', title: '音樂足跡，也是一段段交流的練習', intro: '這些經歷不只記錄做過什麼，也累積了如何讓上班族持續玩團、讓陌生人走進交流現場的方法。', items: [
    { title: '工程師樂團經營', description: '在工作與生活之外，和夥伴持續排練、創作與演出。', role: '吉他手／樂團共同經營', insight: '讓我理解上班族要持續玩團，需要可維持的節奏、清楚分工與彼此支持。', tags: ['樂團經營', '上班族音樂生活'], image: { src: '/images/projects/band.webp', alt: '工程師樂團共同演出的現場照片' }, link: 'https://www.instagram.com/mr.recycle.music/' },
    { title: '原創樂團錄音作品', description: '從樂團創作到錄音製作，把成員的音樂靈感整理成可以分享的作品。', role: '吉他手／創作與錄音參與', insight: '作品的完成不只靠技巧，也需要分工、溝通與持續把片段推進到終點。', tags: ['樂團創作', '錄音製作'], image: { src: '/images/projects/original-recording.webp', alt: '原創樂團錄音作品的手繪風格封面' }, link: 'https://linktr.ee/mr_recycle' },
    { title: 'Co-Writing 音樂創作營獲獎作品', description: '與不同背景的音樂人共同創作，在有限時間內完成原創作品。', role: '共同創作者', insight: '清楚表達與彼此傾聽，能讓陌生的創作者快速找到共同語言。', tags: ['原創音樂', '共創合作'], image: { src: '/images/projects/cowriting.webp', alt: 'Co-Writing 音樂創作營作品封面' }, link: 'https://www.youtube.com/watch?v=a688LNEiHsM' },
    { title: '科技人音樂社群與科蚪音樂節', description: '串連科技業音樂愛好者與樂團，參與音樂節與社群活動的籌辦。', role: '協會理事／活動企劃與執行', insight: '門檻友善的活動，能讓平常不敢上台的人也找到自己的參與位置。', tags: ['活動企劃', '社群經營'], image: { src: '/images/projects/community.webp', alt: '科技人音樂社群與科蚪音樂節成員合照' }, link: 'https://www.instagram.com/rocktechs/' },
    { title: 'MI Tokyo Open Campus', description: '在日本音樂學校與當地樂手共同排練、學習與演出。', role: 'Open Campus 樂團參與者', insight: '跨國合奏最初的難點常不是演奏能力，而是資訊、語言與心理上的陌生感。', tags: ['日本音樂交流', '跨國合奏'], image: { src: '/images/projects/mi-tokyo.webp', alt: 'MI Tokyo Open Campus 的樂團交流與合奏照片' } },
    { title: '台日樂手 Jam Session', description: '與在日台灣樂手及不同背景的音樂人即興合作，跨越語言與演奏習慣交流。', role: '參與樂手／交流連結', insight: '第一次參加海外 Jam 的困難往往不是技術，而是不知道現場如何運作、該怎麼加入。', tags: ['Jam Session', '台日交流'], image: { src: '/images/projects/jam-session.webp', alt: '台日樂手 Jam Session 後的交流合照' } }
  ] },
  testimonials: { label: '04 / 夥伴回饋', title: '一起玩音樂的人這樣說', items: [{ role: '成人吉他學習者', quote: 'Kai 不只教我彈奏技巧，更幫助我找到適合自己的練習方式，讓音樂慢慢成為生活的一部分。' }, { role: '樂團朋友', quote: '比起學會一首歌，更重要的是找到一群能一起享受音樂的人。' }, { role: '音樂社群成員', quote: '他總是樂於分享自己的經驗，也願意協助更多人走進音樂社群。' }] },
  process: { label: '05 / 合作流程', title: '從理解你開始，走向自己的音樂生活', image: { src: '/images/service-process.webp', alt: '錄音室中的樂器、麥克風與音樂製作工作桌' }, items: [{ title: '初步交流', description: '先聊聊你的音樂經驗、生活步調與感興趣的方向，不需要事先準備完整計畫。' }, { title: '需求規劃', description: '釐清目前的困難與期待，整理適合的學習方式、交流場景或參與路徑。' }, { title: '音樂實踐', description: '從練習、第一次合奏、樂團活動或交流現場開始，逐步累積真實經驗。' }, { title: '持續調整', description: '依照參與後的感受與生活變化，一起確認下一階段值得嘗試的方向。' }, { title: '融入生活', description: '找到能長久維持的節奏，讓音樂不只是一次活動，而是自然留在日常之中。' }] },
  journey: { label: '活動足跡', title: '從舞台出發，把經驗帶回社群', intro: '演出、創作、教學與跨國交流。', items: [{ period: '樂團', title: '十多年演出創作', description: 'Live House、音樂祭與公開活動。' }, { period: '教學', title: '陪成人持續學習', description: '建立適合自己的練習方法。' }] },
  community: { label: '音樂社群', title: '比學會一首歌更重要的，是找到一起玩音樂的人。', description: '從科技人音樂社群到台日交流，讓第一次合奏與共同參與成為連結的開始。', images: [{ src: '/images/community-1.webp', alt: '夥伴們在暖色燈光下一起演奏' }, { src: '/images/community-2.webp', alt: '音樂社群成員聚在一起交流' }, { src: '/images/community-3.webp', alt: '台上台下共同享受現場音樂' }] },
  vision: { label: 'Music Community Guide', quote: '音樂可以不是職業，仍然能成為生活中重要的一部分。', title: '讓音樂習慣、夥伴與文化交流持續發生', description: '從一個容易開始的入口，讓更多人在音樂裡認識夥伴、累積經驗，也跨越城市與文化彼此連結。', image: { src: '/images/vision-concert.webp', alt: '演唱會觀眾一起舉手感受現場音樂的能量' } },
  contact: { label: '06 / 從交流開始', title: '你也有一個想透過音樂實現的計畫嗎？', description: '無論是第一次加入樂團、參加 Jam、規劃音樂交流，或尋找活動合作，都歡迎分享你的想法。', primaryAction: '與 Kai 聊聊', secondaryAction: '追蹤音樂日常', image: { src: '/images/contact-exchange.webp', alt: '以吉他與音符連結台灣和日本的簡約音樂交流插畫' }, email: 'narumi1001@gmail.com', emailLabel: 'narumi1001@gmail.com', socialLinks: [{ label: 'Instagram', href: 'https://www.instagram.com/balance_liao' }, { label: 'Linktree', href: 'https://linktr.ee/balanceliao' }, { label: 'YouTube', href: 'https://www.youtube.com/watch?v=a688LNEiHsM' }] },
  journal: { enabled: false, label: 'Music Journal', title: '最新 Music Journal', items: [] },
  footer: { name: 'Kai｜音樂交流嚮導', tagline: '讓音樂成為人與人相遇的起點' },
  ui: { menu: '選單', navigationLabel: '主要導覽', backToTop: '回到頁首', contact: '與 Kai 聊聊', learnStory: '查看音樂足跡', learnMore: '查看詳細內容', viewActivities: '看看社群足跡', suitableFor: '適合你，如果：', role: 'Kai 的角色', takeaway: '帶來的收穫', letsConnect: '從交流開始', message: '初步交流', messageDescription: '聊聊你的音樂背景、興趣與目標', follow: '追蹤音樂日常', followDescription: '認識更多活動、分享與交流紀錄', collaborate: '合作邀約', collaborateDescription: '講座、活動、演出與台日交流合作', skipToContent: '跳至主要內容', language: '語言' }
};
