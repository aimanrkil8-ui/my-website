# نشر الموقع على الإنترنت وظهوره في Google

دليل عملي لرفع موقع **Aiman Al-Tahir Portfolio** مجاناً.

---

## الطريقة 1 — GitHub Pages (مُوصى بها)

مناسبة لأن عندك حساب GitHub: [aimanrkil8-ui](https://github.com/aimanrkil8-ui)

### الخطوة 1: إنشاء مستودع (Repository)

1. ادخل [github.com/new](https://github.com/new)
2. اسم المستودع: `aiman-portfolio` (أو أي اسم)
3. اختر **Public**
4. اضغط **Create repository**

### الخطوة 2: رفع الملفات

من مجلد المشروع على جهازك (PowerShell):

```powershell
cd "C:\Users\BBG\.cursor\projects\empty-window\aiman-portfolio"

git init
git add .
git commit -m "Publish portfolio website"
git branch -M main
git remote add origin https://github.com/aimanrkil8-ui/aiman-portfolio.git
git push -u origin main
```

> استبدل `aiman-portfolio` باسم المستودع إن كان مختلفاً.

### الخطوة 3: تفعيل GitHub Pages

1. في المستودع: **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main` — Folder: `/ (root)`
4. احفظ — انتظر 1–3 دقائق

### رابط موقعك سيكون:

```
https://aimanrkil8-ui.github.io/aiman-portfolio/
```

---

## الطريقة 2 — Netlify (سحب وإفلات)

1. [netlify.com](https://www.netlify.com) — سجّل مجاناً
2. **Add new site** → **Deploy manually**
3. اسحب مجلد `aiman-portfolio` كاملاً
4. يعطيك رابط مثل: `https://random-name.netlify.app`
5. من **Domain settings** يمكنك تغيير الاسم الفرعي

---

## الطريقة 3 — Vercel

1. [vercel.com](https://vercel.com) — سجّل بـ GitHub
2. **Import** المستودع
3. **Deploy** — بدون إعدادات إضافية (موقع HTML ثابت)

---

## بعد النشر — مهم جداً

### 1) تحديث رابط الموقع في الملفات

افتح `js/site-config.js` وغيّر:

```javascript
siteUrl: 'https://aimanrkil8-ui.github.io/aiman-portfolio',
```

إلى الرابط الحقيقي بعد النشر.

ثم حدّث `sitemap.xml` بنفس الرابط (استبدل كل `YOUR-SITE-URL`).

### 2) تأكد من الصور

يجب أن تكون في `assets/`:

- `mmm.jpg` (أو `.png`)
- `nnnn.jpg`
- `bbbb.jpg`

### 3) نموذج التواصل (Formspree)

يعمل على الإنترنت مباشرة — لا تحتاج تغيير إن كان الرابط:

`https://formspree.io/f/mdadvzpk`

---

## الظهور في Google

### أ) Google Search Console

1. [search.google.com/search-console](https://search.google.com/search-console)
2. **إضافة موقع** → أدخل رابط موقعك الكامل
3. اختر **HTML tag** للتحقق
4. انسخ الكود وضعه في `index.html` مكان:

```html
<meta name="google-site-verification" content="الكود_هنا" />
```

5. ارفع الملف مرة أخرى (git push)
6. اضغط **Verify** في Search Console

### ب) إرسال خريطة الموقع (Sitemap)

1. في Search Console: **Sitemaps**
2. أضف: `https://رابط-موقعك/sitemap.xml`
3. انتظر أياماً حتى يبدأ الفهرسة

### ج) تسريع الظهور

- شارك الرابط في LinkedIn، GitHub bio، WhatsApp status
- ضع الرابط في وصف GitHub Profile

---

## اسم نطاق خاص (اختياري)

مثل: `aimanaltahir.com`

- اشتري من: Namecheap، GoDaddy، أو Sudanese registrars
- اربطه بـ GitHub Pages أو Netlify من إعدادات **Custom domain**

---

## ملخص سريع

| الخطوة | ماذا تفعل |
|--------|-----------|
| 1 | ارفع الملفات على GitHub |
| 2 | فعّل GitHub Pages |
| 3 | حدّث `site-config.js` و `sitemap.xml` |
| 4 | سجّل في Google Search Console |
| 5 | أرسل sitemap.xml |

---

## مشاكل شائعة

| المشكلة | الحل |
|---------|------|
| الصفحة بيضاء | تأكد من وجود `index.html` في جذر المستودع |
| CSS لا يظهر | لا تغيّر أسماء مجلدات `css` و `js` |
| الصور لا تظهر | تحقق من `assets/mmm.jpg` ومسار الحروف |
| 404 على GitHub | اسم المستودع في الرابط يجب أن يطابق |

---

بالتوفيق — موقعك جاهز للنشر العالمي.
