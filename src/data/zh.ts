import type { PortfolioContent } from './portfolio';

export const zh: PortfolioContent = {
  meta: { title: 'Kai｜音樂交流嚮導・樂團、Jam Session 與日本音樂文化', description: 'Kai 是一位音樂交流嚮導，分享樂團成長、Jam Session、日本 Live House 與音樂旅行經驗，陪伴想玩音樂的人跨出第一步。' },
  navigation: [{ label: '首頁', href: '#top' }, { label: '關於 Kai', href: '#about' }, { label: '服務', href: '#services' }, { label: '精選經歷', href: '#portfolio' }, { label: '聯絡', href: '#contact' }],
  hero: { eyebrow: 'Kai｜音樂交流嚮導', title: '讓音樂成為人與人相遇的起點。', description: '我是 Kai，分享樂團、Jam Session 與日本音樂文化，陪你把對音樂的興趣變成一次真實的參與。', primaryAction: { label: '分享你的音樂計畫', href: '#contact-form' }, secondaryAction: { label: '查看精選經歷', href: '#portfolio' }, image: { src: '/images/hero.webp', alt: '朋友們在溫暖燈光下一起演奏音樂' }, note: 'Music Community Guide', highlights: [{ label: '想開始玩音樂', value: '從第一次合奏開始準備' }, { label: '想認識音樂夥伴', value: '找到交流與參與的場景' }, { label: '對日本音樂有興趣', value: '認識 Live House 與 Jam 文化' }] },
  startHere: { label: 'Start Here', title: '你也想踏進音樂的世界嗎？', intro: '不必先成為厲害的樂手。從現在最感興趣的方向，找到一個容易開始的入口。', items: [
    { number: '01', title: '想開始學樂器或加入樂團', description: '從吉他入門、樂團準備到第一次與別人合奏，找到適合自己的起點。', action: { label: '了解音樂學習與樂團養成', href: '#service-01' } },
    { number: '02', title: '想找到一起玩音樂的人', description: '了解團員媒合、Jam Session 與交流活動，讓一個人的興趣變成共同體驗。', action: { label: '探索音樂交流', href: '#service-02' } },
    { number: '03', title: '想去日本看團或參加 Jam', description: '從 Live House、Open Campus 到音樂旅行，降低第一次參與的陌生感。', action: { label: '探索日本音樂文化', href: '#service-03' } }
  ] },
  about: { label: '01 / 關於 Kai', title: '從一個人的興趣，到與人相遇的方式。', paragraphs: ['十多年前，我因為加入樂團，認識了許多原本不會出現在生活中的朋友。音樂不只讓我站上舞台，也成為我與人建立連結的方式。', '平日是軟體工程師，晚上與週末持續參與樂團、演出與台日交流。我想分享的不只是演奏技巧，而是如何找到夥伴、進入陌生場景，讓音樂在忙碌生活裡繼續發生。'], image: { src: '/images/kai-profile.webp', alt: 'Kai 戴著帽子與眼鏡在日本街頭的自然照片' }, facts: [{ value: '10+ 年', label: '樂團演出與音樂創作' }, { value: '容易開始', label: '不必等到程度很好才參與' }, { value: '日 × 台', label: '用音樂跨越語言與地域' }] },
  values: { label: 'Why Music Exchange', title: '為什麼是音樂交流？', intro: '音樂真正留下來的，往往不只是一首歌，而是一起練習、分享與走進新場景的人。', items: [
    { number: '01', title: '音樂不只關於技巧', description: '技巧很重要，但讓人願意持續下去的，通常是一起練習、演出與分享的夥伴。' },
    { number: '02', title: '每個人都需要容易開始的入口', description: '不必等到自己很厲害，才有資格加入樂團、參加 Jam 或走進 Live House。' },
    { number: '03', title: '交流可以跨越語言與地域', description: '從台灣到日本，音樂讓原本陌生的人擁有共同話題，並慢慢建立長期連結。' }
  ] },
  services: { label: '02 / 你可以獲得的協助', title: '從適合你的起點，開始音樂生活', intro: '這些不是制式方案，而是依照你的經驗、興趣與想踏出的下一步，整理可行的學習、交流與參與方式。', items: [
    { number: '01', status: '目前提供', title: '音樂學習與樂團養成', description: '從吉他入門、樂理與器材基礎，到第一次合奏準備，協助你建立可持續的練習方式。', audience: '想開始學音樂、重新拾起樂器，或第一次加入樂團。', action: { label: '分享你的音樂計畫', href: '#contact-form' }, image: { src: '/images/service-learning.webp', alt: '不同程度的樂手在日本音樂教室一起合奏學習' } },
    { number: '02', status: '可洽談合作', title: '樂團媒合與音樂交流', description: '分享團員尋找、樂團經營與 Jam Session 準備經驗，討論社群串接或小型交流活動。', audience: '已經會一點樂器，但缺少夥伴、舞台或交流機會。', action: { label: '討論合作可能', href: '#contact-form' }, image: { src: '/images/service-community.webp', alt: '樂團在音樂祭舞台演出並與台下觀眾交流' } },
    { number: '03', status: '經驗分享／內容準備中', title: '台日音樂文化與音樂旅行', description: '分享日本 Live House、Jam Session、音樂祭與 Open Campus 的實際參與經驗。', audience: '喜歡日本音樂文化，想看團、參加 Jam 或安排音樂旅行。', action: { label: '先聊聊你的興趣', href: '#contact-form' }, image: { src: '/images/service-japan.webp', alt: '朋友們一起前往日本參加 Summer Sonic 音樂祭' } }
  ] },
  projects: { label: '03 / 精選經歷', title: '音樂足跡，也是一段段交流的練習', intro: '從社群、跨國合奏到上班族樂團，這些經驗形成 Kai 現在分享與陪伴的基礎。', allAction: '查看完整音樂足跡', items: [
    { title: '工程師樂團經營', description: '在工作與生活之外，和夥伴持續排練、創作與演出。', role: '吉他手／樂團共同經營', insight: '讓我理解上班族要持續玩團，需要可維持的節奏、清楚分工與彼此支持。', tags: ['樂團經營', '上班族音樂生活'], image: { src: '/images/projects/band.webp', alt: '工程師樂團共同演出的現場照片' }, link: 'https://www.instagram.com/mr.recycle.music/' },
    { title: '原創樂團錄音作品', description: '從樂團創作到錄音製作，把成員的音樂靈感整理成可以分享的作品。', role: '吉他手／創作與錄音參與', insight: '作品的完成不只靠技巧，也需要分工、溝通與持續把片段推進到終點。', tags: ['樂團創作', '錄音製作'], image: { src: '/images/projects/original-recording.webp', alt: '原創樂團錄音作品的手繪風格封面' }, link: 'https://linktr.ee/mr_recycle' },
    { title: 'Co-Writing 音樂創作營獲獎作品', description: '與不同背景的音樂人共同創作，在有限時間內完成原創作品。', role: '共同創作者', insight: '清楚表達與彼此傾聽，能讓陌生的創作者快速找到共同語言。', tags: ['原創音樂', '共創合作'], image: { src: '/images/projects/cowriting.webp', alt: 'Co-Writing 音樂創作營作品封面' }, link: 'https://www.youtube.com/watch?v=a688LNEiHsM' },
    { title: '科技人音樂社群與科蚪音樂節', description: '串連科技業音樂愛好者與樂團，參與音樂節與社群活動的籌辦。', role: '協會理事／活動企劃與執行', insight: '門檻友善的活動，能讓平常不敢上台的人也找到自己的參與位置。', tags: ['活動企劃', '社群經營'], image: { src: '/images/projects/community.webp', alt: '科技人音樂社群與科蚪音樂節成員合照' }, link: 'https://www.instagram.com/rocktechs/' },
    { title: 'MI Tokyo Open Campus', description: '在日本音樂學校與當地樂手共同排練、學習與演出。', role: 'Open Campus 樂團參與者', insight: '跨國合奏最初的難點常不是演奏能力，而是資訊、語言與心理上的陌生感。', tags: ['日本音樂交流', '跨國合奏'], image: { src: '/images/projects/mi-tokyo.webp', alt: 'MI Tokyo Open Campus 的樂團交流與合奏照片' } },
    { title: '台日樂手 Jam Session', description: '與在日台灣樂手及不同背景的音樂人即興合作，跨越語言與演奏習慣交流。', role: '參與樂手／交流連結', insight: '第一次參加海外 Jam 的困難往往不是技術，而是不知道現場如何運作、該怎麼加入。', tags: ['Jam Session', '台日交流'], image: { src: '/images/projects/jam-session.webp', alt: '台日樂手 Jam Session 後的交流合照' } }
  ] },
  testimonials: { label: '04 / 可能的改變', title: '音樂可以帶來的具體改變', items: [{ role: '忙碌生活中的音樂習慣', quote: '除了彈奏技巧，也一起整理適合自己的練習方式，讓原本容易中斷的練習逐漸穩定放進每週生活。' }, { role: '從一個人到一群音樂夥伴', quote: '比起只完成一首歌曲，更重要的是找到願意互相配合、一起練習並繼續享受音樂的夥伴。' }, { role: '走進日本音樂文化的深度旅行', quote: '不只走訪景點，也透過 Live House、Jam Session 或音樂活動，更深入認識日本城市的音樂文化與在地交流方式。' }] },
  process: { label: '05 / 從交流到行動', title: '先從一次交流開始', note: '可以只從一次交流開始，不必承諾長期方案。', image: { src: '/images/service-process.webp', alt: '錄音室中的樂器、麥克風與音樂製作工作桌' }, items: [{ title: '聊聊你的想法', description: '分享目前的音樂經驗、生活步調，以及你正在好奇或困擾的事情。' }, { title: '找到適合的入口', description: '一起整理可行的學習、合奏、社群或台日音樂文化參與方式。' }, { title: '實際踏出一步', description: '從一項負擔得起的行動開始，例如一次練習、合奏、Jam 或活動參與。' }] },
  journey: { label: '活動足跡', title: '從舞台出發，把經驗帶回社群', intro: '演出、創作、教學與跨國交流。', items: [{ period: '樂團', title: '十多年演出創作', description: 'Live House、音樂祭與公開活動。' }, { period: '教學', title: '陪成人持續學習', description: '建立適合自己的練習方法。' }] },
  community: { label: '音樂社群', title: '比學會一首歌更重要的，是找到一起玩音樂的人。', description: '從科技人音樂社群到台日交流，讓第一次合奏與共同參與成為連結的開始。', images: [{ src: '/images/community-1.webp', alt: '夥伴們在暖色燈光下一起演奏' }, { src: '/images/community-2.webp', alt: '音樂社群成員聚在一起交流' }, { src: '/images/community-3.webp', alt: '台上台下共同享受現場音樂' }] },
  vision: { label: 'Music Community Guide', quote: '音樂可以不是職業，仍然能成為生活中重要的一部分。', title: '讓音樂習慣、夥伴與文化交流持續發生', description: '從一個容易開始的入口，讓更多人在音樂裡認識夥伴、累積經驗，也跨越城市與文化彼此連結。', image: { src: '/images/vision-concert.webp', alt: '演唱會觀眾一起舉手感受現場音樂的能量' } },
  contact: { label: '06 / 從交流開始', title: '分享你的音樂計畫', description: '不需要先想好完整方案。告訴我你目前的狀況與想嘗試的事，我會透過 Email 回覆。', primaryAction: '分享你的音樂計畫', secondaryAction: '追蹤音樂日常', image: { src: '/images/contact-exchange.webp', alt: '以吉他與音符連結台灣和日本的簡約音樂交流插畫' }, email: 'narumi1001@gmail.com', emailLabel: 'narumi1001@gmail.com', form: { name: '你的稱呼', email: 'Email', topic: '想聊的主題', message: '簡單分享你的想法', submit: '開啟 Email 並送出', subject: 'Music Community Guide｜音樂計畫交流' }, socialLinks: [{ label: 'Instagram', href: 'https://www.instagram.com/balance_liao' }, { label: 'Linktree', href: 'https://linktr.ee/balanceliao' }, { label: 'YouTube', href: 'https://www.youtube.com/watch?v=a688LNEiHsM' }] },
  journal: { enabled: false, label: 'Music Journal', title: '最新 Music Journal', items: [] },
  footer: { name: 'Kai｜音樂交流嚮導', tagline: '讓音樂成為人與人相遇的起點' },
  ui: { menu: '選單', navigationLabel: '主要導覽', backToTop: '回到頁首', contact: '分享你的音樂計畫', learnStory: '查看音樂足跡', learnMore: '查看詳細內容', viewActivities: '看看社群足跡', suitableFor: '適合這樣的你：', role: 'Kai 的角色', takeaway: '帶來的收穫', letsConnect: '從交流開始', message: '初步交流', messageDescription: '聊聊你的音樂背景、興趣與目標', follow: '追蹤音樂日常', followDescription: '認識更多活動、分享與交流紀錄', collaborate: '合作邀約', collaborateDescription: '講座、活動、演出與台日交流合作', skipToContent: '跳至主要內容', language: '語言' }
};
