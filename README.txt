نسخه ریکاوری

این بسته برای پاک کردن کش خراب و service-worker قبلی است.

در GitHub همه فایل‌ها را پاک کن به جز .github/workflows اگر می‌خواهی بماند.
بعد این 4 فایل را آپلود کن:
index.html
tak-ui.css
service-worker.js
sw.js

بعد Commit کن و سایت را با این باز کن:
https://...github.io/.../?reset=3

اگر هنوز خراب بود:
Chrome > Settings > Site settings > All sites > github.io یا rezafalahat.github.io > Clear & reset
یا Incognito باز کن.

بعد از اینکه درست شد، می‌توانی service-worker.js و sw.js را حذف کنی.
