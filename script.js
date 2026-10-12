
"use strict";

/*
  NEXORA PS — واجهة الموقع الأمامية

  لإضافة منشور:
  1. انسخ أحد العناصر داخل مصفوفة ARTICLES.
  2. غيّر id واجعله فريدًا.
  3. عدّل العنوان والقسم والوصف والمحتوى والتاريخ.
  4. احفظ الملف ثم ارفع التعديلات إلى GitHub.

  الحسابات والتعليقات والمفضلة هنا تجريبية ومحلية.
  لا تستخدم هذا الملف وحده لإدارة حسابات حقيقية.
*/

const ARTICLES = [
  {
    id: "ps4-getting-started",
    title: "دليل المبتدئين لإعداد جهاز PS4",
    category: "شروحات PS4",
    icon: "🎮",
    tone: "purple",
    date: "2026-10-10",
    excerpt: "دليل مبسط للتعرف على إعدادات الجهاز الأساسية، وتنظيم الحسابات، وتجهيز تجربة استخدام مناسبة.",
    body: [
      { text: "مرحبًا بك في دليل NEXORA PS. يشرح هذا المقال الخطوات الأساسية للتعرف على الجهاز قبل الانتقال إلى الإعدادات المتقدمة." },
      { title: "1. تعرّف على إعدادات الجهاز", text: "ابدأ بإعدادات اللغة والشبكة والصوت والشاشة، وتأكد من أن إعدادات العرض متوافقة مع التلفاز الذي تستخدمه." },
      { title: "2. جهّز حسابك وبياناتك", text: "استخدم بيانات حسابك الصحيحة، واحرص على حماية معلومات تسجيل الدخول وعدم مشاركتها مع أي شخص." },
      { title: "3. قبل تطبيق أي شرح", text: "اقرأ الخطوات كاملة، وتحقق من توافقها مع إصدار النظام لديك. احتفظ بنسخة من بياناتك المهمة قبل إجراء تغييرات كبيرة." },
      { text: "هذا نص تجريبي يمكنك استبداله بشرحك الكامل وصورك وروابطك الخاصة قبل نشر الموقع." }
    ]
  },
  {
    id: "files-library",
    title: "مكتبة الملفات والأدوات التقنية",
    category: "ملفات وأدوات",
    icon: "📦",
    tone: "cyan",
    date: "2026-10-08",
    excerpt: "طريقة تنظيم مكتبة الملفات وروابطها بحسب النوع والإصدار والحجم، حتى يجد الزائر ما يبحث عنه بسرعة.",
    body: [
      { text: "تساعدك مكتبة منظمة على جمع الملفات والأدوات في مكان واحد بدلًا من توزيعها بين صفحات عديدة." },
      { title: "ما المعلومات التي ينبغي إضافتها؟", items: ["اسم الملف وإصداره.", "حجم الملف وصيغته.", "الأجهزة والأنظمة المتوافقة.", "تعليمات التثبيت والاستخدام.", "مصدر الملف وتاريخ آخر تحديث."] },
      { title: "أين تستضيف الملفات الكبيرة؟", text: "يمكنك استخدام خدمة تخزين خارجية مناسبة، ثم وضع رابط الملف في المقال. لا تعتمد على GitHub Pages لاستضافة ملفات تنزيل ضخمة." },
      { text: "أضف في هذه الصفحة روابط ملفاتك الفعلية بعد اختبارها والتأكد من سلامتها ومصدرها." }
    ]
  },
  {
    id: "useful-apps",
    title: "تطبيقات مفيدة لعشاق الألعاب",
    category: "تطبيقات",
    icon: "⚡",
    tone: "pink",
    date: "2026-10-06",
    excerpt: "اكتشف كيفية تقديم التطبيقات بطريقة واضحة مع شرح الميزات والمتطلبات وروابط المصدر.",
    body: [
      { text: "هذا القسم مخصص للتطبيقات والبرامج المساعدة المتعلقة بالألعاب والتقنية." },
      { title: "كيف تعرض التطبيق؟", items: ["اسم التطبيق وإصداره.", "شرح مختصر للوظائف الأساسية.", "أنظمة التشغيل والأجهزة المتوافقة.", "صور توضيحية عند الحاجة.", "رابط المصدر الرسمي أو رابط تنزيل موثوق."] },
      { title: "قبل تثبيت أي تطبيق", text: "تأكد من مصدر التطبيق، ومتطلبات تشغيله، والصلاحيات التي يطلبها. تجنب الملفات مجهولة المصدر." },
      { text: "استبدل النص التجريبي بشرح تطبيق حقيقي وأضف رابط المصدر عند نشر المقال." }
    ]
  },
  {
    id: "gaming-updates",
    title: "كيف تتابع تحديثات عالم البلايستيشن؟",
    category: "أخبار وتقنية",
    icon: "◉",
    tone: "blue",
    date: "2026-10-04",
    excerpt: "نصائح لتقديم الأخبار التقنية والتحديثات مع ذكر المصادر وتاريخ صدور المعلومات.",
    body: [
      { text: "يتغير عالم الألعاب باستمرار؛ لذلك من المفيد أن يحتوي كل خبر على عنوان واضح وتاريخ ومصدر يمكن الرجوع إليه." },
      { title: "تنسيق الخبر الجيد", items: ["عنوان يشرح الخبر دون مبالغة.", "ملخص سريع لأهم التفاصيل.", "تاريخ النشر وتاريخ حدوث الخبر إن اختلفا.", "مصدر موثوق ورابط للمزيد من المعلومات."] },
      { title: "تأكد من المعلومات", text: "ميّز بين الأخبار المؤكدة والشائعات، ولا تقدّم أي توقع على أنه إعلان رسمي." }
    ]
  },
  {
    id: "download-guide",
    title: "كيف تختار رابط تحميل مناسبًا؟",
    category: "مقالات",
    icon: "☁️",
    tone: "green",
    date: "2026-10-02",
    excerpt: "معايير تساعدك على ترتيب روابط الملفات وكتابة معلومات واضحة قبل أن يبدأ الزائر التنزيل.",
    body: [
      { text: "صفحة التحميل الجيدة تقدم المعلومات الأساسية قبل الرابط، وتوضح للزائر ما الذي سيحمّله وكيف يستخدمه." },
      { title: "معلومات مهمة", items: ["حجم الملف المتوقع.", "الإصدار وتاريخ تحديثه.", "نوع الملف ومتطلباته.", "مصدر التنزيل.", "تنبيه حول التوافق أو المتطلبات الخاصة."] },
      { title: "ملفات كبيرة الحجم", text: "استخدم خدمة مخصصة للتخزين والتنزيل، واختبر الرابط من جهاز آخر قبل نشر المقال." }
    ]
  },
  {
    id: "organizing-guides",
    title: "كيف تكتب شرحًا تقنيًا احترافيًا؟",
    category: "مقالات",
    icon: "✍️",
    tone: "orange",
    date: "2026-09-29",
    excerpt: "قالب عملي لكتابة شروحات مرتبة تبدأ بالمقدمة والمتطلبات وتنتهي بالحلول والنصائح.",
    body: [
      { text: "الشرح الجيد يجيب عن سؤال واضح، ويقود القارئ من البداية إلى النهاية بخطوات مرتبة." },
      { title: "هيكل مقترح للمقال", items: ["مقدمة قصيرة توضّح الفائدة.", "المتطلبات قبل البدء.", "الخطوات بترتيب واضح.", "صور توضيحية إذا لزم الأمر.", "حلول للمشاكل الشائعة.", "مصادر وروابط إضافية."] },
      { text: "راجع مقالك على الهاتف قبل نشره حتى تتأكد من سهولة القراءة والتنقل بين الفقرات." }
    ]
  }
];

