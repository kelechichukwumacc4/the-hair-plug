// ============================================================
//  THE HAIR PLUG — App Logic
//  Features: cart, multi-image gallery, countdown, schedule
// ============================================================

const WHATSAPP_NUMBER = "2347042469406";

// ── Price helpers ─────────────────────────────────────────
function fmtNGN(ngn) {
  return "₦ " + Math.round(ngn).toLocaleString("en-NG", { minimumFractionDigits: 0 });
}
function fmtGHS(ngn) {
  const ghs = ngn * RATE_CONFIG.ngn_to_ghs;
  return "GH₵ " + ghs.toLocaleString("en-GH", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}
function depositNGN(ngn) { return fmtNGN(ngn * 0.5); }
function depositGHS(ngn) { return fmtGHS(ngn * 0.5); }
function getBasePrice(p) {
  return (p.lengths && p.lengths.length > 0) ? p.lengths[0].price_ngn : p.price_ngn;
}

// ── Schedule ──────────────────────────────────────────────
function getScheduleMode() {
  const now   = new Date();
  const start = new Date(SCHEDULE.away_start);
  const end   = new Date(SCHEDULE.away_end);
  if (now >= start && now < end) return "away";
  if (now < start)               return "lagos";
  return "back";
}
function isOrderingOpen() { return getScheduleMode() !== "away"; }

// ── Cart ──────────────────────────────────────────────────
// Each cart item: { id, name, price, lengthLabel, qty }
let cart = [];

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function addToCart(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p || !p.available) return;

  // Get selected length label + price from the card
  const activePill = document.querySelector(
    `#prices-${productId}`
  )?.closest(".card-body")?.querySelector(".length-pill.active");
  const price       = activePill ? parseFloat(activePill.dataset.price) : getBasePrice(p);
  const lengthLabel = activePill ? activePill.textContent.trim() : null;

  // Check if identical item already in cart
  const key      = productId + (lengthLabel || "");
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ key, id: productId, name: p.name, price, lengthLabel, qty: 1 });
  }

  updateCartBadge();
  showCartToast(p.name, lengthLabel);
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  updateCartBadge();
  renderCartItems();
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateCartBadge();
  renderCartItems();
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cart-badge");
  if (!badge) return;
  badge.textContent = total;
  badge.style.display = total > 0 ? "flex" : "none";
}

// ══════════════════════════════════════════════════════════
//  FAVOURITES
//  Persisted to localStorage so they survive page closes.
// ══════════════════════════════════════════════════════════
const FAV_KEY = "thp_favourites"; // localStorage key

// Load saved favourite IDs from localStorage
function loadFavourites() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
  catch { return []; }
}

// Save favourite IDs to localStorage
function saveFavourites(ids) {
  localStorage.setItem(FAV_KEY, JSON.stringify(ids));
}

function isFavourited(productId) {
  return loadFavourites().includes(productId);
}

function toggleFavourite(productId) {
  let favs = loadFavourites();
  if (favs.includes(productId)) {
    favs = favs.filter(id => id !== productId);
  } else {
    favs.push(productId);
  }
  saveFavourites(favs);

  // Update heart icon on the card (if visible)
  const heart = document.querySelector(`.fav-btn[data-id="${productId}"]`);
  if (heart) {
    const filled = favs.includes(productId);
    heart.classList.toggle("fav-active", filled);
    heart.setAttribute("aria-label", filled ? "Remove from favourites" : "Add to favourites");
    heart.innerHTML = filled ? "♥" : "♡";
  }

  updateFavBadge();

  // If the favourites panel is open, re-render it live
  const panel = document.getElementById("fav-panel");
  if (panel && panel.classList.contains("open")) renderFavPanel();
}

function updateFavBadge() {
  const favs  = loadFavourites();
  const badge = document.getElementById("fav-badge");
  if (!badge) return;
  badge.textContent = favs.length;
  badge.style.display = favs.length > 0 ? "flex" : "none";
}

