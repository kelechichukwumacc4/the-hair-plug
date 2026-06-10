# 💛 The Hair Plug — Website Guide

Everything you need to manage your website — prices, wigs, photos, countdowns, and going live.

---

## 📁 Folder Structure

```
the-hair-plug/
├── index.html          ← the website page (don't touch)
├── css/
│   └── style.css       ← all the styling (don't touch)
├── js/
│   ├── products.js     ← ⭐ THIS IS THE ONLY FILE YOU EVER NEED TO EDIT
│   └── app.js          ← website logic (don't touch)
└── images/
    └── wigs/           ← drop your wig photos here
```

> **Rule of thumb:** 99% of all updates happen in `js/products.js` only.

---

## ✏️ PART 1 — Weekly Updates

### Update the Exchange Rate

Open `js/products.js` and change the values at the very top:

```js
const RATE_CONFIG = {
  ngn_to_ghs: 0.021,              // ← change this every week (1 NGN = this many GHS)
  week_label: "Week of 9 June 2025",  // ← update the date label
  last_updated: "2025-06-09"      // ← update this date too
};
```

Every NGN and GHS price on the site recalculates automatically — you never touch product prices.

**How to find the rate:** Google "NGN to GHS" and use the current rate.
Example: if 1 NGN = 0.019 GHS, write `ngn_to_ghs: 0.019`

---

## 🎓 PART 2 — School Schedule & Countdown

This is the most important section for running your business across two countries.

### How the schedule system works

Everything is controlled by **3 dates** in `js/products.js`:

```js
const SCHEDULE = {
  away_start:     "2026-08-01",  // ← date you LEAVE Lagos (orders pause from midnight this day)
  school_arrival: "2026-08-05",  // ← date you ARRIVE in Ghana (Ghana customers see this countdown)
  away_end:       "2026-10-01",  // ← date you RETURN to Lagos (Lagos orders reopen)
  ...
};
```

### The 3 modes — what customers see automatically

| Mode | When | What happens on the site |
|------|------|--------------------------|
| **Lagos mode** | Before `away_start` | Countdown to when you leave · Orders fully open |
| **Away/School mode** | Between `away_start` and `away_end` | Closed banner shown · Lagos order buttons grayed out · Two countdowns shown (Ghana delivery + Lagos reopen) · Ghana customers can still pre-order |
| **Back mode** | After `away_end` | "Back in Lagos" message · Orders fully open |

**The site switches between these modes automatically** based on today's date. You only need to update the dates.

---

### Scenario: You're about to go back to school

1. Open `js/products.js`
2. Update the three dates:

```js
const SCHEDULE = {
  away_start:     "2026-08-01",  // ← the day you leave Lagos
  school_arrival: "2026-08-05",  // ← the day you arrive on campus in Ghana
  away_end:       "2026-10-01",  // ← the day you return to Lagos for holidays
  ...
};
```

3. Save the file. The site immediately shows the countdown to when you leave.
4. When that date arrives, it automatically switches to school mode — Lagos orders close, Ghana orders stay open.

---

### Scenario: Your plans changed (earlier or later return)

Just update `away_end` to the new date:

```js
away_end: "2026-11-15",  // ← changed from October to November
```

Save the file. The countdown and order availability update instantly.

---

### Scenario: You're back in Lagos earlier than expected

Change `away_end` to today's date or yesterday:

```js
away_end: "2026-09-20",  // ← set to a past date to re-open orders immediately
```

---

### Changing the text shown on countdowns and banners

Also inside the `SCHEDULE` object:

```js
label_countdown_to_school: "Back to school in",
label_away_message:        "Currently away at school — Lagos orders resume when I'm back",
label_away_sub:            "Ghana campus orders: paid & held, delivered on arrival. Lagos orders resume on my return.",
label_back_soon:           "Back in Lagos soon! Orders open in",
```

Edit the text inside the quotes to change what customers read.

---

## 👜 PART 3 — Managing Wigs

### Add a new wig (single price, one photo)

Copy this block into the `PRODUCTS` array in `js/products.js`:

```js
{
  id: 6,                                        // ← next number in sequence
  name: "Curly Lace Front",
  description: "20 inches · 13x4 lace · 150% density · natural black",
  price_ngn: 52000,                             // ← price in Naira only, GHS auto-calculated
  image: "images/wigs/curly-lace-front.jpg",   // ← single photo
  badge: "New",                                 // ← "New", "Bestseller", "Last 1", or "" for none
  available: true
},
```

### Add a new wig (single price, multiple photos)

Use `images` (plural) with an array of up to 5 photos instead of `image`:

```js
{
  id: 6,
  name: "Curly Lace Front",
  description: "20 inches · 13x4 lace · 150% density · natural black",
  price_ngn: 52000,
  images: [                                      // ← up to 5 photos, shown as a slideshow
    "images/wigs/curly-front-1.jpg",
    "images/wigs/curly-front-2.jpg",
    "images/wigs/curly-front-3.jpg",
  ],
  badge: "New",
  available: true
},
```

Customers swipe/click through the photos on the card. Arrows appear on hover (desktop) and are always visible on mobile.

---

### Add a new wig (multiple lengths, different prices)

Use the `lengths` array instead of `price_ngn`:

```js
{
  id: 7,
  name: "Bone Straight",
  description: "13x4 lace front · 150% density · natural black",
  lengths: [
    { label: "14 inches", price_ngn: 38000 },
    { label: "18 inches", price_ngn: 45000 },
    { label: "20 inches", price_ngn: 54000 },
    { label: "22 inches", price_ngn: 62000 },
  ],
  image: "images/wigs/bone-straight.jpg",
  badge: "",
  available: true
},
```

