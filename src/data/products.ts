// Product Data
export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  intention: 'love' | 'healing' | 'protection' | 'abundance';
  type: 'bracelet' | 'necklace' | 'set';
  description: string;
  benefits: string[];
  rating: number;
  reviews: number;
  isBestSeller?: boolean;
  isLimited?: boolean;
  stockLeft?: number;
  isNew?: boolean;
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: 'love-bracelet',
    name: 'Love & Attraction Bracelet',
    subtitle: 'Rose Quartz - For Self-Love & Meaningful Connection',
    price: 29.8,
    originalPrice: 39.8,
    image: 'https://i.etsystatic.com/32770098/r/il/cef0e3/7840788281/il_fullxfull.7840788281_mo1m.jpg',
    images: [
      'https://i.etsystatic.com/32770098/r/il/cef0e3/7840788281/il_fullxfull.7840788281_mo1m.jpg',
      'https://i.etsystatic.com/32770098/r/il/fc7993/7520471276/il_fullxfull.7520471276_j79e.jpg'
    ],
    intention: 'love',
    type: 'bracelet',
    description: 'Crafted with genuine Rose Quartz beads from sacred sources. This bracelet carries the gentle energy of unconditional love, helping you open your heart to meaningful connections while fostering deep self-appreciation.',
    benefits: [
      'Softens your heart energy',
      'Attracts meaningful connections',
      'Encourages self-love',
      'Promotes emotional healing'
    ],
    rating: 4.8,
    reviews: 1247,
    isBestSeller: true,
    stockLeft: 9,
    sizes: ['S (5.5-6")', 'M (6-6.5")', 'L (6.5-7")', 'XL (7-7.5")']
  },
  {
    id: 'healing-bracelet',
    name: 'Calm Mind Bracelet',
    subtitle: 'Amethyst - For Inner Peace & Mental Clarity',
    price: 34.8,
    originalPrice: 44.8,
    image: 'https://m.media-amazon.com/images/I/61velroBGpL._AC_UY1000_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/61velroBGpL._AC_UY1000_.jpg',
      'https://static.platform.michaels.com/2c-prd/413640719275488.jpg?fit=inside|1080:1080'
    ],
    intention: 'healing',
    type: 'bracelet',
    description: 'Made with premium Amethyst crystals known for their calming properties. This bracelet helps quiet an overactive mind, reduce stress, and promote restful sleep while enhancing your spiritual awareness.',
    benefits: [
      'Calms emotional stress',
      'Supports inner clarity',
      'Brings peace to your mind',
      'Enhances spiritual awareness'
    ],
    rating: 4.7,
    reviews: 892,
    isBestSeller: true,
    stockLeft: 15,
    sizes: ['S (5.5-6")', 'M (6-6.5")', 'L (6.5-7")', 'XL (7-7.5")']
  },
  {
    id: 'protection-bracelet',
    name: 'Protection Energy Bracelet',
    subtitle: 'Black Obsidian - For Grounding & Energy Shield',
    price: 24.8,
    originalPrice: 32.8,
    image: 'https://i.etsystatic.com/58029258/r/il/6fd281/7339796519/il_fullxfull.7339796519_qqvm.jpg',
    images: [
      'https://i.etsystatic.com/58029258/r/il/6fd281/7339796519/il_fullxfull.7339796519_qqvm.jpg',
      'https://m.media-amazon.com/images/I/41Hxf1+-GRL._AC_UY1000_.jpg'
    ],
    intention: 'protection',
    type: 'bracelet',
    description: 'Black Obsidian is nature\'s protective stone, known for its ability to absorb negative energy and provide a strong grounding effect. Wear this bracelet to shield yourself from negativity and feel centered throughout your day.',
    benefits: [
      'Absorbs negative energy',
      'Provides strong grounding',
      'Creates protective shield',
      'Enhances inner strength'
    ],
    rating: 4.9,
    reviews: 756,
    isBestSeller: true,
    stockLeft: 22,
    sizes: ['S (5.5-6")', 'M (6-6.5")', 'L (6.5-7")', 'XL (7-7.5")']
  },
  {
    id: 'confidence-bracelet',
    name: 'Confidence & Strength Bracelet',
    subtitle: 'Tiger Eye - For Courage & Determination',
    price: 27.8,
    originalPrice: 36.8,
    image: 'https://vyaasg.com/cdn/shop/files/TigerEyeBraceletforCourage_Confidence-4.webp?v=1727916608&width=1445',
    images: [
      'https://vyaasg.com/cdn/shop/files/TigerEyeBraceletforCourage_Confidence-4.webp?v=1727916608&width=1445',
      'https://i.ebayimg.com/images/g/Z1IAAOSwSS1iUDZ3/s-l400.jpg'
    ],
    intention: 'abundance',
    type: 'bracelet',
    description: 'Tiger Eye is the stone of courage and confidence. Its warm golden-brown energy helps you overcome fear, make decisive choices, and manifest your goals with unwavering determination.',
    benefits: [
      'Builds inner strength',
      'Enhances focus',
      'Helps decision-making',
      'Boosts confidence'
    ],
    rating: 4.8,
    reviews: 634,
    stockLeft: 18,
    sizes: ['S (5.5-6")', 'M (6-6.5")', 'L (6.5-7")', 'XL (7-7.5")']
  },
  {
    id: 'abundance-bracelet',
    name: 'Abundance Bracelet',
    subtitle: 'Citrine - For Wealth & Positive Energy',
    price: 32.8,
    originalPrice: 42.8,
    image: 'https://shopspiritualandpaid.com/cdn/shop/files/CitrineCrystalBracelet_HappinessandAbundance.jpg?v=1688749563&width=1445',
    images: [
      'https://shopspiritualandpaid.com/cdn/shop/files/CitrineCrystalBracelet_HappinessandAbundance.jpg?v=1688749563&width=1445',
      'https://i.etsystatic.com/22026063/r/il/768c13/6765840141/il_570xN.6765840141_dg14.jpg'
    ],
    intention: 'abundance',
    type: 'bracelet',
    description: 'Known as the "Merchant\'s Stone," Citrine attracts abundance and prosperity. This bracelet radiates warm, positive energy that helps manifest wealth, success, and new opportunities into your life.',
    benefits: [
      'Attracts opportunities',
      'Boosts confidence',
      'Supports financial mindset',
      'Manifests prosperity'
    ],
    rating: 4.9,
    reviews: 912,
    isBestSeller: true,
    isLimited: true,
    stockLeft: 12,
    sizes: ['S (5.5-6")', 'M (6-6.5")', 'L (6.5-7")', 'XL (7-7.5")']
  },
  {
    id: 'love-necklace',
    name: 'Love & Harmony Necklace',
    subtitle: 'Rose Quartz & Amethyst - Emotional Balance',
    price: 39.8,
    image: 'https://throwinstones.com/cdn/shop/files/AMETHYST-Rose-and-Clear-QUARTZ-Crystal-Necklace-Mala-Handmade-Jewelry-Beaded-Necklace-Healing-Crystals-and-Stones-E0538-2_1600x.jpg?v=1744324154',
    intention: 'love',
    type: 'necklace',
    description: 'A delicate necklace combining Rose Quartz and Amethyst for emotional harmony. Perfect for daily wear, this piece helps balance your heart and mind while keeping the energy of love and peace close to your heart.',
    benefits: [
      'Emotional harmony',
      'Heart-mind balance',
      'Daily energy support',
      'Gentle protection'
    ],
    rating: 4.7,
    reviews: 445,
    isNew: true,
    sizes: ['16"', '18"', '20"']
  },
  {
    id: 'healing-necklace',
    name: 'Calm Mind Necklace',
    subtitle: 'Amethyst Point - Spiritual Protection',
    price: 44.8,
    originalPrice: 54.8,
    image: 'https://rockmama.com/cdn/shop/products/JN1536-Rose-Quartz-Point-With-Amethyst-And-Moon-Pendant-1_1080x.jpg?v=1657228581',
    intention: 'healing',
    type: 'necklace',
    description: 'An elegant necklace featuring natural Amethyst points set in a delicate moon pendant. This piece serves as a powerful tool for meditation and spiritual protection throughout your day.',
    benefits: [
      'Spiritual protection',
      'Enhanced meditation',
      'Intuition boost',
      'Peaceful energy'
    ],
    rating: 4.8,
    reviews: 328,
    sizes: ['16"', '18"', '20"']
  },
  {
    id: 'love-set',
    name: 'Self-Love Set',
    subtitle: 'Rose Quartz + Amethyst - Complete Emotional Care',
    price: 54.8,
    originalPrice: 74.6,
    image: 'https://c8.alamy.com/comp/2FYR4TX/flat-lay-of-various-crystal-stones-set-on-black-background-gemstones-on-dark-background-colorful-healing-minerals-for-relaxation-and-meditation-2FYR4TX.jpg',
    intention: 'love',
    type: 'set',
    description: 'The ultimate self-care combination. This set includes both our Love Bracelet and Calm Mind Bracelet, designed to work together for comprehensive emotional support and healing.',
    benefits: [
      'Complete emotional support',
      'Heart healing + mind calm',
      'Perfect for self-care rituals',
      'Gift-ready packaging'
    ],
    rating: 4.9,
    reviews: 567,
    isBestSeller: true,
    isLimited: true,
    stockLeft: 8,
  },
  {
    id: 'abundance-set',
    name: 'Wealth Energy Set',
    subtitle: 'Citrine + Tiger Eye - Success Combination',
    price: 52.8,
    originalPrice: 70.6,
    image: 'https://shopspiritualandpaid.com/cdn/shop/files/CitrineCrystalBracelet_HappinessandAbundance.jpg?v=1688749563&width=1445',
    intention: 'abundance',
    type: 'set',
    description: 'Combine the power of Citrine and Tiger Eye for maximum abundance energy. This set is perfect for those ready to attract wealth, success, and new opportunities into their lives.',
    benefits: [
      'Maximum abundance attraction',
      'Confidence + prosperity',
      'Daily success rituals',
      'Powerful combination'
    ],
    rating: 4.8,
    reviews: 423,
    isLimited: true,
    stockLeft: 6,
  }
];

