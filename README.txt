نسخه امن UI

این نسخه فقط CSS جدا دارد و هیچ JavaScript یا منطق محاسباتی را تغییر نمی‌دهد.

آپلود در GitHub:
1) فقط index.html و tak-ui.css را آپلود/جایگزین کن.
2) فعلاً service-worker.js و manifest.json را حذف کن یا آپلود نکن.
3) در گوشی Chrome:
   Site settings > Delete browsing data / Clear storage
   یا از Incognito تست کن.
4) آدرس را با ?safe=1 باز کن:
   https://...github.io/.../?safe=1

علت مشکل قبلی کش/service-worker و تزریق اسکریپت بود.