Customers will see clickable length buttons on the card, and the price updates when they pick a length.

---

### Mark a wig as sold out

Find the wig in `PRODUCTS` and change:
```js
available: false
```
The card shows "Sold Out" automatically. Change back to `true` when restocked.

---

### Remove a wig completely

Delete the entire `{ ... }` block for that wig from the `PRODUCTS` array.

---

### Badge options

| Value | What it shows |
|-------|--------------|
| `"New"` | Dark badge labelled NEW |
| `"Bestseller"` | Dark badge labelled BESTSELLER |
| `"Last 1"` | Dark badge labelled LAST 1 |
| `""` | No badge (leave empty) |

---

## 📸 PART 4 — Adding Wig Photos

1. Take or save your wig photo
2. Rename it simply — no spaces, lowercase: `body-wave.jpg`, `loose-curly.jpg`
3. Go to [squoosh.app](https://squoosh.app) (free) → compress the photo → download it
   - Aim for under 300KB per photo so the site loads fast on phones
4. Drop the compressed photo into the `images/wigs/` folder
5. In `products.js`, set the `image` field to match the filename exactly:
   ```js
   image: "images/wigs/body-wave.jpg",
   ```

If a photo hasn't been added yet, the card shows a placeholder automatically — it won't break.

---

## ❓ PART 5 — FAQ Section

The FAQ questions and answers live at the bottom of `js/products.js`:

```js
const FAQS = [
  {
    q: "Do you offer refunds?",
    a: "Yes — within 24 hours of delivery if the fault is ours."
  },
  // add more here...
];
```

To add a question, copy one block and paste it:
```js
{
  q: "Your question here?",
  a: "Your answer here."
},
```

To remove one, delete that `{ q: ..., a: ... }` block.

---

## 📦 PART 6 — Delivery Info

The "How to Order" section text is also in `js/products.js`:

```js
const DELIVERY_INFO = {
  ghana: {
    title: "Ghana (Campus Delivery 🇬🇭)",
    details: [
      "Items delivered personally when I arrive at school",
      // add or edit lines here
    ]
  },
  nigeria: {
    title: "Lagos, Nigeria (Bolt Delivery 🇳🇬)",
    details: [
      "Delivery via Bolt Send — Lagos only for now",
      // add or edit lines here
    ]
  }
};
```

Each item in `details` becomes one bullet point on the site.

---

## 📱 PART 7 — WhatsApp Number

Your number is in `js/app.js` at the very top:

```js
const WHATSAPP_NUMBER = "234XXXXXXXXX";
```

- Include your country code (234 for Nigeria, 233 for Ghana)
- No `+` sign, no spaces
- Example: +234 801 234 5678 → `2348012345678`

---

## 🚀 PART 8 — Going Live (Free with GitHub Pages)

This gives you a permanent shareable link:
`https://YOURUSERNAME.github.io/the-hair-plug`

Anyone can open it on their phone or laptop.

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a repository
- Click the **+** button (top right) → **New repository**
- Name it exactly: `the-hair-plug`
- Set it to **Public**
- Do NOT tick "Add a README file"
- Click **Create repository**

### Step 3 — Upload your files from VS Code

Open the Terminal in VS Code (`Ctrl + backtick`) and run these one at a time:

```bash
git init
git add .
git commit -m "launch The Hair Plug website"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/the-hair-plug.git
git push -u origin main
```

Replace `YOURUSERNAME` with your actual GitHub username.

> First time using Git? VS Code may ask you to log in to GitHub — follow the prompts.

### Step 4 — Turn on GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Branch" select `main` → click **Save**
5. Wait about 2 minutes

Your site is now live at `https://YOURUSERNAME.github.io/the-hair-plug` ✅

---

## 🔄 PART 9 — Pushing Updates After Launch

Every time you change something (new price, new wig, new photos, new schedule dates):

```bash
git add .
git commit -m "describe what you changed"
git push
```

Your live site updates within about 1 minute.

Examples of commit messages:
```bash
git commit -m "updated exchange rate"
git commit -m "added new body wave wig"
git commit -m "updated school departure date"
git commit -m "marked kinky curly as sold out"
```

---

## 💡 PART 10 — Tips & Answers

**Do I need to wait for photos and real prices before going live?**
No — go live now. Placeholder cards show where photos will go. Customers can't order something that isn't ready. Add photos and update prices whenever you're ready and just push the changes.

**How do I preview changes before pushing live?**
Two options:
- Double-click `index.html` — opens directly in Chrome, works offline
- Install the **Live Server** VS Code extension (by Ritwick Dey) → right-click `index.html` → "Open with Live Server" — auto-refreshes every time you save

**Don't use the Run / Debug button in VS Code** — that's for Python/Node apps, not websites. It creates a `launch.json` file you don't need. If it appeared, delete the `.vscode` folder.

**The site looks broken locally but fine on GitHub Pages (or vice versa)**
Check that your file paths use lowercase and match exactly — `images/wigs/body-wave.jpg` not `Images/Wigs/Body-Wave.jpg`.

**Can I use a custom domain (like thehairplug.com)?**
Yes — buy a domain on [Namecheap](https://namecheap.com) or [GoDaddy](https://godaddy.com), then in GitHub → Settings → Pages → Custom domain, type your domain. Takes about 10 minutes to set up.

**How do customers pay?**
The order button opens WhatsApp with all order details pre-filled — you receive the message and send payment details (MoMo for Ghana, bank transfer for Nigeria) directly in the chat.

---

Made with 💛 for The Hair Plug
