## 📋 inline 訂候位系統首頁 - 企業級官網還原與動態互動

本專案為高完成度的企業級官方網站首頁切版與互動實作。挑戰大型商業網頁的多層次架構，Z-pattern 左右交錯佈局，並結合 JavaScript 實現流暢的動態頁籤切換功能。

### 📝 實作重點

- **JavaScript ES6 動態頁籤組件 (Tab Component)**：
  - 封裝 `DOMContentLoaded` 機制確保 DOM 節點安全載入，建立健全的腳本執行環境。
  - 運用 `querySelectorAll` 與 `forEach` 迴圈動態操作 `classList`，結合 HTML5 `data-category` 自訂屬性，實作非同步式、零跑版的合作夥伴 Logo 切換系統。
- **純 CSS 高階圖片抽換與微互動**：
  - 捨棄繁複的 JS 動態，巧妙利用 CSS `:hover` 偽類搭配 `content: url(...)` 技巧，在滑鼠懸浮時秒速抽換社群媒體圖示與特殊標誌，打造乾淨、流暢的點擊視覺體驗。
- **企業級多欄佈局與滾動優化**：
  - 靈活調配 `display: flex` 與 `display: grid`（如夥伴標誌的 6 欄網格 `repeat(6, 1fr)` 佈局），實作嚴謹的多國分公司資訊排版與卡片定位。
  - 啟用 `scroll-behavior: smooth` 達成原生平滑滾動，並以 `position: fixed` 與 `z-index` 置頂常駐導覽列及右下角懸浮互動 widget。

### 🛠 使用技術

- **HTML5**：`<header>`, `<main>`, `<section>`, `<nav>`, `<ul>`, `<select>`, `<optgroup>` 語意化商業網站架構
- **CSS3**：Flexbox 雙向對齊、Grid 網格佈局、自訂文字選取特效 (`::selection`)、網頁平滑滾動、常駐定位 (`position: fixed`)
- **JavaScript (ES6+)**：DOM 節點選取、事件物件控制（`preventDefault`）、自訂屬性取值（`getAttribute`）、動態類別操作（`classList`）

### ⚠️ 版權聲明 (Disclaimer)

- 本專案僅供個人學習與網頁切版技術練習使用，不作任何商業用途。
- 網頁中引用之品牌標誌 (Logo) 與圖片素材，其版權皆歸原官方公司所有。
- 若有侵權疑慮請聯繫本人，將立即移除相關內容。