// ── Favourites Panel ──────────────────────────────────────
function openFavPanel() {
  renderFavPanel();
  document.getElementById("fav-panel").classList.add("open");
  document.getElementById("fav-backdrop").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeFavPanel() {
  document.getElementById("fav-panel").classList.remove("open");
  document.getElementById("fav-backdrop").classList.remove("open");
  document.body.style.overflow = "";
}

function renderFavPanel() {
  const list    = document.getElementById("fav-list");
  const actions = document.getElementById("fav-actions");
  if (!list) return;

  const favIds  = loadFavourites();
  const ordersOpen = isOrderingOpen();

  if (favIds.length === 0) {
    list.innerHTML = `
      <div class="fav-empty">
        <span class="fav-empty-icon">♡</span>
        <p>No favourites yet!</p>
        <p class="fav-empty-sub">Tap the ♡ on any wig to save it here.</p>
      </div>`;
    if (actions) actions.style.display = "none";
    return;
  }

  // Match saved IDs to PRODUCTS (wig may be sold out — still show it)
  const favProducts = favIds
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean);

  list.innerHTML = favProducts.map(p => {
    const price    = getBasePrice(p);
    const thumb    = Array.isArray(p.images) ? p.images[0] : (p.image || "");
    const soldOut  = !p.available;
    const hasLen   = p.lengths && p.lengths.length > 0;

    const lengthSelect = hasLen ? `
      <select class="fav-length-select" id="fav-len-${p.id}"
        onchange="updateFavPrice(${p.id}, this.value)">
        ${p.lengths.map((l,i) => `<option value="${l.price_ngn}" ${i===0?"selected":""}>${l.label}</option>`).join("")}
      </select>` : "";

    const cartBtn = soldOut
      ? `<button class="fav-cart-btn" disabled>Sold Out</button>`
      : !ordersOpen
        ? `<button class="fav-cart-btn" disabled>Orders Closed</button>`
        : `<button class="fav-cart-btn" onclick="addToCartFromFav(${p.id})">Add to Cart 🛒</button>`;

    return `
      <div class="fav-item ${soldOut ? "fav-item-soldout" : ""}">
        <div class="fav-thumb-wrap">
          ${thumb
            ? `<img src="${thumb}" alt="${p.name}" class="fav-thumb" onerror="this.style.display='none'">`
            : `<div class="fav-thumb-placeholder">♡</div>`}
          ${soldOut ? `<span class="fav-sold-badge">Sold Out</span>` : ""}
        </div>
        <div class="fav-item-info">
          <p class="fav-item-name">${p.name}</p>
          <p class="fav-item-price" id="fav-price-${p.id}">${fmtNGN(price)} <span class="fav-ghs">/ ${fmtGHS(price)}</span></p>
          ${lengthSelect}
          ${cartBtn}
        </div>
        <button class="fav-remove-btn" onclick="toggleFavourite(${p.id})" aria-label="Remove from favourites">✕</button>
      </div>`;
  }).join("");

  // Show "Add All to Cart" only if at least one available item
  if (actions) {
    const anyAvailable = favProducts.some(p => p.available) && ordersOpen;
    actions.style.display = anyAvailable ? "block" : "none";
  }
}

function addToCartFromFav(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p || !p.available) return;

  // Check if there's a length dropdown in the fav panel
  const sel = document.getElementById(`fav-len-${productId}`);
  let price, lengthLabel;
  if (sel) {
    price       = parseFloat(sel.value);
    lengthLabel = sel.options[sel.selectedIndex].text;
  } else {
    price       = getBasePrice(p);
    lengthLabel = null;
  }

  const key      = productId + (lengthLabel || "");
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ key, id: productId, name: p.name, price, lengthLabel, qty: 1 });
  }

  updateCartBadge();
  showCartToast(p.name, lengthLabel);
}

