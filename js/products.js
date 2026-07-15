// ============================================================
//  THE HAIR PLUG — Product Data
//  ⭐ This is the ONLY file you need to edit for updates
// ============================================================

// ─────────────────────────────────────────────────────────────
//  SECTION 1: EXCHANGE RATE
// ─────────────────────────────────────────────────────────────
const RATE_CONFIG = {
  ngn_to_ghs: 0.01163,
  week_label: "Week of 1 July 2026",
  last_updated: "2026-07-03"
};

// ─────────────────────────────────────────────────────────────
//  SECTION 2: SCHEDULE
// ─────────────────────────────────────────────────────────────
const SCHEDULE = {
  away_start:     "2026-09-17",
  school_arrival: "2026-09-18",
  away_end:       "2026-12-19",
  label_countdown_to_school: "Back to school in",
  label_away_message: "Currently away at school — Lagos orders resume when I'm back",
  label_away_sub: "Ghana campus orders: paid & held, delivered on arrival. Lagos orders resume on my return.",
  label_back_soon: "Back in Lagos soon! Orders open in",
};

// ─────────────────────────────────────────────────────────────
//  SECTION 3: PRODUCTS
//
//  category: "curly" | "straight"
//  date_added: "YYYY-MM-DD"  ← "New Arrival" badge shows for 14 days automatically
//  quality: "Blend" | "Human Hair" | leave blank if not applicable
// ─────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: "Quality Wig Ginger",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 60000,
    images: ["images/wigs/quality-wig-ginger.jpg","images/wigs/quality-wig-ginger-2.jpg"],
    badge: "",
    available: true
  },
  {
    id: 2,
    name: "Quality Student Bob",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "straight",
    date_added: "2026-06-01",
    price_ngn: 65000,
    images: ["images/wigs/quality-student-bob-1.jpeg","images/wigs/quality-student-bob.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 3,
    name: "Soft Flow Natural with HD illusion lace",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 70000,
    images: ["images/wigs/soft-flow-natural-1.jpeg","images/wigs/soft-flow-natural-2.jpeg","images/wigs/soft-flow-natural.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 4,
    name: "Brown Balayage Bussdown (Ship on Monday)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "straight",
    date_added: "2026-06-01",
    price_ngn: 65000,
    image: "images/wigs/brown-balayage-bussdown.jpeg",
    badge: "",
    available: true
  },
  {
    id: 5,
    name: "Dream Wig Black (Ship on Monday)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 60000,
    images: ["images/wigs/dream-wig-black-1.jpeg","images/wigs/dream-wig-black-2.jpeg","images/wigs/dream-wig-black.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 6,
    name: "Silky Straight Bussdown",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "straight",
    date_added: "2026-06-01",
    price_ngn: 65000,
    images: ["images/wigs/silky-straight-bussdown-1.jpeg","images/wigs/silky-straight-bussdown-2.jpeg","images/wigs/silky-straight-bussdown.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 7,
    name: "Silky Straight Bussdown Brown Highlights",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "straight",
    date_added: "2026-06-01",
    price_ngn: 65000,
    images: ["images/wigs/silly-straight-bussdown-brown-highlight-1.jpeg","images/wigs/silly-straight-bussdown-brown-highlight.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 8,
    name: "Lush Curls Pink With Illusion HD Lace",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 75000,
    images: ["images/wigs/lush-curls-pink-1.jpeg","images/wigs/lush-curls-pink.jpeg","images/wigs/lush-curls-pink-2.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 9,
    name: "Brown blonde girl (Ship on Tuesday)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 60000,
    images: ["images/wigs/brown-blonde-girl-1.jpeg","images/wigs/brown-blonde-girl.jpeg","images/wigs/brown-blonde-girl-2.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 10,
    name: "Soft Flow Blonde With Illusion HD Lace",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 70000,
    images: ["images/wigs/soft-flow-blonde-1.jpeg","images/wigs/soft-flow-blonde.jpeg","images/wigs/soft-flow-blonde-2.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 11,
    name: "Soft Flow Brown With Illusion HD Lace",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 70000,
    images: ["images/wigs/soft-flow-brown-highlights-1.jpeg","images/wigs/soft-flow-brown-highlights.jpeg","images/wigs/soft-flow-brown-highlights-2.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 12,
    name: "Bounce Curls Plus (5x5 closure)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 205000,
    images: ["images/wigs/bounce-curl-plus.jpg","images/wigs/bounce-curl-plus-1.jpg"],
    badge: "",
    available: true
  },
  {
    id: 13,
    name: "Sdd Body Wave Wig (5x5 closure)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-06-01",
    lengths: [
      { label: "30 inches", price_ngn: 200000 },
      { label: "32 inches", price_ngn: 220000 },
    ],
    image: "images/wigs/sdd-body-wave-wig.jpeg",
    badge: "",
    available: true
  },
  {
    id: 14,
    name: "Closure Fringe Bob Wig",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "straight",
    date_added: "2026-06-01",
    lengths: [
      { label: "8 inches", price_ngn: 80000 },
      { label: "10 inches", price_ngn: 85000 },
      { label: "12 inches", price_ngn: 95000 },
      { label: "14 inches", price_ngn: 100000 },
    ],
    images: ["images/wigs/fringe-bob-wig.jpeg","images/wigs/fringe-bob-wig-1.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 15,
    name: "Bounce Curls (5x5 closure)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 175000,
    image: "images/wigs/bounce-curl.jpg",
    badge: "",
    available: true
  },
  {
    id: 16,
    name: "Sinach Plus (5x5 Closure)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 145000,
    images: ["images/wigs/sinach-plus.jpeg","images/wigs/sinach-plus-1.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 17,
    name: "Vietnam SDD Bounce",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-06-01",
    lengths: [
      { label: "12 inches", price_ngn: 98600 },
      { label: "12 inches (5x5 Closure)", price_ngn: 115000 },
      { label: "14 inches", price_ngn: 113800 },
      { label: "14 inches (5x5 Closure)", price_ngn: 135000 },
      { label: "16 inches", price_ngn: 125700 },
      { label: "16 inches (5x5 Closure)", price_ngn: 150000 },
      { label: "18 inches", price_ngn: 135500 },
      { label: "20 inches", price_ngn: 151000 },
      { label: "20 inches (5x5 Closure)", price_ngn: 162000 },
      { label: "22 inches", price_ngn: 163500 },
      { label: "24 inches", price_ngn: 174500 },
    ],
    images: ["images/wigs/vietnam-sdd-bounce.jpeg","images/wigs/vietnam-sdd-bounce-1.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 18,
    name: "SDD Bounce Wig Full Frontal",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 198000,
    images: ["images/wigs/sdd-bounce-wig.jpeg","images/wigs/sdd-bounce-wig-1.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 19,
    name: "Fasy Wig",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "straight",
    date_added: "2026-06-01",
    lengths: [
      { label: "12 inches", price_ngn: 120000 },
      { label: "18 inches", price_ngn: 145000 },
      { label: "20 inches", price_ngn: 168000 },
    ],
    images: ["images/wigs/fasy-wig.jpeg","images/wigs/fasy-wig-1.jpeg","images/wigs/fasy-wig-2.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 20,
    name: "SDD Luxury Bone STW (Closure 6x5)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "straight",
    date_added: "2026-06-01",
    lengths: [
      { label: "10 inches", price_ngn: 165000 },
      { label: "12 inches", price_ngn: 185000 },
    ],
    images: ["images/wigs/sdd-luxury-1.jpeg","images/wigs/sdd-luxury.jpeg","images/wigs/sdd-luxury-2.jpeg","images/wigs/sdd-luxury-3.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 21,
    name: "Full Frontal Deep Wave",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-06-01",
    lengths: [
      { label: "28 inches", price_ngn: 175000 },
      { label: "30 inches", price_ngn: 195000 },
    ],
    images: ["images/wigs/full-frontal-1.jpeg","images/wigs/full-frontal.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 22,
    name: "Essy Wig (Closure 5x5)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 135000,
    images: ["images/wigs/essy-wig-1.jpeg","images/wigs/essy-wig.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 23,
    name: "Shully Bounce (Closure 5x5)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-06-01",
    lengths: [
      { label: "18 inches", price_ngn: 185000 },
    ],
    images: ["images/wigs/shully-bounce-1.jpeg","images/wigs/shully-bounce.jpeg","images/wigs/shully-bounce-2.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 24,
    name: "Peal Bounce (Closure 4x4)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 186000,
    images: ["images/wigs/Peal-bounce-dd-1.jpeg","images/wigs/Peal-bounce-dd.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 25,
    name: "Tasy Wig",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "straight",
    date_added: "2026-06-01",
    lengths: [
      { label: "10 inches", price_ngn: 120000 },
    ],
    images: ["images/wigs/tasy-wig-1.jpeg","images/wigs/tasy-wig.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 26,
    name: "Pixxy Wig (Closure 5x5)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-06-01",
    lengths: [
      { label: "16 inches", price_ngn: 165500 },
    ],
    images: ["images/wigs/Pixxy-wig-1.jpeg","images/wigs/Pixxy-wig.jpeg","images/wigs/Pixxy-wig-2.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 27,
    name: "SDD Silky Wig (Closure 5x5)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "straight",
    date_added: "2026-06-01",
    lengths: [
      { label: "24 inches", price_ngn: 288500 },
    ],
    images: ["images/wigs/sdd-silky-wig-1.jpeg","images/wigs/sdd-silky-wig.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 28,
    name: "Tacy Wig (Closure 4x4)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "straight",
    date_added: "2026-06-01",
    lengths: [
      { label: "18 inches", price_ngn: 130000 },
      { label: "20 inches", price_ngn: 144000 },
      { label: "22 inches", price_ngn: 167000 },
      { label: "24 inches", price_ngn: 196000 },
      { label: "26 inches", price_ngn: 230000 },
    ],
    images: ["images/wigs/tacy-wig-1.jpeg","images/wigs/tacy-wig.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 29,
    name: "Sinach Wig Wine (Closure 5x5)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-06-01",
    lengths: [
      { label: "12 inches", price_ngn: 145000 },
    ],
    images: ["images/wigs/sinach-wig-red-1.jpeg","images/wigs/sinach-wig-red.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 30,
    name: "Tacy Wig with Highlights (Closure 5x5)",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "straight",
    date_added: "2026-06-01",
    lengths: [
      { label: "20 inches", price_ngn: 165000 },
    ],
    images: ["images/wigs/tacy-wig-highlights-1.jpeg","images/wigs/tacy-wig-highlights.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 31,
    name: "Wig Flare",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-06-01",
    price_ngn: 55000,
    images: ["images/wigs/wig-flare-1.jpeg","images/wigs/wig-flare.jpeg","images/wigs/wig-flare-2.jpeg"],
    badge: "",
    available: true
  },
   {
    id: 32,
    name: "Dark Blonde Wig",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "curly",
    date_added: "2026-07-15",
    price_ngn: 75000,
    images: ["images/wigs/dark-wig.jpeg","images/wigs/dark-wig.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 33,
    name: "Brown Highlights",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "curly",
    date_added: "2026-07-15",
    price_ngn: 65000,
    images: ["images/wigs/brown-highlights.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 34,
    name: "Classy Wig with Brown Highlights",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "curly",
    date_added: "2026-07-15",
    price_ngn: 65000,
    images: ["images/wigs/classy-wig.jpeg",
       "images/wigs/classy-wig-1.jpeg", 
      "images/wigs/classy-wig-2.jpeg"],
    badge: "",
    available: true
  },
    {
    id: 35,
    name: "Classy Wig with Illusion HD",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "curly",
    date_added: "2026-07-15",
    price_ngn: 65000,
    images: ["images/wigs/classy-wig-hd.jpeg", 
      "images/wigs/classy-wig-hd-2.jpeg"],
    badge: "",
    available: true
  },
   {
    id: 36,
    name: "Brown Sugar",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    quality: "Blend",
    category: "curly",
    date_added: "2026-07-15",
    price_ngn: 55000,
    images: ["images/wigs/brown-sugar.jpeg", 
      "images/wigs/brown-sugar-1.jpeg", 
    "images/wigs/brown-sugar-2.jpeg"],
    badge: "",
    available: true
  },
  {
    id: 37,
    name: "Sinach Wig",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-07-15",
     lengths: [
      { label: "14 inches", price_ngn: 139000 },
      { label: "16 inches", price_ngn: 150700 },
      { label: "18 inches", price_ngn: 170100 },
      { label: "22 inches", price_ngn: 236800 },
    ],
    images: ["images/wigs/sinach-wig-black.jpeg", 
      "images/wigs/sinach-wig-black-1.jpeg", ],
    badge: "",
    available: true
  },
   {
    id: 38,
    name: "Bounce Wig",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-07-15",
    lengths: [
      { label: "22 inches", price_ngn: 175500 }],
    images: ["images/wigs/bounce-wig.jpeg", 
      "images/wigs/bounce-wig-1.jpeg", ],
    badge: "",
    available: true
  },
  {
    id: 39,
    name: "Pat Wig",
    description: "Please note that due to camera/phone/lighting, colour may appear slightly different. Hair length also appears longer on mannequins.",
    category: "curly",
    date_added: "2026-07-15",
    lengths: [
      { label: "16 inches", price_ngn: 220000 }],
    images: ["images/wigs/pat-wig.jpeg", 
      "images/wigs/pat-wig-1.jpeg", ],
    badge: "",
    available: true
  }
];

// ─────────────────────────────────────────────────────────────
//  SECTION 4: DELIVERY INFO
// ─────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────
//  SECTION 4: DELIVERY
// ─────────────────────────────────────────────────────────────

// Lagos delivery locations split into Mainland and Island
const LAGOS_LOCATIONS = {
  mainland: [
    { name: "Abule Egba",         price: 6000  },
    { name: "Agege",              price: 5500  },
    { name: "Aguda",              price: 4500  },
    { name: "Akoka",              price: 3500  },
    { name: "Alapere",            price: 4500  },
    { name: "Alaba",              price: 7500  },
    { name: "Amuwo-Odofin",       price: 7000  },
    { name: "Anthony Village",    price: 3000  },
    { name: "Apapa",              price: 6500  },
    { name: "Badagry",            price: 6000  },
    { name: "Bariga",             price: 3000  },
    { name: "Cement/Abule Taylor",price: 6000  },
    { name: "Dopemu",             price: 5000  },
    { name: "Ejigbo",             price: 5500  },
    { name: "Egbeda",             price: 6500  },
    { name: "Epe",                price: 18000 },
    { name: "Fadeyi",             price: 3500  },
    { name: "Festac",             price: 7000  },
    { name: "Gbagada",            price: 2500  },
    { name: "Gbagada Phase 1",    price: 3000  },
    { name: "Gbagada Phase 2",    price: 3000  },
    { name: "Idimu",              price: 6500  },
    { name: "Ijede",              price: 8000  },
    { name: "Igando",             price: 6000  },
    { name: "Ikorodu",            price: 6500  },
    { name: "Ikeja",              price: 4500  },
    { name: "Ilasamaja",          price: 6500  },
    { name: "Ipaja",              price: 7000  },
    { name: "Isolo",              price: 4500  },
    { name: "Isheri",             price: 5000  },
    { name: "Itire",              price: 4000  },
    { name: "Iyana Ipaja",        price: 4500  },
    { name: "Ketu",               price: 3500  },
    { name: "Lawanson",           price: 6000  },
    { name: "Magodo",             price: 5000  },
    { name: "Maryland",           price: 4000  },
    { name: "Mile 2",             price: 5000  },
    { name: "Mushin",             price: 6000  },
    { name: "Ogba",               price: 4500  },
    { name: "Ogudu",              price: 4000  },
    { name: "Ojota",              price: 3000  },
    { name: "Ojodu Berger",       price: 4000  },
    { name: "Ojo",                price: 8500  },
    { name: "Omole Phase 1",      price: 4500  },
    { name: "Omole Phase 2",      price: 3500  },
    { name: "Onipanu",            price: 2500  },
    { name: "Opebi",              price: 3500  },
    { name: "Oregun",             price: 4000  },
    { name: "Oshodi",             price: 4000  },
    { name: "Palmgrove",          price: 3500  },
    { name: "Satellite Town",     price: 6000  },
    { name: "Shomolu",            price: 3500  },
    { name: "Soluyi",             price: 2500  },
    { name: "Surulere",           price: 4500  },
    { name: "Yaba",               price: 3500  },
    { name: "Allen Avenue",       price: 5500  },
  ],
  island: [
    { name: "Abraham Adesanya",   price: 8500  },
    { name: "Ajah",               price: 8500  },
    { name: "Awoyaya",            price: 11500 },
    { name: "Chevron",            price: 7500  },
    { name: "Ibeju-Lekki",        price: 17000 },
    { name: "Igbo Efon",          price: 7500  },
    { name: "Ikate",              price: 6500  },
    { name: "Ikoyi",              price: 7000  },
    { name: "Ilasan",             price: 8000  },
    { name: "Lekki Phase 1",      price: 5500  },
    { name: "Lekki Phase 2",      price: 7000  },
    { name: "Ogombo",             price: 10000 },
    { name: "Oniru",              price: 5500  },
    { name: "Osapa London",       price: 7000  },
    { name: "Sangotedo",          price: 10000 },
    { name: "Victoria Island",    price: 5000  },
  ]
};

const DELIVERY_INFO = {
  ghana: {
    title: "Ghana Delivery 🇬🇭",
    details: [
      "Ghana orders are delivered when I return to school — see the countdown above",
      "On-campus delivery (VVU): FREE — I deliver to you personally on campus",
      "Off-campus delivery: via Yango — enter your city/area at checkout",
      "Deliveries happen 24–96 hours after I arrive in Ghana",
      "Full payment required upfront to confirm and source your wig",
      "Payment via MoMo — details sent via WhatsApp on order"
    ]
  },
  nigeria: {
    title: "Lagos Delivery 🇳🇬",
    details: [
      "Delivery within Lagos — 24 to 48 hours after dispatch",
      "Select your area at checkout to see your delivery fee",
      "Delivery fee is added to your order total automatically",
      "Full payment required upfront to confirm and source your wig",
      "Payment via bank transfer — details sent via WhatsApp on order"
    ]
  }
};

// ─────────────────────────────────────────────────────────────
//  SECTION 5: FAQ
// ─────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Do you offer refunds?",
    a: "Yes, we do — but refund requests must be made within 24 hours of receiving your order, and only if the fault is on our end. This includes situations where we sent the wrong wig or mixed up an order. We do not accept refunds for change-of-mind purchases."
  },
  {
    q: "Can I get an exchange instead of a refund?",
    a: "Yes! If we sent the wrong item, we'll happily arrange an exchange. Reach out via WhatsApp within 24 hours of delivery with photos of what you received."
  },
  {
    q: "Why is full payment required upfront?",
    a: "Because we source each wig specifically for your order, full payment is required to confirm and begin the sourcing process. This ensures your wig is secured and processed as quickly as possible. Payment details are sent via WhatsApp once you place your order."
  },
  {
    q: "How long does processing take?",
    a: "All orders take 5 business days to process after full payment is received. You'll be notified once your order is on its way."
  },
  {
    q: "Do you deliver outside Lagos?",
    a: "Yes! If you're outside Lagos, select 'Outside Lagos' at checkout and enter your state. The shipping fee will be confirmed with you via WhatsApp before your order is dispatched."
  },
  {
    q: "How do I pay?",
    a: "Ghana customers pay via MoMo. Nigerian customers pay via bank transfer. Payment details are sent to you once you place your order via WhatsApp."
  }
];
