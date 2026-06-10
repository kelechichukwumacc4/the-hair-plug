// ============================================================
//  THE HAIR PLUG — Product Data
//  Edit this file to add/remove/update wigs and prices
// ============================================================

// --- EXCHANGE RATE SETTINGS ---
// Update this every week with the rate you're using
const RATE_CONFIG = {
  ngn_to_ghs: 0.021,          // e.g. 1 NGN = 0.021 GHS
  week_label: "Week of 9 June 2025",
  last_updated: "2025-06-09"
};

const SCHEDULE ={
  away_start: "2026-08-01",  //date you leave lagos(orders pause from this day)
  school_arrival: "2026-08-05",  //date you arrive in school ghana
  away_end: "2026-10-01",  //date you return to lagos(orders open again)

  //Labels shown to the countdown banners
label_countdown_to_school: "Back to school in",
label_away_message: "Currently away at school - Lagod orders resume when im back",
label_away_sub: "Ghana campus orders: paid & held, delivered on arrival. Lagos orders resume on my return.",
label_back_soon: "Back in Lagos soon! Orders open in", 
};

// --- PRODUCTS ---
// To add a wig: copy one block, paste at the end of the array, edit details
// image: put the image file in the images/wigs/ folder and write the filename here
// price_ghs: price in Ghana Cedis (NGN price is auto-calculated from rate above)
// badge: optional label like "New", "Bestseller", "Last 1" — leave as "" to hide
// available: set to false to mark as sold out without deleting it

const PRODUCTS = [
  {
    id: 1,
    name: "Loose Deep Wave",
    description: "20 inches · HD lace frontal · 180% density · natural black",
    price_ngn: 45000,
    image: "images/wigs/loose-deep-wave.jpg",
    badge: "Bestseller",
    available: true
  },
  {
    id: 2,
    name: "Bone Straight Bob",
    description: "14 inches · 13x4 lace front · 150% density · natural black",
    lengths: [
      {label: "14 inches", price_ngn: 38000},
      {label: "18 inches", price_ngn: 45000},
      {label: "20 inches", price_ngn: 54000},
    ],
    image: "images/wigs/bone-straight-bob.jpg",
    badge: "New",
    available: true
  },
  {
    id: 3,
    name: "Body Wave Frontal Wig",
    description: "22 inches · 13x6 lace frontal · 200% density · can be coloured",
    price_ngn: 50000,
    image: "images/wigs/body-wave.jpg",
    badge: "",
    available: true
  },
  {
    id: 4,
    name: "Kinky Curly Unit",
    description: "18 inches · 4x4 closure · 150% density · natural black",
    price_ngn: 45000,
    image: "images/wigs/kinky-curly.jpg",
    badge: "Last 1",
    available: true
  },
  {
    id: 5,
    name: "Water Wave Long",
    description: "24 inches · 13x4 lace front · 180% density · natural black",
    price_ngn: 65000,
    image: "images/wigs/water-wave-long.jpg",
    badge: "",
    available: false   // sold out example
  }
];

// --- DELIVERY INFO ---
const DELIVERY_INFO = {
  ghana: {
    title: "Ghana (Campus Delivery 🇬🇭)",
    details: [
      "Items delivered personally when I arrive at school",
      "50% deposit required to validate and hold your order",
      "Remaining 50% balance must be paid before the wig is packed and brought",
      "Balance paid on collection",
      "Payment via MoMo — details sent on order confirmation"
    ]
  },
  nigeria: {
    title: "Lagos, Nigeria (Bolt Delivery 🇳🇬)",
    details: [
      "Delivery via Bolt Send — Lagos only for now",
      "Processing takes 2 business days after 50% payment",
      "50% deposit required to validate your order",
      "Remaining 50% balance must be paid before the wig is dispatched via Bolt",
      "Delivery fee quoted at checkout based on your location",
      "Payment via bank transfer — details sent on order confirmation"
    ]
  }
};

const FAQS = [
  {
    q:"Do you offer refunds?",
    a:"Yes, we do - but refund requests must be made within 24 hours of receiving your order, and only if the fault is on our end.<br>This includes situations where we sent the wrong wig or mixed up an order. We do not accept refunds for change-of-mind pirchases."
  },
  {
    q: "Can I get an exchange instead of a refund?",
    a: "Yes! If we sent the wrong item, we'll happily arrange an exchange. <br>Reach out via WhatsApp within 24 hours of delivery with photos of what you received."
  },
  {
    q: "How does the 50% deposit work?",
    a: "Paying 50% of the wig price confirms and holds your order.<br>The remaining 50% must be paid before your wig is packed and sent out - whether that's dispatched via Bolt (Lagos) or brought to school (Ghana)."
  },
  {
    q: "How long does processing take?",
    a: "All orders take 2 business days to process after full payment is received. You'll be notified once your order is on its way. "
  },
  {
    q: "Do you deliver outside Lagos?",
    a: "Not yet - Lagos delivery via Bolt Send only for now. We're working on expanding. Ghana customers receive their orders on-campus personally."
  },
  {
    q: "How do I pay?",
    a: "Ghana customers pay via MoMo. Nigerian customers pay via bank transfer. Payment details are sent to you once you place your order via WhatsApp."
  }

];
