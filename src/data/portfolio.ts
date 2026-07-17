export interface ImageAsset {
  src: string;
  alt: string;
}

export interface PortfolioContent {
  meta: { title: string; description: string };
  navigation: readonly { label: string; href: string }[];
  hero: { eyebrow: string; title: string; description: string; primaryAction: { label: string; href: string }; secondaryAction: { label: string; href: string }; image: ImageAsset; note: string };
  about: { label: string; title: string; paragraphs: readonly string[]; image: ImageAsset; facts: readonly { value: string; label: string }[] };
  services: { label: string; title: string; intro: string; items: readonly { number: string; title: string; description: string; image: ImageAsset }[] };
  journey: { label: string; title: string; intro: string; items: readonly { period: string; title: string; description: string }[] };
  community: { label: string; title: string; description: string; images: readonly ImageAsset[] };
  vision: { label: string; quote: string; title: string; description: string; image: ImageAsset };
  contact: { label: string; title: string; description: string; image: ImageAsset; email: string; emailLabel: string; socialLinks: readonly { label: string; href: string }[] };
  projects: { label: string; title: string; intro: string; items: readonly { title: string; description: string; tags: readonly string[]; image: ImageAsset; link?: string }[] };
  testimonials: { label: string; title: string; items: readonly { role: string; quote: string }[] };
  process: { label: string; title: string; image: ImageAsset; items: readonly { title: string; description: string }[] };
  footer: { name: string; tagline: string };
  ui: { menu: string; navigationLabel: string; backToTop: string; contact: string; learnStory: string; learnMore: string; viewActivities: string; letsConnect: string; message: string; messageDescription: string; follow: string; followDescription: string; collaborate: string; collaborateDescription: string; skipToContent: string; language: string };
}

export const portfolio = {
  meta: {
    title: 'Kai — Music, Community & Cultural Exchange',
    description: 'Kai connects music, community, and creative exchange between Japan and Taiwan.',
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Journey', href: '#journey' },
    { label: 'Community', href: '#community' },
    { label: 'Vision', href: '#vision' },
  ],
  hero: {
    eyebrow: 'Music Community Guide · Japan × Taiwan',
    title: 'Let music become the beginning of connection.',
    description: 'A portfolio for music consulting, community, and meaningful exchange between Japan and Taiwan.',
    primaryAction: { label: 'Start a conversation', href: '#contact' },
    secondaryAction: { label: 'Explore the journey', href: '#journey' },
    image: { src: '/images/hero.webp', alt: 'Abstract warm light suggesting a live music atmosphere' },
    note: 'Based in Taiwan · Connecting with Japan',
  },
  about: {
    label: '01 / About',
    title: 'About Kai',
    paragraphs: [
      'Kai is a guitarist who believes music can bring people, ideas, and cultures closer together.',
      'This space follows an evolving story of listening, gathering, and building meaningful exchange between music communities in Japan and Taiwan.',
    ],
    image: { src: '/images/about.webp', alt: 'Abstract close-up inspired by guitar strings and stage light' },
    facts: [
      { value: 'Music', label: 'Shared language' },
      { value: 'Community', label: 'Built with care' },
      { value: '日 × 台', label: 'Creative exchange' },
    ],
  },
  services: {
    label: '02 / Services',
    title: 'Ways we can work together',
    intro: 'Flexible support for artists, communities, and cultural projects. Scope and availability are discussed case by case.',
    items: [
      { number: '01', title: 'Music Consulting', description: 'Thoughtful support for music projects, creative direction, and cross-disciplinary ideas.', image: { src: '/images/service-learning.webp', alt: 'Musicians learning together in a rehearsal studio' } },
      { number: '02', title: 'Community Building', description: 'Planning and facilitation for gatherings that create genuine, lasting connections.', image: { src: '/images/service-community.webp', alt: 'A live band connecting with the audience at a music festival' } },
      { number: '03', title: 'Japan–Taiwan Exchange', description: 'Cultural context and project support for music initiatives connecting Japan and Taiwan.', image: { src: '/images/service-japan.webp', alt: 'Friends visiting a music festival in Japan together' } },
    ],
  },
  journey: {
    label: '03 / Journey',
    title: 'An evolving practice',
    intro: 'Replace these milestones with verified experiences, projects, and dates when ready.',
    items: [
      { period: 'Beginning', title: 'Picked up a guitar', description: 'The first step in a lifelong relationship with music.' },
      { period: '2013', title: 'Joined a band', description: 'Learning to listen, perform, and create together.' },
      { period: '2016', title: 'Started creating', description: 'Exploring original music and new forms of expression.' },
      { period: '2019', title: 'Built community', description: 'Bringing people together around shared sound.' },
      { period: '2023', title: 'Japan × Taiwan', description: 'Connecting music scenes across borders.' },
      { period: 'Now', title: 'The next chapter', description: 'Keeping the door open to new possibilities.' },
    ],
  },
  community: {
    label: '04 / Community',
    title: 'The joy of music community',
    description: 'Music communities thrive through curiosity, generosity, and shared experience. This section can showcase gatherings, collaborations, and community projects once approved materials are available.',
    images: [
      { src: '/images/community-1.webp', alt: 'Abstract concert light in amber tones' },
      { src: '/images/community-2.webp', alt: 'Abstract layered shapes representing people gathering' },
      { src: '/images/community-3.webp', alt: 'Abstract night scene with soft red and blue light' },
    ],
  },
  vision: {
    label: '05 / Vision',
    quote: 'Create more reasons for people to listen—to music, to one another, and across cultures.',
    title: 'A home for music and connection',
    description: 'The long-term vision is a durable bridge between independent music communities in Japan and Taiwan: artist-led, locally grounded, and open to unexpected collaboration.',
    image: { src: '/images/vision-concert.webp', alt: 'A concert audience sharing the energy of a live performance' },
  },
  contact: {
    label: '06 / Contact',
    title: 'Make music part of life.',
    description: 'For consulting, community initiatives, or Japan–Taiwan music projects, get in touch.',
    email: 'hello@example.com',
    emailLabel: 'hello@example.com',
    socialLinks: [
      { label: 'Instagram', href: '#' },
      { label: 'YouTube', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
  },
  footer: {
    name: 'Kai',
    tagline: 'Music · Community · Japan × Taiwan',
  },
  ui: {
    menu: 'Menu', navigationLabel: 'Main navigation', backToTop: 'Kai, back to top', contact: 'Contact', learnStory: 'Learn the story', learnMore: 'Learn more', viewActivities: 'View activities', letsConnect: "Let's connect", message: 'Message', messageDescription: 'Reach out and start a conversation', follow: 'Follow', followDescription: 'News and everyday music notes', collaborate: 'Collaborate', collaborateDescription: 'Projects and partnership enquiries', skipToContent: 'Skip to content', language: 'Language',
  },
} as const;