const CATEGORY_NAMES = [
  "الكل",
  "شروحات PS4",
  "ملفات وأدوات",
  "تطبيقات",
  "أخبار وتقنية",
  "مقالات"
];

const STORAGE_KEYS = {
  comments: "nexora_demo_comments_v1",
  bookmarks: "nexora_demo_bookmarks_v1",
  user: "nexora_demo_user_v1"
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

let activeCategory = "الكل";
let activeArticleId = null;
let accountMode = "register";
let toastTimer = null;

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    showToast("تعذر حفظ البيانات في هذا المتصفح.");
    return false;
  }
}

function getCurrentUser() {
  try {
    const value = sessionStorage.getItem(STORAGE_KEYS.user);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function setCurrentUser(user) {
  try {
    if (user) {
      sessionStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
    } else {
      sessionStorage.removeItem(STORAGE_KEYS.user);
    }
  } catch {
    showToast("تعذر حفظ جلسة العرض التجريبية.");
  }
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function formatDate(dateString) {
  if (!dateString) return "تاريخ غير محدد";

  const date = new Date(`${dateString}T12:00:00`);
  if (Number.isNaN(date.getTime())) return "تاريخ غير محدد";

  return new Intl.DateTimeFormat("ar-DZ", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2900);
}

function openDialog(dialog) {
  if (!dialog) return;

  if (typeof dialog.showModal === "function") {
    if (!dialog.open) dialog.showModal();
  } else {
    showToast("يرجى استخدام متصفح حديث لعرض هذه النافذة.");
  }
}

function closeDialog(id) {
  const dialog = document.getElementById(id);
  if (dialog?.open) dialog.close();
}

/* --------------------------------------------------
   المنشورات والفلترة والبحث
-------------------------------------------------- */

function getBookmarks() {
  const value = readStorage(STORAGE_KEYS.bookmarks, []);
  return Array.isArray(value) ? value : [];
}

function renderPostCard(post, index) {
  const isSaved = getBookmarks().includes(post.id);

  return `
    <article class="post-card" data-post-id="${escapeHTML(post.id)}">
      <div class="post-cover tone-${escapeHTML(post.tone)}">
        <span class="cover-index">NEXORA / ${(index + 1).toString().padStart(2, "0")}</span>
        <span class="cover-emoji" aria-hidden="true">${escapeHTML(post.icon)}</span>
        <span class="cover-badge">${escapeHTML(post.category)}</span>
      </div>

      <div class="post-content">
        <div class="post-topline">
          <span class="post-category">${escapeHTML(post.category)}</span>
          <button
            class="bookmark-button ${isSaved ? "saved" : ""}"
            data-action="bookmark"
            data-id="${escapeHTML(post.id)}"
            aria-label="${isSaved ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}"
            aria-pressed="${isSaved}"
            title="${isSaved ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}"
            type="button"
          >${isSaved ? "♥" : "♡"}</button>
        </div>

        <h3 class="post-title">${escapeHTML(post.title)}</h3>
        <p class="post-excerpt">${escapeHTML(post.excerpt)}</p>

        <div class="post-meta">
          <span class="post-meta-date">${escapeHTML(formatDate(post.date))}</span>
          <button class="read-more" data-action="read" data-id="${escapeHTML(post.id)}" type="button">
            اقرأ المزيد <span>←</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function getFilteredPosts() {
  const query = $("#postSearch").value.trim().toLocaleLowerCase("ar");

  return ARTICLES.filter(post => {
    const matchesCategory =
      activeCategory === "الكل" || post.category === activeCategory;

    const searchable = [
      post.title,
      post.category,
      post.excerpt,
      ...(post.body || []).map(block => block.title || block.text || "")
    ].join(" ").toLocaleLowerCase("ar");

    return matchesCategory && (!query || searchable.includes(query));
  });
}

function renderPosts() {
  const grid = $("#postsGrid");
  const empty = $("#emptyState");
  const resultsLabel = $("#resultsLabel");

  if (!grid || !empty) return;

  const filtered = getFilteredPosts();

  grid.innerHTML = filtered.map((post) => {
    return renderPostCard(post, ARTICLES.findIndex(item => item.id === post.id));
  }).join("");

  empty.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;

  resultsLabel.textContent = `عدد النتائج: ${filtered.length}`;

  updateActiveFilters();
}

function setCategory(category) {
  activeCategory = CATEGORY_NAMES.includes(category) ? category : "الكل";
  renderPosts();

  if ($("#posts")) {
    $("#posts").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function updateActiveFilters() {
  $$(".filter-button").forEach(button => {
    const active = button.dataset.filter === activeCategory;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function resetSearch() {
  $("#postSearch").value = "";
  $("#headerSearchInput").value = "";
  activeCategory = "الكل";
  renderPosts();
}

/* --------------------------------------------------
   المفضلة
-------------------------------------------------- */

function toggleBookmark(articleId) {
  const article = ARTICLES.find(item => item.id === articleId);
  if (!article) return;

  let bookmarks = getBookmarks();

  if (bookmarks.includes(articleId)) {
    bookmarks = bookmarks.filter(id => id !== articleId);
    showToast("أزيل المنشور من المفضلة.");
  } else {
    bookmarks.push(articleId);
    showToast("تمت إضافة المنشور إلى المفضلة.");
  }

  writeStorage(STORAGE_KEYS.bookmarks, bookmarks);
  renderPosts();
}

/* --------------------------------------------------
   تفاصيل المقال
-------------------------------------------------- */

function renderArticleBody(blocks) {
  if (!Array.isArray(blocks)) return "";

  return blocks.map(block => {
    if (block.title) {
      return `<h3>${escapeHTML(block.title)}</h3>`;
    }

    if (Array.isArray(block.items)) {
      return `<ul>${block.items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
    }

    if (block.text) {
      return `<p>${escapeHTML(block.text)}</p>`;
    }

    return "";
  }).join("");
}

function openArticle(articleId) {
  const article = ARTICLES.find(item => item.id === articleId);
  if (!article) {
    showToast("لم نعثر على المنشور.");
    return;
  }

  activeArticleId = article.id;

  $("#articleDetails").innerHTML = `
    <div class="article-cover-large post-cover tone-${escapeHTML(article.tone)}">
      <span class="cover-index">NEXORA PS / ARTICLE</span>
      <span class="cover-emoji" aria-hidden="true">${escapeHTML(article.icon)}</span>
      <span class="cover-badge">${escapeHTML(article.category)}</span>
    </div>

    <span class="post-category">${escapeHTML(article.category)}</span>
    <h2 class="article-detail-title">${escapeHTML(article.title)}</h2>

    <div class="article-detail-meta">
      <span>✦ NEXORA PS</span>
      <span>▦ ${escapeHTML(formatDate(article.date))}</span>
    </div>

    <div class="article-detail-body">
      ${renderArticleBody(article.body)}
    </div>
  `;

  renderComments();
  openDialog($("#articleDialog"));
}

/* --------------------------------------------------
   التعليقات — تخزين محلي تجريبي فقط
-------------------------------------------------- */

function getAllComments() {
  const value = readStorage(STORAGE_KEYS.comments, {});
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

function renderComments() {
  const list = $("#commentsList");
  const count = $("#commentsCount");
  const hint = $("#commentHint");

  if (!list || !activeArticleId) return;

  const allComments = getAllComments();
  const comments = Array.isArray(allComments[activeArticleId])
    ? allComments[activeArticleId]
    : [];

  count.textContent = comments.length;

  if (!comments.length) {
    list.innerHTML = `
      <div class="no-comments">
        لا توجد تعليقات حتى الآن. كن أول من يشارك برأيه.
      </div>
    `;
  } else {
    list.innerHTML = comments.map(comment => `
      <article class="comment-item">
        <div class="comment-user">
          <span class="comment-avatar">${escapeHTML((comment.name || "ع").slice(0, 1))}</span>
          <span>
            <span class="comment-name">${escapeHTML(comment.name || "عضو")}</span>
            <span class="comment-date">${escapeHTML(comment.date || "")}</span>
          </span>
        </div>
        <p class="comment-text">${escapeHTML(comment.text)}</p>
      </article>
    `).join("");
  }

  const user = getCurrentUser();

  hint.textContent = user
    ? `أنت مسجل في وضع العرض باسم ${user.name}.`
    : "سجّل الدخول للمشاركة في النقاش.";

  $("#commentText").placeholder = user
    ? "اكتب تعليقًا محترمًا ومفيدًا..."
    : "سجّل الدخول أولًا للمشاركة في التعليقات.";

  $("#commentText").disabled = !user;
  $("#commentForm").querySelector("button[type='submit']").disabled = !user;
}

$("#commentForm").addEventListener("submit", event => {
  event.preventDefault();

  const user = getCurrentUser();
  if (!user) {
    showToast("سجّل الدخول أولًا للمشاركة في التعليقات.");
    closeDialog("articleDialog");
    openAccount("login");
    return;
  }

  const input = $("#commentText");
  const text = input.value.trim();

  if (!activeArticleId || !text) {
    showToast("اكتب تعليقك أولًا.");
    return;
  }

  if (text.length > 1000) {
    showToast("التعليق طويل جدًا.");
    return;
  }

  const allComments = getAllComments();
  if (!Array.isArray(allComments[activeArticleId])) {
    allComments[activeArticleId] = [];
  }

  allComments[activeArticleId].push({
    name: user.name,
    text,
    date: new Intl.DateTimeFormat("ar-DZ", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date())
  });

  if (writeStorage(STORAGE_KEYS.comments, allComments)) {
    input.value = "";
    renderComments();
    showToast("أضيف تعليقك في نسخة العرض على هذا المتصفح.");
  }
});

/* --------------------------------------------------
   واجهة الحسابات التجريبية
-------------------------------------------------- */

function updateAccountUI() {
  const user = getCurrentUser();
  const userChip = $("#userChip");

  $("#loginOpen").hidden = !!user;
  $("#registerOpen").hidden = !!user;
  userChip.hidden = !user;

  if (user) {
    $("#userDisplayName").textContent = user.name;
    $("#userAvatar").textContent = (user.name || "N").trim().slice(0, 1).toUpperCase();
  }

  if ($("#articleDialog").open) renderComments();
}

function openAccount(mode = "register") {
  setAccountMode(mode);
  openDialog($("#accountDialog"));
}

function setAccountMode(mode) {
  accountMode = mode === "login" ? "login" : "register";

  $$(".account-tab").forEach(tab => {
    const selected = tab.dataset.mode === accountMode;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-pressed", String(selected));
  });

  const isRegister = accountMode === "register";
  const nameWrap = $("#nameFieldWrap");
  const nameInput = $("#accountName");
  const passwordInput = $("#accountPassword");

  nameWrap.hidden = !isRegister;
  nameInput.required = isRegister;
  nameInput.disabled = !isRegister;
  passwordInput.autocomplete = isRegister ? "new-password" : "current-password";

  $("#accountTitle").textContent = isRegister ? "أنشئ حسابك" : "مرحبًا بعودتك";
  $("#accountSubtitle").textContent = isRegister
    ? "انضم إلى المجتمع وتفاعل مع المنشورات."
    : "سجّل الدخول إلى واجهة المجتمع التجريبية.";

  $("#accountSubmit").textContent = isRegister
    ? "إنشاء الحساب ↗"
    : "تسجيل الدخول ↗";
}

$("#accountForm").addEventListener("submit", event => {
  event.preventDefault();

  const email = $("#accountEmail").value.trim();
  const password = $("#accountPassword").value;

  if (!email || password.length < 6) {
    showToast("أدخل بريدًا إلكترونيًا وكلمة مرور من 6 أحرف على الأقل.");
    return;
  }

  let name;

  if (accountMode === "register") {
    name = $("#accountName").value.trim();

    if (name.length < 2) {
      showToast("اكتب اسمًا يتكون من حرفين على الأقل.");
      return;
    }
  } else {
    name = email.split("@")[0].slice(0, 32) || "عضو";
  }

  /*
    تنبيه:
    هذا ليس تحققًا حقيقيًا من الحساب أو كلمة المرور.
    لا تُحفظ كلمة المرور، ولا يُنشأ حساب مركزي.
    هذه الخطوة تنشئ جلسة عرض مؤقتة في المتصفح فقط.
  */
  setCurrentUser({ name, email });

  closeDialog("accountDialog");
  updateAccountUI();

  showToast(
    accountMode === "register"
      ? "تم إنشاء جلسة تجريبية. اربط خدمة مصادقة لتفعيل حساب حقيقي."
      : "تم تفعيل جلسة العرض التجريبية."
  );

  $("#accountForm").reset();
  setAccountMode("register");
});

$("#logoutButton").addEventListener("click", () => {
  setCurrentUser(null);
  updateAccountUI();
  showToast("تم تسجيل الخروج من وضع العرض.");
});

/* --------------------------------------------------
   أحداث الواجهة
-------------------------------------------------- */

$("#postSearch").addEventListener("input", renderPosts);

$("#resetSearch").addEventListener("click", resetSearch);

$("#filterList").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  activeCategory = button.dataset.filter;
  renderPosts();
});

