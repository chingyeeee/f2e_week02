# 2022 F2E - DottedSign

<img src='./public/cover.jpg'>

設計稿 FROM <a href="https://uxfol.io/jennywu" target='_blank'>Jenny Wu</a> - <a href="https://www.figma.com/file/Y69aV4z6ULL30hprRcmULA/F2E-%2F-W2%3A%E4%BB%8A%E6%99%9A%EF%BC%8C%E6%88%91%E6%83%B3%E4%BE%86%E9%BB%9E%E9%BB%9E%E7%B0%BD" target="_blank">Figma</a>

DEMO - <a href="https://yuwen-ctw.github.io/2022_F2E_W2_dottedsign/" target="_blank">DottedSign</a>
<br>
<br>

## 功能

- 首頁

  1. 利用 email 進行登入

- 會員首頁

  1. 如有已簽署檔案，可於畫面上看到歷史紀錄
  2. 可於右上方點擊新增自己簽署

- 檔案上傳頁面

  1.選擇要進行簽署的檔案

- 檔案設定頁面

  1. 可自訂檔案名稱
  2. 可自訂標籤名稱

- 編輯檔案頁面

  1. 可切換 PDF 頁碼
  2. 工具列 - 簽名: 建立簽名
  3. 工具列 - 日期: 建立當天日期
  4. 工具列 - 插入文字: 建立可編輯文字框

> 完成編輯後

1. 可按右上方創建文件

## 開發工具

- creat-react-app - 框架
- styled-component - CSS & 動態改變樣式
- pdfjs-dist - 解析與渲染 PDF 檔
- fabric - 與 canvas 互動
- jspdf - 建立 PDF
- react-router-dom - 路由處理器
- react-icons - icon 資料庫