export const intentions = [
  {
    id: 'love',
    name: 'Love & Attraction',
    subtitle: 'For Love, Connection & Emotional Healing',
    description: 'You want deeper connection, love, or emotional warmth.',
    extendedDescription: 'This is for you if…',
    emotionalPrompts: [
      'You feel emotionally distant',
      'You want to attract meaningful love',
      "You're learning to love yourself again"
    ],
    usageScenarios: [
      'Wear it during your morning routine',
      'Keep it close when setting intentions',
      'Let it remind you of your worth'
    ],
    color: 'love',
    gradient: 'love-gradient',
    emoji: '💗',
    products: products.filter(p => p.intention === 'love')
  },
  {
    id: 'healing',
    name: 'Healing & Calm',
    subtitle: 'For Inner Peace, Clarity & Emotional Balance',
    description: 'You feel overwhelmed and need peace and clarity.',
    extendedDescription: 'This is for you if…',
    emotionalPrompts: [
      'You feel overwhelmed',
      'You struggle to quiet your mind',
      'You need emotional reset'
    ],
    usageScenarios: [
      'Wear it during stressful moments',
      'Keep it close during meditation',
      'Let it guide you back to center'
    ],
    color: 'healing',
    gradient: 'healing-gradient',
    emoji: '🌿',
    products: products.filter(p => p.intention === 'healing')
  },
  {
    id: 'protection',
    name: 'Protection & Grounding',
    subtitle: 'For Protection, Grounding & Stability',
    description: 'You want to protect your energy and feel grounded.',
    extendedDescription: 'This is for you if…',
    emotionalPrompts: [
      'You feel drained by others',
      'You need stronger boundaries',
      'You want to feel safe and grounded'
    ],
    usageScenarios: [
      'Wear it in challenging environments',
      'Keep it close when feeling vulnerable',
      'Let it be your energy shield'
    ],
    color: 'protection',
    gradient: 'protection-gradient',
    emoji: '🛡️',
    products: products.filter(p => p.intention === 'protection')
  },
  {
    id: 'abundance',
    name: 'Abundance & Wealth',
    subtitle: 'For Success, Confidence & Opportunity',
    description: "You're ready for growth, confidence, and new opportunities.",
    extendedDescription: 'This is for you if…',
    emotionalPrompts: [
      "You're ready for growth",
      'You want to attract opportunities',
      'You want to feel more confident'
    ],
    usageScenarios: [
      'Wear it to important meetings',
      'Keep it close when manifesting',
      'Let it remind you of your potential'
    ],
    color: 'abundance',
    gradient: 'abundance-gradient',
    emoji: '💰',
    products: products.filter(p => p.intention === 'abundance')
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Emily R.',
    location: 'Los Angeles, CA',
    product: 'Love & Attraction Bracelet',
    rating: 5,
    text: 'Felt a shift within days of wearing this. My energy feels lighter and I\'ve been attracting such beautiful people into my life.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: 2,
    name: 'Sarah M.',
    location: 'New York, NY',
    product: 'Abundance Bracelet',
    rating: 5,
    text: 'I wear my Citrine bracelet every day at work. Within a month, I got a promotion I didn\'t even apply for. Coincidence? I don\'t think so.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Olivia K.',
    location: 'Austin, TX',
    product: 'Calm Mind Bracelet',
    rating: 5,
    text: 'This helped me so much during a really stressful time. My anxiety has decreased significantly since I started wearing it.',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    id: 4,
    name: 'Emma L.',
    location: 'Chicago, IL',
    product: 'Protection Energy Bracelet',
    rating: 5,
    text: 'I\'ve always been sensitive to other people\'s energy. Since wearing my Obsidian bracelet, I feel so much more grounded and protected.',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 5,
    name: 'Jessica T.',
    location: 'Miami, FL',
    product: 'Confidence & Strength Bracelet',
    rating: 5,
    text: 'Tiger Eye has been my go-to for job interviews. I feel so much more confident and focused. Got the job every time!',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg'
  },
  {
    id: 6,
    name: 'Amanda C.',
    location: 'Seattle, WA',
    product: 'Self-Love Set',
    rating: 5,
    text: 'This set is perfect for my morning self-care rituals. The combination of Rose Quartz and Amethyst has transformed my routine.',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
];

export const faqs = [
  {
    category: 'Products',
    questions: [
      {
        q: 'How do I choose the right crystal?',
        a: 'Each crystal carries different energy. If you\'re seeking love, choose Rose Quartz. For calm and clarity, Amethyst is ideal. Black Obsidian offers protection, while Citrine attracts abundance. Trust your intuition - the crystal you\'re drawn to is often the one you need most.'
      },
      {
        q: 'Are your crystals real?',
        a: 'Yes, all our crystals are 100% genuine and natural. We source directly from trusted suppliers who share our commitment to quality. Each stone is hand-selected and ethically sourced.'
      },
      {
        q: 'How do I care for my crystals?',
        a: 'Clean your crystals monthly under running water and set them in moonlight overnight to recharge. Avoid harsh chemicals and prolonged sunlight exposure for colored stones.'
      },
      {
        q: 'Can I wear multiple crystals at once?',
        a: 'Absolutely! Many people wear multiple bracelets or layer necklaces. Crystals can complement each other\'s energies. Start with one and trust your intuition as you grow more comfortable.'
      }
    ]
  },
  {
    category: 'Shipping',
    questions: [
      {
        q: 'How long is shipping?',
        a: 'We offer worldwide shipping. Standard shipping takes 7-14 business days within the US and 14-21 business days internationally. Express shipping (3-5 days) is available at checkout.'
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes! We ship to over 50 countries including USA, UK, Germany, France, Spain, Austria, and more. Shipping costs and times vary by location.'
      }
    ]
  },
  {
    category: 'Returns',
    questions: [
      {
        q: 'Can I return my purchase?',
        a: 'Yes! We offer a 30-day money-back guarantee. If the crystal doesn\'t resonate with you, simply contact us and we\'ll process a full refund. No questions asked.'
      },
      {
        q: 'What if my bracelet breaks?',
        a: 'We offer a 6-month warranty on all bracelets. If your bracelet breaks due to normal wear, we\'ll repair or replace it free of charge.'
      }
    ]
  }
];
