// ページの読み込みが完了したら、初期化処理を実行
document.addEventListener('DOMContentLoaded', init);

function init() {
  setupHamburgerMenu();
  setupBackgroundParallax();
  setupHeaderScrollEffect();
}

// 1. ハンバーガーメニュー機能
function setupHamburgerMenu() {
  const menuButton = document.getElementById('menu-button');
  const body = document.body;
  const navLinks = document.querySelectorAll('.global-nav a');

  if (!menuButton) return; // 要素がなければ処理を中断

  // メニューボタンのクリック処理
  menuButton.addEventListener('click', () => {
    body.classList.toggle('menu-open');
  });

  // メニュー内リンクのクリック処理
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      body.classList.remove('menu-open');
    });
  });
}

// 2. 背景のパララックス効果
function setupBackgroundParallax() {
  const backgroundShapes = document.getElementById('background-shapes');
  if (!backgroundShapes) return; // 要素がなければ処理を中断

  window.addEventListener('mousemove', (e) => {
    // 画面の中心を0としたマウス座標を計算 (-0.5 ~ 0.5の範囲)
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    // 移動量を設定（値を大きくすると、よりダイナミックに動きます）
    const moveX = mouseX * 30;
    const moveY = mouseY * 30;
    
    backgroundShapes.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
}

// 3. ヘッダーのスクロール効果
function setupHeaderScrollEffect() {
  const header = document.querySelector('.site-header');
  if (!header) return; // 要素がなければ処理を中断

  let isTicking = false; // 更新処理中かどうかを示すフラグ

  window.addEventListener('scroll', function() {
    if (!isTicking) {
      window.requestAnimationFrame(function() {
        const scrollValue = window.scrollY;
        if (scrollValue > 10) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        isTicking = false;
      });
      isTicking = true;
    }
  });
}