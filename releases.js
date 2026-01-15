/* リリースの追加方法：
  以下のリストに新しいオブジェクトを追加してください。
  
  category: "メモ帳" などの説明テキスト
  url: リンク先URL
  icon: FontAwesomeのクラス名（例: "fa-brands fa-github-alt", "fa-brands fa-chrome"）
  title: タイトル
  date: "Released on Jan 2, 2026" などの日付テキスト
  note: "Click to view..." などの注釈
  separator: true にすると、その要素の上に区切り線(HR)が入ります
*/

const releasesData = [
    {
        category: "メモ帳",
        url: "https://github.com/finda9531/metier/releases",
        icon: "fa-brands fa-github-alt",
        title: "metier1.3.1",
        date: "Released on Dec 30, 2025",
        note: "Click to view release notes",
        separator: false
    },
    {
        category: "acsuログインの時のやつを勝手に押してくれるChromeの拡張機能", // 説明が不要な場合は空文字または省略
        url: "https://chromewebstore.google.com/detail/ealps-login-helper/albeikojhajhbabpafcilclmcnffdkik?authuser=0&hl=ja",
        icon: "fa-brands fa-chrome",
        title: "eAlps Login Helper(Chrome)",
        date: "Download for Chrome",
        note: "Click to view store page",
        separator: true
    },
    {
        category: "",
        url: "https://github.com/finda9531/-/releases",
        icon: "fa-brands fa-github-alt",
        title: "eAlps Login Helper (GitHub)",
        date: "Released on Jan 2, 2026",
        note: "Click to view release notes",
        separator: false
    },
    
   {
        category: "webでテキストファイルをcsv形式にできるぞ",
        url: "https://finda9531.github.io/anki-card-converter/",
        icon: "fa-solid fa-link",
        title: "Anki .txt to .csv convertor",
        date: "Released on , Jun 15, 2026",
        note: "Click to view web page",
        separator: true
    },
   {
        category: "高速でテキストファイルを.apkg形式にできるぞ！！(winアプリ)",
        url: "https://github.com/finda9531/anki-txt-to-apkg-con/",
        icon: "fa-brands fa-github-alt",
        title: "Anki .txt convertor",
        date: "Released on , Jun 15, 2026",
        note: "Click to view Rerease page",
        separator: true
    },
];
