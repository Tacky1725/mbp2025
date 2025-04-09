// ハンバーガーメニューのトグル処理
document.getElementById('hamburger').addEventListener('click', function(e) {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('show');
  // クリックの伝播を停止
  e.stopPropagation();
});

// 画面上でハンバーガーメニュー以外をクリックするとメニューを非表示にする
document.addEventListener('click', function(e) {
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  if (navMenu.classList.contains('show') &&
      !navMenu.contains(e.target) &&
      !hamburger.contains(e.target)) {
    navMenu.classList.remove('show');
  }
});

// RSVP フォームのサンプル処理（送信時にアラート表示後、フォームリセット）
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('ご登録ありがとうございました！');
  this.reset();
});

// SNS フィードのサンプル内容
document.getElementById('socialFeed').innerHTML = '<p>最新のSNS投稿を表示する予定です。</p>';