$(".categories-grid").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  setCategory(button.dataset.category);
});

$("#postsGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const id = button.dataset.id;

  if (action === "read") openArticle(id);
  if (action === "bookmark") toggleBookmark(id);
});

$("#loginOpen").addEventListener("click", () => openAccount("login"));
$("#registerOpen").addEventListener("click", () => openAccount("register"));
$("#communityJoin").addEventListener("click", () => openAccount("register"));

$$(".account-tab").forEach(tab => {
  tab.addEventListener("click", () => setAccountMode(tab.dataset.mode));
});

$$("[data-close]").forEach(button => {
  button.addEventListener("click", () => closeDialog(button.dataset.close));
});

/* إغلاق النافذة عند النقر على خلفيتها */
$$("dialog.modal").forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
});

/* البحث من الشريط العلوي */
$("#headerSearchToggle").addEventListener("click", () => {
  const searchPanel = $("#headerSearch");
  searchPanel.hidden = !searchPanel.hidden;

  if (!searchPanel.hidden) {
    $("#headerSearchInput").focus();
  }
});

$("#headerSearchInput").addEventListener("keydown", event => {
  if (event.key !== "Enter") return;

  $("#postSearch").value = $("#headerSearchInput").value;
  activeCategory = "الكل";
  renderPosts();

  $("#headerSearch").hidden = true;
  $("#posts").scrollIntoView({ behavior: "smooth", block: "start" });
});

/* القائمة في الهاتف */
const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

$$(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* روابط التواصل المؤقتة */
$$("[data-demo-link]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showToast(link.dataset.demoLink);
  });
});

/* تمييز القسم الحالي في القائمة */
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    $$(".nav-link").forEach(link => {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      link.classList.toggle("active", active);
    });
  }, {
    rootMargin: "-20% 0px -65% 0px",
    threshold: [0, .15, .35]
  });

  ["home", "categories", "posts", "about"].forEach(id => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });
}

/* --------------------------------------------------
   بدء الموقع
-------------------------------------------------- */

function initSite() {
  $("#currentYear").textContent = new Date().getFullYear();

  setAccountMode("register");
  renderPosts();
  updateAccountUI();
}

initSite();
