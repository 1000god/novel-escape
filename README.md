# 📖 我的主角從書中跑出來怎麼辦？— 單機版 / PWA 手遊版

> 完全免費，不需要任何 API Key，離線也能玩！

---

## 📦 檔案說明

```
novel-escape-standalone/
├── index.html      ← 遊戲主體（單一檔案即可玩）
├── manifest.json   ← PWA 設定（讓手機可以「安裝」）
├── sw.js           ← Service Worker（離線快取）
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

---

## 🎮 三種玩法

### 方法一：直接用瀏覽器開啟（最簡單）
把 `index.html` 下載到電腦，用瀏覽器打開就能玩。
進度自動存在瀏覽器的 localStorage，重開不會消失。

### 方法二：放到 GitHub Pages（可分享連結）
1. 把整個資料夾推到 GitHub repo
2. 在 Settings → Pages 開啟（Branch: main, Folder: /root）
3. 得到網址，分享給朋友

### 方法三：安裝成手機 App（PWA）
部署到 GitHub Pages 之後：

**Android（Chrome）：**
1. 用 Chrome 打開遊戲網址
2. 點右上角 ⋮ 選單
3. 選「新增至主畫面」或「安裝應用程式」
4. 主畫面出現圖示，點開像 App 一樣全螢幕！

**iPhone（Safari）：**
1. 用 Safari 打開遊戲網址
2. 點底部的分享按鈕 □↑
3. 選「加入主畫面」
4. 主畫面出現圖示，點開像 App 一樣！

> 💡 必須是 HTTPS 網址才能安裝 PWA（GitHub Pages 自動是 HTTPS）

---

## ✨ 遊戲功能

| 功能 | 說明 |
|------|------|
| 💬 劇情對話樹 | 4 種主角類型，各 6 節點，每節點 3 個選項，影響數值 |
| 🤖 主角主動說話 | 依情緒狀態，每 1.5–3 分鐘主動發一句話 |
| 😊 情緒系統 | 6 種情緒（平靜/開心/生氣/難過/好奇/傲嬌） |
| 💾 自動存檔 | localStorage 每 25 秒存檔，重整不消失 |
| 📜 任務系統 | 6 主線 + 6 支線，完成可領取獎勵 |
| 💕 戀愛養成 | 6 階段好感，6 個好感事件，記憶日誌 |
| ✨ 異能開發 | 5 種異能可解鎖升級 |
| 🎭 5 種結局 | 達成條件自動解鎖並顯示結局故事 |
| 🏆 排行榜 | 脫離進度與 NPC 玩家排名 |
| 📋 生活事件 | 瓦斯斷、網路欠費、房東催租等 11 種事件 |
| 🛒 商店 | 8 種商品解決日常困境 |

---

## 📱 手遊化進階方案

如果想做成真正的原生 App 上架 App Store / Google Play：

### 免費方案：Capacitor（推薦）
```bash
npm install @capacitor/core @capacitor/cli
npx cap init
npx cap add android
npx cap add ios
npx cap copy
npx cap open android   # 用 Android Studio 打包 APK
npx cap open ios       # 用 Xcode 打包 IPA（需要 Mac + 開發者帳號）
```
費用：Android 上架 Google Play 一次性 $25 美元；iOS 上架 App Store 每年 $99 美元

### 更簡單：直接分享 PWA 連結
不需上架，直接把 GitHub Pages 網址傳給朋友，安裝到主畫面體驗幾乎和原生 App 一樣！完全免費。

---

## 🔧 常見問題

**Q：存檔消失了？**
A：換了瀏覽器、使用無痕模式、或清除瀏覽器資料都會導致存檔消失。建議固定用同一個瀏覽器玩。

**Q：手機上安裝不了？**
A：必須透過 HTTPS 的網址（如 GitHub Pages）才能安裝 PWA，直接開本地 HTML 檔案無法安裝。

**Q：想加入 AI 對話功能？**
A：需要 Anthropic API Key + Vercel 後端。請參考完整版（novel-escape-v2.zip）的 README。

---

Made with 💜 by Claude · 完全免費 · 無廣告 · 開源
