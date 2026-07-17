import type { PortfolioContent } from './portfolio';

export const ja: PortfolioContent = {
  meta: { title: 'Kai｜音楽交流ナビゲーター — Music Community OS', description: '社会人が音楽を続け、仲間と出会い、バンド活動と日台交流を通して自分らしい音楽ライフを楽しめるようサポートします。' },
  navigation: [{ label: 'Kaiについて', href: '#about' }, { label: 'ポートフォリオ', href: '#portfolio' }, { label: 'サービス', href: '#services' }, { label: 'お客様の声', href: '#testimonials' }, { label: 'ご利用の流れ', href: '#process' }],
  hero: { eyebrow: 'Kai · 音楽交流ナビゲーター · Music Community OS', title: '音楽を単なる趣味ではなく、人生を豊かにする長く続く旅へ。', description: '忙しい社会人が音楽を続け、仲間と出会い、自分らしい音楽ライフを楽しめるようサポートします。', primaryAction: { label: '音楽の旅を始める', href: '#contact' }, secondaryAction: { label: 'Kaiについて', href: '#about' }, image: { src: '/images/hero.webp', alt: '仲間たちが暖かな光の中で一緒に演奏している様子' }, note: '音楽学習 · バンド交流 · 日本 × 台湾' },
  about: { label: '01 / Kaiについて', title: '10年以上、音楽を通じて人と出会ってきました。', paragraphs: ['Kaiはバンドギタリストであり、音楽交流ナビゲーターです。10年以上にわたり、バンド演奏、オリジナル楽曲制作、音楽フェスや交流活動に参加。台湾各地のLive Houseや公開イベントで、さまざまな文化背景を持つ仲間と出会ってきました。', '一曲を弾けるようになることも大切ですが、一緒に音楽を楽しめる仲間との出会いこそ、音楽を暮らしに根づかせてくれます。成人学習者に合った練習方法、バンド仲間、音楽コミュニティとの出会いをサポートします。'], image: { src: '/images/kai-profile.webp', alt: '帽子と眼鏡をかけたKaiが日本の街を歩くポートレート' }, facts: [{ value: '10年以上', label: 'バンド演奏・音楽制作' }, { value: '2年以上', label: '大人向けギター指導' }, { value: '日 × 台', label: '音楽文化交流ネットワーク' }] },
  services: { label: '02 / サポート', title: '自分に合った入口から、音楽のある暮らしへ', intro: 'ギターや音楽理論から、バンドマッチング、Jam Session、日本の音楽文化体験まで。経験、興味、目標を伺い、長く続けられる方法を一緒に探します。', items: [{ number: '01', title: '音楽学習とバンド育成', description: 'ギター入門、基礎理論、機材選び、楽曲分析、個別練習プランを通して、社会人の音楽習慣づくりを支えます。', image: { src: '/images/service-learning.webp', alt: '日本の音楽教室で一緒に合奏を学ぶミュージシャンたち' } }, { number: '02', title: 'バンドマッチングと音楽交流', description: 'バンド運営の経験を共有し、メンバー探し、音楽コミュニティ、交流イベントとの出会いをつなぎます。', image: { src: '/images/service-community.webp', alt: '音楽フェスのステージで演奏し観客と交流するバンド' } }, { number: '03', title: '日台音楽文化と音楽旅行', description: '日本の音楽フェス、Live House、Music Bar、Jam Sessionの体験をもとに、台湾の音楽家を日本の現場へ案内します。', image: { src: '/images/service-japan.webp', alt: '仲間と一緒に日本のSummer Sonicを訪れた様子' } }] },
  projects: { label: '02 / ポートフォリオ', title: '音楽から生まれたプロジェクトと出会い', intro: 'バンド制作、コミュニティ企画、日台文化交流。一つひとつの経験が次の協働へつながっています。', items: [
    { title: 'エンジニアバンド運営', description: 'エンジニアバンドの実体験をもとに、社会人生活の中で音楽を長く楽しむ方法を提案しています。', tags: ['バンド運営', '音楽のある人生', '音楽で出会う'], image: { src: '/images/projects/band.webp', alt: 'エンジニアバンドのライブ演奏写真' }, link: 'https://www.instagram.com/mr.recycle.music/' },
    { title: 'Co-Writing 音楽制作キャンプ受賞作品', description: '異なる分野の音楽家と共作し、オリジナル作品を完成。審査員から評価をいただきました。', tags: ['オリジナル音楽', '共創', '受賞作品'], image: { src: '/images/projects/cowriting.webp', alt: 'Co-Writing 音楽制作キャンプの作品写真' }, link: 'https://www.youtube.com/watch?v=a688LNEiHsM' },
    { title: 'エンジニア音楽コミュニティと音楽祭', description: '科学園区音楽祭の企画運営に参加し、社会人ミュージシャンとバンドをつなぐ場を育てました。', tags: ['イベント企画', 'コミュニティ', '音楽祭'], image: { src: '/images/projects/community.webp', alt: 'エンジニア音楽コミュニティと音楽祭の集合写真' } },
    { title: 'MI Tokyo Open Campus', description: '日本の音楽学校のOpen Campusで、現地ミュージシャンとリハーサル・演奏を行い、音楽教育と国際協働を体験しました。', tags: ['日本音楽交流', 'MI Tokyo', '国際協働'], image: { src: '/images/projects/mi-tokyo.webp', alt: 'MI Tokyo Open Campusでのバンド交流写真' } },
    { title: '日台ミュージシャン Jam Session', description: '在日台湾ミュージシャンや多様な仲間と即興演奏を行い、文化を越えたつながりを広げました。', tags: ['Jam Session', '音楽コミュニティ', '日台交流'], image: { src: '/images/projects/jam-session.webp', alt: '日台ミュージシャン Jam Session の集合写真' } },
    { title: '初耳 Hatsumimi 日台文化交流', description: 'TAIWAN PLUSと初耳の活動で、日中コミュニケーションとイベント運営の橋渡しを行いました。', tags: ['ボランティア', '文化交流', '台湾祭'], image: { src: '/images/projects/hatsumimi.webp', alt: '初耳 Hatsumimi 日台文化交流イベントの写真' } }
  ] },
  testimonials: { label: '04 / お客様の声', title: '一緒に音楽を楽しむ仲間の声', items: [
    { role: '社会人ギター学習者', quote: '演奏技術だけでなく、自分に合った練習方法も教えてくれて、音楽が生活の一部になりました。' },
    { role: 'バンド仲間', quote: '曲を弾けること以上に、一緒に音楽を楽しめる仲間ができたことが大きな収穫でした。' },
    { role: '音楽コミュニティメンバー', quote: '知識や経験を惜しみなく共有し、多くの人が音楽コミュニティへ入るきっかけをつくっています。' }
  ] },
  process: { label: '05 / サービスの流れ', title: 'あなたを知ることから、音楽のある暮らしへ', image: { src: '/images/service-process.webp', alt: '楽器、マイク、音楽制作デスクが並ぶレコーディングスタジオ' }, items: [
    { title: 'ヒアリング', description: '音楽経験、興味、目標を伺い、合うスタート地点を見つけます。' },
    { title: 'プランニング', description: '目的に合わせた学習や交流の方法を提案します。' },
    { title: '実践・体験', description: '練習、バンド活動、交流イベントで経験を積みます。' },
    { title: 'フォローアップ', description: '状況に合わせて方向性と次の目標を調整します。' },
    { title: '音楽ライフの実現', description: '音楽を日常の一部として楽しみ続けます。' }
  ] },
  journey: { label: '03 / 活動の歩み', title: 'ステージで得た経験を、コミュニティへ', intro: '演奏、制作、指導、国際交流。その一つひとつがMusic Community OSの土台になっています。', items: [{ period: 'バンド', title: '10年以上の演奏・制作', description: 'Live House、音楽フェス、公開イベントへ出演。' }, { period: 'レッスン', title: '大人の継続を支える', description: '理論、耳コピ、楽曲分析を生かした指導。' }, { period: 'コミュニティ', title: '社会人音楽コミュニティ', description: '新竹科技産業音楽発展協会の理事を経験。' }, { period: '企画', title: '講座・録音・音楽祭', description: '音楽講座、録音企画、音楽祭運営に参加。' }, { period: '日本', title: '東京・大阪での交流', description: 'Live HouseとJam Sessionの現場を体験。' }, { period: '架け橋', title: '日台ネットワーク', description: 'MI Tokyoや初耳の文化交流活動に参加。' }] },
  community: { label: '04 / 音楽コミュニティ', title: '一曲弾けること以上に、一緒に楽しめる仲間との出会いを。', description: '社会人音楽コミュニティ、音楽講座、録音企画、科学園区の音楽祭、地域活動を通じて、Kaiは音楽のある暮らしと異分野交流を育ててきました。知識を分かち合うことも、初めての合奏も、一緒にイベントをつくることも、すべてがつながりの始まりです。', images: [{ src: '/images/community-1.webp', alt: '仲間たちが暖かな照明の下で一緒に演奏する様子' }, { src: '/images/community-2.webp', alt: '音楽コミュニティの仲間が集い交流する様子' }, { src: '/images/community-3.webp', alt: 'ステージと客席が一緒にライブ音楽を楽しむ様子' }] },
  vision: { label: '05 / Music Community OS', quote: '音楽を暮らしの一部に。そして、人と人が出会う理由に。', title: '音楽習慣、仲間、文化交流が続いていく仕組み', description: 'Music Community OSは、音楽学習、バンドマッチング、イベント参加、日台文化交流をつなぎます。一人ひとりの経験、興味、目標を知ることから始め、適した学びと交流を提案。自分らしい音楽ライフを育て、都市や文化を越えて音楽家同士が出会える環境を目指します。', image: { src: '/images/vision-concert.webp', alt: 'ライブ会場で観客が音楽とステージの一体感を楽しむ様子' } },
  contact: { label: '06 / お問い合わせ', title: '自分に合った音楽の入口を見つけよう。', description: 'ギターを始めたい、練習習慣をつくりたい、バンド仲間を探したい、日本のLive HouseやJam Sessionを体験したい。まずは経験、興味、目標を聞かせてください。', image: { src: '/images/contact-exchange.webp', alt: 'ギターと音符で台湾と日本をつなぐ音楽交流のイラスト' }, email: 'narumi1001@gmail.com', emailLabel: 'narumi1001@gmail.com', socialLinks: [{ label: 'Instagram', href: 'https://www.instagram.com/balance_liao' }, { label: 'Linktree', href: 'https://linktr.ee/balanceliao' }, { label: 'YouTube', href: 'https://www.youtube.com/watch?v=a688LNEiHsM' }] },
  footer: { name: 'Music Community OS', tagline: '音楽と再会する · 仲間とつながる · 世界へひらく' },
  ui: { menu: 'メニュー', navigationLabel: 'メインナビゲーション', backToTop: 'ページ上部へ', contact: 'お問い合わせ', learnStory: 'Kaiのストーリー', learnMore: '詳しく見る', viewActivities: 'コミュニティの歩み', letsConnect: '対話から始める', message: 'ヒアリング', messageDescription: '音楽経験、興味、目標を聞かせてください', follow: '音楽の日々をフォロー', followDescription: '活動、音楽トーク、交流の記録を発信', collaborate: 'コラボレーション', collaborateDescription: '講座、イベント、演奏、日台交流のご相談', skipToContent: '本文へ移動', language: '言語' }
};