function addAllFavsToCart() {
  const favIds     = loadFavourites();
  const ordersOpen = isOrderingOpen();
  let   added      = 0;

  favIds.forEach(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p || !p.available || !ordersOpen) return;

    const sel         = document.getElementById(`fav-len-${id}`);
    const price       = sel ? parseFloat(sel.value) : getBasePrice(p);
    const lengthLabel = sel ? sel.options[sel.selectedIndex].text : null;
    const key         = id + (lengthLabel || "");
    const existing    = cart.find(i => i.key === key);

    if (existing) { existing.qty++; }
    else { cart.push({ key, id, name: p.name, price, lengthLabel, qty: 1 }); }
    added++;
  });

  updateCartBadge();
  if (added > 0) {
    closeFavPanel();
    // Small delay so panel closes cleanly before cart opens
    setTimeout(() => openCart(), 150);
  }
}

function updateFavPrice(productId, newPriceNgn) {
  const price = parseFloat(newPriceNgn);
  const priceEl = document.getElementById(`fav-price-${productId}`);
  if (priceEl) {
    priceEl.innerHTML = `${fmtNGN(price)} <span class="fav-ghs">/ ${fmtGHS(price)}</span>`;
  }
}

function showCartToast(name, lengthLabel) {
  const toast = document.getElementById("cart-toast");
  if (!toast) return;
  toast.textContent = `✓ ${name}${lengthLabel ? " · " + lengthLabel : ""} added to cart`;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2500);
}

// ── Cart Modal ────────────────────────────────────────────
function openCart() {
  if (cart.length === 0) {
    alert("Your cart is empty — add some wigs first! 💛");
    return;
  }
  renderCartItems();
  document.getElementById("cart-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function renderCartItems() {
  const list = document.getElementById("cart-items");
  if (!list) return;

  list.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}${item.lengthLabel ? `<span class="cart-item-length"> · ${item.lengthLabel}</span>` : ""}</p>
        <p class="cart-item-price">${fmtNGN(item.price)} <span class="cart-ghs">/ ${fmtGHS(item.price)}</span></p>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty('${item.key}', -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.key}', 1)">+</button>
        <button class="remove-btn" onclick="removeFromCart('${item.key}')">✕</button>
      </div>
    </div>
  `).join("");

  const total = cartTotal();
  document.getElementById("cart-total-ngn").textContent = fmtNGN(total);
  document.getElementById("cart-total-ghs").textContent = fmtGHS(total);
  document.getElementById("cart-deposit-ngn").textContent = depositNGN(total);
  document.getElementById("cart-deposit-ghs").textContent = depositGHS(total);
}

function submitCartOrder() {
  const name     = document.getElementById("cart-name").value.trim();
  const location = document.getElementById("cart-location").value;
  const contact  = document.getElementById("cart-contact").value.trim();
  const notes    = document.getElementById("cart-notes").value.trim();

  if (!name || !location || !contact) {
    alert("Please fill in your name, location, and contact number.");
    return;
  }

  const isNG      = location === "nigeria";
  const total     = cartTotal();
  const totalStr  = isNG ? fmtNGN(total) : fmtGHS(total);
  const depStr    = isNG ? depositNGN(total) : depositGHS(total);
  const delivNote = isNG
    ? "Delivery via Bolt Send within Lagos. Delivery fee quoted after order.\nProcessing: 3 business days after deposit.\nRemaining 50% must be paid before dispatch."
    : "Items delivered personally on campus when I arrive in Ghana.\nRemaining 50% paid on collection.";

  const itemLines = cart.map((item, i) => {
    const itemPrice = isNG ? fmtNGN(item.price) : fmtGHS(item.price);
    return `${i + 1}. ${item.name}${item.lengthLabel ? " (" + item.lengthLabel + ")" : ""} × ${item.qty} — ${itemPrice} each`;
  }).join("\n");

  const msg = encodeURIComponent(
    `Hi! I'd like to order from The Hair Plug 💛\n\n` +
    `*My Order:*\n${itemLines}\n\n` +
    `*Order Total:* ${totalStr}\n` +
    `*50% Deposit:* ${depStr}\n` +
    `*Location:* ${isNG ? "Lagos, Nigeria 🇳🇬" : "Ghana (Campus) 🇬🇭"}\n` +
    `*Name:* ${name}\n` +
    `*Number:* ${contact}\n` +
    (notes ? `*Notes:* ${notes}\n` : "") +
    `\n${delivNote}\n` +
    ``
  );

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  // Try to open automatically
  const link = document.createElement("a");
  link.href = waLink;
  link.target = "_blank";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Always show a manual fallback overlay too, in case auto-open
  // is blocked (in-app browsers, some Android settings, etc.)
  showWhatsAppFallback(waLink);

  cart = [];
  updateCartBadge();
  closeCart();
}

