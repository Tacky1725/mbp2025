// ハンバーガーメニューのトグル処理
document.getElementById('hamburger').addEventListener('click', function(e) {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('show');
  // クリックの伝播を停止
  e.stopPropagation();
});

// 関連する全イベントでメニューを非表示にする関数
function hideMenu() {
  const navMenu = document.getElementById('nav-menu');
  if (navMenu.classList.contains('show')) {
    navMenu.classList.remove('show');
  }
}

// 画面全体のタッチ／クリックでメニューを閉じる（ハンバーガー自体は除く）
document.addEventListener('click', hideMenu);
document.addEventListener('touchstart', hideMenu);
// スクロール時にもメニューを非表示
document.addEventListener('scroll', hideMenu);

// 各メニュー項目押下時の処理（スムーズスクロールはCSSで実現）
document.querySelectorAll('#nav-menu a').forEach(function(item) {
  item.addEventListener('click', function(e) {
    // メニューを閉じる
    hideMenu();
    // リンク先のアンカーにスムーズスクロール（CSSの scroll-behavior により実現）
  });
});

// RSVP フォームのサンプル処理
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('ご登録ありがとうございました！');
  this.reset();
});

// SNS フィードのサンプル内容
document.getElementById('socialFeed').innerHTML = '<p>最新のSNS投稿を表示する予定です。</p>';