// Manual fallback — a small confirmation overlay shown after every
// order attempt so the customer always has a guaranteed way to reach
// WhatsApp, even if the automatic redirect was silently blocked.
function showWhatsAppFallback(waLink) {
  const existing = document.getElementById("wa-fallback-overlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.id = "wa-fallback-overlay";
  overlay.className = "wa-fallback-overlay";
  overlay.innerHTML = `
    <div class="wa-fallback-box">
      <p class="wa-fallback-icon">💛</p>
      <h2>Order Ready!</h2>
      <p class="wa-fallback-text">WhatsApp should have opened in a new tab.</p>
      <p class="wa-fallback-text">If nothing happened, tap below:</p>
      <a href="${waLink}" target="_blank" rel="noopener" class="modal-submit wa-fallback-btn">
        Open WhatsApp →
      </a>
      <button class="wa-fallback-close" onclick="document.getElementById('wa-fallback-overlay').remove(); document.body.style.overflow='';">
        Close
      </button>
    </div>
  `;
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  overlay.addEventListener("click", function(e) {
    if (e.target === this) {
      this.remove();
      document.body.style.overflow = "";
    }
  });
}

// ── Animated Info Ticker ─────────────────────────────────
function renderTicker() {
  const el = document.getElementById("ticker-track");
  if (!el) return;
  // Items to scroll — duplicated for seamless loop
  const items = [
    `<span class="highlight">1 NGN = ${RATE_CONFIG.ngn_to_ghs} GHS</span>`,
    `Rate updated: <span class="highlight">${RATE_CONFIG.week_label}</span>`,
    `Processing: <span class="highlight">3 business days</span> after deposit`,
    `50% deposit confirms your order`,
    `Remaining 50% paid before dispatch`,
    `Lagos delivery via <span class="highlight">Bolt Send</span>`,
    `Ghana orders delivered personally on campus`,
  ];
  const html = items.map(text =>
    `<span class="ticker-item"><span class="ticker-dot"></span>${text}</span>`
  ).join("");
  // Duplicate for seamless infinite scroll
  el.innerHTML = html + html;
}

// ── Schedule Banner ───────────────────────────────────────
function renderScheduleBanner() {
  const placeholder = document.getElementById("schedule-banner");
  if (!placeholder) return;
  const mode          = getScheduleMode();
  const away_start    = new Date(SCHEDULE.away_start);
  const school_arrive = new Date(SCHEDULE.school_arrival);
  const away_end      = new Date(SCHEDULE.away_end);

  if (mode === "lagos") {
    placeholder.innerHTML = `
      <div class="schedule-banner countdown-banner">
        <p class="sched-label">${SCHEDULE.label_countdown_to_school}</p>
        <div class="cd-units" id="cd-units"></div>
      </div>`;
    startCountdown("cd-units", away_start);
  } else if (mode === "away") {
    placeholder.innerHTML = `
      <div class="schedule-banner away-banner">
        <p class="sched-away-title">🎓 ${SCHEDULE.label_away_message}</p>
        <p class="sched-away-sub">${SCHEDULE.label_away_sub}</p>
        <div class="away-countdowns">
          <div class="away-cd-block">
            <p class="away-cd-label">🇬🇭 Ghana delivery</p>
            <div class="cd-units cd-units-sm" id="cd-ghana"></div>
          </div>
          <div class="away-cd-block">
            <p class="away-cd-label">🇳🇬 Lagos orders reopen</p>
            <div class="cd-units cd-units-sm" id="cd-lagos"></div>
          </div>
        </div>
      </div>`;
    startCountdown("cd-ghana", school_arrive);
    startCountdown("cd-lagos", away_end);
  } else {
    placeholder.innerHTML = `
      <div class="schedule-banner back-banner">
        <p class="sched-label">🎉 Back in Lagos — orders are open!</p>
      </div>`;
  }
}

function startCountdown(containerId, targetDate) {
  const el = document.getElementById(containerId);
  if (!el) return;
  function tick() {
    const diff = targetDate - new Date();
    if (diff <= 0) { el.innerHTML = `<span class="cd-done">Now!</span>`; return; }
    const days    = Math.floor(diff / 864e5);
    const hours   = Math.floor((diff % 864e5) / 36e5);
    const minutes = Math.floor((diff % 36e5) / 6e4);
    const seconds = Math.floor((diff % 6e4) / 1e3);
    const months  = Math.floor(days / 30);
    const weeks   = Math.floor((days % 30) / 7);
    const remDays = days % 7;
    let parts = [];
    if (months > 0) parts.push(`<div class="cd-unit"><span class="cd-num">${months}</span><span class="cd-lbl">${months===1?"Mo":"Mos"}</span></div><div class="cd-sep">:</div>`);
    if (weeks  > 0) parts.push(`<div class="cd-unit"><span class="cd-num">${weeks}</span><span class="cd-lbl">${weeks===1?"Wk":"Wks"}</span></div><div class="cd-sep">:</div>`);
    parts.push(`<div class="cd-unit"><span class="cd-num">${remDays}</span><span class="cd-lbl">${remDays===1?"Day":"Days"}</span></div>`);
    parts.push(`<div class="cd-sep">:</div><div class="cd-unit"><span class="cd-num">${String(hours).padStart(2,"0")}</span><span class="cd-lbl">Hrs</span></div>`);
    parts.push(`<div class="cd-sep">:</div><div class="cd-unit"><span class="cd-num">${String(minutes).padStart(2,"0")}</span><span class="cd-lbl">Min</span></div>`);
    parts.push(`<div class="cd-sep">:</div><div class="cd-unit"><span class="cd-num">${String(seconds).padStart(2,"0")}</span><span class="cd-lbl">Sec</span></div>`);
    el.innerHTML = parts.join("");
  }
  tick();
  setInterval(tick, 1000);
}

// ── Image Gallery ─────────────────────────────────────────
// Called when gallery arrow is clicked
function galleryNav(btn, dir) {
  const wrap   = btn.closest(".card-img-wrap");
  const imgs   = wrap.querySelectorAll(".gallery-img");
  const dots   = wrap.querySelectorAll(".gallery-dot");
  const active = wrap.querySelector(".gallery-img.active");
  let idx      = [...imgs].indexOf(active);
  idx          = (idx + dir + imgs.length) % imgs.length;
  imgs.forEach((img, i) => img.classList.toggle("active", i === idx));
  dots.forEach((d,   i) => d.classList.toggle("active",   i === idx));
}

function galleryDot(dot) {
  const wrap = dot.closest(".card-img-wrap");
  const imgs = wrap.querySelectorAll(".gallery-img");
  const dots = wrap.querySelectorAll(".gallery-dot");
  const idx  = [...dots].indexOf(dot);
  imgs.forEach((img, i) => img.classList.toggle("active", i === idx));
  dots.forEach((d,   i) => d.classList.toggle("active",   i === idx));
}

function buildImageHTML(p) {
  // Support both single image (string) and multiple images (array)
  const images = Array.isArray(p.images) ? p.images
               : p.image                 ? [p.image]
               : [];

  if (images.length === 0) {
    return `
      <div class="card-img-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M4 16l4-4 4 4 4-6 4 6"/>
          <rect x="2" y="3" width="20" height="18" rx="2"/>
        </svg>
        <span>image coming soon</span>
      </div>`;
  }

  if (images.length === 1) {
    return `<img class="gallery-img active" src="${images[0]}" alt="${p.name}" loading="lazy"
              onerror="this.style.display='none'">`;
  }

  // Multiple images — build slideshow
  const imgTags = images.map((src, i) =>
    `<img class="gallery-img ${i===0?"active":""}" src="${src}" alt="${p.name} photo ${i+1}" loading="lazy"
       onerror="this.style.display='none'">`
  ).join("");

  const dotTags = images.map((_, i) =>
    `<button class="gallery-dot ${i===0?"active":""}" onclick="galleryDot(this)" aria-label="Photo ${i+1}"></button>`
  ).join("");

  return `
    ${imgTags}
    <button class="gallery-arrow gallery-prev" onclick="galleryNav(this,-1)" aria-label="Previous photo">&#8249;</button>
    <button class="gallery-arrow gallery-next" onclick="galleryNav(this, 1)" aria-label="Next photo">&#8250;</button>
    <div class="gallery-dots">${dotTags}</div>`;
}

// ── Product Cards ─────────────────────────────────────────
function renderProducts(list) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  const ordersOpen = isOrderingOpen();

  if (!list.length) {
    grid.innerHTML = `<p style="opacity:.5;font-size:.9rem;grid-column:1/-1">No wigs right now — check back soon!</p>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const hasLengths = p.lengths && p.lengths.length > 0;
    const basePrice  = getBasePrice(p);

    const badgeHTML = p.available
      ? (p.badge ? `<span class="badge">${p.badge}</span>` : "")
      : `<span class="badge sold-out-badge">Sold Out</span>`;

    const lengthHTML = hasLengths ? `
      <div class="length-selector">
        <span class="length-label">Length</span>
        <div class="length-pills">
          ${p.lengths.map((l, i) => `
            <button class="length-pill ${i===0?"active":""}"
              data-price="${l.price_ngn}"
              onclick="selectLength(this,${p.id})"
            >${l.label}</button>`).join("")}
        </div>
      </div>` : "";

    const priceHTML = `
      <div class="card-prices" id="prices-${p.id}">
        <div class="price-pill">
          <span class="price-currency">Nigeria</span>
          <span class="price-amount">${fmtNGN(basePrice)}</span>
        </div>
        <div class="price-divider"></div>
        <div class="price-pill">
          <span class="price-currency">Ghana</span>
          <span class="price-amount">${fmtGHS(basePrice)}</span>
        </div>
      </div>
      <p class="deposit-note" id="deposit-${p.id}">↳ 50% deposit = ${depositNGN(basePrice)} / ${depositGHS(basePrice)}</p>`;

    let btnHTML;
    if (!p.available) {
      btnHTML = `<button class="order-btn" disabled style="opacity:.4;cursor:not-allowed">Sold Out</button>`;
    } else if (!ordersOpen) {
      btnHTML = `<button class="order-btn order-btn-closed" disabled>Currently Away — Orders Closed</button>`;
    } else {
      btnHTML = `<button class="order-btn" onclick="addToCart(${p.id})">Add to Cart 🛒</button>`;
    }

    const favoured = isFavourited(p.id);

    return `
    <div class="product-card ${p.available?"":"sold-out"}">
      <div class="card-img-wrap">
        ${buildImageHTML(p)}
        ${badgeHTML}
        <button class="fav-btn ${favoured ? "fav-active" : ""}"
          data-id="${p.id}"
          onclick="toggleFavourite(${p.id})"
          aria-label="${favoured ? "Remove from favourites" : "Add to favourites"}"
        >${favoured ? "♥" : "♡"}</button>
      </div>
      <div class="card-body">
        <p class="card-name">${p.name}</p>
        <p class="card-desc">${p.description}</p>
        ${lengthHTML}
        ${priceHTML}
        ${btnHTML}
      </div>
    </div>`;
  }).join("");
}

function selectLength(btn, productId) {
  btn.closest(".length-pills").querySelectorAll(".length-pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  const price = parseFloat(btn.dataset.price);
  document.getElementById(`prices-${productId}`).innerHTML = `
    <div class="price-pill">
      <span class="price-currency">Nigeria</span>
      <span class="price-amount">${fmtNGN(price)}</span>
    </div>
    <div class="price-divider"></div>
    <div class="price-pill">
      <span class="price-currency">Ghana</span>
      <span class="price-amount">${fmtGHS(price)}</span>
    </div>`;
  document.getElementById(`deposit-${productId}`).textContent =
    `↳ 50% deposit = ${depositNGN(price)} / ${depositGHS(price)}`;
}

// ── Filters ───────────────────────────────────────────────
function setupFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      let list = PRODUCTS;
      if (f === "available") list = PRODUCTS.filter(p => p.available);
      if (f === "sold-out")  list = PRODUCTS.filter(p => !p.available);
      renderProducts(list);
    });
  });
}

// ── How to Order ──────────────────────────────────────────
function renderHowToOrder() {
  const ghCard = document.getElementById("how-ghana");
  const ngCard = document.getElementById("how-nigeria");
  if (!ghCard || !ngCard) return;
  ghCard.innerHTML = `
    <div class="how-card-flag">🇬🇭</div>
    <h3>${DELIVERY_INFO.ghana.title}</h3>
    <ul>${DELIVERY_INFO.ghana.details.map(d=>`<li>${d}</li>`).join("")}</ul>`;
  ngCard.innerHTML = `
    <div class="how-card-flag">🇳🇬</div>
    <h3>${DELIVERY_INFO.nigeria.title}</h3>
    <ul>${DELIVERY_INFO.nigeria.details.map(d=>`<li>${d}</li>`).join("")}</ul>`;
}

// ── FAQ ───────────────────────────────────────────────────
function renderFAQ() {
  const container = document.getElementById("faq-list");
  if (!container || typeof FAQS === "undefined") return;
  container.innerHTML = FAQS.map(faq => `
    <div class="faq-item">
      <button class="faq-q">
        <span>${faq.q}</span>
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-a"><p>${faq.a}</p></div>
    </div>`).join("");

  container.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const item   = btn.parentElement;
      const answer = item.querySelector(".faq-a");
      const icon   = btn.querySelector(".faq-icon");
      const isOpen = item.classList.contains("open");
      container.querySelectorAll(".faq-item").forEach(i => {
        i.classList.remove("open");
        i.querySelector(".faq-a").style.maxHeight = null;
        const svg = i.querySelector(".faq-icon");
        if (svg) svg.style.transform = "rotate(0deg)";
      });
      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      }
    });
  });
}

// ── Phone-only input ──────────────────────────────────────
function setupPhoneInputs() {
  ["order-contact", "cart-contact"].forEach(id => {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^\d+\s\-()]/g, "");
    });
    input.addEventListener("keypress", e => {
      if (!/[\d+\s\-()]/.test(e.key) &&
          !["Backspace","Delete","Tab","Enter","ArrowLeft","ArrowRight"].includes(e.key))
        e.preventDefault();
    });
  });
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderTicker();
  renderScheduleBanner();
  renderProducts(PRODUCTS);
  setupFilters();
  renderHowToOrder();
  renderFAQ();
  setupPhoneInputs();
  updateCartBadge();

  // Close cart overlay on backdrop click
  document.getElementById("cart-overlay").addEventListener("click", function(e) {
    if (e.target === this) closeCart();
  });

  // Favourites
  updateFavBadge();
  document.getElementById("fav-backdrop")?.addEventListener("click", closeFavPanel);
});
